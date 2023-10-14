import { Home, Login } from "@/Presentation/pages";
import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { RouteAccessControl } from ".";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RouteAccessControl element={<Home />} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
];

const router = createBrowserRouter(routes);

export { router };