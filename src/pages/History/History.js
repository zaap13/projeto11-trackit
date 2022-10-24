import Template from "../../templates/Template";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import AuthContext from "../../contexts/AuthContext";

export default function History() {
  const [value, setValue] = useState(new Date());
  const [history, setHistory] = useState([]);
  const { user } = useContext(AuthContext);
  const [undones, setUndones] = useState([]);
  const [allDates, setAllDates] = useState([]);
  const [dones, setDones] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/habits/history/daily`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        setHistory(res.data);
        setUndones(
          res.data.filter((i) =>
            i.habits.find(
              (i) => i.done === false && dayjs(i.date).format("DD/MM/YYYY")
            )
          )
        );
        setAllDates(
          res.data.filter((i) =>
            i.habits.find((i) => dayjs(i.date).format("DD/MM/YYYY"))
          )
        );
        setDones(
          res.data
            .filter((i) =>
              i.habits.find((i) => dayjs(i.date).format("DD/MM/YYYY"))
            )
            .filter(
              (i) =>
                !res.data
                  .filter((i) =>
                    i.habits.find(
                      (i) =>
                        i.done === false && dayjs(i.date).format("DD/MM/YYYY")
                    )
                  )
                  .includes(i)
            )
        );
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }, []);

  function onChange(e) {
    setValue(e);
  }

  console.log(dones);
  return (
    <Template>
      <h2>Historico</h2>
      <StyledCalendar>
        <Calendar
          onChange={onChange}
          value={value}
          tileClassName={({ activeStartDate, date, view }) =>
            view === "month" &&
            undones.find((i) => i.day === dayjs(date).format("DD/MM/YYYY"))
              ? "undone"
              : dones.find((i) => i.day === dayjs(date).format("DD/MM/YYYY"))
              ? "done"
              : null
          }
        />
      </StyledCalendar>
    </Template>
  );
}

const StyledCalendar = styled.div`
  .undone {
    background-color: #ea5766;
  }
  .done {
    background-color: #8cc654;
  }
`;
