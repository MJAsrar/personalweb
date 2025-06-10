"use client"

import { motion } from "framer-motion"
import SectionHeading from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, MessageSquare, Bot, Zap } from "lucide-react"

const services = [
  {
    title: "Custom Website Design",
    description: "Modern, responsive websites tailored to your brand and business needs.",
    icon: Globe,
  },
  {
    title: "WhatsApp Automations",
    description: "Automated WhatsApp solutions for customer service, sales, and operations.",
    icon: MessageSquare,
  },
  {
    title: "AI Bots for Small Businesses",
    description: "Intelligent AI assistants that help streamline your business processes.",
    icon: Bot,
  },
  {
    title: "Business Process Automation",
    description: "Custom automation tools to increase efficiency and reduce manual work.",
    icon: Zap,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container">
        <SectionHeading
          title="Services"
          subtitle="I offer a range of services to help businesses leverage technology for growth."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-t-4 border-t-primary">
                <CardContent className="pt-6">
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
