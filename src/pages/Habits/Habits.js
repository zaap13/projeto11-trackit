import Template from "../../templates/Template";
import styled from "styled-components";
import { GoPlus } from "react-icons/go";
import { useState, useEffect, useContext } from "react";
import NewHabit from "../../components/NewHabit";
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";
import { BASE_URL } from "../../constants/url";
import Habit from "../../components/Habit";
import { initialDays } from "../../constants/days";

export default function Habits() {
  const [show, setShow] = useState(false);
  const { user } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);

  const [clickeds, setClickeds] = useState([]);
  const [habitName, setHabitName] = useState("");
  const [days, setDays] = useState(initialDays);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/habits`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        setHabits(res.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }, [user, show, habits]);

  return (
    <Template>
      <Title>
        <h2>Habitos</h2>
        <Button onClick={() => setShow(true)}>
          <Icon />
        </Button>
      </Title>
      {show && (
        <NewHabit
          setShow={setShow}
          clickeds={clickeds}
          setClickeds={setClickeds}
          habitName={habitName}
          setHabitName={setHabitName}
          days={days}
          setDays={setDays}
        />
      )}

      {habits.length === 0 && (
        <NoHabits>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </NoHabits>
      )}

      {habits.map((h) => (
        <Habit key={h.id} name={h.name} days={h.days} id={h.id} />
      ))}
    </Template>
  );
}

const Icon = styled(GoPlus)`
  font-weight: 400;
  font-size: 18px;
  padding: 1px 0 0 1px;

  text-align: center;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 40px;
  height: 35px;
  background: #52b6ff;
  border-radius: 4.63636px;
  color: #fff;
`;

const NoHabits = styled.p`
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;

  color: #666666;
`;
