import { HabitTitle, HabitBox } from "../assets/styles/styles";
import styled from "styled-components";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";
import { BASE_URL } from "../constants/url";
import { useContext, useState } from "react";
import ProgressContext from "../contexts/ProgressContext";
import { BsFillCheckSquareFill } from "react-icons/bs";

export default function TodayHabit({
  id,
  name,
  done,
  currentSequence,
  highestSequence,
}) {
  const { user } = useContext(AuthContext);
  const { loadProgress } = useContext(ProgressContext);
  const [loading, setLoading] = useState(false);

  

  

  function handleCheck() {
    setLoading(true);
    if (!done) {
      axios
        .post(
          `${BASE_URL}/habits/${id}/check`,
          {},
          {
            headers: { Authorization: `Bearer ${user.token}` },
          }
        )
        .then((res) => {
          loadProgress();
          setLoading(false);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    } else {
      axios
        .post(
          `${BASE_URL}/habits/${id}/uncheck`,
          {},
          {
            headers: { Authorization: `Bearer ${user.token}` },
          }
        )
        .then((res) => {
          loadProgress();
          setLoading(false);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  }

  return (
    <TodayBox>
      <Left>
        <HabitTitle>{name}</HabitTitle>
        <Sequence>Sequência atual: {currentSequence} dias</Sequence>
        <Sequence>Seu recorde: {highestSequence} dias</Sequence>
      </Left>
      <button disabled={loading} onClick={handleCheck}>
        <CheckBox done={done} />
      </button>
    </TodayBox>
  );
}

const CheckBox = styled(BsFillCheckSquareFill)`
  width: 69px;
  height: 69px;

  color: ${(props) => (props.done ? "#8FC549" : "#ebebeb")};
  border: 1px solid #e7e7e7;
  border-radius: 5px;
`;

const TodayBox = styled(HabitBox)`
  flex-direction: row;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const Sequence = styled.p`
  font-weight: 400;
  font-size: 12.976px;
  line-height: 16px;

  color: #666666;
`;
