"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import CursorGlow from "@/components/cursor-glow"
import AnimatedBadge from "@/components/animated-badge"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-96 flex items-center bg-linear
        -to-br from-primary to-primary/80 text-primary-foreground overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <AnimatedBadge text="Get in Touch" />
            <h1 className="text-5xl md:text-6xl font-bold mt-6">
              Let&apos;s Talk About Your <span className="text-accent">Project</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mt-6 max-w-2xl mx-auto">
              Reach out to us for inquiries, consultations, or partnership opportunities
            </p>
          </div>
        </section>

        {/* Contact Info & Forms */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Mail,
                  title: "Business Inquiries",
                  contact: "kushirax.tech@gmail.com",
                  desc: "For project proposals and services",
                },
                {
                  icon: Mail,
                  title: "HR & Recruitment",
                  contact: "kushirax.hr@gmail.com",
                  desc: "For career and internship opportunities",
                },
                {
                  icon: Phone,
                  title: "Support",
                  contact: "+91 XXXXXXXXXX",
                  desc: "Technical support and assistance",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-xl bg-white border-2 border-border hover:border-accent transition-colors text-center"
                >
                  <item.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-accent font-semibold mb-2">{item.contact}</p>
                  <p className="text-foreground/70 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Send us a Message</h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-accent focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-accent focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-accent focus:outline-none"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-accent focus:outline-none resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Locations */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Office Locations</h2>
                <div className="space-y-6">
                  {[
                    {
                      city: "Kushinagar",
                      role: "Head Office",
                      address: "Kushinagar, Uttar Pradesh",
                    },
                    {
                      city: "Noida",
                      role: "Corporate Office",
                      address: "Noida, Uttar Pradesh",
                    },
                    {
                      city: "Lucknow",
                      role: "Registered Office",
                      address: "Lucknow, Uttar Pradesh",
                    },
                  ].map((office, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg bg-white border-2 border-border hover:border-accent transition-colors"
                    >
                      <div className="flex gap-4">
                        <MapPin className="text-accent shrink-0" size={24} />
                        <div>
                          <h3 className="text-lg font-bold text-primary">{office.city}</h3>
                          <p className="text-accent font-semibold text-sm mb-1">{office.role}</p>
                          <p className="text-foreground/70 text-sm">{office.address}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Inquiry Form */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-primary mb-12">
              Business <span className="text-accent">Inquiry Form</span>
            </h2>
            <form className="space-y-4 bg-white p-8 rounded-xl border-2 border-border">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Contact Person"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Business Email"
                className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:outline-none"
              />
              <input
                type="text"
                placeholder="Service Required"
                className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:outline-none"
              />
              <textarea
                placeholder="Tell us about your project or requirements..."
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
