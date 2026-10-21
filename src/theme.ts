import { useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

// Lee el tema actual desde el atributo data-theme del <html>
export function getTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return (
    (document.documentElement.getAttribute("data-theme") as Theme) || "light"
  );
}

// Suscripción al cambio del atributo data-theme usando MutationObserver
function subscribe(callback: () => void) {
  const el = document.documentElement;
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === "attributes" && m.attributeName === "data-theme") {
        callback();
        break;
      }
    }
  });
  observer.observe(el, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

// Hook reactivo para obtener el tema actual y re-renderizar cuando cambia
export function useTheme(): Theme {
  const theme = useSyncExternalStore<Theme>(
    subscribe,
    getTheme,
    () => "light" as Theme
  );
  return theme;
}

// Devuelve el valor adecuado según el tema
export function useThemeValue<T>(lightValue: T, darkValue: T): T {
  const theme = useTheme();
  return theme === "dark" ? darkValue : lightValue;
}
