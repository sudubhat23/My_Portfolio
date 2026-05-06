const skillGroups = [
  {
    title: "Frontend",
    color: "from-purple-600 to-purple-400",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Vite", "JavaScript"]
  },
  {
    title: "Backend",
    color: "from-blue-600 to-blue-400",
    skills: ["Java", "Spring Boot", "Spring MVC", "Hibernate", "JPA", "JDBC", "REST API", "Flask"]
  },
  {
    title: "Database & Tools",
    color: "from-green-600 to-green-400",
    skills: ["MySQL", "SQL", "Git", "GitHub", "Maven", "Postman", "IntelliJ IDEA", "VS Code"]
  },
  {
    title: "AI & Concepts",
    color: "from-pink-600 to-pink-400",
    skills: ["Groq API", "Machine Learning", "OOP", "DSA", "MVC", "Agile/Scrum", "System Design"]
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 font-medium text-sm uppercase tracking-widest mb-3">What I work with</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Technologies I use to build fast, scalable, and modern applications.</p>
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title}
              className="card-hover bg-[#0f0f1a] border border-purple-900/30 rounded-2xl p-6">

              {/* Card title */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${group.color}`} />
                <h3 className="text-white font-semibold text-lg">{group.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill}
                    className="bg-purple-900/20 border border-purple-800/30 text-purple-200 text-sm px-3 py-1.5 rounded-lg hover:bg-purple-800/30 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}