import Link from "next/link"
import { ArrowUpRight, Github, ExternalLink, Linkedin } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  githubLink?: string
  liveLink?: string
  linkedinLink?: string
  detailsLink?: string
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  githubLink,
  liveLink,
  linkedinLink,
  detailsLink,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      <div className="aspect-video overflow-hidden">
        <img
          src={image || "/placeholder.svg?height=400&width=600"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6 flex-1">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="flex flex-wrap gap-2 w-full">
          {githubLink && (
            <Button variant="outline" size="sm" asChild>
              <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Link>
            </Button>
          )}
          {liveLink && (
            <Button variant="outline" size="sm" asChild>
              <Link href={liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Site
              </Link>
            </Button>
          )}
          {linkedinLink && (
            <Button variant="outline" size="sm" asChild>
              <Link href={linkedinLink} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Link>
            </Button>
          )}
          {detailsLink && (
            <Button size="sm" asChild className="ml-auto">
              <Link href={detailsLink}>
                View Details <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
