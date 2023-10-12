import { useLoginService } from "@/Application/Services";

export const Login = () => {
  const { handleClick } = useLoginService();

  return <button onClick={handleClick}>Click me!</button>;
};
