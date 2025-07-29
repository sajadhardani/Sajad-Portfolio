import { Menu, X } from "lucide-react";
import { cn } from "../lib/utills";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "./LanguageProvider";
// import { changeLanguage } from "i18next";


const navItems = [
  { key: "Home", href: "#hero" },
  { key: "About", href: "#about" },
  { key: "Skills", href: "#skills" },
  { key: "Projects", href: "#projects" },
  { key: "Contacts", href: "#contact" },
];

export const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();

  // translation (tarjome)
  const [t] = useTranslation("global");


  // set is scrolled
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // menu wont scroll
  useEffect(() => {
  if (isMenuOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
}, [isMenuOpen]);


  return (
    <nav
      dir="ltr"
      className={cn(
        "fixed w-full z-40 transition-all duration-300 ",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
       <div className="container flex items-center justify-between">
        {/* لوگو و دکمه تغییر زبان کنار هم */}
        <div className="flex items-center gap-3">
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground">Sajad </span>Portfolio
            </span>
          </a>

          <button
            onClick={toggleLanguage}
            className="w-12 h-10 text-sm font-semibold hover:bg-red-600 px-4 py-2 rounded text-white bg-primary text-center transition-none"
          >
            {language === "fa" ? "EN" : "FA"}
          </button>
        </div>

        {/* منوی دسکتاپ */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </div>

        {/* دکمه همبرگر موبایل */}
       <button
  onClick={() => setIsMenuOpen((prev) => !prev)}
  className="md:hidden p-2 text-foreground z-[10000]"
  aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
  type="button"
>
  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
</button>


    
       {/* منوی موبایل */}
<div
  className={cn(
    "fixed top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-md z-[9999] flex flex-col items-center justify-center md:hidden transition-opacity duration-300",
    isMenuOpen
      ? "opacity-100 pointer-events-auto"
      : "opacity-0 pointer-events-none"
  )}
>
  <div className="flex flex-col space-y-8 text-xl">
    {navItems.map((item, key) => (
      <a
        key={key}
        href={item.href}
        className="text-foreground/80 hover:text-primary transition-colors duration-300"
        onClick={() => setIsMenuOpen(false)}
      >
        {t(`nav.${item.key}`)}
      </a>
    ))}
  </div>
</div>

      </div>
    </nav>
  );
};
