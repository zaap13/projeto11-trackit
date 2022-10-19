import GlobalStyle from "./assets/styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habits from "./pages/Habits/Habits";
import History from "./pages/History/History";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Today from "./pages/Today/Today";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/hoje" element={<Today />} />
        <Route path="/habitos" element={<Habits />} />
        <Route path="/historico" element={<History />} />
        
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
