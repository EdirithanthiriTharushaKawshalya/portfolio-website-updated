import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/ui/project-card"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { getAllProjects } from "@/lib/projects-data"

export const metadata: Metadata = {
  title: "Projects - Tharusha Kawshalya",
  description: "Explore all projects by Tharusha Kawshalya - UI/UX Designer & Frontend Developer",
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>

            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                My <span className="text-primary">Projects</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mx-auto">
                A collection of projects showcasing my skills in UI/UX design, frontend, Backend and Fullstack development, and creative
                problem-solving.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                linkedinLink={project.linkedinLink}
                detailsLink={`/projects/${project.id}`}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
