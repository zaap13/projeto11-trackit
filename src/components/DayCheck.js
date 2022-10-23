import styled from "styled-components";

export default function DayCheck({ children, clicked, index, days, setDays, loading }) {
  function handleCheck() {
    let aux = [];
    if (clicked) {
      aux = days.map((d, i) =>
        i === index ? { name: d.name, clicked: false } : d
      );
    } else {
      aux = days.map((d, i) =>
        i === index ? { name: d.name, clicked: true } : d
      );
    }
    setDays(aux);
  }

  return (
    <Check disabled={loading} onClick={handleCheck} clicked={clicked}>
      {children}
    </Check>
  );
}

const Check = styled.button`
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
