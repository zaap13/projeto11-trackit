import SignTemplate from "../../templates/SignTemplate";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import ButtonTemplate from "../../templates/ButtonTemplate";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handleSignUp(e) {
    e.preventDefault();
    setLoading(true);

    axios
      .post(`${BASE_URL}/auth/sign-up`, {
        email,
        name,
        image,
        password,
      })
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.message);
        setLoading(false);
      });
  }

  return (
    <>
      <SignTemplate>
        <form onSubmit={handleSignUp}>
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
          <input
            disabled={loading}
            type="text"
            placeholder="nome"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            disabled={loading}
            type="url"
            placeholder="foto"
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <ButtonTemplate disabled={loading} loading={loading} type="submit">
            Cadastrar
          </ButtonTemplate>
        </form>
        <Link to={`/`}>
          <p>Já tem uma conta? Faça login!</p>
        </Link>
      </SignTemplate>
    </>
  );
}
