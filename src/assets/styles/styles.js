import styled from "styled-components";

export const Check = styled.button`
  // botões de dias
  width: 30px;
  height: 30px;

  border: 1px solid #d5d5d5;
  border-radius: 5px;

  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;

  color: ${(props) => (props.clicked ? "#ffffff" : "#dbdbdb")};
  background-color: ${(props) => (props.clicked ? "#CFCFCF" : "#ffffff")};
`;

export const HabitTitle = styled.h3`
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;

  color: #666666;
`;

export const HabitBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 340px;
  height: 94px;
  align-items: flex-start;
  justify-content: center;

  background: #ffffff;
  border-radius: 5px;
  gap: 8px;
padding: 13px;
`;
