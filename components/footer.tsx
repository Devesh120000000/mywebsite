"use client"

import Link from "next/link"
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="font-bold text-primary text-sm">X</span>
              </div>
              <span className="font-bold text-lg">KushiraX</span>
            </div>
            <p className="text-sm text-primary-foreground/80">Born in Purvanchal, Built for the World</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-accent mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Career", href: "/career" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-accent mb-4">Services</h4>
            <ul className="space-y-2">
              {["Web Development", "AI & Automation", "Cybersecurity", "Digital Marketing"].map((service) => (
                <li key={service}>
                  <span className="text-sm hover:text-accent transition-colors cursor-pointer">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-accent mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Mail size={16} className="text-accent" />
                <a href="mailto:kushirax.tech@gmail.com" className="hover:text-accent transition-colors">
                  kushirax.tech@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail size={16} className="text-accent" />
                <a href="mailto:kushirax.hr@gmail.com" className="hover:text-accent transition-colors">
                  kushirax.hr@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Office Locations */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 pb-8 border-b border-primary-foreground/20">
          {[
            { city: "Noida", role: "Corporate" },
            { city: "Lucknow", role: "Registered" },
            { city: "Kushinagar", role: "Head Office" },
          ].map((office) => (
            <div key={office.city} className="flex items-center gap-2">
              <MapPin size={18} className="text-accent flex-shrink-0" />
              <div className="text-sm">
                <p className="font-semibold text-accent">{office.city}</p>
                <p className="text-primary-foreground/80">{office.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-4 mb-4 md:mb-0">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="p-2 rounded-lg bg-primary-foreground/10 text-accent hover:bg-accent hover:text-primary transition-colors"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
          <p className="text-sm text-primary-foreground/80">© 2025 KushiraX Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
