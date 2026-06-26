import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import { motion as Motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="relative h-11 w-11 overflow-hidden rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 backdrop-blur-md transition hover:scale-105 hover:border-cyan-400"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <Motion.span
        key={theme}
        initial={{ rotate: -45, y: 14, opacity: 0 }}
        animate={{ rotate: 0, y: 0, opacity: 1 }}
        exit={{ rotate: 45, y: -14, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="grid h-full w-full place-items-center"
      >
        {theme === "dark" ? <Sun size={20} className="text-amber-300" /> : <Moon size={20} />}
      </Motion.span>
    </button>
  );
};

export default ThemeToggle;
