import { Link } from "react-router-dom";
export const Proyects = () => {
  return (
    <section className="ProyectsPage">
      <h2>Estos son los Proyectos que he hecho o participado:</h2>
      <section className="ProyectsList1">
        <article className="Proyect">
          <p className="ProyectName">Consultas Empleados Php</p>
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
          <p className="ProyectName">Consultas Hospital Java</p>
          <img
            src="/ConsultasHospitalJava.png"
            alt="ConsultasHospitalJava"
            className="ProyImg"
          />
          <p className="Descripcion">
            Proyecto de Java que hace consultas a una base de datos de
            Hospitales
          </p>
          <p className="ProyUrl6">
            <Link to="https://drive.google.com/file/d/1mUHLzIdCEYQaCGpoXkz8HQYPiWOjlFoy/view?usp=drive_link">
              <img
                src="/iconDep.png"
                alt="DeployProyecto"
                className="IconDep"
              />
            </Link>
            <Link to="https://github.com/Josu88/ConsultasHospitalJava">
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
      </section>
      <section className="ProyectsList2">
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

        <article className="Proyect">
          <p className="ProyectName">Rubiko Basic Docker</p>
          <img
            src="/Rubiko-Basic-Docker.png"
            alt="RuDock"
            className="ProyImg"
          />
          <p className="Descripcion">
            Aplicación backend creada con nodejs, que será subido a docker y
            usaremos docker-compose
          </p>
          <p className="ProyUrl5">
            <Link to="https://github.com/Josu88/rubiko-basic-docker/tree/main">
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
