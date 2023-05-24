import { Link } from "react-router-dom";
export const Proyects = () => {
  return (
    <section className="ProyectsPage">
      <h2>Estos son los Proyectos que he hecho o participado:</h2>
      <section className="ProyectsList">
        <article className="Proyect">
          <p className="ProyectName">Consultar Empleados en Php</p>
          <img
            src="/ConsultasEmpleadosPhp.png"
            alt="ConsultasEmpleadosPhp"
            className="ProyImg"
          />
          <p className="Descripcion">
            Proyecto de php que hace consultas a una base de datos de empleados
          </p>
          <p className="ProyUrl5">
            <Link to="https://apiconempphp.000webhostapp.com/">
              <img
                src="/iconDep.png"
                alt="DeployProyecto"
                className="IconDep"
              />
            </Link>
            <Link to="https://github.com/Josu88/ConsultasEmpleados/tree/main">
              <img
                src="/iconGitHub.png"
                alt="ProyectoGitHub"
                className="IconGitHub"
              />
            </Link>
          </p>
        </article>

        <article className="Proyect">
          <p className="ProyectName">Reloj JavaScript</p>
          <img
            src="/RelojJavaScript.png"
            alt="RelojJavaScript"
            className="ProyImg"
          />
          <p className="Descripcion">
            Mini-Proyecto que muestra un reloj en JavaScript.
          </p>
          <p className="ProyUrl1">
            <Link to="https://reloj-js.vercel.app/">
              <img
                src="/iconDep.png"
                alt="DeployProyecto"
                className="IconDep"
              />
            </Link>
            <Link to="https://github.com/Josu88/RelojJS">
              <img
                src="/iconGitHub.png"
                alt="ProyectoGitHub"
                className="IconGitHub"
              />
            </Link>
          </p>
        </article>

        <article className="Proyect">
          <p className="ProyectName">Consumo Electrodomesticos</p>
          <img
            src="/ConsumoElectrodomesticos.png"
            alt="ConsumoElectrodomesticos"
            className="ProyImg"
          />
          <p className="Descripcion">
            Este proyecto es un programa que muestra el consumo de varios
            electrodomésticos en la hora actual usando JavaScript.
          </p>
          <p className="ProyUrl2">
            <Link to="https://precio-luz-14rt.vercel.app/">
              <img
                src="/iconDep.png"
                alt="DeployProyecto"
                className="IconDep"
              />
            </Link>
            <Link to="https://github.com/Josu88/ConsumoElectrodomesticos">
              <img
                src="/iconGitHub.png"
                alt="ProyectoGitHub"
                className="IconGitHub"
              />
            </Link>
          </p>
        </article>

        <article className="Proyect">
          <p className="ProyectName">Noticias Colaborativas</p>
          <img
            src="/Noticias-Colaborativas.png"
            alt="Noticias-Colaborativas"
            className="ProyImg3"
          />
          <p className="Descripcion">
            Proyecto parecido a un Twitter pero de Noticias.
          </p>
          <p className="ProyUrl3">
            <Link to="https://frontend-notcol.vercel.app">
              <img
                src="/iconDep.png"
                alt="DeployProyecto"
                className="IconDep"
              />
            </Link>
            <Link to="https://github.com/Josu88/Noticias_Colaborativas">
              <img
                src="/iconGitHub.png"
                alt="ProyectoGitHub"
                className="IconGitHub"
              />
            </Link>
          </p>
        </article>

        <article className="Proyect">
          <p className="ProyectName">Farmacia</p>
          <img src="/farmacia.png" alt="Farmacia" className="ProyImg" />
          <p className="Descripcion">
            Proyecto que emula la lista de medicamentos que tiene una farmacia
            en el almacen
          </p>
          <p className="ProyUrl4">
            <Link to="https://farmacia-frontend-eta.vercel.app">
              <img
                src="/iconDep.png"
                alt="DeployProyecto"
                className="IconDep"
              />
            </Link>
            <Link to="https://github.com/Josu88/farmacia">
              <img
                src="/iconGitHub.png"
                alt="ProyectoGitHub"
                className="IconGitHub"
              />
            </Link>
          </p>
        </article>
      </section>
    </section>
  );
};
