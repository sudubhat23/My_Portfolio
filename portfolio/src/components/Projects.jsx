const projects = [
  {
    title: "AI-Powered Flashcard App",
    description: "A full-stack AI study app that generates flashcards on any topic using Groq LLaMA 3.3 API. Features spaced repetition scoring, shuffle mode, per-user login, and AI explanations for wrong answers.",
    tags: ["React.js", "Tailwind CSS", "Groq AI", "Vite", "localStorage"],
    live: "https://ai-flashcard-app-green.vercel.app",
    github: "https://github.com/sudubhat23/ai-flashcard-app",
    color: "from-purple-600 to-blue-600",
    badge: "Live Project"
  },
  {
    title: "Emotion-Based Song Recommender",
    description: "A Flask web app that detects user emotions from voice input and recommends songs accordingly using ML classification and audio processing techniques.",
    tags: ["Python", "Flask", "Machine Learning", "Audio Processing", "REST API"],
    live: null,
    github: "https://github.com/sudubhat23",
    color: "from-pink-600 to-purple-600",
    badge: "ML Project"
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 font-medium text-sm uppercase tracking-widest mb-3">What I've built</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Real-world applications built with modern technologies.</p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title}
              className="card-hover bg-[#0f0f1a] border border-purple-900/30 rounded-2xl overflow-hidden flex flex-col">

              {/* Top gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.color}`} />

              <div className="p-6 flex flex-col flex-1">

                {/* Badge + Title */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white font-bold text-xl leading-tight">{project.title}</h3>
                  <span className="ml-3 shrink-0 text-xs bg-purple-900/40 border border-purple-700/40 text-purple-300 px-2.5 py-1 rounded-full">
                    {project.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag}
                      className="text-xs bg-purple-900/20 border border-purple-800/30 text-purple-300 px-2.5 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.live && (
                    <a href={project.live} target="_blank"
                      className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2.5 rounded-xl transition-colors">
                      Live Demo
                    </a>
                  )}
                  <a href={project.github} target="_blank"
                    className="flex-1 text-center border border-purple-700/50 hover:border-purple-500 text-purple-300 text-sm font-medium py-2.5 rounded-xl transition-colors">
                    GitHub
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <a href="https://github.com/sudubhat23" target="_blank"
            className="inline-block border border-purple-700/50 hover:border-purple-500 text-purple-300 font-medium px-8 py-3 rounded-xl transition-colors">
            View all on GitHub →
          </a>
        </div>

      </div>
    </section>
  )
}