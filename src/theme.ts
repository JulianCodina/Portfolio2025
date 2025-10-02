import { useMemo, useSyncExternalStore } from "react";

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

// Devuelve la imagen adecuada según el tema
export function useThemeImage<T>(lightValue: T, darkValue: T): T {
  const theme = useTheme();
  return theme === "dark" ? darkValue : lightValue;
}

// ------------- Themed assets (fusionado desde themeImages) -------------
type AssetMap = Record<string, Partial<Record<Theme, string>>>;

// Carga todas las imágenes dentro de public/icons con Vite (build-time)
// Convenciones de nombre: "cvL.png", "cvD.png" -> key "cv" + tema L/D
const modules = import.meta.glob("/public/icons/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
  import: "default",
});

// Construye el registro tema->url por clave base (cv, profile, home, ...)
const ASSETS: AssetMap = Object.entries(modules).reduce((acc, [path, url]) => {
  // path ejemplo: '/icons/cvD.png'
  const file = path.split("/").pop() || "";
  const match = file.match(/^(.*?)([LD])\.(png|jpg|jpeg|svg|webp)$/i);
  if (!match) return acc;
  const [, base, suffix] = match;
  const theme: Theme = suffix.toUpperCase() === "D" ? "dark" : "light";
  const key = base; // "cv", "profile", "home", ...
  const urlStr = String(url);
  acc[key] ||= {};
  acc[key][theme] = urlStr;
  return acc;
}, {} as AssetMap);

// Obtiene la URL del asset para una key dada y un tema dado (con fallback)
export function getThemedAsset(name: string, theme: Theme): string | undefined {
  const entry = ASSETS[name];
  if (!entry) return undefined;
  return entry[theme] ?? entry[theme === "dark" ? "light" : "dark"];
}

// Hook que devuelve la URL reactiva del asset segun el tema actual
export function useThemedAsset(name: string): string | undefined {
  const theme = useTheme();
  // useMemo para evitar crear nuevas strings en re-renders del mismo tema
  const src = useMemo(() => getThemedAsset(name, theme), [name, theme]);
  return src;
}

// Exportar mapa para usos avanzados o debug
export const themedAssets = ASSETS;
