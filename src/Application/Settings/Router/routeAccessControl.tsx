import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSessionStore } from "../State";
import { Layout } from "@/Presentation/layout";

export interface RouteAccessControlProps {
  element: ReactNode;
  noLayout?: boolean;
}

export const RouteAccessControl = ({ element, noLayout }: RouteAccessControlProps) => {
  const { token } = useSessionStore((state) => state);

  if (!token) return <Navigate to="/login" />;

  return <>{noLayout ? { element } : <Layout>{element}</Layout>}</>;
};
