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

const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #e5e5e5;
  margin: 70px 0;
  width: 100%;
  height: 100vh;
  padding: 20px;
`;
