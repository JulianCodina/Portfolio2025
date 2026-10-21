import "./About.css";
import { BtnOutlined } from "../components/Inputs";
import { AboutCard } from "../components/Cards";
import { useLanguage } from "../contexts/LanguageContext";
import { useTab } from "../contexts/TabContext";
import {
  FiFileText,
  FiLayout,
  FiGlobe,
  FiDatabase,
  FiArrowRight,
} from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

// Imágenes
import photo from "/ui/photo.png";
import pixar from "/ui/pixar.png";

const curriculum_vitae_es =
  "https://drive.google.com/file/d/1iAh-8IIEmsI4cwvmdCrhp0a1vkzefBUI/view?usp=sharing";
const curriculum_vitae_en =
  "https://drive.google.com/file/d/1iAh-8IIEmsI4cwvmdCrhp0a1vkzefBUI/view?usp=sharing";
// antes habia varias verciones, ahora es solo una en ingles

function About() {
  const { language } = useLanguage();
  const { setTab } = useTab();

  const texts = {
    es: {
      title: "Sobre Mí",
      text: [
        "Soy Técnico en Programación (UTN) y Desarrollador Full Stack con foco en React, Next.js, TypeScript y Python. Cuento con más de 2 años de experiencia construyendo aplicaciones web intuitivas, escalables y orientadas al usuario.",
        "Actualmente lidero el frontend de PartiDale, una plataforma SaaS para la gestión de complejos deportivos. Me motiva escribir código limpio, aprender continuamente y crear soluciones con impacto real para el usuario.",
      ],
      especialidades: "Mis tecnologías principales son ",
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
        "I'm a Programming Technician (UTN) and Full Stack Developer focused on React, Next.js, TypeScript, and Python, with 2+ years of experience building intuitive and scalable web applications.",
        "Currently, I lead frontend development at PartiDale, a sports-complex management SaaS platform. I'm passionate about clean code, continuous learning, and crafting solutions that deliver real value to users.",
      ],
      especialidades: "My core technologies are ",
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
        "Sou Técnico em Programação (UTN) e Desenvolvedor Full Stack com foco em React, Next.js, TypeScript e Python, com mais de 2 anos de experiência na criação de aplicações web intuitivas e escaláveis.",
        "Atualmente lidero o frontend da PartiDale, uma plataforma SaaS para gestão de complexos esportivos. Sou motivado por código limpo, aprendizado contínuo e desenvolvimento de soluções com impacto real.",
      ],
      especialidades: "Minhas principais tecnologias são ",
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
    window.open("https://www.linkedin.com/in/julian-codina/", "_blank");
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
            icon1={<FiFileText size={16} />}
            text={texts[language].viewCV}
            onClick={handleCV}
          />
          <BtnOutlined
            icon1={<FaLinkedin size={16} />}
            text="Linkedin"
            onClick={handleLinkedin}
          />
          <BtnOutlined
            icon1={<FaGithub size={16} />}
            text="GitHub"
            onClick={handleGithub}
          />
        </div>
      </div>

      <div className="about-me">
        <div className="body">
          <h2>{texts[language].title}</h2>
          <div className="texts">
            {texts[language].text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <p className="especialidades">
              {texts[language].especialidades}
              <span id="react">React</span>{" "}
              <span id="typescript">TypeScript</span>{" "}
              <span id="python">Python</span>
            </p>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="front">
              <img src={pixar} alt="Pixar Avatar" />
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
            icon={<FiLayout size={24} />}
            title={texts[language].uiDesign.title}
            text={texts[language].uiDesign.text}
          />
          <AboutCard
            icon={<FiGlobe size={24} />}
            title={texts[language].webDev.title}
            text={texts[language].webDev.text}
          />
          <AboutCard
            icon={<FiDatabase size={24} />}
            title={texts[language].database.title}
            text={texts[language].database.text}
          />
        </div>
      </div>
      <div className="footer">
        <BtnOutlined
          text={texts[language].portfolio}
          icon2={<FiArrowRight size={16} />}
          onClick={() => setTab("portfolio")}
        />
      </div>
    </section>
  );
}

export default About;
