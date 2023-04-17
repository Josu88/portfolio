import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to={"/AboutMe"}>Sobre mí</Link>
        <Link to={"/Proyects"}>Proyectos</Link>
        <Link to={"/Contact"}>Contacto</Link>
      </nav>
    </header>
  );
};
