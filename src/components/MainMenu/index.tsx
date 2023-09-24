import { Container } from "./styles";
import Link from "../Link";

export const MainMenu = () => {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/favoritos">Favoritos</Link>
    </Container>
  );
};

export default MainMenu;
