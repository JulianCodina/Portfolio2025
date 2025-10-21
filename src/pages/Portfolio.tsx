import "./Portfolio.css";
import { BtnOutlined } from "../components/Inputs";
import { useThemedAsset } from "../theme";
import { ExpCard, PrjCard, Stack, Certificate } from "../components/Cards";
import { useLanguage } from "../contexts/LanguageContext";
import { useTab } from "../contexts/TabContext";

// Imágenes
import intersoft from "/logos/Intersoft.png";
import sentirsebienlogo from "/logos/sentirsebien.png";

import sentirsebien from "/preview/sentirsebien.jpg";
import podcast from "/preview/podcast.jpg";
import chatbot from "/preview/chatbot.jpg";
import portfolio from "/preview/portfolio.jpg";
import holonet from "/preview/holonet.jpg";

// Stack
import ReactJS from "/stack/react.png";
import TypeScript from "/stack/typescript.png";
import JavaScript from "/stack/javascript.png";
import HTML from "/stack/html.png";
import CSS from "/stack/css.png";
import Figma from "/stack/figma.png";
import Node from "/stack/node.png";
import Python from "/stack/python.png";
import Java from "/stack/java.png";
import CSharp from "/stack/csharp.png";
import MySQL from "/stack/mysql.png";
import SupaBase from "/stack/supabase.png";
import MongoDB from "/stack/mongodb.png";

// Certificados
import devweb from "/preview/devweb.webp";
import MasterCSS from "/preview/mastercss.webp";
import ReactCert from "/preview/react.webp";
import PythonCert from "/preview/python.webp";
import Testing from "/preview/testing.webp";
import Design from "/preview/design.webp";
import En from "/preview/ingles.webp";
import Pt from "/preview/portugues.webp";

function Portfolio() {
  const { language } = useLanguage();
  const { setTab } = useTab();
  //Iconos
  const right = useThemedAsset("right");

  const texts = {
    es: {
      xpTitle: "Experiencia",
      prjTitle: "Proyectos",
      stackTitle: "Especialidades",
      certTitle: "Certificados",
      contact: "Contacto",
      exp1: {
        title: "Full Stack",
        date: "Febrero 2025 - Septiembre 2025",
        points: [
          "Desarrollo Full Stack de una aplicación web, desde el diseño de la arquitectura de la base de datos hasta la implementación del frontend.",
          "Optimización de la infraestructura backend, asegurando escalabilidad y control de datos.",
          "Creación y documentación de librerías de componentes reutilizables para futuros proyectos.",
        ],
      },
      exp2: {
        title: "Frontend",
        date: "Agosto 2024 - Enero 2025",
        points: [
          "Especializado en el Frontend, encargado de la construcción de la interfaz de usuario y la lógica de negocio en el lado del cliente.",
          "Diseño y construcción del panel de administración (CMS).",
          "Uso de TypeScript para la creación de componentes robustos y escalables en ReactJS.",
          "Apoyo a un nuevo integrante del equipo, guiándolo en el proceso de integración y en la comprensión del código.",
        ],
      },
      projects: {
        sentirsebien: {
          title: "Sentirse Bien",
          description:
            "Sitio web FullStack con sistema de usuarios, registro de turnos, descarga de informes y panel de control para administrador.",
        },
        podcast: {
          title: "Podcast Player",
          description:
            "Aplicación web con integración de API, incluye un sistema de usuarios que permite guardar los podcast favoritos.",
        },
        chatbot: {
          title: "IAzul Chatbot",
          description:
            "Página web con integración de LLM y conexión a una base de datos que puede ser modificada por usuarios autenticados.",
        },
        portfolio: {
          title: "Portafolio Web",
          description:
            "Simple web personal que cuenta con diseño completo en Figma para su desarrollo.",
        },
        holonet: {
          title: "Foro Holonet",
          description:
            "Foro en vivo, con practica en CRUD y ApiRest para la creacion de posts y respuestas. Incluye autenticacion de usuarios.",
        },
      },
      stack: {
        frontend: "Frontend",
        backend: "Backend",
        levels: {
          basic: "básico",
          intermediate: "intermedio",
          advanced: "avanzado",
        },
      },
    },
    en: {
      xpTitle: "Experience",
      prjTitle: "Projects",
      stackTitle: "Specialties",
      certTitle: "Certificates",
      contact: "Contact",
      exp1: {
        title: "Full Stack",
        date: "February 2025 - September 2025",
        points: [
          "Full Stack development of a web application, from database architecture design to frontend implementation.",
          "Backend infrastructure optimization, ensuring scalability and data control.",
          "Creation and documentation of reusable component libraries for future projects.",
        ],
      },
      exp2: {
        title: "Frontend",
        date: "August 2024 - January 2025",
        points: [
          "Specialized in Frontend, responsible for building user interfaces and client-side business logic.",
          "Design and construction of the administration panel (CMS).",
          "Use of TypeScript for creating robust and scalable components in ReactJS.",
          "Support for a new team member, guiding them through the integration process and code understanding.",
        ],
      },
      projects: {
        sentirsebien: {
          title: "Sentirse Bien",
          description:
            "FullStack website with user system, appointment scheduling, report downloads, and admin dashboard.",
        },
        podcast: {
          title: "Podcast Player",
          description:
            "Web application with API integration, includes a user system that allows saving favorite podcasts.",
        },
        chatbot: {
          title: "IAzul Chatbot",
          description:
            "Website with LLM integration and connection to a database that can be modified by authenticated users.",
        },
        portfolio: {
          title: "Web Portfolio",
          description:
            "Simple personal website with complete Figma design for development.",
        },
        holonet: {
          title: "Holonet Forum",
          description:
            "Live forum with CRUD and REST API practice for creating posts and replies. Includes user authentication.",
        },
      },
      stack: {
        frontend: "Frontend",
        backend: "Backend",
        levels: {
          basic: "basic",
          intermediate: "intermediate",
          advanced: "advanced",
        },
      },
    },
    pt: {
      xpTitle: "Experiência",
      prjTitle: "Projetos",
      stackTitle: "Especialidades",
      certTitle: "Certificados",
      contact: "Contacto",
      exp1: {
        title: "Full Stack",
        date: "Fevereiro 2025 - Setembro 2025",
        points: [
          "Desenvolvimento Full Stack de uma aplicação web, desde o design da arquitetura do banco de dados até a implementação do frontend.",
          "Otimização da infraestrutura de backend, garantindo escalabilidade e controle de dados.",
          "Criação e documentação de bibliotecas de componentes reutilizáveis para projetos futuros.",
        ],
      },
      exp2: {
        title: "Frontend",
        date: "Agosto 2024 - Janeiro 2025",
        points: [
          "Especializado em Frontend, responsável pela construção da interface do usuário e lógica de negócios no lado do cliente.",
          "Design e construção do painel de administração (CMS).",
          "Uso de TypeScript para criar componentes robustos e escaláveis en ReactJS.",
          "Apoyo a un nuevo integrante del equipo, guiándolo en el proceso de integración y en la comprensión del código.",
        ],
      },
      projects: {
        sentirsebien: {
          title: "Sentirse Bien",
          description:
            "Site FullStack com sistema de usuários, agendamento de consultas, download de relatórios e painel de controle.",
        },
        podcast: {
          title: "Reprodutor de Podcast",
          description:
            "Aplicativo web con integración de API, incluye un sistema de usuarios que permite guardar podcasts favoritos.",
        },
        chatbot: {
          title: "Chatbot IAzul",
          description:
            "Site com integração de LLM e conexão a um banco de dados que pode ser modificado por usuários autenticados.",
        },
        portfolio: {
          title: "Portfólio Web",
          description:
            "Site pessoal simples com design completo no Figma para desenvolvimento.",
        },
        holonet: {
          title: "Fórum Holonet",
          description:
            "Fórum ao vivo, com prática em CRUD e API REST para criação de posts e respostas. Inclui autenticação de usuários.",
        },
      },
      stack: {
        frontend: "Frontend",
        backend: "Backend",
        levels: {
          basic: "básico",
          intermediate: "intermediário",
          advanced: "avançado",
        },
      },
    },
  };

  return (
    <section id="portfolio">
      <div className="experience">
        <h2>{texts[language].xpTitle}</h2>
        <div className="body">
          <div className="line" />
          <div className="container">
            <div className="card">
              <ExpCard
                logo={intersoft}
                task={texts[language].exp1.title}
                date={texts[language].exp1.date}
                text={texts[language].exp1.points}
                stack={[
                  "Python",
                  "MySQL",
                  "SupaBase",
                  "MQTT",
                  "FastAPI",
                  "OpenAI API",
                  "NodeJS",
                  "ReactJS",
                  "JavaScript",
                  "CSS3",
                  "Figma",
                ]}
              />
            </div>
            <div className="card">
              <ExpCard
                logo={sentirsebienlogo}
                task={texts[language].exp2.title}
                date={texts[language].exp2.date}
                text={texts[language].exp2.points}
                stack={[
                  "NodeJS",
                  "MongoDB",
                  "ReactJS",
                  "TypeScript",
                  "CSS3",
                  "Figma",
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="projects">
        <h2>{texts[language].prjTitle}</h2>
        <div className="container">
          <PrjCard
            key={1}
            preview={sentirsebien}
            task={"Frontend"}
            title={texts[language].projects.sentirsebien.title}
            text={texts[language].projects.sentirsebien.description}
            buttons={[
              {
                action: "deploy",
                url: "https://spa-sentirse-bien.netlify.app/",
                title: "Deploy",
              },
              {
                action: "git",
                url: "https://github.com/JulianCodina/Spa_Sentirse_Bien",
                title: "Github",
              },
              {
                action: "figma",
                url: "https://www.figma.com/design/TBnJMtfX2azJOXicUIIyHp/Figma-basics?node-id=1669-162202&t=QmIO3I8zHVoQEGa4-1",
                title: "Figma",
              },
            ]}
            stack={[
              "NodeJS",
              "MongoDB",
              "ReactJS",
              "TypeScript",
              "CSS3",
              "Figma",
            ]}
          />
          <PrjCard
            key={2}
            preview={podcast}
            task={"Frontend"}
            title={texts[language].projects.podcast.title}
            text={texts[language].projects.podcast.description}
            buttons={[
              {
                action: "deploy",
                url: "https://podcastplayer.vercel.app/",
                title: "Deploy",
              },
              {
                action: "git",
                url: "https://github.com/JulianCodina/PodcastPlayer",
                title: "Github",
              },
            ]}
            stack={["ReactJS", "Figma", "TypeScript", "CSS"]}
          />
          <PrjCard
            preview={chatbot}
            task={"Full Stack"}
            title={texts[language].projects.chatbot.title}
            text={texts[language].projects.chatbot.description}
            buttons={[
              {
                action: "deploy",
                url: "https://iazul-chatbot.vercel.app/",
                title: "Deploy",
              },
              {
                action: "git",
                url: "https://github.com/JulianCodina/IAzul-Chatbot",
                title: "Github",
              },
            ]}
            stack={[
              "Python",
              "FastApi",
              "Supabase",
              "CSS",
              "JavaScript",
              "ReactJS",
            ]}
          />
          <PrjCard
            key={4}
            preview={portfolio}
            task={"Frontend"}
            title={texts[language].projects.portfolio.title}
            text={texts[language].projects.portfolio.description}
            buttons={[
              {
                action: "git",
                url: "https://github.com/JulianCodina/Portfolio2025",
                title: "Github",
              },
              {
                action: "figma",
                url: "https://www.figma.com/design/F9LYoJh6j0duEpGX9YnEwX/Portfolio-2025?node-id=0-1&p=f&t=LXHxC2ejwL2lc5rP-0",
                title: "Figma",
              },
            ]}
            stack={["ReactJS", "Figma", "TypeScript", "CSS"]}
          />
          <PrjCard
            key={5}
            preview={holonet}
            task={"Full Stack"}
            title={texts[language].projects.holonet.title}
            text={texts[language].projects.holonet.description}
            buttons={[
              {
                action: "git",
                url: "https://github.com/JulianCodina/NodeJS-practice",
                title: "Github",
              },
            ]}
            stack={[
              "NodeJS",
              "SQLite",
              "ApiREST",
              "ReactJS",
              "JavaScript",
              "CSS",
            ]}
          />
        </div>
      </div>

      <div className="stacks">
        <h2>{texts[language].stackTitle}</h2>
        <div className="container">
          <Stack
            title={texts[language].stack.frontend}
            content={[
              {
                title: "ReactJS",
                sub: texts[language].stack.levels.intermediate,
                img: ReactJS,
              },
              {
                title: "TypeScript",
                sub: texts[language].stack.levels.intermediate,
                img: TypeScript,
              },
              {
                title: "JavaScript",
                sub: texts[language].stack.levels.intermediate,
                img: JavaScript,
              },
              {
                title: "HTML",
                sub: texts[language].stack.levels.advanced,
                img: HTML,
              },
              {
                title: "CSS",
                sub: texts[language].stack.levels.advanced,
                img: CSS,
              },
              {
                title: "Figma",
                sub: texts[language].stack.levels.intermediate,
                img: Figma,
              },
            ]}
          />
          <Stack
            title={texts[language].stack.backend}
            content={[
              {
                title: "NodeJS",
                sub: texts[language].stack.levels.intermediate,
                img: Node,
              },
              {
                title: "Python",
                sub: texts[language].stack.levels.intermediate,
                img: Python,
              },
              {
                title: "Java",
                sub: texts[language].stack.levels.intermediate,
                img: Java,
              },
              {
                title: "C#",
                sub: texts[language].stack.levels.basic,
                img: CSharp,
              },
              {
                title: "MySQL",
                sub: texts[language].stack.levels.intermediate,
                img: MySQL,
              },
              {
                title: "Supabase",
                sub: texts[language].stack.levels.intermediate,
                img: SupaBase,
              },
              {
                title: "MongoDB",
                sub: texts[language].stack.levels.basic,
                img: MongoDB,
              },
            ]}
          />
        </div>
      </div>

      <div className="certificates">
        <h2>{texts[language].certTitle}</h2>
        <div className="container">
          <Certificate
            content={[
              {
                title: "Desarrollo Web",
                sub: "Udemy",
                img: devweb,
                url: "https://drive.google.com/file/d/16AzArzSVf9IBfoqJP47G9S2PZGQP3P1o/view",
              },
              {
                title: "Master en CSS",
                sub: "Udemy",
                img: MasterCSS,
                url: "https://drive.google.com/file/d/1D4qG1-yuACSaGrNd5RKZ8b15pcnrIog-/view",
              },
              {
                title: "Python",
                sub: "Udemy",
                img: PythonCert,
                url: "https://drive.google.com/file/d/1o9EZRDn2JqIGg6HEiBsim2zuGo5WXwny/view",
              },
              {
                title: "Testing",
                sub: "Informatorio",
                img: Testing,
                url: "https://drive.google.com/file/d/1RSFrS9gLhbfIKQSWAWLEpK87XV0h0sPM/view",
              },
              {
                title: "ReactJS",
                sub: "Informatorio",
                img: ReactCert,
                url: "https://drive.google.com/file/d/1jhuK_Q6_wz_Be6utzeHbeFbKcLX6A-1t/view",
              },
              {
                title: "Diseño UI",
                sub: "Informatorio",
                img: Design,
                url: "https://drive.google.com/file/d/19bmcisFd9p97JRO2Zv5NwWCjvZ70t5_Q/view",
              },
              {
                title: "Ingles",
                sub: "UNNE",
                img: En,
                url: "https://drive.google.com/file/d/1KFudHRqzy0tR3lDOjKhrtGqcb9ZO5lYp/view",
              },
              {
                title: "Portugues",
                sub: "UTN",
                img: Pt,
                url: "https://drive.google.com/file/d/1GY-kv4pxgMDZsmT2mR_U4GPzghxkw4li/view",
              },
            ]}
          />
        </div>
      </div>

      <div className="footer">
        <BtnOutlined
          icon1=""
          text={texts[language].contact}
          icon2={right}
          onClick={() => setTab("contact")}
        />
      </div>
    </section>
  );
}

export default Portfolio;
