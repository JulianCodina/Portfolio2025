import style from "./Header.module.css";
import { useLanguage } from "../contexts/LanguageContext";
import { useTab } from "../contexts/TabContext";
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

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
          <button
            type="button"
            className={style.logoBtn}
            onClick={() => setTab("about")}
            aria-label="Julián - Inicio"
          >
            <img src="/ui/favicon.svg" alt="Logo Julián Codina" className={style.logoImg} />
            <span className={style.logoText}>Julián</span>
          </button>
        </div>
        <div className={style.right}>
          <nav aria-label="Navegación principal">
            <button
              type="button"
              className={tab === "about" ? style.navSelected : style.navLink}
              onClick={() => setTab("about")}
            >
              {navTexts[language].about}
            </button>
            <button
              type="button"
              className={tab === "portfolio" ? style.navSelected : style.navLink}
              onClick={() => setTab("portfolio")}
            >
              {navTexts[language].portfolio}
            </button>
            <button
              type="button"
              className={tab === "contact" ? style.navSelected : style.navLink}
              onClick={() => setTab("contact")}
            >
              {navTexts[language].contact}
            </button>
          </nav>
          <div className={style.controls}>
            <div className={style.langGroup} role="group" aria-label="Idioma">
              <button
                type="button"
                className={language === "es" ? style.langActive : style.langBtn}
                onClick={() => setLanguage("es")}
                aria-label="Español"
              >
                ES
              </button>
              <span className={style.langDivider}>/</span>
              <button
                type="button"
                className={language === "en" ? style.langActive : style.langBtn}
                onClick={() => setLanguage("en")}
                aria-label="English"
              >
                EN
              </button>
              <span className={style.langDivider}>/</span>
              <button
                type="button"
                className={language === "pt" ? style.langActive : style.langBtn}
                onClick={() => setLanguage("pt")}
                aria-label="Português"
              >
                PT
              </button>
            </div>
            <button
              type="button"
              className={style.themeBtn}
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
              title={theme === "light" ? "Modo oscuro" : "Modo claro"}
            >
              {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
