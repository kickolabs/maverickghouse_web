import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { AppIcon } from './icons/AppIcon'
import { quickReplies } from '../data/chatbotKnowledge'
import { getChatbotResponse, formatBotMessage } from '../utils/chatbotEngine'

const WHATSAPP_NUMBER = '918925890437'

const welcomeMessage = getChatbotResponse('hello')

function BotAvatar() {
  return (
    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
      <span className="text-white font-poppins font-bold text-xs">M</span>
    </div>
  )
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <BotAvatar />
      <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, role: 'bot', text: welcomeMessage },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing, open])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  const sendMessage = (text) => {
    const trimmed = text.trim()
    if (!trimmed || typing) return

    const userMsg = { id: Date.now(), role: 'user', text: trimmed }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      const reply = getChatbotResponse(trimmed)
      setMessages((prev) => [...prev, { id: Date.now() + 1, role: 'bot', text: reply }])
      setTyping(false)
    }, 600 + Math.random() * 400)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(input)
  }

  const openWhatsApp = () => {
    const history = messages
      .filter((m) => m.role === 'user')
      .map((m) => m.text)
      .slice(-3)
      .join(', ')
    const text = history
      ? `Hi Maverick Ghouse, I was chatting on your website about: ${history}. I need further assistance.`
      : 'Hi Maverick Ghouse, I need assistance with study abroad / immigration services.'
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-4 md:right-6 z-50 w-[calc(100vw-2rem)] max-w-[380px] h-[520px] max-h-[calc(100vh-8rem)] flex flex-col bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-navy text-white px-4 py-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-poppins font-bold text-sm">M</span>
                </div>
                <div>
                  <p className="font-poppins font-semibold text-sm">Maverick Assistant</p>
                  <p className="text-white/60 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    Online — Immigration & Education Expert
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <AppIcon name="x" size="md" className="text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-light">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start items-end gap-2'}`}
                >
                  {msg.role === 'bot' && <BotAvatar />}
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-primary text-white rounded-br-md'
                        : 'bg-white text-gray-700 border border-gray-100 shadow-sm rounded-bl-md'
                    }`}
                    dangerouslySetInnerHTML={
                      msg.role === 'bot' ? { __html: formatBotMessage(msg.text) } : undefined
                    }
                  >
                    {msg.role === 'user' ? msg.text : null}
                  </div>
                </div>
              ))}
              {typing && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies */}
            <div className="px-3 py-2 border-t border-gray-100 bg-white flex-shrink-0">
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    type="button"
                    onClick={() => sendMessage(reply)}
                    disabled={typing}
                    className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium bg-red-50 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-colors disabled:opacity-50"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="px-3 py-3 border-t border-gray-100 bg-white flex-shrink-0">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about study abroad, visa, internships..."
                  className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  disabled={typing}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || typing}
                  className="px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  Send
                </button>
              </div>
              <div className="flex items-center justify-between mt-2 gap-2">
                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="text-xs text-primary font-medium hover:underline flex items-center gap-1"
                >
                  <AppIcon name="message-circle" size="sm" />
                  Talk on WhatsApp
                </button>
                <Link to="/contact" className="text-xs text-gray-500 hover:text-primary transition-colors">
                  Contact page →
                </Link>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        type="button"
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-4 md:right-6 z-50 w-14 h-14 bg-primary text-white rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:bg-primary/90 transition-colors"
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
      >
        {open ? (
          <AppIcon name="x" size="lg" />
        ) : (
          <AppIcon name="message-circle" size="lg" />
        )}
      </motion.button>

      {!open && (
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed bottom-8 right-20 md:right-24 z-50 hidden sm:block bg-navy text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg"
        >
          Ask me anything!
        </motion.span>
      )}
    </>
  )
}
