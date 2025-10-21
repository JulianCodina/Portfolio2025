import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Tab = "about" | "portfolio" | "contact";

type TabContextType = {
  tab: Tab;
  setTab: (tab: Tab) => void;
};

const TabContext = createContext<TabContextType | undefined>(undefined);

export const TAB_STORAGE_KEY = "tab";
const LAST_UPDATED_KEY = "tab_last_updated";
const ONE_DAY_MS = 24 * 60 * 60 * 1000; // 24 horas en milisegundos

export const TabProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tab, setTab] = useState<Tab>(() => {
    const savedTab = localStorage.getItem(TAB_STORAGE_KEY) as Tab | null;
    const lastUpdated = localStorage.getItem(LAST_UPDATED_KEY);

    // Si no hay registro de última actualización o han pasado más de 24 horas
    if (!lastUpdated || Date.now() - parseInt(lastUpdated, 10) > ONE_DAY_MS) {
      localStorage.removeItem(TAB_STORAGE_KEY);
      localStorage.removeItem(LAST_UPDATED_KEY);
      return "about";
    }

    return savedTab || "about";
  });

  const updateTab = (newTab: Tab) => {
    setTab(newTab);
    localStorage.setItem(TAB_STORAGE_KEY, newTab);
    localStorage.setItem(LAST_UPDATED_KEY, Date.now().toString());
  };

  return (
    <TabContext.Provider value={{ tab, setTab: updateTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTab = (): TabContextType => {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error("useTab debe usarse dentro de un TabProvider");
  }
  return context;
};
