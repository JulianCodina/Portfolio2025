import { useEffect, useState } from "react";
import "./App.css";
import About from "./About";
import { useLanguage } from "./contexts/LanguageContext";

const App = () => {
  const { language, setLanguage } = useLanguage();

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

  return (
    <>
      <div className="inline">
        <h1>
          {language === "es"
            ? "Bienvenido"
            : language === "en"
            ? "Welcome"
            : "Bem-vindo"}
        </h1>
        <div className="header-controls">
          <button onClick={() => setLanguage("es")}>ES</button>
          <span>|</span>
          <button onClick={() => setLanguage("en")}>EN</button>
          <span>|</span>
          <button onClick={() => setLanguage("pt")}>PT</button>
          <button onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
      <main>
        <About />
      </main>
    </>
  );
};

export default App;
