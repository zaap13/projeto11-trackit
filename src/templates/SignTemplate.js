import styled from "styled-components";
import logo from "../assets/images/logo.jpeg";

export default function SignTemplate({ children }) {
  return (
    <>
      <Template>
        <Logo>
          <img src={logo} alt="Logo" />
          <h1>TrackIt</h1>
        </Logo>
        {children}
      </Template>
    </>
  );
}

const Template = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  form {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  input {
    width: 303px;
    height: 45px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
  }
  button {
    width: 303px;
    height: 45px;
    background: #52b6ff;
    border-radius: 4.63636px;
  }
  p {
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    margin-top: 25px;

    color: #52b6ff;
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;

  img {
    width: 100%;
  }
  h1 {
    font-family: "Playball", cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 68.982px;
    line-height: 86px;
    text-align: center;

    color: #126ba5;
  }
`;
