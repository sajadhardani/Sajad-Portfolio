import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import global_en from "./translation/en/global.json";
import global_fa from "./translation/fa/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

import { LanguageProvider } from "./components/LanguageProvider.jsx";

i18next.init({
  interpolation: { escapeValue: true },
  lng: "fa",
  resources: {
    en: {
      global: global_en,
    },
    fa: {
      global: global_fa,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
       <LanguageProvider>
      <App />
       </LanguageProvider>
    </I18nextProvider>
  </StrictMode>
);
