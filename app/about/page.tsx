"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import CursorGlow from "@/components/cursor-glow"
import AnimatedBadge from "@/components/animated-badge"
import { Users, Target, Lightbulb, Award } from "lucide-react"

export default function About() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-96 flex items-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <AnimatedBadge text="About KushiraX" />
            <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-6">
              Born in Purvanchal, Built for the <span className="text-accent">World</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Transforming ideas into innovative digital solutions through technology, creativity, and expertise.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-primary">
                  Our <span className="text-accent">Story</span>
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  KushiraX Technology emerged with a vision to bridge the gap between traditional business and digital
                  innovation. Starting from Purvanchal, we&apos;ve grown into a multi-faceted agency serving clients
                  across India and beyond.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Our journey is about transforming challenges into opportunities, empowering businesses with
                  cutting-edge technology, and building careers through comprehensive learning programs.
                </p>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-6xl font-bold text-accent mb-2">5+</p>
                    <p className="text-xl font-semibold text-primary">Years of Innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 rounded-xl border-2 border-accent/30 bg-white hover:border-accent transition-colors">
                <Target className="text-accent mb-4" size={32} />
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-foreground/80 leading-relaxed">
                  To deliver innovative, scalable, and transformative digital solutions that empower businesses and
                  individuals. We aim to be the catalyst for growth through technology, creativity, and human expertise.
                </p>
              </div>
              <div className="p-8 rounded-xl border-2 border-accent/30 bg-white hover:border-accent transition-colors">
                <Lightbulb className="text-accent mb-4" size={32} />
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-foreground/80 leading-relaxed">
                  To become a globally recognized technology agency that bridges innovation and execution, creating
                  lasting impact through pioneering solutions and cultivating talented professionals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-primary mb-16">
              What We <span className="text-accent">Do</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Digital Transformation",
                  desc: "Modernizing businesses through cutting-edge technology solutions.",
                },
                {
                  title: "Creative Excellence",
                  desc: "Crafting compelling brands and user experiences that resonate.",
                },
                {
                  title: "Talent Development",
                  desc: "Building careers through comprehensive internship and training programs.",
                },
              ].map((item, idx) => (
                <div key={idx} className="p-8 rounded-xl bg-white border border-border hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">
              Our <span className="text-accent">Core Values</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Award, title: "Excellence", desc: "Striving for the highest quality in everything we do." },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  desc: "Constantly pushing boundaries and exploring new possibilities.",
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  desc: "Working together with clients and teams to achieve success.",
                },
                { icon: Target, title: "Integrity", desc: "Building trust through transparent and honest practices." },
              ].map((value, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-accent/20 flex items-center justify-center">
                    <value.icon className="text-accent" size={32} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-primary-foreground/80 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary">
                Our <span className="text-accent">Impact</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { stat: "50+", label: "Successful Projects" },
                { stat: "25+", label: "Team Members" },
                { stat: "100%", label: "Client Satisfaction" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-xl bg-white border-2 border-accent/20 text-center hover:border-accent transition-colors"
                >
                  <p className="text-5xl font-bold text-accent mb-2">{item.stat}</p>
                  <p className="text-lg font-semibold text-primary">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tagline Section */}
        <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-relaxed">
              Where ideas turn into <span className="text-accent">systems.</span>
              <br />
              Where skills turn into <span className="text-accent">careers.</span>
              <br />
              Where brands turn into <span className="text-accent">identities.</span>
            </h2>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
