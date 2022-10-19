import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <Foot>
        <button>Teste</button>
        <button>Teste</button>
        <button>Teste</button>
      </Foot>
    </>
  );
}

const Foot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: 70px;
  bottom: 0px;

  background: #ffffff;
`;
