"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import SectionHeading from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Calendar, MessageSquare, ArrowRight } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind? Let's discuss how I can help bring your ideas to life."
          centered
        />

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6 max-w-lg w-full"
          >
            <div>
              <h3 className="text-xl font-medium mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects,
                creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:junaidasrar04@gmail.com"
                className="flex items-center gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="bg-primary/10 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">junaidasrar04@gmail.com</p>
                </div>
              </a>

              <a
                href="https://wa.me/923124290125"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="bg-primary/10 p-2 rounded-full">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">+923124290125</p>
                </div>
              </a>

              <a
                href="https://calendly.com/junaidasrar04"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="bg-primary/10 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Schedule a Call</p>
                  <p className="text-sm text-muted-foreground">Book a time on my calendar</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
