import style from "./Cards.module.css";
import type { ReactNode } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub, FaFigma } from "react-icons/fa6";

interface AboutCard {
  icon?: string | ReactNode;
  title: string;
  text: ReactNode;
}

export function AboutCard({ icon, title, text }: AboutCard) {
  return (
    <div className={style.AboutContainer}>
      <div className={style.card}>
        <div className={style.iconWrapper}>
          {typeof icon === "string" ? (
            <img src={icon} className={style.img} alt="icon" />
          ) : (
            icon
          )}
        </div>
        <div className={style.texts}>
          <div className={style.title}>
            <h3>{title}</h3>
          </div>
          <div className={style.text}>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ExpCard {
  logo?: string;
  logoBg?: boolean;
  task: string;
  date: string;
  text: string[];
  stack: string[];
}

export function ExpCard({ logo, logoBg, task, date, text, stack }: ExpCard) {
  return (
    <div className={style.ExpCard}>
      <div className={style.header}>
        <div className={style.top}>
          {logoBg ? (
            <div className={style.logoWrapperWhite}>
              <img src={logo} className={style.imgInWhiteBg} alt="logo" />
            </div>
          ) : (
            <img src={logo} className={style.img} alt="logo" />
          )}
          <p className={style.task}>{task}</p>
        </div>
        <p className="p-small">{date}</p>
      </div>
      <div className={style.texts}>
        {text.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </div>
      <div className={style.stack}>
        {stack.map((s) => (
          <p className="p-small" key={s}>
            {s}
          </p>
        ))}
      </div>
    </div>
  );
}

interface PrjCard {
  key?: number;
  preview?: string;
  task: string;
  title: string;
  text: string;
  stack: string[];
  buttons: {
    action: string;
    url: string;
    title: string;
  }[];
}

function ProjectButton({
  action,
  url,
  title,
}: {
  action: string;
  url: string;
  title: string;
}) {
  const getIcon = () => {
    const act = action.toLowerCase();
    if (act.includes("git")) return <FaGithub size={13} />;
    if (act.includes("figma")) return <FaFigma size={13} />;
    return <FiExternalLink size={13} />;
  };

  return (
    <button
      type="button"
      className={style.projectButton}
      onClick={() => window.open(url, "_blank")}
      title={title}
      aria-label={title}
    >
      {getIcon()}
    </button>
  );
}

export function PrjCard({
  key,
  preview,
  task,
  title,
  text,
  stack,
  buttons,
}: PrjCard) {
  return (
    <div className={style.PrjCard} key={key}>
      <div className={style.header}>
        <img src={preview} className={style.img} alt="preview" />
        <p className={style.task}>{task}</p>
        <div className={style.buttons}>
          {buttons.map((btn) => (
            <ProjectButton
              key={btn.action}
              action={btn.action}
              url={btn.url}
              title={btn.title}
            />
          ))}
        </div>
      </div>
      <div className={style.texts}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className={style.stack}>
        {stack.map((s) => (
          <p className="p-small" key={s}>
            {s}
          </p>
        ))}
      </div>
    </div>
  );
}

interface StackProps {
  title: string;
  content: {
    img?: string;
    title: string;
    sub?: string;
  }[];
}

export function Stack({ title, content }: StackProps) {
  return (
    <div className={style.StackCard}>
      <p className={style.task}>{title}</p>
      <div className={style.stack}>
        {content.map((item, index) => (
          <div key={index} className={style.item}>
            <img src={item.img} className={style.img} alt={item.title} />
            <div className="texts">
              <p className={style.title}>{item.title}</p>
              {item.sub && <p className="p-small">{item.sub}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface CertificateItem {
  url: string;
  img?: string;
  title: string;
  sub: string;
  inProgress?: boolean;
}

interface Certificates {
  content: CertificateItem[];
}

export function Certificate({ content }: Certificates) {
  const { language } = useLanguage();

  const inProgressLabels = {
    es: "En curso",
    en: "In progress",
    pt: "Em andamento",
  };

  const tooltipLabels = {
    es: "Certificado en trámite / En curso",
    en: "Certificate in progress",
    pt: "Certificado em andamento",
  };

  return (
    <div className={style.Carrousel}>
      <div className={style.container}>
        {content.map((item, index) => (
          <div
            key={index}
            className={style.item}
            title={
              item.inProgress || item.url === "#"
                ? tooltipLabels[language] || tooltipLabels.es
                : undefined
            }
            onClick={() => {
              if (item.url && item.url !== "#") {
                window.open(item.url, "_blank");
              }
            }}
          >
            {item.inProgress ? (
              <div className={style.placeholderInProgress}>
                <span className={style.placeholderText}>
                  {inProgressLabels[language] || inProgressLabels.es}
                </span>
              </div>
            ) : (
              <img src={item.img} className={style.img} alt={item.title} />
            )}
            <div className={style.texts}>
              <p className={style.title}>{item.title}</p>
              <p className="p-small">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ContactCard {
  img?: string | ReactNode;
  title: string;
  sub?: string;
  onClick?: () => void;
}

export function ContactCard({ img, title, sub, onClick }: ContactCard) {
  return (
    <div className={style.Contact} onClick={onClick} role="button" tabIndex={0}>
      <div className={style.img}>
        {typeof img === "string" ? (
          <img src={img} className={style.icon} alt={title} />
        ) : (
          <span className={style.iconWrapper}>{img}</span>
        )}
      </div>
      <div className={style.texts}>
        <p className={style.title}>{title}</p>
        {sub && <p className="p-small">{sub}</p>}
      </div>
    </div>
  );
}
