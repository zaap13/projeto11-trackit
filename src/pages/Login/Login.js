import SignTemplate from "../../templates/SignTemplate";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../../constants/url";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    axios
      .post(`${BASE_URL}/auth/login`, {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => alert(err.response.data.message));
  }

  return (
    <SignTemplate>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      <Link to={`/cadastro`}>
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </SignTemplate>
  );
}
