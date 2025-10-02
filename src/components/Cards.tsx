import style from "./Cards.module.css";
import type { ReactNode } from "react";
import { useThemedAsset } from "../theme";
import { BtnSolid } from "../components/Inputs";

interface AboutCard {
  icon?: string;
  title: string;
  text: ReactNode;
}

export function AboutCard({ icon, title, text }: AboutCard) {
  return (
    <div className={style.AboutContainer}>
      <div className={style.card}>
        <img src={icon} className={style.img} alt="icon" />
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
  task: string;
  date: string;
  text: string[];
  stack: string[];
}

export function ExpCard({ logo, task, date, text, stack }: ExpCard) {
  return (
    <div className={style.ExpCard}>
      <div className={style.header}>
        <div className={style.top}>
          <img src={logo} className={style.img} alt="logo" />
          <p className={style.task}>{task}</p>
        </div>
        <p className="p-small">{date}</p>
      </div>
      <div className={style.texts}>
        {text.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
      <div className={style.stack}>
        {stack.map((stack) => (
          <p className="p-small" key={stack}>
            {stack}
          </p>
        ))}
      </div>
    </div>
  );
}

interface PrjCard {
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

export function PrjCard({
  preview,
  task,
  title,
  text,
  stack,
  buttons,
}: PrjCard) {
  return (
    <div className={style.PrjCard}>
      <div className={style.header}>
        <img src={preview} className={style.img} alt="logo" />
        <p className={style.task}>{task}</p>
        <div className={style.buttons}>
          {buttons.map((btn) => (
            <BtnSolid
              key={btn.action}
              icon1={useThemedAsset(btn.action)}
              onClick={() => window.open(btn.url)}
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
        {stack.map((stack) => (
          <p className="p-small" key={stack}>
            {stack}
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
    sub: string;
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
              <p className="p-small">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface Certificates {
  content: {
    url: string;
    img?: string;
    title: string;
    sub: string;
  }[];
}

export function Certificate({ content }: Certificates) {
  return (
    <div className={style.Carrousel}>
      <div className={style.container}>
        {content.map((item, index) => (
          <div
            key={index}
            className={style.item}
            onClick={() => window.open(item.url)}
          >
            <img src={item.img} className={style.img} alt={item.title} />
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
  img?: string;
  title: string;
  sub?: string;
}

export function ContactCard({ img, title, sub }: ContactCard) {
  return (
    <div className={style.Contact}>
      <div className={style.item}>
        <img src={img} className={style.img} alt={title} />
        <div className={style.texts}>
          <p className={style.title}>{title}</p>
          {sub && <p className="p-small">{sub}</p>}
        </div>
      </div>
    </div>
  );
}
