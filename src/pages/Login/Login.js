import SignTemplate from "../../templates/SignTemplate";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";
import ButtonTemplate from "../../templates/ButtonTemplate";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    setLoading(true);

    axios
      .post(`${BASE_URL}/auth/login`, {
        email,
        password,
      })
      .then((res) => {
        setAuth(true);
        setUser(res.data);
        navigate("/hoje");
        setLoading(false);
      })
      .catch((err) => {
        alert(err.response.data.message);
        setLoading(false);
      });
  }

  return (
    <SignTemplate>
      <form onSubmit={handleLogin}>
        <input
          disabled={loading}
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          disabled={loading}
          type="password"
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <ButtonTemplate type="submit" disabled={loading}>
          Entrar
        </ButtonTemplate>
      </form>
      <Link to={`/cadastro`}>
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </SignTemplate>
  );
}
