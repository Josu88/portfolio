import { Link } from "react-router-dom";

export const AboutMe = () => {
  return (
    <section className="AboutMePage">
      <figure className="FigFoto">
        <img src="/FotoJosue.jpg" alt="FotoJosue" />
      </figure>
      <article className="PersInf">
        <h2 className="important">Josué PortFolio</h2>
        <p className="important">Programador</p>
        <p>¡Hola! me llamo Josué y creo paginas y aplicaciones web.</p>
        <p>Aun me queda mucho que saber, pero me gusta aprender.</p>
        <p>¡Me encanta darle vueltas a las cosas hasta saber como funcionan!</p>
        <p>
          ¿Quieres más información sobre mi formación y vida laboral? visita mi
          curriculum haciendo click{" "}
          <Link
            to={
              "https://www.canva.com/design/DAFfECfMvms/kamzxKQu4BNFZMk02nLOjg/view?utm_content=DAFfECfMvms&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            }
          >
            aquí.
          </Link>
        </p>
      </article>
    </section>
  );
};
