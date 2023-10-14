import { useSessionStore } from "@/Application/Settings/State";
import { LoginModel } from "@/Domain/Models";
import { useLoginRepository } from "@/Infraestructure/Repositories";
import { useFormSettings } from "./Hooks";
import { useNavigate } from "react-router-dom";

export const useLoginService = () => {
  const { setToken } = useSessionStore((state) => state);
  const { sendCredentials } = useLoginRepository();
  const navigate = useNavigate();

  const handleSendCredentials = async (values: LoginModel) => {
    const response = await sendCredentials(values);
    setToken(response.data);
    navigate("/");
  };

  const { formik } = useFormSettings({ handleSendCredentials });

  return { formik };
};
