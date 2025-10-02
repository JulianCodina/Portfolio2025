import "./App.css";
import About from "./About";
import Portfolio from "./Portfolio";
import Header from "../components/Header";
import background from "../assets/ui/background.jpg";
import { useTab } from "../contexts/TabContext";

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
      </main>
    </>
  );
};

export default App;
