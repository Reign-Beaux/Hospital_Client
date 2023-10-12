import { LoginModel } from "@/Domain/Models";
import { useLoginRepository } from "@/Infraestructure/Repositories";

export const useLoginService = () => {
  const { sendCredentials } = useLoginRepository();

  const handleClick = async () => {
    const request: LoginModel = {
      username: "admin",
      password: "root",
    };
    const response = await sendCredentials(request);
    console.log(response);
  };

  return { handleClick };
};
