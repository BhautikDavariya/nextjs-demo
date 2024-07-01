import React, { useContext } from "react";
import { themProvider } from "@/pages/Layout";

const About = () => {
  const { themeMode, lung } = useContext(themProvider);
  return (
    <div
      className={`h-[85vh] flex flex-col justify-center align-middle items-center text-3xl ${
        themeMode === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {lung["about"]}
    </div>
  );
};

export default About;
