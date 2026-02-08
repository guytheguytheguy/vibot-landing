export default function Home() {
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
              Voice-first AI Memory Palace
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Think. Capture. Connect.
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Vibot is your AI thinking partner that remembers everything you tell it, organizes your thoughts spatially, and surprises you with insights you didn't expect.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://github.com/guytheguytheguy/vibot-mobile"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 flex items-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                View on GitHub
              </a>
              <div className="text-slate-400 text-sm">
                Coming soon to iOS & Android
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '🎤',
              title: 'Voice-First Capture',
              description: 'Tap and speak. Your thoughts are automatically transcribed and organized with AI-extracted tags.'
            },
            {
              icon: '🤖',
              title: 'AI Thinking Partner',
              description: 'Chat with Claude, an AI that remembers your past thoughts and makes surprising connections.'
            },
            {
              icon: '🏛️',
              title: 'Memory Palace',
              description: 'Organize memories into spatial "rooms" - Work, Ideas, Learning - however you think.'
            },
            {
              icon: '✨',
              title: 'Surprise Engine',
              description: 'Get delightful insights: "On This Day" memories, hidden connections, forgotten gems.'
            },
            {
              icon: '🔍',
              title: 'Full-Text Search',
              description: 'Find anything instantly with powerful search across all memories, tags, and conversations.'
            },
            {
              icon: '🔗',
              title: 'Auto-Connections',
              description: 'AI automatically finds links between ideas you didn\'t realize were related.'
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

      {/* How It Works */}
      <div className="bg-gradient-to-b from-slate-950 to-purple-950/20 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            How It Works
          </h2>
          <div className="space-y-12">
            {[
              {
                step: '1',
                title: 'Speak Your Mind',
                description: 'Tap the mic button and talk about anything - an idea, a thought, a dream. No typing needed.'
              },
              {
                step: '2',
                title: 'AI Organizes Everything',
                description: 'Your voice is transcribed, tagged, and organized into your Memory Palace rooms automatically.'
              },
              {
                step: '3',
                title: 'Discover Connections',
                description: 'The Surprise Engine analyzes your memories and surfaces unexpected insights and patterns.'
              },
              {
                step: '4',
                title: 'Think Deeper',
                description: 'Chat with the AI thinking partner that remembers everything you\'ve told it and helps you explore ideas.'
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-xl font-bold shadow-lg shadow-lg shadow-purple-500/50">
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
        <h2 className="text-3xl font-bold text-center mb-12">Built With Modern Tech</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['React Native', 'Expo', 'TypeScript', 'Claude AI', 'OpenAI Whisper', 'Supabase'].map((tech) => (
            <div key={tech} className="px-6 py-3 rounded-lg bg-slate-900/50 border border-slate-800 text-slate-300 font-medium">
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="border-t border-slate-800 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Memory Palace?</h2>
          <p className="text-slate-400 text-lg mb-8">
            Open source and available on GitHub. Follow development or contribute.
          </p>
          <a
            href="https://github.com/guytheguytheguy/vibot-mobile"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
            Star on GitHub
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-slate-500 text-sm">
        <p>© 2026 Vibot. Built with ❤️ by Guy.</p>
      </footer>
    </main>
  )
}
