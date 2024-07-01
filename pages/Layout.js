"use client";
import { createContext, useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cookies from "js-cookie";
import { getRequestConfig } from "@/i18n";

export const themProvider = createContext(null);

// export const getLung = (value) => {
//   const local = Cookies.get("local");
//   const t = getRequestConfig(local);
//   return t.messages().then((res) => {
//     return getText(res);
//   });
// };

const Layout = ({ children }) => {
  const [themeMode, setThemeMode] = useState("");
  const local = Cookies.get("local");
  const t = getRequestConfig(local);
  const [lung, setLung] = useState({});

  useEffect(() => {
    t.messages().then((res) => {
      setLung(res);
    });
  }, []);

  return (
    <>
      <Header setThemeMode={setThemeMode} />
      <themProvider.Provider value={{ themeMode, lung }}>
        {children}
      </themProvider.Provider>
      <Footer />
    </>
  );
};

export default Layout;
