import SignTemplate from "../../templates/SignTemplate";

export default function SignUp() {
  return (
    <>
      <SignTemplate>
        <form>
          <input type="text" placeholder="email" />
          <input type="password" placeholder="senha" />
          <input type="text" placeholder="nome" />
          <input type="text" placeholder="foto" />
          <button type="submit">Entrar</button>
        </form>
      </SignTemplate>
    </>
  );
}
