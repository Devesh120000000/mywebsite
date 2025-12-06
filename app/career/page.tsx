"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import CursorGlow from "@/components/cursor-glow"
import AnimatedBadge from "@/components/animated-badge"
import { Users, Briefcase, BookOpen, Zap } from "lucide-react"

export default function Career() {
  const positions = [
    { title: "Senior Full-Stack Developer", level: "Experienced", type: "Full-time" },
    { title: "UI/UX Designer", level: "Mid-level", type: "Full-time" },
    { title: "AI/ML Engineer", level: "Experienced", type: "Full-time" },
    { title: "Digital Marketing Executive", level: "Entry-level", type: "Full-time" },
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
            <AnimatedBadge text="Join Our Team" />
            <h1 className="text-5xl md:text-6xl font-bold mt-6">
              Build Your Career at <span className="text-accent">KushiraX</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mt-6 max-w-2xl mx-auto">
              Grow with us and shape the future of technology
            </p>
          </div>
        </section>

        {/* Culture */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-primary mb-16">
              Our Company <span className="text-accent">Culture</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Users,
                  title: "Collaborative Environment",
                  desc: "Work with talented professionals who inspire and support each other",
                },
                {
                  icon: BookOpen,
                  title: "Continuous Learning",
                  desc: "Access to training, certifications, and skill development programs",
                },
                {
                  icon: Zap,
                  title: "Innovation First",
                  desc: "Encouraged to think creatively and experiment with new ideas",
                },
                {
                  icon: Briefcase,
                  title: "Work-Life Balance",
                  desc: "Flexible working arrangements and wellness benefits",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-xl bg-white border-2 border-border hover:border-accent transition-colors"
                >
                  <item.icon className="text-accent mb-4" size={32} />
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internship Program */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-primary mb-6">
              Internship <span className="text-accent">Program</span>
            </h2>
            <p className="text-center text-xl text-foreground/80 max-w-2xl mx-auto mb-12">
              Launch your career with our comprehensive internship program designed to provide real-world experience and
              mentorship
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Duration", desc: "2-6 months" },
                { title: "Focus Areas", desc: "Tech, Design, Marketing, Business" },
                { title: "Benefits", desc: "Stipend, Mentorship, Certificate" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-xl bg-white text-center border-2 border-accent/20 hover:border-accent transition-colors"
                >
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-primary mb-12">
              Open <span className="text-accent">Positions</span>
            </h2>
            <div className="grid gap-6">
              {positions.map((pos, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-xl bg-white border-2 border-border hover:border-accent hover:shadow-lg transition-all group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{pos.title}</h3>
                      <div className="flex gap-3">
                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold">
                          {pos.level}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                          {pos.type}
                        </span>
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
              Why Join <span className="text-accent">KushiraX</span>?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Competitive Salary & Benefits",
                "Professional Growth & Training",
                "Collaborative Team Culture",
                "Health & Wellness Programs",
                "Flexible Work Options",
                "Career Development Opportunities",
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg bg-primary-foreground/10 border border-accent/30 hover:bg-primary-foreground/20 transition-colors text-center"
                >
                  <p className="font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 bg-background">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-primary mb-12">
              Apply <span className="text-accent">Now</span>
            </h2>
            <form className="space-y-6 bg-white p-8 rounded-xl border-2 border-border hover:border-accent transition-colors">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-accent focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-accent focus:outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Position Applying For"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-accent focus:outline-none"
              />
              <input
                type="text"
                placeholder="Skills"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-accent focus:outline-none"
              />
              <textarea
                placeholder="Tell us about yourself..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-accent focus:outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all"
              >
                Submit Application
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
