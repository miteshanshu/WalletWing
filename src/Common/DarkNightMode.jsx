import { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { DarkModeContext } from "./DarkModeProvider";
export default function DarkNightMode() {
  const { isChecked, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <button
      className="ww-icon-button"
      type="button"
      aria-label={isChecked ? "Use light theme" : "Use dark theme"}
      aria-pressed={isChecked}
      onClick={toggleDarkMode}
    >
      {isChecked ? <FiSun /> : <FiMoon />}
    </button>
  );
}
