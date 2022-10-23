import { useContext } from "react";
import styled from "styled-components";
import AuthContext from "../contexts/AuthContext";

export default function Header() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Head>
        <h2>TrackIt</h2>
        <img src={user.image} alt="Imagem" />
      </Head>
    </>
  );
}

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;
  padding: 10px 20px;

  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  z-index: 10;

  h2 {
    font-family: "Playball";
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;

    color: #ffffff;
  }

  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }
`;
