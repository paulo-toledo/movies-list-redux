import React from "react";
import MainMenu from "../MainMenu";
import { Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <React.Fragment>
      <header className="main-header">
        <h1>Bem-vindo(a) ao Movies List</h1>
        <MainMenu />
      </header>
      <Outlet />
    </React.Fragment>
  );
};

export default Header;
