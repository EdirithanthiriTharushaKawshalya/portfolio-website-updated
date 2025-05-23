import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Portfolio
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="#contact">Get in touch</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 space-y-8">
          <div className="flex flex-col items-center text-center space-y-8 pt-50 pb-50">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Hi, I&apos;m <span className="text-primary">Tharusha Kawshalya</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px]">
              A passionate UI/UX designer and frontend developer dedicated to crafting intuitive and engaging digital experiences.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="#projects">
                  View my work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">Contact me</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square rounded-xl overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                <img
                  src="/aboutme/My_Pic.png"
                  alt="Profile"
                  className="w-full h-auto object-cover"
                />
              </div>


              <div className="space-y-4 text-center">
                <p className="text-lg">
                  I am Edirithanthiri Tharusha Kawshalya, a passionate and dedicated Computer Science student at the University of Westminster (IIT).
                  With a strong focus on UI/UX design and frontend development, I enjoy creating visually appealing, user-centered web interfaces that deliver seamless and engaging user experiences.
                  I continuously refine my skills in responsive design, usability, and modern web technologies—enhanced by my background in graphic design—to craft intuitive and innovative digital solutions.
                </p>
                <p className="text-lg">
                  Beyond coding, I have a deep interest in photography, capturing moments that tell compelling stories.
                  My creative background in visual storytelling and graphic design enhances my approach to UI/UX design, allowing me to blend aesthetics with functionality in every project.
                  As I prepare for my internship, I am eager to grow my expertise in design and development, collaborate on impactful projects, and contribute to user-focused innovation in the tech industry.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://github.com/EdirithanthiriTharushaKawshalya" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://www.linkedin.com/in/tharusha-kawshalya-747359356/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="mailto:tharusha.k.dev@gmail.com">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Featured Projects</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Here are some of my recent projects. Each project is unique and solves a specific problem.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="DressMe - AI-Powered Personalized Fashion Designer"
                description="A smart, AI-powered fashion app built with Flutter and Node.js. Users can customize outfits, 
                get skin tone-based suggestions, find similar styles from photos, and locate nearby tailors—all in a personalized, intuitive interface."
                image="/featuredprojects/DressMe.png?height=400&width=600"
                tags={["Flutter (frontend)", "Node.js", "Express.js", "MongoDB"]}
                link="https://www.linkedin.com/posts/dresssmee_dressme-applaunch-fashiondesign-activity-7316305418127884288-Kn3W?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFivWecB4tRbf99e_8ZoPTNj-v9PjZTT1kU"
              />
              <ProjectCard
                title="Real Estate Website - Estate Agent SPA"
                description="A sleek Single Page Application (SPA) for seamless property browsing. Users can filter listings, 
                view details, and manage favorites effortlessly for a smooth real estate experience."
                image="/featuredprojects/Estate Agent SPA.png?height=400&width=600"
                tags={["React.js", "Tailwind CSS"]}
                link="https://github.com/EdirithanthiriTharushaKawshalya/real-estate-website"
              />
              <ProjectCard
                title="Blog Page"
                description="A uniquely designed blog platform built with HTML, CSS, and JavaScript. Users can browse articles, 
                filter content, and enjoy a smooth reading experience with an engaging interface."
                image="/featuredprojects/Blog Page.png?height=400&width=600"
                tags={["HTML", "CSS", "JavaScript"]}
                link="https://github.com/EdirithanthiriTharushaKawshalya/blog-page"
              />
              
            </div>
            <div className="text-center pt-8">
              <Button variant="outline" asChild>
                <Link href="https://www.linkedin.com/in/tharusha-kawshalya-747359356/details/projects/" target="_blank" rel="noopener noreferrer">
                  View more on Linkedin <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Skills & Technologies</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                I work with a variety of technologies and tools to build modern web applications.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SkillBadge name="HTML & CSS" />
              <SkillBadge name="JavaScript" />
              <SkillBadge name="Next.js" />
              <SkillBadge name="Java" />
              <SkillBadge name="PHP" />
              <SkillBadge name="Python" />
              <SkillBadge name="React.js" />
              <SkillBadge name="Tailwind CSS" />
              <SkillBadge name="Figma" />
              <SkillBadge name="Git" />
              <SkillBadge name="Adobe Photoshop" />
              <SkillBadge name="Adobe Lightroom" />
              <SkillBadge name="Adobe Illustrator" />
              <SkillBadge name="Adobe Premiere Pro" />
              <SkillBadge name="Wordpress" />
              <SkillBadge name="AWS" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[600px] mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Get In Touch</h2>
                <p className="text-muted-foreground">
                  Have a project in mind or just want to chat? Feel free to reach out!
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">© {new Date().getFullYear()} EDIRITHANTHIRI THARUSHA KAWSHALYA. All rights reserved.</p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/EdirithanthiriTharushaKawshalya" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/tharusha-kawshalya-747359356/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:tharusha.k.dev@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}