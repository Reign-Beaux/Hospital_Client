import { useLoginService } from "@/Application/Services";
import { useSessionStore } from "@/Application/Settings/State";
import { Anchor, Card } from "@/Presentation/atoms";
import { Button, Input } from "@/Presentation/molecules";
import { useEffect, useState } from "react";
import "./styles.css";

export interface User {
  username: string;
  password: string;
}

export const Login = () => {
  const clearToken = useSessionStore((state) => state.clearToken);
  const { formik } = useLoginService();

  const [user, setUser] = useState<User>({
    username: "",
    password: "",
  });

  useEffect(() => {
    clearToken();
  }, []);

  return (
    <Card className="login-container">
      <form onSubmit={formik.handleSubmit}>
        <Input
          clearable
          inputText="Usuario"
          inputName="username"
          inputObject={user}
          setValue={setUser}
        />
        <Input
          password
          inputText="Contraseña"
          inputName="password"
          inputObject={user}
          setValue={setUser}
        />
        <Button className="login-button">Iniciar Sesión</Button>
        <hr />
        <Anchor href={"https://www.youtube.com.mx"}>
          ¿Olvidaste tu contraseña?
        </Anchor>
      </form>
      {/* <CardContent>
        <Typography variant="h3" gutterBottom textAlign={"center"}>
          Iniciar Sesión
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit}>
          <CTextField keyFormik="username" formik={formik} label="Usuario" />
          <CPasswordField keyFormik="password" formik={formik} label="Contraseña" />
          <Input
            clearable
            inputText="Username"
            inputName="username"
            inputObject={user}
            setValue={setUser}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            style={{ marginTop: "100px" }}
            disabled={formik.isSubmitting}>
            {formik.isSubmitting ? <CircularProgress size={24} /> : "Iniciar Sesión"}
          </Button>
        </Box>
      </CardContent> */}
    </Card>
  );
};
