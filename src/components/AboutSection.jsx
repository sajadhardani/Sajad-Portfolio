import { Briefcase, Code, User } from "lucide-react";
import { useTranslation } from "react-i18next";

export const AboutSection = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section
      dir={i18n.language === "fa" ? "rtl" : "ltr"}
      id="about"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("about.1")}
          <span className="text-primary">{t("about.11")}</span>
        </h2>

        <div className={i18n.language === "fa" ? "text-right" : "text-left"}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold ">{t("about.2")}</h3>

              <p className="text-muted-foreground">{t("about.3")}</p>
              <p className="text-muted-foreground">{t("about.4")}</p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center ">
                <a href="#contact" className="cosmic-button  w-fit flex items-center mx-auto gap-2">
                  {t("about.5")}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6  ">
              <div className="gradient-border p-6 card-hover ">
                <div className="flex items-start gap-4 ">
                  <div className="p-3 rounded-full bg-primary/10 ">
                    <Code className="h-6 text-primary" />
                  </div>
                  <div
                    className={`text-left ${
                      i18n.language === "fa" ? "text-right" : "text-left"
                    }`}
                  >
                    <h4 className="font-semibold text-lg"> {t("about.6")}</h4>
                    <p className="text-muted-foreground">{t("about.66")}</p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 text-primary" />
                  </div>
                  <div className={`text-left ${
                      i18n.language === "fa" ? "text-right" : "text-left"
                    }`}>
                    <h4 className="font-semibold text-lg"> {t("about.7")}</h4>
                    <p className="text-muted-foreground">{t("about.77")}</p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 text-primary" />
                  </div>
                  <div className={`text-left ${
                      i18n.language === "fa" ? "text-right" : "text-left"
                    }`}>
                    <h4 className="font-semibold text-lg"> {t("about.8")}</h4>
                    <p className="text-muted-foreground">{t("about.88")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
