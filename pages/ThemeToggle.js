"use client";

import { Button } from "antd";
import { useEffect, useState } from "react";

function ThemeToggle(props, { initialValue }) {
  const {setThemeMode} = props;
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
    setThemeMode(theme)
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Button
      type="primary"
      className={
        theme === "dark" ? "bg-slate-100 text-black" : "bg-black text-white"
      }
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      Theme {theme === "dark" ? "light" : "dark"}
    </Button>
  );
}

export default ThemeToggle;
