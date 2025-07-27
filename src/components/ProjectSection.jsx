import {
  ArrowBigRight,
  ArrowRight,
  ExternalLink,
  Github,
  Tag,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: 1,
    title: "real state website",
    description: "you can select a house and buy it",
    image: "/projects/6.png",
    tags: ["React", "tailwind", ],
    demourl: "https://github.com/sajadhardani/real-estate-website",
    githubUrl: "https://github.com/sajadhardani/real-estate-website",
  },
  {
    id: 2,
    title: "shoping website",
    description: "shop site example",
    image: "/projects/3.png",
    tags: ["React", "tailwind", ],
    demourl: "https://github.com/sajadhardani/personal-brand-site",
    githubUrl: "https://github.com/sajadhardani/personal-brand-site",
  },
  {
    id: 3,
    title: "E-commerce",
    description: "full site shop",
    image: "/projects/5.png",
    tags: ["React", "tailwind", ],
    demourl: "https://github.com/sajadhardani/E-commerce",
    githubUrl: "https://github.com/sajadhardani/E-commerce",
  },
];

export const ProjectSection = () => {
    const [t, ] = useTranslation("global");
  
  return (
    <section dir="ltr" id="projects" className="py-21 px-4 relative">
      <div className="container mx-auto max-w-5x1">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">
          {t("")} <span className="text-primary"> {t("p.1")} </span>
        </h2>
        <p className=" text-center text-muted-foreground mb-12 max-w-2x1 mx-auto">
          {t("p.2")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((Tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {Tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {" "}
                  {project.title}{" "}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 ">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demourl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />{" "}
                    </a>
                    <a
                      href={project.demourl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/sajadhardani"
            target="_blank"
          >
            {t("p.11")} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
