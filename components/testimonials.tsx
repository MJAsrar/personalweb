"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SectionHeading from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

// Placeholder testimonials
const testimonials = [
  {
    quote:
      "Junaid created an amazing WhatsApp bot for our clinic that has significantly reduced our administrative workload.",
    author: "Dr. Sarah Johnson",
    role: "Medical Director",
  },
  {
    quote:
      "The custom dashboard Junaid built for our business gives us insights we never had before. It's been a game-changer.",
    author: "Michael Chen",
    role: "CEO, TechStart",
  },
  {
    quote: "Our restaurant's ordering system has never been more efficient. Customers love the WhatsApp integration!",
    author: "Priya Patel",
    role: "Restaurant Owner",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <SectionHeading
          title="What Clients Say"
          subtitle="Feedback from people I've worked with on various projects."
          centered
        />

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-primary/40 mb-4" />
                  <p className="text-lg mb-6 italic">"{testimonials[currentIndex].quote}"</p>
                  <div>
                    <p className="font-medium">{testimonials[currentIndex].author}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6 gap-2">
            <Button variant="outline" size="icon" onClick={prev} className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>

            <Button variant="outline" size="icon" onClick={next} className="rounded-full">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
