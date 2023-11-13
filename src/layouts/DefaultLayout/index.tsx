import React, { ReactNode } from "react";
import { LayoutContainer } from "./styles";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
      {children}
    </>
  );
};
export const DefaultContainer: React.FC<DefaultLayoutProps> = ({
  children,
}) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};
