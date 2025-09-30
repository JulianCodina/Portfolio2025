import style from "./Inputs.module.css";

interface PropsButtons {
  icon1?: string;
  text: string;
  icon2?: string;
  onClick?: () => void;
}
export function BtnOutlined({ icon1, text, icon2, onClick }: PropsButtons) {
  return (
    <div className={style.container}>
      <div className={style.btn_outlined} onClick={onClick}>
        {!!icon1 && <img src={icon1} alt="icon1" />}
        {!!text && <p>{text}</p>}
        {!!icon2 && <img src={icon2} alt="icon2" />}
      </div>
    </div>
  );
}

export function BtnSolid({ icon1, text, icon2, onClick }: PropsButtons) {
  return (
    <div className={style.container}>
      <div className={style.btn_solid} onClick={onClick}>
        {!!icon1 && <img src={icon1} alt="icon1" />}
        {!!text && <p>{text}</p>}
        {!!icon2 && <img src={icon2} alt="icon2" />}
      </div>
    </div>
  );
}
