import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";

import { cn } from "../lib/utills";
import { useTranslation } from "react-i18next";




export const ContactSection = () => {
      const [t, ] = useTranslation("global");

    const phoneNumber = "989165142066";
  const message = "Hello! I'm interested in your services.";
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section dir="ltr"
     id="contact" className="py-24 px-4 relative bg-secondary/30 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("d.11")}
          <span className="text-primary">{t("d.1")}</span>
    

        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("d.2")}
        </p>

        {/* contact */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              {t("d.3")}
            </h3>

            <div className="space-y-6 justify-center ">
              <div className=" flex items-start space-x-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="">
                  <h4 className="font-medium"> {t("d.3")} </h4>
                  <a
                    href="mailto:sajad.hardani188@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    sajad.hardani188@gmail.com
                  </a>
                </div>
              </div>
              <div className=" flex items-start space-x-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="">
                  <h4 className="font-medium"> {t("d.4")} </h4>
                  <a
                    href="tel:+9809165142066"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +98 0916 514 2066
                  </a>
                </div>
              </div>{" "}
              <div className=" flex items-start space-x-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="">
                  <h4 className="font-medium"> {t("d.5")} </h4>
                  <a
                    href="mailto:sajadhardani188@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Iran 
                  </a>
                  
                </div>
                
              </div>
            </div>
            

            <div className="pt-8">
              <h4 className="font-medium mb-4"> {t("d.6")}</h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank">
                  <Linkedin />
                </a>
                <a href="#" target="_blank">
                  <Twitter />
                </a>
                <a href="#" target="_blank">
                  <Twitch />
                </a>
                <a href="#" target="_blank">
                  <Instagram />
                </a>
                
              </div>
              <div>  
 <h4 className="font-medium mt-5 mb-3"> {t("d.7")}</h4>
               {/* watsapp button */}
          <a href={link} target="_blank" rel="noopener noreferrer " className="px-8 justify-center items-center flex  " >
               <button
                target="_blank" rel="noopener noreferrer"
                type="submit"
                className={cn(
                  "cosmic-button flex items-center justify-center w-full  whitespace-nowrap gap-1"
                )}
              > 
              {/* <MessageSquareText className=""/> */}
                {t("d.8")}
                <Send size={18} />
              </button>
              </a>
              </div>
              
            </div>
            
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> {t("e.1")}</h3>
            <form 
            
            className="space-y-6 *
            
            ">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                 {t("e.2")}{" "}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus-outline-hidden focus:ring-2
                                       focus:ring-primary "
                  placeholder={t("e.22")} dir=""
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                {t("e.3")}{" "}
                </label>
                <input
                  type="email"
                  id="send"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus-outline-hidden focus:ring-2
                                       focus:ring-primary "
                  placeholder="sajad.hardani188@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  {t("e.4")}{" "}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus-outline-hidden focus:ring-2 resize-none
                                       focus:ring-primary "
                  placeholder= {t("e.44")}
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                 {t("e.5")}
                <Send size={18} />
              </button>
              
              
            </form>
            
          </div>
         
        </div>
      </div>
    </section>
  );
};
