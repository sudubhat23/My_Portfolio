const experiences = [
  {
    role: "Java Full Stack Intern",
    company: "AI Varient",
    location: "Bengaluru, Karnataka",
    period: "02/2026 – Present",
    type: "Internship",
    color: "from-purple-600 to-blue-600",
    points: [
      "Developing production-grade full-stack applications using Java, Spring Boot, Spring MVC, and React.js",
      "Designing and consuming RESTful APIs using JSON; integrating frontend and backend systems end-to-end",
      "Writing unit tests, performing debugging, and optimizing application performance",
      "Collaborating in Agile/Scrum environment using Git and GitHub for version control and CI/CD workflows",
    ]
  },
  {
    role: "Java Full Stack Training",
    company: "ExcelR Solutions",
    location: "Bengaluru, Karnataka",
    period: "02/2026 – Present",
    type: "Training",
    color: "from-blue-600 to-cyan-500",
    points: [
      "Intensive training in Core Java, Spring Boot, Spring MVC, Hibernate, JPA, JDBC, React.js, and MySQL",
      "Built and deployed CRUD web applications and RESTful APIs using Maven and Apache Tomcat",
      "Practiced Git/GitHub version control and Agile methodology across all real-world capstone projects",
    ]
  },
  {
    role: "AI/ML Intern",
    company: "Cojective",
    location: "Mysuru, Karnataka",
    period: "05/2025 – 06/2025",
    type: "Internship",
    color: "from-pink-600 to-purple-600",
    points: [
      "Developed data processing pipelines for AI/ML workflows, improving data handling efficiency",
      "Debugged and optimized Python scripts to improve model accuracy in an Agile environment",
    ]
  },
]

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "The National Institute of Engineering, Mysuru",
    period: "2023 – 2025",
    cgpa: "8.6",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "PES College of Science Arts & Commerce, Mandya",
    period: "2020 – 2023",
    cgpa: "8.08",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 font-medium text-sm uppercase tracking-widest mb-3">My journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience & Education</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Where I've worked and what I've studied.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Experience */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-purple-500 rounded-full"></span>
              Work Experience
            </h3>

            <div className="relative border-l border-purple-900/50 pl-6 flex flex-col gap-8">
              {experiences.map((exp) => (
                <div key={exp.role} className="relative">
                  {/* Timeline dot */}
                  <div className={`absolute -left-[29px] w-3.5 h-3.5 rounded-full bg-gradient-to-r ${exp.color} ring-2 ring-[#0a0a0f]`} />

                  <div className="card-hover bg-[#0f0f1a] border border-purple-900/30 rounded-2xl p-5">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="text-white font-semibold text-base">{exp.role}</h4>
                      <span className="text-xs bg-purple-900/40 border border-purple-700/40 text-purple-300 px-2 py-0.5 rounded-full shrink-0 ml-2">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-purple-400 text-sm font-medium mb-0.5">{exp.company}</p>
                    <p className="text-gray-500 text-xs mb-4">{exp.location} · {exp.period}</p>
                    <ul className="flex flex-col gap-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-2 text-gray-400 text-sm leading-relaxed">
                          <span className="text-purple-500 mt-1.5 shrink-0">▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-purple-500 rounded-full"></span>
              Education
            </h3>

            <div className="relative border-l border-purple-900/50 pl-6 flex flex-col gap-8">
              {education.map((edu) => (
                <div key={edu.degree} className="relative">
                  <div className="absolute -left-[29px] w-3.5 h-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 ring-2 ring-[#0a0a0f]" />

                  <div className="card-hover bg-[#0f0f1a] border border-purple-900/30 rounded-2xl p-5">
                    <h4 className="text-white font-semibold text-base mb-1">{edu.degree}</h4>
                    <p className="text-purple-400 text-sm font-medium mb-0.5">{edu.school}</p>
                    <p className="text-gray-500 text-xs mb-3">{edu.period}</p>
                    <div className="inline-flex items-center gap-2 bg-green-900/20 border border-green-700/30 text-green-400 text-xs px-3 py-1 rounded-full">
                      CGPA: {edu.cgpa}
                    </div>
                  </div>
                </div>
              ))}

              {/* Certifications */}
              <div className="relative">
                <div className="absolute -left-[29px] w-3.5 h-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 ring-2 ring-[#0a0a0f]" />
                <div className="card-hover bg-[#0f0f1a] border border-purple-900/30 rounded-2xl p-5">
                  <h4 className="text-white font-semibold text-base mb-3">Certifications</h4>
                  {[
                    "NPTEL – Demystifying Networks",
                    "Coursera – Problem Solving with Creative and Critical Thinking",
                    "ExcelR – Java Full Stack Development",
                  ].map((cert) => (
                    <div key={cert} className="flex gap-2 text-gray-400 text-sm mb-2">
                      <span className="text-amber-400 shrink-0">✦</span>
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}