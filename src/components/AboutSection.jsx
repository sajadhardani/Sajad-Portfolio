import { Briefcase, Code, User } from "lucide-react"



export const AboutSection = () => {
    return (  <section id="about" className="py-24 px-4 relative">
        
        <div className="container mx-auto max-w-5xl">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-primary">Me</span>
        </h2>


        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6" > 
                <h3 className="text-2xl font-semibold">
                Passionate Web Developer & Tech Creator
                </h3>

                <p className="text-muted-foreground">
                    "Passionate Junior Developer with hands-on experience in web development, problem-solving, and continuous learning. Eager to grow in a dynamic tech environment and contribute to impactful projects." 
                </p>
                 <p className="text-muted-foreground">
                    with few year of experience i love having team work and get the project done as a team
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contract" className="cosmic-button"> Get in Touch </a>
                </div>

                 </div>

                 <div className="grid grid-cols-1 gap-6">

            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg"> Web Develoment</h4>
                        <p className="text-muted-foreground">
                            and the librarys so if u want hire me
                        </p>
                    </div>
                </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                 <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 text-primary"/>
                    
                    </div>
                     <div className="text-left">
                        <h4 className="font-semibold text-lg"> Web Develoment</h4>
                        <p className="text-muted-foreground">
                            and the librarys so if u want hire me
                        </p>
                    </div>
                </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                 <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 text-primary"/>
                    </div>
                     <div className="text-left">
                        <h4 className="font-semibold text-lg"> Web Develoment</h4>
                        <p className="text-muted-foreground">
                            and the librarys so if u want hire me
                        </p>
                    </div>
                </div>
            </div>
        </div>
                 


        </div >

        

        </div>


        </div>
        </section> )
}