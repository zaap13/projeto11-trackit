import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

export default function ButtonTemplate({ children, loading }) {
  return loading ? (
    <Button disabled={true}>
      <ThreeDots
        height="13"
        width="100%"
        color="#FFFFFF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </Button>
  ) : (
    <Button>{children}</Button>
  );
}

const Button = styled.button`
  background: #52b6ff;
  border-radius: 4.63636px;
  align-items: center;
  justify-content: center;
  color: #ffffff;

  :disabled {
    opacity: 0.7;
  }
`;
