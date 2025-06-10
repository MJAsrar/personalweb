"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import SectionHeading from "@/components/section-heading"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, MessageSquare, Activity, LayoutDashboard } from "lucide-react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const projects = [
  {
    title: "Clinic Bot",
    description:
      "An AI-powered WhatsApp bot for medical clinics to handle appointment scheduling and patient inquiries.",
    tags: ["WhatsApp API", "AI", "Healthcare"],
    icon: MessageSquare,
    color: "bg-blue-500/10 text-blue-500",
    details: `Clinic Bot is a custom AI-powered WhatsApp bot designed for medical clinics. It automates appointment scheduling, answers patient queries, and integrates with clinic management systems. Built using WhatsApp API, Node.js, and OpenAI, it reduces staff workload and improves patient experience.`,
  },
  {
    title: "Restaurant Ordering System",
    description:
      "A digital ordering system for restaurants with WhatsApp integration for seamless customer experience.",
    tags: ["Next.js", "WhatsApp", "Payments"],
    icon: Activity,
    color: "bg-green-500/10 text-green-500",
    details: `This system allows restaurant customers to place orders via WhatsApp or a web interface. It features real-time order tracking, payment integration, and a user-friendly dashboard for restaurant staff. Built with Next.js, WhatsApp API, and Stripe for payments.`,
  },
  {
    title: "AI Assistant",
    description: "A custom AI assistant for businesses to automate customer support and internal processes.",
    tags: ["OpenAI", "Node.js", "Automation"],
    icon: MessageSquare,
    color: "bg-purple-500/10 text-purple-500",
    details: `The AI Assistant is tailored for businesses to automate FAQs, support tickets, and internal workflows. It leverages OpenAI for natural language understanding and integrates with Slack, email, and CRM systems.`,
  },
  {
    title: "Custom Dashboards",
    description: "Interactive business dashboards for real-time monitoring and data visualization.",
    tags: ["React", "Data Viz", "Analytics"],
    icon: LayoutDashboard,
    color: "bg-orange-500/10 text-orange-500",
    details: `Custom Dashboards provide real-time analytics and data visualization for businesses. Built with React and Recharts, they connect to various data sources and offer interactive charts, export options, and user access controls.`,
  },
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work across web development, AI, and automation."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
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
