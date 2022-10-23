import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Template({ children }) {
  return (
    <>
      <Header />
      <Main> {children} </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 70px 0;
  width: 100%;
  padding: 20px;

  h2 {
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;

    color: #126ba5;
  }
`;
