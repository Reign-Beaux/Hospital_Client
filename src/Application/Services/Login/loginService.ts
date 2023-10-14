import { useSessionStore } from "@/Application/Settings/State";
import { LoginModel } from "@/Domain/Models";
import { useLoginRepository } from "@/Infraestructure/Repositories";

export const useLoginService = () => {
  const { setToken, clearToken } = useSessionStore((state) => state);
  const { sendCredentials } = useLoginRepository();

  const handleSetToken = async () => {
    const request: LoginModel = {
      username: "admin",
      password: "root",
    };
    const response = await sendCredentials(request);
    setToken(response.data);
  };

  const handleClearToken = () => {
    clearToken();
  }

  return { handleSetToken, handleClearToken };
};
