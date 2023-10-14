import { RouterProvider } from "react-router-dom";
import { router } from "./Application/Settings/Router";

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
