import GlobalStyle from "./assets/styles/globalStyles";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import { useContext } from "react";
import PrivateRoutes from "./routes/private.routes";
import PublicRoutes from "./routes/public.routes";

function App() {
  const { auth } = useContext(AuthContext);

  return (

      <BrowserRouter>
        <GlobalStyle />
        {auth ? <PrivateRoutes /> : <PublicRoutes />}
      </BrowserRouter>

  );
}

export default App;
