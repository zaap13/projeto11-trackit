import axios from "axios";
import { createContext, useState, useContext } from "react";
import { BASE_URL } from "../constants/url";
import AuthContext from "./AuthContext";

const ProgressContext = createContext();

function ProgressProvider({ children }) {
  const [done, setDone] = useState(0);
  const [total, setTotal] = useState(0);
  const [today, setToday] = useState([]);
  const { user } = useContext(AuthContext);
  function loadProgress() {
    axios
      .get(`${BASE_URL}/habits/today`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        setToday(res.data);
        setTotal(res.data.length);
        setDone(res.data.filter((i) => i.done === true).length);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  return (
    <ProgressContext.Provider value={{ done, total, loadProgress, today }}>
      {children}
    </ProgressContext.Provider>
  );
}
export default ProgressContext;
export { ProgressProvider };
