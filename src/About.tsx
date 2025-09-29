import "./About.css";
import { BtnOutlined } from "./Inputs";
import { useThemedAsset } from "./theme";
import { useState } from "react";

// Imágenes
import photo from "./assets/photo.png";
import pixar from "./assets/pixar.png";

function About() {
  const [picture, setPicture] = useState(pixar);

  //Iconos
  const cv = useThemedAsset("cv");
  const linkedin = useThemedAsset("linkedin");
  const github = useThemedAsset("github");

  function changePicture() {
    if (picture == pixar) {
      setPicture(photo);
    } else {
      setPicture(pixar);
    }
  }

  return (
    <section id="about">
      <div className="header">
        <div className="texts">
          <div className="tag">
            <h3>Desarrollador Full Stack</h3>
          </div>
          <h1>Codina Julián</h1>
          <p className="p-big">Técnico en Programación</p>
        </div>
        <div className="inline">
          <BtnOutlined icon1={cv} icon2="" children={<p>Ver mi CV</p>} />
          <BtnOutlined icon1={linkedin} icon2="" children={<p>Linkedin</p>} />
          <BtnOutlined icon1={github} icon2="" children={<p>GitHub</p>} />
        </div>
      </div>

      <section className="about-me">
        <div className="body">
          <h2>Sobre Mí</h2>
          <div className="texts">
            <p>
              ¡Hola! Soy Julián Codina, técnico en programación con más de un
              año de experiencia en el desarrollo web intuitivo y amigable para
              el usuario. <br /> A lo largo de mi trayectoria, he tenido la
              oportunidad de colaborar en diferentes áreas como backend,
              frontend, diseño y gestión de bases de datos, lo cual me ha
              permitido aprender mucho de ellos.
            </p>
            <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              Mis especialidades son <span id="java">Java</span>,{" "}
              <span id="python">Python</span> y <span id="react">React</span>.
            </p>
          </div>
        </div>
        <div className="picture">
          <img src={picture} alt="Pixar" onClick={changePicture} />
        </div>
      </section>

      <section>
        <h3>Diseño UI</h3>
        <p>Soy un capo del todo</p>
      </section>
    </section>
  );
}

export default About;
