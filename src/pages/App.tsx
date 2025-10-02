import "./App.css";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Header from "../components/Header";
import { useTab } from "../contexts/TabContext";

import background from "/ui/background.jpg";

const App = () => {
  const { tab } = useTab() || "about";

  return (
    <>
      <div className="background">
        <img src={background} alt="background" />
      </div>
      <Header />
      <main>
        {tab === "about" && <About />}
        {tab === "portfolio" && <Portfolio />}
        {tab === "contact" && <Contact />}
      </main>
    </>
  );
};

export default App;
