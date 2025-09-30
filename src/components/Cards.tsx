import style from "./Cards.module.css";
import type { ReactNode } from "react";

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
