import { initialDays } from "../constants/days";
import { Check, HabitTitle, HabitBox } from "../assets/styles/styles";
import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";
import { BASE_URL } from "../constants/url";
import { useContext } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import ProgressContext from "../contexts/ProgressContext";

export default function Habit({ name, days, id }) {
  const { user } = useContext(AuthContext);
  const { loadProgress } = useContext(ProgressContext);

  let checkDays = initialDays.map((d, i) => {
    if (days.includes(i)) {
      return { name: d.name, clicked: true };
    } else {
      return { name: d.name, clicked: false };
    }
  });

  function handleDel() {
    confirmAlert({
      title: `Deletando ${name}`,
      message: "deseja prosseguir?",
      buttons: [
        {
          label: "Sim",
          onClick: () => {
            axios
              .delete(`${BASE_URL}/habits/${id}`, {
                headers: { Authorization: `Bearer ${user.token}` },
              })
              .then(() => {
                loadProgress();
              })
              .catch((err) => {
                alert(err.response.data.message);
              });
          },
        },
        {
          label: "No",
        },
      ],
    });
  }

  return (
    <HabitBox>
      <Del onClick={handleDel} />
      <HabitTitle>{name}</HabitTitle>
      <DayBox>
        {checkDays.map((d, i) => (
          <Check key={i} clicked={d.clicked}>
            {d.name}
          </Check>
        ))}
      </DayBox>
    </HabitBox>
  );
}

const DayBox = styled.div`
  display: flex;
  gap: 4px;
`;

const Del = styled(BsTrash)`
  font-size: 15px;
  color: #666666;
  position: absolute;
  top: 11px;
  right: 11px;
`;
