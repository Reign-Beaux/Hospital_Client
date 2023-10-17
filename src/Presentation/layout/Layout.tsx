import { ReactNode } from "react";
import { Header, Sidenav } from "./components";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div>
        <Sidenav />
        {children}
      </div>
    </>
  );
};
