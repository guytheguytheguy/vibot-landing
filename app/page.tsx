'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (!res.ok && res.status !== 200) {
        setError(data.error || 'Something went wrong. Please try again.')
        return
      }

      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 5000)
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const faqs = [
    {
      question: 'What is Vibe Coding?',
      answer: 'Vibe Coding is a revolutionary approach to software development where you express your intent in natural language, and AI translates it into production-ready code. It\'s about thinking in outcomes, not syntax - letting you code at the speed of thought.'
    },
    {
      question: 'Do I need programming experience?',
      answer: 'Not at all! Vibe Coding is designed for everyone - from complete beginners to experienced developers. If you can describe what you want in plain English, you can build software. However, understanding programming concepts will help you give better prompts and debug issues.'
    },
    {
      question: 'What AI tools does it support?',
      answer: 'We teach you to work with Claude (Anthropic), ChatGPT (OpenAI), GitHub Copilot, Cursor, v0, Bolt.new, and other cutting-edge AI coding assistants. You\'ll learn which tool is best for each task and how to combine them for maximum productivity.'
    },
    {
      question: 'Is it free?',
      answer: 'We offer free foundational content and tutorials to get you started. Premium courses, live mentorship, and our community platform require a subscription. Many AI tools we teach have free tiers, so you can start learning without any investment.'
    },
    {
      question: 'How is this different from traditional coding bootcamps?',
      answer: 'Traditional bootcamps teach you to write code line-by-line. We teach you to think in systems, communicate with AI, and ship products 10x faster. You\'ll learn prompt engineering, AI tool orchestration, and modern development workflows - skills that are actually in demand right now.'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Former Teacher → Full-Stack Developer',
      quote: 'I went from zero coding knowledge to shipping my first SaaS product in 3 months. Vibe Coding taught me to think like a developer without getting stuck in syntax hell.',
      avatar: '👩‍🏫'
    },
    {
      name: 'Marcus Johnson',
      role: 'Startup Founder',
      quote: 'I used to spend $10k/month on developers. Now I build MVPs myself in a weekend using Claude and the frameworks I learned at Vibe Coding Academy. Game changer.',
      avatar: '🚀'
    },
    {
      name: 'Priya Patel',
      role: 'Product Manager → AI Engineer',
      quote: 'The "vibe" approach clicked instantly. Instead of memorizing syntax, I learned to communicate my vision to AI. Now I prototype features faster than my engineering team.',
      avatar: '💡'
    },
    {
      name: 'Alex Rodriguez',
      role: 'Traditional Developer',
      quote: 'I\'ve been coding for 15 years. Vibe Coding didn\'t replace my skills - it 10x\'d them. I ship features in hours that used to take weeks. The future is here.',
      avatar: '⚡'
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-950 to-slate-950"></div>
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              The Future of Software Development
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Code at the Speed of Thought
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Vibe Coding Academy teaches you to build software with AI assistants - no computer science degree required. Express your vision, let AI handle the syntax.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#waitlist"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
              >
                Join the Waitlist
              </a>
              <a
                href="#demo"
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl font-semibold text-lg transition-all duration-200 border border-slate-700"
              >
                See It In Action
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div id="demo" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
          See It In Action
        </h2>
        <p className="text-center text-slate-400 text-lg mb-16 max-w-2xl mx-auto">
          Watch how Vibe Coding transforms natural language into production code
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Traditional Coding */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-2xl">
                😓
              </div>
              <div>
                <h3 className="text-xl font-semibold">Traditional Coding</h3>
                <p className="text-slate-400 text-sm">Hours of syntax wrestling</p>
              </div>
            </div>
            <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 font-mono text-sm overflow-x-auto">
              <div className="text-slate-500 mb-2">// Create user authentication system</div>
              <div className="text-purple-400">import</div> <span className="text-white">{'{'} useAuth {'}'}</span> <div className="text-purple-400">from</div> <span className="text-green-400">'./hooks/useAuth'</span><br/>
              <div className="text-purple-400">import</div> <span className="text-white">{'{'} useState {'}'}</span> <div className="text-purple-400">from</div> <span className="text-green-400">'react'</span><br/>
              <br/>
              <div className="text-purple-400">const</div> <span className="text-yellow-400">LoginForm</span> = <span className="text-white">{'() => {'}</span><br/>
              <span className="text-slate-500">  // 50+ lines of boilerplate...</span><br/>
              <span className="text-slate-500">  // State management</span><br/>
              <span className="text-slate-500">  // Form validation</span><br/>
              <span className="text-slate-500">  // Error handling</span><br/>
              <span className="text-slate-500">  // API calls</span><br/>
              <span className="text-white">{'}'}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>3-4 hours of coding</span>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex justify-center">
            <div className="text-6xl text-purple-500 animate-pulse">→</div>
          </div>

          {/* Vibe Coding */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center text-2xl">
                ✨
              </div>
              <div>
                <h3 className="text-xl font-semibold">Vibe Coding</h3>
                <p className="text-purple-300 text-sm">Express intent, ship code</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-slate-900 rounded-xl p-6 border border-purple-500/30">
              <div className="text-purple-300 font-medium mb-3">💬 Your Prompt:</div>
              <div className="text-white text-lg leading-relaxed mb-4">
                "Create a login form with email and password fields. Add form validation, show loading states, handle errors gracefully, and redirect to /dashboard on success."
              </div>
              <div className="flex items-center gap-2 text-purple-300 text-sm">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>AI generating complete, production-ready code...</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-purple-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="font-semibold">2 minutes to working feature</span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
            <span className="text-2xl">⚡</span>
            <span className="font-semibold">90+ hours saved per project</span>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
          What You'll Master
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '🤖',
              title: 'AI-Assisted Development',
              description: 'Master Claude, ChatGPT, GitHub Copilot, and Cursor. Learn which AI to use for each task and how to combine them for maximum productivity.'
            },
            {
              icon: '💬',
              title: 'Prompt Engineering',
              description: 'Craft precise prompts that generate production-ready code. Turn vague ideas into detailed specifications AI can execute flawlessly.'
            },
            {
              icon: '⚡',
              title: 'Rapid Prototyping',
              description: 'Build and ship MVPs in days, not months. Validate ideas fast, iterate quickly, and beat competitors to market.'
            },
            {
              icon: '🏗️',
              title: 'Modern Tech Stacks',
              description: 'React, Next.js, TypeScript, Tailwind, Supabase, Vercel - learn the tools that AI assistants work best with.'
            },
            {
              icon: '🔍',
              title: 'Debugging with AI',
              description: 'Let AI find and fix bugs faster than traditional debugging. Learn to interpret error messages and guide AI to solutions.'
            },
            {
              icon: '🚀',
              title: 'Deployment & Scaling',
              description: 'Ship to production with confidence. Master CI/CD, monitoring, and scaling with AI-assisted DevOps.'
            },
          ].map((feature, i) => (
            <div key={i} className="group p-6 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-b from-slate-950 to-purple-950/20 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-center text-slate-400 text-lg mb-16">
            Real results from the Vibe Coding community
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900/70 to-slate-800/50 border border-slate-800 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-lg text-white">{testimonial.name}</div>
                    <div className="text-purple-300 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed text-lg italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-slate-400 text-sm">
            <p>* Community member testimonials - results may vary</p>
          </div>
        </div>
      </div>

      {/* Email Signup Section */}
      <div id="waitlist" className="max-w-4xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-purple-900/30 to-slate-900 rounded-3xl p-12 border border-purple-500/30 text-center">
          <h2 className="text-4xl font-bold mb-4">Join the Waitlist</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Be the first to know when we launch new courses, live workshops, and community events. Get exclusive early-bird pricing.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="flex-1 px-6 py-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white placeholder-slate-500 transition-all"
              />
              <button
                type="submit"
                disabled={submitting}
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 disabled:cursor-not-allowed rounded-xl font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 whitespace-nowrap"
              >
                {submitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </div>
          </form>

          {submitted && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-300">
              You're on the list! We'll notify you when we launch.
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-300">
              {error}
            </div>
          )}

          <div className="flex items-center justify-center gap-2 text-purple-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="font-semibold">2,000+ vibe coders already creating</span>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-slate-400 text-lg mb-12">
          Everything you need to know about Vibe Coding
        </p>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-900/70 transition-all"
              >
                <span className="font-semibold text-lg text-white">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-purple-400 transition-transform flex-shrink-0 ${
                    expandedFaq === i ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {expandedFaq === i && (
                <div className="px-6 pb-5 text-slate-300 leading-relaxed border-t border-slate-800 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gradient-to-b from-purple-950/20 to-slate-950 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Your Learning Path
          </h2>
          <div className="space-y-12">
            {[
              {
                step: '1',
                title: 'Learn the Fundamentals',
                description: 'Start with AI basics, prompt engineering, and modern development concepts. No prior coding experience needed.'
              },
              {
                step: '2',
                title: 'Build Real Projects',
                description: 'Create actual applications with AI assistance - from simple tools to full-stack SaaS products. Learn by shipping.'
              },
              {
                step: '3',
                title: 'Master Advanced Patterns',
                description: 'Dive deep into architecture, optimization, and advanced AI orchestration techniques used by top developers.'
              },
              {
                step: '4',
                title: 'Ship & Scale',
                description: 'Deploy your projects, gather users, and scale with confidence. Join our community of builders shipping products.'
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-xl font-bold shadow-lg shadow-purple-500/50">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-4">Tools You'll Master</h2>
        <p className="text-center text-slate-400 mb-12">The modern stack for AI-assisted development</p>
        <div className="flex flex-wrap justify-center gap-4">
          {['Claude AI', 'ChatGPT', 'GitHub Copilot', 'Cursor', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel', 'v0', 'Bolt.new'].map((tech) => (
            <div key={tech} className="px-6 py-3 rounded-lg bg-slate-900/50 border border-slate-800 text-slate-300 font-medium hover:border-purple-500/50 transition-all">
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="border-t border-slate-800 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Code at the Speed of Thought?</h2>
          <p className="text-slate-400 text-lg mb-8">
            Join thousands of builders who are shipping faster with AI-assisted development.
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
          >
            Get Early Access
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-slate-500 text-sm">
        <p>© 2026 Vibe Coding Academy. Empowering the next generation of AI-native developers.</p>
      </footer>
    </main>
  )
}
