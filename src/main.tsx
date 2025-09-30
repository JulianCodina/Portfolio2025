import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.tsx";
import { LanguageProvider } from "./contexts/LanguageContext";
import { TabProvider } from "./contexts/TabContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <TabProvider>
        <App />
      </TabProvider>
    </LanguageProvider>
  </StrictMode>
);
