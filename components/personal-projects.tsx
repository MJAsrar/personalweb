"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import SectionHeading from "@/components/section-heading"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, HandCoins, Youtube, Bot, Search } from "lucide-react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const personalProjects = [
  {
    title: "Zadqa",
    description: "A modern crowdfunding platform empowering individuals and organizations to raise funds for causes they care about.",
    tags: ["Crowdfunding", "Next.js", "Stripe"],
    icon: HandCoins,
    color: "bg-yellow-500/10 text-yellow-600",
    details: `Zadqa is a secure and user-friendly crowdfunding platform. It allows users to create campaigns, accept donations, and track progress. Features include payment integration, campaign management, and social sharing tools. Built with Next.js and Stripe for seamless payments.`,
  },
  {
    title: "AI YouTube Video Summarizer",
    description: "An AI tool that generates concise summaries of YouTube videos using advanced language models.",
    tags: ["AI", "YouTube API", "Summarization"],
    icon: Youtube,
    color: "bg-red-500/10 text-red-600",
    details: `This project leverages AI to analyze YouTube video transcripts and produce short, accurate summaries. Users can input a video link and receive a summary in seconds. Useful for students, researchers, and content creators who want quick insights from long videos.`,
  },
  {
    title: "AI News Chatbot",
    description: "A chatbot that delivers real-time news updates and answers questions using AI and news APIs.",
    tags: ["AI", "Chatbot", "News API"],
    icon: Bot,
    color: "bg-blue-500/10 text-blue-600",
    details: `The AI News Chatbot provides users with the latest news headlines and can answer questions about current events. It uses natural language processing to understand queries and fetches news from multiple sources. Available on web and messaging platforms.`,
  },
  {
    title: "Lost and Found Website for University",
    description: "A platform for university students to report and find lost items on campus.",
    tags: ["Web App", "Community", "University"],
    icon: Search,
    color: "bg-green-500/10 text-green-600",
    details: `This website helps students and staff report lost items and search for found belongings. Features include item listings, notifications, and secure messaging between users. Designed to foster a helpful campus community and reduce lost property.`,
  },
]

export default function PersonalProjects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="personal-projects" className="py-16 md:py-24">
      <div className="container">
        <SectionHeading
          title="Personal Projects"
          subtitle="A selection of my own projects exploring AI, web development, and community solutions."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-full ${project.color} flex items-center justify-center mb-4`}>
                    <project.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Dialog open={openIndex === index} onOpenChange={(open) => setOpenIndex(open ? index : null)}>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm" className="gap-1">
                        View details
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription>{project.description}</DialogDescription>
                      </DialogHeader>
                      <div className="mt-4 whitespace-pre-line text-sm text-foreground">
                        {project.details}
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>

                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 bg-primary/5 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 