import React, { useState, useEffect, useMemo, useRef } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";
import { HiPlus, HiMinus, HiLocationMarker } from "react-icons/hi";

interface MapProps {
  center: LatLngExpression;
  zoom?: number;
}

const CARTO_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

// Componente para auto-redimensionar y prevenir bloques grises
const ResizeManager: React.FC = () => {
  const map = useMap();
  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = map.getContainer();
    if (!container) return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const resizeObserver = new ResizeObserver(() => {
      timeoutId = setTimeout(() => {
        try {
          if (map && (map as unknown as { _container?: HTMLDivElement })._container) {
            map.invalidateSize();
          }
        } catch {
          // Ignorar si el mapa se desmontó
        }
      }, 50);
    });

    resizeObserver.observe(container);
    try {
      map.invalidateSize();
    } catch {
      // Ignorar si el mapa no está listo aún
    }

    return () => {
      resizeObserver.disconnect();
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [map]);

  return null;
};

// Controles personalizados de zoom y recentrado
const MapControls: React.FC<{ defaultCenter: [number, number] }> = ({
  defaultCenter,
}) => {
  const map = useMap();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      L.DomEvent.disableClickPropagation(containerRef.current);
      L.DomEvent.disableScrollPropagation(containerRef.current);
    }
  }, []);

  const handleZoomIn = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    map.zoomIn();
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    map.zoomOut();
  };

  const handleRecenter = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    map.setView(defaultCenter, 13, { animate: true });
  };

  return (
    <div ref={containerRef} className={styles.controlsContainer}>
      <button
        type="button"
        className={styles.controlBtn}
        onClick={handleZoomIn}
        title="Acercar"
      >
        <HiPlus size={16} />
      </button>
      <button
        type="button"
        className={styles.controlBtn}
        onClick={handleZoomOut}
        title="Alejar"
      >
        <HiMinus size={16} />
      </button>
      <button
        type="button"
        className={styles.controlBtn}
        onClick={handleRecenter}
        title="Centrar ubicación"
      >
        <HiLocationMarker size={16} />
      </button>
    </div>
  );
};

const buildCartoUrl = (style: string): string => {
  const apiKey =
    import.meta.env.NEXT_PUBLIC_CARTO_API_KEY ||
    import.meta.env.VITE_CARTO_API_KEY ||
    "";
  const keyParam = apiKey ? `?key=${encodeURIComponent(apiKey)}` : "";
  return `https://{s}.basemaps.cartocdn.com/rastertiles/${style}/{z}/{x}/{y}{r}.png${keyParam}`;
};

const createCustomIcon = (
  isDarkTheme: boolean,
  lat: number,
  lng: number,
) => {
  const pinColor = isDarkTheme ? "var(--primary)" : "#008156";
  const pinBg = isDarkTheme ? "#18191c" : "#ffffff";

  return L.divIcon({
    html: `
      <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px;">
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          onclick="window.open('https://www.google.com/maps/search/?api=1&query=${lat},${lng}', '_blank')"
          style="
            filter: drop-shadow(0px 2px 5px rgba(0,0,0,0.45)); 
            cursor: pointer; 
            transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
          " 
          onmouseenter="this.style.transform='scale(1.2)'" 
          onmouseleave="this.style.transform='scale(1)'"
          title="Ver en Google Maps"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="${pinColor}" stroke="${pinBg}" stroke-width="1.5" />
          <circle cx="12" cy="9" r="3.5" fill="${pinBg}" />
        </svg>
      </div>
    `,
    className: "custom-leaflet-marker",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });
};

const Map: React.FC<MapProps> = ({ center, zoom = 13 }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    return document.documentElement.getAttribute("data-theme") === "dark";
  });

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
    };

    checkTheme();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          checkTheme();
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const [lat, lng]: [number, number] = useMemo(() => {
    if (Array.isArray(center)) {
      return [Number(center[0]), Number(center[1])];
    }
    if (typeof center === "object" && center !== null && "lat" in center && "lng" in center) {
      return [(center as { lat: number }).lat, (center as { lng: number }).lng];
    }
    return [-27.45113166461427, -58.98651292532432];
  }, [center]);

  const markerIcon = useMemo(
    () => createCustomIcon(isDark, lat, lng),
    [isDark, lat, lng],
  );

  return (
    <div className={styles.mapWrapper}>
      <style>{`
        .leaflet-container {
          background-color: var(--bg-1) !important;
          font-family: inherit;
        }
        .leaflet-tile {
          outline: 1px solid transparent;
          box-shadow: 0 0 1px transparent;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .leaflet-map-pane { z-index: 1 !important; }
        .leaflet-tile-pane { z-index: 1 !important; }
        .leaflet-overlay-pane { z-index: 2 !important; }
        .leaflet-marker-pane { z-index: 3 !important; }
        .leaflet-tooltip-pane { z-index: 4 !important; }
        .leaflet-popup-pane { z-index: 5 !important; }
      `}</style>
      <MapContainer
        center={center}
        zoom={zoom}
        minZoom={2}
        maxZoom={18}
        className={styles.mapContainerEl}
        scrollWheelZoom={false}
        zoomControl={false}
        attributionControl={false}
      >
        {/* Capa 1: Calles sin etiquetas (en oscuro se oscurecen y desaturan vía CSS) */}
        <TileLayer
          key={`${isDark ? "dark" : "light"}-base`}
          url={buildCartoUrl(isDark ? "dark_nolabels" : "light_nolabels")}
          className={isDark ? styles.tilesBaseDark : undefined}
          subdomains="abcd"
          minZoom={2}
          maxZoom={18}
          attribution={CARTO_ATTRIBUTION}
        />
        {/* Capa 2: Etiquetas en capa separada (en oscuro se aclaran para contraste óptimo) */}
        <TileLayer
          key={`${isDark ? "dark" : "light"}-labels`}
          url={buildCartoUrl(isDark ? "dark_only_labels" : "light_only_labels")}
          className={isDark ? styles.tilesLabelsDark : undefined}
          subdomains="abcd"
          zIndex={2}
          minZoom={2}
          maxZoom={18}
        />
        <ResizeManager />
        <Marker position={center} icon={markerIcon} />
        <MapControls defaultCenter={[lat, lng]} />
      </MapContainer>
    </div>
  );
};

export default Map;
