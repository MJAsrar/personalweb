"use client"

import { motion } from "framer-motion"
import SectionHeading from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Bot, MessageSquare, Zap } from "lucide-react"

const expertiseAreas = [
  {
    title: "Website Building",
    description: "Creating responsive, modern websites with the latest technologies",
    icon: Code,
  },
  {
    title: "AI Assistants",
    description: "Developing intelligent AI assistants for various business needs",
    icon: Bot,
  },
  {
    title: "WhatsApp Bots",
    description: "Building automated WhatsApp solutions for business communication",
    icon: MessageSquare,
  },
  {
    title: "Business Automation",
    description: "Streamlining business processes with custom automation tools",
    icon: Zap,
  },
]

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <SectionHeading
          title="About Me"
          subtitle="I'm a developer focused on creating powerful digital solutions that help businesses grow and automate their processes."
          centered
        />

        <div className="flex flex-col items-center text-center mb-12 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-medium mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-4">
              I'm a passionate developer with expertise in building modern web applications, AI-powered tools, and
              automation solutions. With a focus on creating practical technology that solves real business problems, I
              help companies leverage the latest tech to improve their operations and customer experience.
            </p>
            <p className="text-muted-foreground">
              My approach combines technical expertise with a deep understanding of business needs, ensuring that every
              solution I build delivers tangible value.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-4"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div key={index} variants={itemVariants} className="w-full sm:w-1/2 md:w-1/4 min-w-[220px] flex-1">
              <Card className="h-full">
                <CardContent className="p-6">
                  <area.icon className="h-10 w-10 text-primary mb-4 mx-auto" />
                  <h4 className="font-medium mb-2">{area.title}</h4>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
