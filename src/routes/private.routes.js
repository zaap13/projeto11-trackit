import { Routes, Route, Navigate } from "react-router-dom";
import Habits from "../pages/Habits/Habits";
import History from "../pages/History/History";
import Today from "../pages/Today/Today";

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/hoje" element={<Today />} />
      <Route path="/habitos" element={<Habits />} />
      <Route path="/historico" element={<History />} />

      <Route path="*" element={<Navigate to="/hoje" />} />
    </Routes>
  );
}
