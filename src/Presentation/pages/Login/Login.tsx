import { useLoginService } from "@/Application/Services";
import { useSessionStore } from "@/Application/Settings/State";
import { Anchor, Card } from "@/Presentation/atoms";
import { Button, Input } from "@/Presentation/molecules";
import { useEffect } from "react";
import "./styles.css";

export const Login = () => {
  const clearToken = useSessionStore((state) => state.clearToken);
  const { formik } = useLoginService();

  useEffect(() => {
    clearToken();
  }, []);

  return (
    <Card className="login-container">
      <form onSubmit={formik.handleSubmit}>
        <Input clearable inputText="Usuario" inputName="username" formik={formik} />
        <Input password inputText="Contraseña" inputName="password" formik={formik} />
        <Button className="login-button" type="submit" isLoading={formik.isSubmitting}>
          Iniciar Sesión
        </Button>
        <hr />
        <Anchor href={"https://www.youtube.com.mx"}>¿Olvidaste tu contraseña?</Anchor>
      </form>
    </Card>
  );
};
