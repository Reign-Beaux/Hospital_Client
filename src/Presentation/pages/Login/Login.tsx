import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import React from "react";

export interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Card sx={{ width: "50%" }}>
        <CardContent>
          <Typography
            variant="h3"
            color="text.primary"
            gutterBottom
            style={{ textAlign: "center" }}>
            Iniciar Sesión
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Login;
