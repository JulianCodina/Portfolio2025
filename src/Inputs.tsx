import style from "./Inputs.module.css";
import type { ReactNode } from "react";

interface PropsOutlined {
  icon1?: string;
  icon2?: string;
  children: ReactNode;
}
export function BtnOutlined({ icon1, icon2, children }: PropsOutlined) {
  return (
    <div className={style.container}>
      <div className={style.btn_outlined}>
        {!!icon1 && <img src={icon1} alt="icon1" />}
        {children}
        {!!icon2 && <img src={icon2} alt="icon2" />}
      </div>
    </div>
  );
}

export function BtnSolid({ icon1, icon2, children }: PropsOutlined) {
  return (
    <div className={style.container}>
      <div className={style.btn_solid}>
        {!!icon1 && <img src={icon1} alt="icon1" />}
        {children}
        {!!icon2 && <img src={icon2} alt="icon2" />}
      </div>
    </div>
  );
}
