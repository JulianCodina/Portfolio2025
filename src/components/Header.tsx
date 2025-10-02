import style from "./Header.module.css";
import { useLanguage } from "../contexts/LanguageContext";
import { useTab } from "../contexts/TabContext";
import { useState, useEffect } from "react";

import dark from "/theme & language/dark.png";
import light from "/theme & language/light.png";
import es from "/theme & language/mexico.png";
import en from "/theme & language/eeuu.png";
import pt from "/theme & language/brazil.png";

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const { tab, setTab } = useTab();
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    // Cargar tema guardado
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navTexts = {
    es: {
      about: "Sobre Mí",
      portfolio: "Portafolio",
      contact: "Contacto",
    },
    en: {
      about: "About Me",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    pt: {
      about: "Sobre Mim",
      portfolio: "Portfólio",
      contact: "Contato",
    },
  };

  return (
    <header>
      <div className={style.Header}>
        <div className={style.left}>
          <p className="p-big">
            {"</>"}
            <span>Julián</span>
          </p>
          <div className={style.buttons}>
            <div className="theme" onClick={toggleTheme}>
              <img src={theme === "light" ? light : dark} alt="dark" />
            </div>
            <div className="language">
              <img
                src={language === "es" ? es : language === "en" ? en : pt}
                onClick={() => {
                  if (language === "es") {
                    setLanguage("en");
                  } else if (language === "en") {
                    setLanguage("pt");
                  } else {
                    setLanguage("es");
                  }
                }}
              />
            </div>
          </div>
        </div>
        <nav>
          <h3
            className={tab === "about" ? style.selected : style.unselected}
            onClick={() => setTab("about")}
          >
            {navTexts[language].about}
          </h3>
          <h3
            className={tab === "portfolio" ? style.selected : style.unselected}
            onClick={() => setTab("portfolio")}
          >
            {navTexts[language].portfolio}
          </h3>
          <h3
            className={tab === "contact" ? style.selected : style.unselected}
            onClick={() => setTab("contact")}
          >
            {navTexts[language].contact}
          </h3>
        </nav>
      </div>
    </header>
  );
}
