import { useLoginService } from "@/Application/Services";
import { CPasswordField, CTextField } from "@/Presentation/atoms";
import { Box, Button, Card, CardContent, CircularProgress, Typography } from "@mui/material";

export const Login = () => {
  const { formik } = useLoginService();

  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Card sx={{ width: "50%" }}>
        <CardContent>
          <Typography variant="h3" gutterBottom textAlign={"center"}>
            Iniciar Sesión
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit}>
            <CTextField keyFormik="username" formik={formik} label="Usuario" />
            <CPasswordField keyFormik="password" formik={formik} label="Contraseña" />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              style={{ marginTop: "50px" }}
              disabled={formik.isSubmitting}>
              {formik.isSubmitting ? <CircularProgress size={24} /> : "Iniciar Sesión"}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};
