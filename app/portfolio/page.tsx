"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import CursorGlow from "@/components/cursor-glow"
import AnimatedBadge from "@/components/animated-badge"
import { ArrowRight } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      category: "Web Development",
      desc: "Complete UI/UX overhaul resulting in 45% increase in conversions",
      client: "Tech Retail Inc",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      category: "AI & Automation",
      desc: "Custom analytics solution with ML-driven insights for enterprise client",
      client: "DataFlow Solutions",
    },
    {
      title: "Brand Identity & Strategy",
      category: "Branding",
      desc: "Full rebrand including logo, color system, and brand guidelines",
      client: "StartUp Ventures",
    },
    {
      title: "Mobile App Development",
      category: "App Development",
      desc: "Cross-platform fitness tracking app with 50K+ downloads",
      client: "FitLife Inc",
    },
    {
      title: "Cybersecurity Audit & Implementation",
      category: "Cybersecurity",
      desc: "Complete security infrastructure review and modernization",
      client: "FinTech Corporation",
    },
    {
      title: "Digital Marketing Campaign",
      category: "Digital Marketing",
      desc: "360° digital campaign generating 200% ROI",
      client: "Consumer Goods Ltd",
    },
  ]

  return (
    <>
      <CursorGlow />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-96 flex items-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <AnimatedBadge text="Our Work" />
            <h1 className="text-5xl md:text-6xl font-bold mt-6">
              Portfolio & <span className="text-accent">Case Studies</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mt-6 max-w-2xl mx-auto">
              Explore our diverse range of successful projects and transformative solutions
            </p>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group p-8 rounded-xl bg-white border-2 border-border hover:border-accent hover:shadow-lg transition-all"
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">{project.desc}</p>
                  <p className="text-sm font-semibold text-accent mb-4">Client: {project.client}</p>
                  <button className="inline-flex items-center gap-2 text-accent font-semibold group-hover:translate-x-1 transition-transform">
                    View Case Study <ArrowRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { stat: "50+", label: "Projects" },
                { stat: "30+", label: "Clients" },
                { stat: "100%", label: "Satisfaction" },
                { stat: "250+", label: "Team Hours" },
              ].map((item, idx) => (
                <div key={idx}>
                  <p className="text-5xl font-bold text-accent mb-2">{item.stat}</p>
                  <p className="text-primary-foreground/90">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-background to-primary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Start Your Next <span className="text-accent">Project</span>
            </h2>
            <p className="text-xl text-foreground/80 mb-8">Let&apos;s create something amazing together</p>
            <button className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 glow-cyan">
              Start Your Project
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
