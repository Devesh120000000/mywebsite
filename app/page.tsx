"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import CursorGlow from "@/components/cursor-glow"
import AnimatedBadge from "@/components/animated-badge"
import ScrollBanner from "@/components/scroll-banner"
import Link from "next/link"
import { ArrowRight, Zap, Shield, Brain, Code, Palette, Briefcase } from "lucide-react"

export default function Home() {
  const services = [
    { icon: Code, title: "Web Development", desc: "Cutting-edge web solutions" },
    { icon: Brain, title: "AI & Automation", desc: "Intelligent automation systems" },
    { icon: Shield, title: "Cybersecurity", desc: "Enterprise security solutions" },
    { icon: Palette, title: "Creative Design", desc: "Stunning visual experiences" },
    { icon: Briefcase, title: "Digital Marketing", desc: "Data-driven campaigns" },
    { icon: Zap, title: "Cloud Solutions", desc: "Scalable infrastructure" },
  ]

  return (
    <>
      <CursorGlow />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-linear-to-br from-background via-background to-primary/5 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <AnimatedBadge text="Welcome to Innovation" />

                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl font-bold text-balance text-primary">
                    Create. Evolve. <span className="text-accent">Rise.</span>
                  </h1>
                  <p className="text-xl text-foreground/80 text-balance leading-relaxed">
                    A modern tech-driven agency delivering transformative digital solutions. We turn ideas into systems,
                    skills into careers, and brands into identities.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/services"
                    className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 glow-cyan inline-flex items-center justify-center gap-2 group"
                  >
                    Explore Services
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all inline-flex items-center justify-center"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl blur-2xl" />
                <div className="relative h-full rounded-2xl border-2 border-accent/20 bg-white/5 backdrop-blur p-8 flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 text-center space-y-4">
                    <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      ✕
                    </div>
                    <p className="text-lg font-semibold text-primary">KushiraX</p>
                    <p className="text-sm text-accent">Technology Innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll Banner */}
        <ScrollBanner
          items={["#DigitalTransformation", "#WebDevelopment", "#CyberSecurity", "#AIAutomation", "#BrandIdentity"]}
          speed={25}
        />

        {/* Services Preview Section */}
        <section className="py-20 bg-gradient-to-b from-background to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <AnimatedBadge text="Our Expertise" />
              <h2 className="text-4xl md:text-5xl font-bold mt-6 text-primary">
                Services We <span className="text-accent">Deliver</span>
              </h2>
              <p className="text-xl text-foreground/70 mt-4 max-w-2xl mx-auto">
                Comprehensive solutions across technology, design, and business transformation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <Link
                  key={idx}
                  href="/services"
                  className="group p-8 rounded-xl bg-white border border-border hover:border-accent shadow-sm hover:shadow-lg hover:shadow-accent/20 transition-all"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4 group-hover:from-accent/30 group-hover:to-primary/30 transition-colors">
                    <service.icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{service.title}</h3>
                  <p className="text-foreground/70 text-sm">{service.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight size={16} />
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all group"
              >
                View All Services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                Why Choose <span className="text-accent">KushiraX</span>?
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { number: "50+", label: "Projects Delivered" },
                { number: "25+", label: "Team Members" },
                { number: "3", label: "Office Locations" },
                { number: "100%", label: "Client Satisfaction" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-xl bg-primary-foreground/10 border border-accent/30 text-center hover:bg-primary-foreground/20 transition-colors group"
                >
                  <p className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </p>
                  <p className="text-primary-foreground/90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your <span className="text-accent">Business?</span>
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how KushiraX can help you achieve your digital transformation goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 glow-cyan group"
            >
              Get Started Today
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
