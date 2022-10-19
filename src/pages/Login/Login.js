import SignTemplate from "../../templates/SignTemplate";

export default function Login() {
  return (
    <SignTemplate>
      <form>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="senha" />
        <button type="submit">Entrar</button>
      </form>
    </SignTemplate>
  );
}
