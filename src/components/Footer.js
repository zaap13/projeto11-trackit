import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Foot>
      <Link to={`/habitos`}>
        <button>Hábitos</button>
      </Link>

      <Prog>
        <Link to={`/hoje`}>
          <CircularProgressbar
            value="4"
            maxValue="5"
            text="Hoje"
            styles={buildStyles({
              textSize: "18px",
              pathColor: `#FFFFFF`,
              textColor: "#FFFFFF",
              trailColor: "#52B6FF",
            })}
          />
        </Link>
      </Prog>
      <Link to={`/historico/`}>
        <button>Histórico</button>
      </Link>
    </Foot>
  );
}

const Foot = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  height: 70px;
  bottom: 0px;
  padding: 10px;
  z-index: 10;


  background: #ffffff;

  button {
    background: #ffffff;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    color: #52b6ff;
  }
`;

const Prog = styled.div`
  display: flex;
  height: 90px;
  width: 90px;
  margin-bottom: 30px;
  background-color: #52b6ff;
  border-radius: 98.5px;
  padding: 6px;
`;
