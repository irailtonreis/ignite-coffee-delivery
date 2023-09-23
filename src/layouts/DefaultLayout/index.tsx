import React from "react";
import { LayoutContainerFull, LayoutContainer } from "./styles";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

const DefaultLayout: React.FC = () => {
  return (
    <LayoutContainerFull>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </LayoutContainerFull>
  );
};

export default DefaultLayout;