import { ArrowDown } from "lucide-react";
// import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../components/LanguageProvider";

export const HeroSection = () => {
  const { dir } = useLanguage();
  // direction

  const [t, ] = useTranslation("global");
  return (
    <section
      id="hero"
      dir={dir}
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">{t("home.one")} </span>
            <span className="px-2 opacity-0 animate-fade-in-delay-1">
              {" "}
              {t("home.two")}
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {t("home.three")}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
             {t("home.p")}
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              {t("home.b")}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-8 text-primary" />
      </div>
    </section>
  );
};
