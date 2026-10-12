import { Code, Server, Database, Brain, Sparkles, CheckCircle2 } from 'lucide-react'
import TiltCard from './TiltCard'

const skillGroups = [
  {
    title: "Backend & Java Architecture",
    icon: Server,
    color: "from-blue-600 via-indigo-600 to-purple-600",
    accent: "text-blue-400",
    description: "Enterprise backend development, scalable microservices, and secure API architectures.",
    skills: [
      { name: "Java (Core & Adv)", level: "95%" },
      { name: "Spring Boot", level: "90%" },
      { name: "Spring MVC", level: "88%" },
      { name: "Hibernate / JPA", level: "85%" },
      { name: "JDBC", level: "90%" },
      { name: "RESTful APIs", level: "92%" },
      { name: "Flask (Python)", level: "80%" },
      { name: "Microservices", level: "82%" },
    ]
  },
  {
    title: "Frontend Development",
    icon: Code,
    color: "from-purple-600 via-fuchsia-600 to-pink-600",
    accent: "text-purple-400",
    description: "Responsive, component-driven user interfaces with rich animations and state management.",
    skills: [
      { name: "React.js", level: "92%" },
      { name: "JavaScript (ES6+)", level: "90%" },
      { name: "Tailwind CSS", level: "94%" },
      { name: "HTML5 / Semantic", level: "95%" },
      { name: "CSS3 / Animations", level: "90%" },
      { name: "Bootstrap", level: "85%" },
      { name: "Vite", level: "90%" },
      { name: "Three.js Basics", level: "80%" },
    ]
  },
  {
    title: "Databases & Dev Tools",
    icon: Database,
    color: "from-emerald-600 via-teal-600 to-cyan-600",
    accent: "text-emerald-400",
    description: "Relational persistence, query optimization, version control, and development environments.",
    skills: [
      { name: "MySQL", level: "90%" },
      { name: "SQL Queries & Indexing", level: "88%" },
      { name: "Git & GitHub", level: "92%" },
      { name: "Maven", level: "85%" },
      { name: "Postman API Testing", level: "90%" },
      { name: "IntelliJ IDEA", level: "92%" },
      { name: "VS Code", level: "94%" },
      { name: "Apache Tomcat", level: "82%" },
    ]
  },
  {
    title: "AI, ML & Core Computer Science",
    icon: Brain,
    color: "from-pink-600 via-rose-600 to-amber-600",
    accent: "text-pink-400",
    description: "Intelligent API integrations, machine learning audio pipelines, and algorithmic problem solving.",
    skills: [
      { name: "Groq LLaMA 3.3 API", level: "90%" },
      { name: "Machine Learning (ML)", level: "82%" },
      { name: "Data Structures & Algorithms", level: "85%" },
      { name: "OOP & Design Patterns", level: "92%" },
      { name: "MVC Architecture", level: "90%" },
      { name: "Agile / Scrum", level: "88%" },
      { name: "Audio DSP (Librosa)", level: "80%" },
      { name: "System Design Concepts", level: "80%" },
    ]
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 ambient-glow-cyan pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Skills & <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            A comprehensive overview of my technical stack across full-stack software development, database architecture, and artificial intelligence.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group) => {
            const Icon = group.icon
            return (
              <TiltCard
                key={group.title}
                maxTilt={6}
                scale={1.015}
                className="bg-[#0b0d18] border border-purple-900/30 hover:border-purple-500/40 p-6 sm:p-8 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="p-2.5 rounded-xl bg-purple-900/30 border border-purple-700/40 text-purple-300">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {group.description}
                  </p>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-[#121424] border border-purple-900/30 hover:border-purple-600/40 transition-colors flex items-center justify-between gap-2"
                      >
                        <span className="text-xs font-medium text-gray-200 truncate">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono font-semibold text-purple-300 px-1.5 py-0.5 rounded bg-purple-900/40">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Glowing Bar */}
                <div className={`mt-6 h-1 w-full rounded-full bg-gradient-to-r ${group.color} opacity-60`} />
              </TiltCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}