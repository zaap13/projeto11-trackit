import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import DayCheck from "./DayCheck";
import ButtonTemplate from "../templates/ButtonTemplate";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import AuthContext from "../contexts/AuthContext";
import { initialDays } from "../constants/days";

export default function NewHabit({ setShow }) {
  

  const [days, setDays] = useState(initialDays);
  const [clickeds, setClickeds] = useState([]);
  const [habitName, setHabitName] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const aux = days.map((d, i) => d.clicked && i).filter((d) => d !== false);
    setClickeds(aux);
  }, [days]);

  function handleSave() {
    
    if (clickeds !== [] && habitName.length > 3) {
      setLoading(true);
      axios
        .post(
          `${BASE_URL}/habits`,
          {
            name: habitName,
            days: clickeds,
          },
          { headers: { Authorization: `Bearer ${user.token}` } }
        )
        .then((res) => {
          setLoading(false);
          setShow(false);
        })
        .catch((err) => {
          alert(err.response.data.message);
          setLoading(false);
        });
    }
  }
  return (
    <New>
      <input
        disabled={loading}
        type="text"
        placeholder="nome do hábito"
        onChange={(e) => setHabitName(e.target.value)}
      />
      <DaysCheck>
        {days.map((i, index) => (
          <DayCheck
            loading={loading}
            key={index}
            index={index}
            clicked={i.clicked}
            days={days}
            setDays={setDays}
          >
            {i.name}
          </DayCheck>
        ))}
      </DaysCheck>
      <ButtonBox>
        <p onClick={() => setShow(false)}>Cancelar</p>
        <Save disabled={loading} onClick={handleSave}>
          <ButtonTemplate loading={loading}>Salvar</ButtonTemplate>
        </Save>
      </ButtonBox>
    </New>
  );
}

const New = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 180px;

  background: #ffffff;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  input {
    width: 303px;
    height: 45px;

    border: 1px solid #d5d5d5;
    border-radius: 5px;
  }
`;

const DaysCheck = styled.div`
  display: flex;
  gap: 4px;
  width: 303px;
`;

const ButtonBox = styled.div`
  display: flex;
  width: 303px;
  gap: 20px;
  align-items: center;
  justify-content: flex-end;
  p {
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;

    text-align: center;

    color: #52b6ff;
  }
  button {
    width: 84px;
    height: 35px;
  }
`;

const Save = styled.button`
  width: fit-content;
  height: fit-content;
`;
