import React, { createContext, useContext, useState, useEffect } from "react";
import i18next from "i18next";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const dir = language === "fa" ? "rtl" : "ltr";

  useEffect(() => {
    i18next.changeLanguage(language);
    document.documentElement.dir = dir;  // تغییر جهت کل صفحه
  }, [language, dir]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fa" ? "en" : "fa"));
  };

  return (
    <LanguageContext.Provider value={{ language, dir, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
