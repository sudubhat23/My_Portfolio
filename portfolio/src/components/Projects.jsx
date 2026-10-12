import { useState } from 'react'
import { ExternalLink, Sparkles, Eye, Code2, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './Icons'
import TiltCard from './TiltCard'
import ProjectModal from './ProjectModal'

const allProjects = [
  {
    id: 'ai-flashcard',
    title: "AI-Powered Flashcard App",
    category: "AI & Full Stack",
    badge: "Live & Deployed ⚡",
    description: "Full-stack AI study platform generating intelligent flashcards on any topic with Groq LLaMA 3.3. Features spaced repetition scoring, shuffle mode, per-user state, and deep AI explanations.",
    longDescription: "A comprehensive AI-driven educational tool designed to supercharge learning efficiency. By harnessing the Groq LLaMA 3.3 inference engine, users can generate rich, question-and-answer flashcard decks on complex academic or technical topics in under 2 seconds. Includes spaced repetition algorithms that prioritize challenging concepts, interactive flip animations, and real-time performance analytics.",
    highlights: [
      "Groq LLaMA 3.3 ultra-fast inference API integration",
      "Interactive 3D card flipping with keyboard navigation",
      "Spaced repetition recall scoring algorithm",
      "Offline-first deck persistence & custom question authoring",
    ],
    tags: ["React.js", "Tailwind CSS", "Groq AI", "Vite", "Spaced Repetition", "REST API"],
    live: "https://ai-flashcard-app-green.vercel.app",
    github: "https://github.com/sudubhat23/ai-flashcard-app",
    color: "from-purple-600 via-indigo-600 to-cyan-500",
    glow: "rgba(168, 85, 247, 0.25)"
  },
  {
    id: 'emotion-song',
    title: "Emotion-Based Song Recommender",
    category: "Machine Learning",
    badge: "ML & Audio DSP 🎵",
    description: "Voice-driven web app that analyzes acoustic features from live speech input to classify user emotional state and dynamically recommend matching musical playlists.",
    longDescription: "An end-to-end Machine Learning audio processing platform built with Python and Flask. The system captures voice samples through web microphone inputs, extracts acoustic features such as Mel-Frequency Cepstral Coefficients (MFCCs), Chroma, and Spectral Contrast via Librosa, and passes them to a trained classification model to detect emotional sentiment (happy, calm, energetic, melancholic).",
    highlights: [
      "Acoustic feature extraction using Librosa (MFCC, Zero-Crossing Rate)",
      "Multi-class emotion classification model pipeline",
      "Flask REST API backend with JSON response serialization",
      "Dynamic song recommendation engine based on mood scores",
    ],
    tags: ["Python", "Flask", "Machine Learning", "Librosa", "Audio Processing", "REST API"],
    live: null,
    github: "https://github.com/sudubhat23",
    color: "from-pink-600 via-rose-600 to-purple-600",
    glow: "rgba(244, 63, 94, 0.25)"
  },
  {
    id: 'spring-hr',
    title: "Enterprise HR & Payroll Management",
    category: "Java Full Stack",
    badge: "Enterprise System 💼",
    description: "Robust full-stack enterprise web portal managing corporate employee hierarchies, automated tax/salary calculations, and role-based access control.",
    longDescription: "Engineered following industrial MVC and Clean Architecture standards. Features secure authentication via JWT and Spring Security, transactional persistence with Spring Data JPA and MySQL, and a reactive administrative dashboard built in React.js for managing attendance, payroll disbursements, and department auditing.",
    highlights: [
      "Spring Boot 3 RESTful micro-architecture with JPA/Hibernate ORM",
      "Role-Based Access Control (Admin, Manager, Employee)",
      "Automated compensation calculation & salary slip generation",
      "Comprehensive unit test coverage and Swagger API documentation",
    ],
    tags: ["Java", "Spring Boot", "Spring Security", "Hibernate", "MySQL", "React.js"],
    live: null,
    github: "https://github.com/sudubhat23",
    color: "from-blue-600 via-indigo-600 to-purple-600",
    glow: "rgba(59, 130, 246, 0.25)"
  },
  {
    id: 'cloud-ecommerce',
    title: "High-Throughput E-Commerce REST Engine",
    category: "Java Full Stack",
    badge: "REST Architecture 🛍️",
    description: "Scalable backend service architecture designed for high-concurrency order placement, inventory sync, relational persistence, and transactional integrity.",
    longDescription: "A backend service built with Java and Spring MVC following microservices best practices. Features connection pooling, custom error handling middleware, DTO pattern with Bean Validation, and comprehensive Postman collection testing for rapid integration.",
    highlights: [
      "Optimized MySQL relational schema with indexing & foreign key constraints",
      "Stateless session management and scalable API endpoints",
      "Full CRUD operations for catalog, cart, and order checkout",
      "Postman automated test suites & API contracts",
    ],
    tags: ["Java", "Spring MVC", "Spring Boot", "MySQL", "Maven", "Postman"],
    live: null,
    github: "https://github.com/sudubhat23",
    color: "from-emerald-600 via-teal-600 to-cyan-600",
    glow: "rgba(16, 185, 129, 0.25)"
  },
  {
    id: 'ai-varient-pipeline',
    title: "Enterprise Workflow Automation Pipeline",
    category: "AI & Full Stack",
    badge: "Internship Capstone 🚀",
    description: "Production-grade workflow automation bridging AI model outputs into interactive real-time dashboards developed during internship at AI Varient.",
    longDescription: "Engineered during the Java Full Stack Internship at AI Varient in Bengaluru. Involves consuming complex data streams, transforming asynchronous task batches, and providing intuitive front-end interfaces for tracking data pipelines and system health metrics.",
    highlights: [
      "Integrated front-end with backend APIs for real-time telemetry",
      "Engineered automated data sanity checks & error logging",
      "Delivered in an Agile/Scrum cross-functional sprint environment",
      "Git version control and continuous integration workflows",
    ],
    tags: ["React.js", "Java", "REST APIs", "Agile/Scrum", "Git", "Tailwind CSS"],
    live: null,
    github: "https://github.com/sudubhat23",
    color: "from-violet-600 via-purple-600 to-pink-600",
    glow: "rgba(139, 92, 246, 0.25)"
  }
]

const categories = ["All Projects", "AI & Full Stack", "Java Full Stack", "Machine Learning"]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects")
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = activeCategory === "All Projects"
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] ambient-glow-purple pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Engineered with Precision & Passion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Real-world full-stack architectures, AI-integrated platforms, and machine learning systems built with modern technologies. Hover cards to feel the 3D perspective effect!
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/40 border border-purple-400/40"
                  : "bg-[#0d0f1c] text-gray-400 hover:text-white border border-purple-900/30 hover:border-purple-700/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.id}
              maxTilt={7}
              scale={1.015}
              className="bg-[#0b0d18] border border-purple-900/30 hover:border-purple-500/40 flex flex-col justify-between shadow-xl transition-shadow duration-300"
            >
              <div>
                {/* Top Glowing Gradient Bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${project.color}`} />

                <div className="p-6 sm:p-7 flex flex-col">
                  {/* Card Badge & Category */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-purple-900/40 border border-purple-700/50 text-purple-300">
                      {project.badge}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono bg-purple-950/40 border border-purple-800/30 text-purple-200/90 px-2.5 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-0 mt-auto flex flex-wrap items-center gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-xl transition-all shadow-md shadow-purple-900/30"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#121424] hover:bg-[#1a1c33] border border-purple-700/50 hover:border-purple-400 text-purple-200 text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-xl transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-purple-900/20 hover:bg-purple-900/50 border border-purple-800/40 text-purple-300 hover:text-white text-xs font-medium transition-all"
                  title="View Deep Architecture Details"
                >
                  <Eye className="w-4 h-4" />
                  <span className="hidden sm:inline">Details</span>
                </button>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* View All GitHub Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/sudubhat23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-purple-500/40 hover:border-purple-400 bg-purple-950/20 hover:bg-purple-900/40 text-purple-200 hover:text-white font-medium text-sm transition-all shadow-lg shadow-purple-950/30"
          >
            <Code2 className="w-4 h-4 text-cyan-400" />
            Explore All Repositories on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}