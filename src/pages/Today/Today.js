import Template from "../../templates/Template";
import { useContext, useEffect, useState } from "react";
import ProgressContext from "../../contexts/ProgressContext";
import styled from "styled-components";
import TodayHabit from "../../components/TodayHabit";
import * as dayjs from "dayjs";

export default function Today() {
  const { loadProgress, today, total, done } = useContext(ProgressContext);
  const [percent, setPercent] = useState(0);
  const week = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
  useEffect(() => {
    loadProgress();
    setPercent(((done / total) * 100).toFixed(0));
  }, [total, done]);

  return (
    <Template>
      <Title>
        <h2 onClick={loadProgress}>
          {week[dayjs().day()]} {dayjs().date()}/{dayjs().month()}
        </h2>
        {done === 0 ? (
          <NoDone>Nenhum hábito concluído ainda</NoDone>
        ) : (
          <PercentDone>{percent}% dos hábitos concluídos</PercentDone>
        )}
      </Title>

      {today.map((i) => (
        <TodayHabit
          id={i.id}
          name={i.name}
          done={i.done}
          currentSequence={i.currentSequence}
          highestSequence={i.highestSequence}
        />
      ))}
    </Template>
  );
}

const Title = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 18px;
`;

const NoDone = styled.p`
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;

  color: #bababa;
`;

const PercentDone = styled.p`
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;

  color: #8fc549;
`;
