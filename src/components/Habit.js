import { initialDays } from "../constants/days";
import { Check, HabitTitle, HabitBox } from "../assets/styles/styles";
import styled from "styled-components";

export default function Habit({ name, days }) {
  let checkDays = initialDays.map((d, i) => {
    if (days.includes(i)) {
      return { name: d.name, clicked: true };
    } else {
      return { name: d.name, clicked: false };
    }
  });

  console.log("days", checkDays);
  return (
    <HabitBox>
      <HabitTitle>{name}</HabitTitle>
      <DayBox>
        {checkDays.map((d, i) => (
          <Check clicked={d.clicked}>{d.name}</Check>
        ))}
      </DayBox>
    </HabitBox>
  );
}

const DayBox = styled.div`
  display: flex;
  gap: 4px;
`;
