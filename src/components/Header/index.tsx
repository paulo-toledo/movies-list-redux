import React from "react";
import MainMenu from "../MainMenu";
import { Container, HeaderContent } from "./styles";
import { Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <Container>
      <HeaderContent>
        <h1>Bem-vindo(a) ao Movies List</h1>
        <MainMenu />
      </HeaderContent>
      <Outlet />
    </Container>
  );
};

export default Header;
