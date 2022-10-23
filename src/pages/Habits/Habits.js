import Template from "../../templates/Template";
import styled from "styled-components";
import { GoPlus } from "react-icons/go";
import { useState, useEffect, useContext } from "react";
import NewHabit from "../../components/NewHabit";
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";
import { BASE_URL } from "../../constants/url";
import Habit from "../../components/Habit";

export default function Habits() {
  const [show, setShow] = useState(true);
  const { user } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/habits`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        console.log(res);
        setHabits(res.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }, [user, show]);

  return (
    <Template>
      <Title>
        <h2>Habitos</h2>
        <Button onClick={() => setShow(true)}>
          <Icon />
        </Button>
      </Title>
      {show && <NewHabit setShow={setShow} />}

      {habits.map((h) => (
        <Habit name={h.name} days={h.days} />
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
