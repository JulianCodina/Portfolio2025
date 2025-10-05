import "./About.css";
import { BtnOutlined } from "../components/Inputs";
import { useThemedAsset } from "../theme";
import { AboutCard } from "../components/Cards";
import { useLanguage } from "../contexts/LanguageContext";
import { useTab } from "../contexts/TabContext";
// Imágenes
import photo from "/ui/photo.png";
import pixar from "/ui/pixar.png";

const curriculum_vitae_es =
  "https://drive.google.com/file/d/1fmL_yLQiS_hc3yKvczCJyfnfUN_nfn7a/view";
const curriculum_vitae_en =
  "https://drive.google.com/file/d/1OJwFm0ErmnBv8dXxS04G7raK9q4d43-h/view";

function About() {
  const { language } = useLanguage();
  const { setTab } = useTab();
  //Iconos
  const cv = useThemedAsset("cv");
  const linkedin = useThemedAsset("linkedin");
  const github = useThemedAsset("github");
  const design = useThemedAsset("design");
  const web = useThemedAsset("web");
  const db = useThemedAsset("db");
  const right = useThemedAsset("right");

  const texts = {
    es: {
      title: "Sobre Mí",
      text: [
        "¡Hola! Soy Julián Codina, técnico en programación con experiencia en desarrollo web intuitivo y amigable para el usuario.",
        "He colaborado en diferentes áreas como backend, frontend, diseño y gestión de bases de datos, lo cual me ha ayudado a aprender y formarme como desarrollador.",
      ],
      especialidades: "Mis especialidades son ",
      role: "Desarrollador Full Stack",
      jobTitle: "Técnico en Programación",
      viewCV: "Ver mi CV",
      whatIDo: "Lo que hago",
      uiDesign: {
        title: "Diseño UI",
        text: "Análisis y diseño de wireframes y prototipos.",
      },
      webDev: {
        title: "Desarrollo Web",
        text: "Sitios web intuitivos y responsivos.",
      },
      database: {
        title: "Base de Datos",
        text: "Gestión y control de bases de datos SQL y NoSQL.",
      },
      portfolio: "Portafolio",
    },
    en: {
      title: "About Me",
      text: [
        "Hi! I'm Julián Codina, a programming technician with experience in intuitive and user-friendly web development.",
        "I've collaborated in different areas such as backend, frontend, design, and database management, which has helped me learn and shape myself as a developer.",
      ],
      especialidades: "My specialties are ",
      role: "Full Stack Developer",
      jobTitle: "Programming Technician",
      viewCV: "View my CV",
      whatIDo: "What I Do",
      uiDesign: {
        title: "UI Design",
        text: "Analysis and design of wireframes and prototypes.",
      },
      webDev: {
        title: "Web Development",
        text: "Intuitive and responsive web sites.",
      },
      database: {
        title: "Database",
        text: "Management and control of SQL and NoSQL databases.",
      },
      portfolio: "Portfolio",
    },
    pt: {
      title: "Sobre Mim",
      text: [
        "Olá! Sou o Julián Codina, técnico em programação com experiência no desenvolvimento web intuitivo e amigável para o usuário.",
        "Eu colaborei em diferentes áreas como backend, frontend, design e gerenciamento de bancos de dados, o que me permitiu aprender e formar como desenvolvedor.",
      ],
      especialidades: "Minhas especialidades ",
      role: "Desenvolvedor Full Stack",
      jobTitle: "Técnico em Programação",
      viewCV: "Ver meu CV",
      whatIDo: "O Que Eu Faço",
      uiDesign: {
        title: "Design UI",
        text: "Análise e design de wireframes e protótipos.",
      },
      webDev: {
        title: "Desenvolvimento Web",
        text: "Sites web intuitivos e responsivos.",
      },
      database: {
        title: "Banco de Dados",
        text: "Gerenciamento de bancos de dados SQL e NoSQL.",
      },
      portfolio: "Portfólio",
    },
  };

  function handleCV() {
    if (language === "es") {
      window.open(curriculum_vitae_es, "_blank");
    } else {
      window.open(curriculum_vitae_en, "_blank");
    }
  }

  function handleLinkedin() {
    window.open("https://www.linkedin.com/in/julián-codina/", "_blank");
  }

  function handleGithub() {
    window.open("https://github.com/JulianCodina", "_blank");
  }

  return (
    <section id="about">
      <div className="header">
        <div className="texts">
          <div className="tag">
            <h3>{texts[language].role}</h3>
          </div>
          <h1>Codina Julián</h1>
          <p className="p-big">{texts[language].jobTitle}</p>
        </div>
        <div className="inline">
          <BtnOutlined
            icon1={cv}
            text={texts[language].viewCV}
            icon2=""
            onClick={handleCV}
          />
          <BtnOutlined
            icon1={linkedin}
            text="Linkedin"
            icon2=""
            onClick={handleLinkedin}
          />
          <BtnOutlined
            icon1={github}
            text="GitHub"
            icon2=""
            onClick={handleGithub}
          />
        </div>
      </div>

      <div className="about-me">
        <div className="body">
          <h2>{texts[language].title}</h2>
          <div className="texts">
            <p>{texts[language].text[0]}</p>
            <p>{texts[language].text[1]}</p>
            <p className="especialidades">
              {texts[language].especialidades}
              <span id="java">Java</span> <span id="python">Python</span>{" "}
              <span id="react">React</span>
            </p>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="front">
              <img src={pixar} alt="Pixar" />
            </div>
            <div className="back">
              <img src={photo} alt="Photo" />
            </div>
          </div>
        </div>
      </div>

      <div className="what-do">
        <h2>{texts[language].whatIDo}</h2>
        <div className="CardContainer">
          <AboutCard
            icon={design}
            title={texts[language].uiDesign.title}
            text={texts[language].uiDesign.text}
          />
          <AboutCard
            icon={web}
            title={texts[language].webDev.title}
            text={texts[language].webDev.text}
          />
          <AboutCard
            icon={db}
            title={texts[language].database.title}
            text={texts[language].database.text}
          />
        </div>
      </div>
      <div className="footer">
        <BtnOutlined
          icon1=""
          text={texts[language].portfolio}
          icon2={right}
          onClick={() => setTab("portfolio")}
        />
      </div>
    </section>
  );
}

export default About;
