import { createBrowserRouter } from "react-router-dom";

import GU from "./routes/gerenciadorUsuarios/index";
import User from "./routes/telaUsuario/index";
import Login from "./routes/login/index";
import ErrorPage from "./error-page";

export default function router() {
  return createBrowserRouter([
    {
      path: "/",
      element: <GU />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/usuario",
      element: <User />,
    },
  ]);
}
