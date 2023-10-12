import { useEffect } from "react";
import { useLoginStore } from "./Application/Settings/State";
import { Login } from "./Presentation/pages";

function App() {
  const token = useLoginStore(state => state.token)

  useEffect(() => {
    console.log(token);
  }, [token])

  return (<Login />);
}

export default App;
