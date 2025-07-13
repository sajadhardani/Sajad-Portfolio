import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";

import { cn } from "../lib/utills";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In
          <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          here i explain about how to get in touch with me for making new
          projects opportunities.
        </p>

        {/* contact */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center ">
              <div className=" flex items-start space-x-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="">
                  <h4 className="font-medium"> Email </h4>
                  <a
                    href="mailto:sajadhardani@gmail.com"
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
                  <h4 className="font-medium"> Phone </h4>
                  <a
                    href="tel:+980916000000"
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
                  <h4 className="font-medium"> Location </h4>
                  <a
                    href="mailto:sajadhardani@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    iran ahwaz
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
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
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send Massage</h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name{" "}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus-outline-hidden focus:ring-2
                                       focus:ring-primary "
                  placeholder="Sajad..."
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email{" "}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus-outline-hidden focus:ring-2
                                       focus:ring-primary "
                  placeholder="sajad.hardani@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message{" "}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus-outline-hidden focus:ring-2 resize-none
                                       focus:ring-primary "
                  placeholder="hello i like to talk about"
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Submit
                <Send size={1} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
