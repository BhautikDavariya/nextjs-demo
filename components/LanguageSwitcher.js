"use client";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Select from "react-select";

const LanguageSwitcher = () => {
  const [selectedOption, setSelectedOption] = useState({
    value: "en",
    label: "English",
  });

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "ar", label: "Arabic" },
    { value: "cs", label: "Czech" },
    { value: "fr", label: "French" },
  ];

  useEffect(() => {
    const getLung = Cookies.get("local");
    if (getLung) {
      const getOption = languageOptions.find((item) => item.value === getLung);
      setSelectedOption(getOption);
    }
  }, []);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    Cookies.set("local", selectedOption.value);
    window.location.reload();
  };

  return (
    <Select
      className="bg-gray-900 text-black border-none"
      options={languageOptions}
      value={selectedOption}
      onChange={handleChange}
      isSearchable={false}
    />
  );
};

export default LanguageSwitcher;
