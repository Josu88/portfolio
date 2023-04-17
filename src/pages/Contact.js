import { Link } from "react-router-dom";
export const Contact = () => {
  const ButtonMailto = ({ mailto, label, imgSrc }) => {
    return (
      <Link
        to="#"
        onClick={(e) => {
          window.location.href = mailto;
          e.preventDefault();
        }}
      >
        <img src={imgSrc} alt={label} className="imgMailto" />
        <br />
        {label}
        <br />
      </Link>
    );
  };

  const ButtonLinkedIn = ({ url, label, imgSrc }) => {
    return (
      <Link
        to="#"
        onClick={(e) => {
          window.open(url, "_blank");
          e.preventDefault();
        }}
      >
        <img src={imgSrc} alt={label} className="imgLinkedIn" />
        <br />
        {label}
        <br />
      </Link>
    );
  };

  return (
    <section className="ContactPage">
      <h2>¿Quieres contactar conmigo?</h2>
      <article className="ButtonBarContact">
        <ButtonMailto
          label=" jri53268805@gmail.com"
          mailto="mailto:jri53268805@gmail.com"
          imgSrc="/IconoEmail.png"
        />
        <ButtonLinkedIn
          label="Josué Rodríguez Iglesias"
          url="https://www.linkedin.com/in/josuerodrigueziglesias/"
          imgSrc="/IconoLinkedIn.png"
        />
      </article>
    </section>
  );
};
