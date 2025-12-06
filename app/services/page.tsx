"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import CursorGlow from "@/components/cursor-glow"
import AnimatedBadge from "@/components/animated-badge"
import { Code, Palette, Brain, Shield, Zap, Briefcase, TrendingUp, Lock } from "lucide-react"

export default function Services() {
  const categories = [
    {
      title: "Business & Growth",
      services: [
        { icon: Briefcase, name: "Digital Marketing", desc: "Data-driven campaigns that drive results" },
        { icon: Palette, name: "Branding", desc: "Comprehensive brand strategy and identity" },
        { icon: TrendingUp, name: "Business Consulting", desc: "Strategic guidance for growth" },
        { icon: Briefcase, name: "BPO Support", desc: "Efficient outsourcing solutions" },
      ],
    },
    {
      title: "Creative & Design",
      services: [
        { icon: Palette, name: "UI/UX Design", desc: "User-centric design solutions" },
        { icon: Palette, name: "Graphics & Branding", desc: "Visual identity and design systems" },
        { icon: Briefcase, name: "Content Creation", desc: "Engaging multimedia content" },
        { icon: Zap, name: "Video Production", desc: "Professional video content" },
      ],
    },
    {
      title: "Development & Technology",
      services: [
        { icon: Code, name: "Web Development", desc: "Modern, scalable web solutions" },
        { icon: Code, name: "App Development", desc: "Native and cross-platform apps" },
        { icon: Shield, name: "Cybersecurity", desc: "Enterprise security solutions" },
        { icon: Brain, name: "AI & Automation", desc: "Intelligent automation systems" },
      ],
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
            <AnimatedBadge text="Our Services" />
            <h1 className="text-5xl md:text-6xl font-bold mt-6">
              Comprehensive Solutions for <span className="text-accent">Every Need</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mt-6 max-w-2xl mx-auto">
              Three core categories of services to transform your business
            </p>
          </div>
        </section>

        {/* Service Categories */}
        {categories.map((category, catIdx) => (
          <section key={catIdx} className={`py-20 ${catIdx % 2 === 0 ? "bg-background" : "bg-primary/5"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-primary mb-4">{category.title}</h2>
                <p className="text-lg text-foreground/70">
                  Excellence across {category.services.length} specialized service areas
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.services.map((service, srvIdx) => (
                  <div
                    key={srvIdx}
                    className="p-8 rounded-xl bg-white border-2 border-border hover:border-accent hover:shadow-lg transition-all group"
                  >
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4 group-hover:from-accent/30 group-hover:to-primary/30 transition-colors">
                      <service.icon className="text-accent" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{service.name}</h3>
                    <p className="text-foreground/70">{service.desc}</p>
                    <button className="mt-4 text-accent font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                      Learn more →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Additional Services */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-primary mb-16">
              Additional <span className="text-accent">Services</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Lock, title: "Cybersecurity Systems", desc: "Advanced threat protection and compliance" },
                { icon: Brain, title: "AI/ML Applications", desc: "Custom AI solutions for your business" },
                { icon: Zap, title: "Cloud Solutions", desc: "Scalable cloud infrastructure" },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-xl bg-white border border-border hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <service.icon className="text-accent" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-foreground/70">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">
              Why Choose <span className="text-accent">KushiraX Services</span>?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Expert Team", desc: "Seasoned professionals with years of industry experience" },
                { title: "Proven Results", desc: "50+ successful projects delivered to satisfied clients" },
                { title: "Custom Solutions", desc: "Tailored approaches for unique business challenges" },
                { title: "Latest Technology", desc: "Cutting-edge tools and frameworks for modern solutions" },
                { title: "Transparent Process", desc: "Clear communication and regular project updates" },
                { title: "Long-term Support", desc: "Ongoing maintenance and optimization included" },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent font-bold text-xl">{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-primary-foreground/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-background to-primary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">Ready to Elevate Your Business?</h2>
            <p className="text-xl text-foreground/80 mb-8">Let&apos;s discuss which services best fit your needs</p>
            <button className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 glow-cyan">
              Book Consultation
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
