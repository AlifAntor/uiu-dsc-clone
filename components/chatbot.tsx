"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

const qaDatabase = {
  greeting: {
    keywords: ["hello", "hi", "hey", "greetings"],
    responses: [
      "Hello! I'm the UIU Data Science Club assistant. How can I help you today?",
      "Hi there! Welcome to UIU DSC. What would you like to know?",
      "Hey! Happy to help. What can I tell you about our club?",
    ],
  },
  club_info: {
    keywords: ["about", "club", "uiu dsc", "what is", "who are"],
    responses: [
      "UIU Data Science Club (UIU DSC) is a community at United International University dedicated to empowering students with data science skills and fostering innovation. We organize workshops, competitions, and mentoring sessions!",
    ],
  },
  contact: {
    keywords: ["contact", "email", "reach", "call", "get in touch"],
    responses: [
      "You can reach us at club@datascience.uiu.ac.bd or visit our website for more information. Feel free to register and join our community!",
    ],
  },
  events: {
    keywords: ["event", "competition", "kaggle", "workshop", "meeting", "when"],
    responses: [
      "We organize regular events including workshops, Kaggle competitions, mentoring sessions, and networking events. Check our Events page for the latest updates!",
    ],
  },
  team: {
    keywords: ["team", "leader", "who", "moderator", "president", "secretary"],
    responses: [
      "Our club is led by: Moderator: Ms. Khushnur Binte Jahangir, President: Musfique Ahmed, Vice President: MD Mahidul Islam Mahi, General Secretary: Mushfiqur Rahman, and Joint Secretary: Meherun Mehnaj Miti. Check our Team page for more details!",
    ],
  },
  datacamp: {
    keywords: ["datacamp", "courses", "free", "subscription", "learning"],
    responses: [
      "We have a DataCamp Donates partnership that gives members 1-year free access to 350+ data science courses! Register to join and get access.",
    ],
  },
  join: {
    keywords: ["join", "register", "become member", "membership", "how to join"],
    responses: [
      "You can register to join our club on the Register page. We welcome all students interested in data science! Click the Register button to get started.",
    ],
  },
  skills: {
    keywords: ["python", "sql", "machine learning", "data analysis", "learn", "skills"],
    responses: [
      "We mentor members on Python, SQL, Machine Learning, Data Analysis, and more! Join us to develop these in-demand data science skills.",
    ],
  },
  help: {
    keywords: ["help", "support", "problem", "issue", "question"],
    responses: [
      "I'm here to help! I can answer questions about the club, events, team, and data science topics. What would you like to know?",
    ],
  },
}

function getBotResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase()

  for (const [, category] of Object.entries(qaDatabase)) {
    for (const keyword of category.keywords) {
      if (lowerMessage.includes(keyword)) {
        return category.responses[Math.floor(Math.random() * category.responses.length)]
      }
    }
  }

  return "That's a great question! For more specific information, please reach out to us at club@datascience.uiu.ac.bd or visit our website. I'm still learning, but our team can help!"
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello! I'm the UIU Data Science Club assistant. How can I help you today? I can answer questions about our club, events, team, and data science topics.",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    setTimeout(() => {
      const botResponse = getBotResponse(input)
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: botResponse,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 500)
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-[#17A2B8] text-white rounded-full p-4 shadow-lg hover:bg-[#138496] transition z-40 flex items-center justify-center"
        aria-label="Toggle chatbot"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-sm bg-white rounded-2xl shadow-2xl flex flex-col max-h-96 z-40 border border-gray-200">
          {/* Header */}
          <div className="bg-[#17A2B8] text-white px-6 py-4 rounded-t-2xl">
            <h3 className="font-bold text-lg">UIU DSC Assistant</h3>
            <p className="text-sm text-white/80">Ask me anything about the club!</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.role === "user"
                      ? "bg-[#17A2B8] text-white rounded-br-none"
                      : "bg-gray-200 text-gray-900 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#17A2B8]"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-[#17A2B8] text-white rounded-lg p-2 hover:bg-[#138496] transition disabled:opacity-50"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
