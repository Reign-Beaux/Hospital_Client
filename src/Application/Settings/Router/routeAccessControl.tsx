import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSessionStore } from "../State";

export interface RouteAccessControlProps {
  element: ReactNode;
}

export const RouteAccessControl = ({element}: RouteAccessControlProps) => {  
  const { token } = useSessionStore((state) => state);

  if (!token) return <Navigate to="/login" />;

  return <>{element}</>;
}