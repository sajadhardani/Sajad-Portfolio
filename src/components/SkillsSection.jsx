import { useState } from "react";
import { cn } from "../lib/utills";
import { useTranslation } from "react-i18next";



const Skills = [
    //front end
    {name: "React.js", level: 95, category:"frontend"}, 
    {name: "JavaScript", level: 95, category:"frontend"}, 
    {name: "Next.js", level: 95, category:"frontend"}, 
    {name: "TypeScript", level: 80, category:"frontend"}, 
   

// backend
    {name: "node.js", level: 95, category:"backend"}, 
    {name: "Python", level: 95, category:"backend"}, 
    // {name: "HTML/CSS", level: 40, category:"frontend"}, 
    // {name: "HTML/CSS", level: 95, category:"frontend"}, 
    // {name: "HTML/CSS", level: 95, category:"frontend"}, 

// tools
    {name: "Git/Github", level: 95, category:"tools"}, 
    {name: "Tailwind CSS", level: 95, category:"tools"}, 
    {name: "Bootstrap", level: 95, category:"tools"}, 
    {name: "React Query	", level: 95, category:"tools"}, 
    {name: "React Hook Form	", level: 95, category:"tools"}, 
    {name: "Redux", level: 70, category:"tools"}, 

];


const categories = ["all" , "frontend", "backend", "tools"]





export const SkillsSection = () =>{
      const [t, i18n] = useTranslation("global");
    
    const [activeCategory, setActiveCategory] = useState("all");

 const filteredSkills = Skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
    return(
<section id="skills" className="py-24 px-4 relative bg-secendary/30"> 

<div className="container mx-auto max-w-5xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"> 
        {t("skill.11")} <span className="text-primary"> {t("skill.1")} </span>
    </h2>

    <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((categories, key) => (
            <button key={key}
            onClick={() => setActiveCategory(categories )}
              className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === categories ? "bg-primary text-primary-foreground " : " bg-secondary/70 text-foreground hover:bd-secondary "
              )}>
                {categories}
            </button>
        ))}
    </div>

    <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, key) =>(
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
<div className="text-left mb-4">
    <h3 className="font-semibold text-lg"> {skill.name} </h3>
</div>

<div> 
    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
   
    <div className="bg-primary h-2 rounded-b-full origin-left animate-[grow_1.5s_ease-out]"
     style={{width: skill.level + "%"}} />
    </div>

    <div>
        <span className="text-sm text-muted-foreground ">{skill.level}% </span>
    </div>
    </div>
            </div>
            
        ))}
    </div>

</div>
</section>
    )
};