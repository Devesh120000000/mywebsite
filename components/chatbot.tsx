"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, X } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! Welcome to KushiraX Technology. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Predefined bot responses for common queries
  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    // Services queries
    if (lowerMessage.includes("service") || lowerMessage.includes("what do you offer"))
      return "We offer a wide range of services including Web Development, AI & Automation, Cybersecurity, Creative Design, Digital Marketing, and Cloud Solutions. Would you like to know more about any specific service?"

    if (lowerMessage.includes("web development"))
      return "Our Web Development team creates cutting-edge, scalable web solutions using modern technologies. We build responsive, high-performance websites tailored to your business needs."

    if (lowerMessage.includes("ai") || lowerMessage.includes("automation"))
      return "We develop intelligent automation systems powered by AI and machine learning. From chatbots to predictive analytics, we help automate your business processes."

    if (lowerMessage.includes("cybersecurity") || lowerMessage.includes("security"))
      return "Our cybersecurity experts provide comprehensive security solutions including threat assessment, system hardening, and compliance implementation."

    // Company queries
    if (lowerMessage.includes("about") || lowerMessage.includes("who are you"))
      return "KushiraX is a modern tech-driven agency based in Purvanchal, providing transformative digital solutions. We have 50+ successful projects and a 100% client satisfaction rate."

    if (lowerMessage.includes("location") || lowerMessage.includes("office"))
      return "KushiraX has 3 office locations. Born in Purvanchal, we're built for the world! Where are you located?"

    if (lowerMessage.includes("team") || lowerMessage.includes("employee"))
      return "Our talented team consists of 25+ experienced professionals across development, design, and business domains."

    // Pricing & projects queries
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("quote"))
      return "Pricing depends on your specific project requirements. I'd recommend contacting our team for a customized quote. Would you like me to help you get in touch?"

    if (lowerMessage.includes("project") || lowerMessage.includes("portfolio"))
      return "We've successfully delivered 50+ projects across various industries. Check out our portfolio page to see detailed case studies of our work!"

    // Contact queries
    if (lowerMessage.includes("contact") || lowerMessage.includes("reach") || lowerMessage.includes("email"))
      return "You can reach us through our contact page, or visit our office locations. Email us at info@kushirax.com or call our team. What's your inquiry about?"

    if (lowerMessage.includes("career") || lowerMessage.includes("job") || lowerMessage.includes("internship"))
      return "We're always looking for talented individuals! Check out our Careers page for current openings and internship opportunities."

    // General greetings
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey"))
      return "Hello! Thanks for reaching out. How can I assist you today? Feel free to ask about our services, portfolio, or company information."

    if (lowerMessage.includes("thank")) return "You're welcome! Is there anything else I can help you with?"

    if (lowerMessage.includes("bye") || lowerMessage.includes("goodbye"))
      return "Goodbye! Feel free to reach out anytime. Have a great day!"

    // Default response
    return "That's a great question! For more detailed information, please visit our services page or contact our team directly. Is there anything else I can help clarify?"
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsLoading(false)
    }, 500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent/80 text-accent-foreground shadow-lg hover:shadow-xl hover:scale-110 transition-all z-40 flex items-center justify-center group"
          aria-label="Open chat"
        >
          <div className="absolute inset-0 rounded-full bg-accent/20 group-hover:animate-pulse" />
          <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-h-96 rounded-2xl bg-white shadow-2xl flex flex-col z-50 border border-accent/20 animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              </div>
              <div>
                <h3 className="font-semibold">KushiraX Assistant</h3>
                <p className="text-xs text-primary-foreground/70">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-primary-foreground/20 p-1 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-accent text-accent-foreground rounded-br-none"
                      : "bg-white border border-border text-foreground rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-border text-foreground px-4 py-3 rounded-lg rounded-bl-none">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div
                      className="w-2 h-2 rounded-full bg-primary animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-2 h-2 rounded-full bg-primary animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="p-2 bg-accent text-accent-foreground rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
