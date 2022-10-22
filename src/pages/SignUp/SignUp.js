import SignTemplate from "../../templates/SignTemplate";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../../constants/url";
import axios from "axios";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSignUp(e) {
    e.preventDefault();

    axios
      .post(`${BASE_URL}/auth/sign-up`, {
        email,
        name,
        image,
        password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => alert(err.response.data.message));
  }

  return (
    <>
      <SignTemplate>
        <form onSubmit={handleSignUp}>
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
          <input
            type="text"
            placeholder="nome"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="url"
            placeholder="foto"
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
        <Link to={`/`}>
          <p>Já tem uma conta? Faça login!</p>
        </Link>
      </SignTemplate>
    </>
  );
}
