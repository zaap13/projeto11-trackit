import { Check } from "../assets/styles/styles";

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

