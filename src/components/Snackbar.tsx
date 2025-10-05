import { useEffect, useState } from "react";
import "./Snackbar.css";

type SnackbarType = "success" | "error";

interface SnackbarProps {
  message: string;
  type: SnackbarType;
  onClose: () => void;
  duration: number;
}

export function Snackbar({ message, type, onClose, duration }: SnackbarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(showTimer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible && !isClosing) return null;

  return (
    <div className={`snackbar ${type} ${isClosing ? "hide" : "show"}`}>
      <div className="snackbar-content">
        <span>{message}</span>
      </div>
    </div>
  );
}
