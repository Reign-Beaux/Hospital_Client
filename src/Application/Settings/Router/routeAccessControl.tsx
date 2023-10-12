import { ReactNode } from "react";

export interface RouteAccessControlProps {
  element: ReactNode;
  path: string;
}

const RouteAccessControl = ({element, path}: RouteAccessControlProps) => {
  return <>{element}</>;
}