"use client";

// import { button } from "antd";
import { useEffect, useState } from "react";

function ThemeToggle(props, { initialValue }) {
  const { setThemeMode } = props;
  const [theme, setTheme] = useState(initialValue);

  useEffect(() => {
    if (theme) {
      document.cookie = `theme=${theme};path=/;`;
      document.querySelector("html").setAttribute("data-theme", theme);
    } else {
      setTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    }
    setThemeMode(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="primary"
      className={`py-2 px-2 rounded-md ${
        theme === "dark" ? "bg-slate-100 text-black" : "bg-black text-white"
      }`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      Theme {theme === "dark" ? "light" : "dark"}
    </button>
  );
}

export default ThemeToggle;
