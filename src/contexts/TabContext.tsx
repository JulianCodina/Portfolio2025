import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Tab = "about" | "portfolio" | "contact";

type TabContextType = {
  tab: Tab;
  setTab: (tab: Tab) => void;
};

const TabContext = createContext<TabContextType | undefined>(undefined);

export const TabProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tab, setTab] = useState<Tab>(() => {
    const savedTab = localStorage.getItem("tab") as Tab | null;
    return savedTab || "about";
  });

  const updateTab = (tab: Tab) => {
    setTab(tab);
    localStorage.setItem("tab", tab);
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
