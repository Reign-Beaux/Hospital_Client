import { useLoginService } from "@/Application/Services";

export const Login = () => {
  const { handleSetToken, handleClearToken } = useLoginService();

  return (
    <>
      <button onClick={handleSetToken}>Set Token</button>
      <button onClick={handleClearToken}>Clear Token</button>
    </>
  );
};
