import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

interface iLink {
  to: string;
  children: React.ReactNode;
}

export const Link: React.FC<iLink> = ({ to, children }) => {
  const navigate = useNavigate();

  return <Container onClick={() => navigate(to)}>{children}</Container>;
};

export default Link;
