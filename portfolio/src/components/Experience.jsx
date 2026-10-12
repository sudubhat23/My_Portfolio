import { Briefcase, GraduationCap, Award, Calendar, MapPin, Sparkles } from 'lucide-react'
import TiltCard from './TiltCard'

const experiences = [
  {
    role: "Java Full Stack Intern",
    company: "AI Varient",
    location: "Bengaluru, Karnataka",
    period: "02/2026 – Present",
    type: "Current Internship",
    color: "from-purple-600 via-indigo-600 to-cyan-500",
    badgeColor: "bg-purple-900/40 text-purple-300 border-purple-500/40",
    points: [
      "Architecting enterprise-grade full-stack features utilizing Java, Spring Boot, Spring MVC, and React.js.",
      "Designing, consuming, and stress-testing RESTful APIs with JSON serialization; bridging front-end telemetry with backend microservices.",
      "Writing rigorous unit tests, conducting systematic debugging, and optimizing latency across database query pipelines.",
      "Collaborating actively in an Agile/Scrum setting with version control, pull requests, and automated build pipelines.",
    ]
  },
  {
    role: "Java Full Stack Training Specialist",
    company: "ExcelR Solutions",
    location: "Bengaluru, Karnataka",
    period: "02/2026 – Present",
    type: "Advanced Training",
    color: "from-blue-600 via-cyan-600 to-emerald-500",
    badgeColor: "bg-blue-900/40 text-blue-300 border-blue-500/40",
    points: [
      "Underwent rigorous enterprise training in Core Java, Spring Boot, Spring MVC, Hibernate, JPA, JDBC, React.js, and MySQL.",
      "Engineered end-to-end CRUD web applications and RESTful microservices deployed on Apache Tomcat and Maven environments.",
      "Implemented enterprise authentication, transaction management, and automated database schema migrations.",
    ]
  },
  {
    role: "AI / ML Engineering Intern",
    company: "Cojective",
    location: "Mysuru, Karnataka",
    period: "05/2025 – 06/2025",
    type: "Internship",
    color: "from-pink-600 via-rose-600 to-purple-600",
    badgeColor: "bg-pink-900/40 text-pink-300 border-pink-500/40",
    points: [
      "Developed high-throughput data processing pipelines for machine learning workflows, optimizing data transformation speed.",
      "Refactored and fine-tuned Python model inference scripts, improving overall prediction accuracy and pipeline reliability.",
    ]
  },
]

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "The National Institute of Engineering, Mysuru",
    period: "2023 – 2025",
    cgpa: "8.6",
    badge: "First Class with Distinction",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "PES College of Science Arts & Commerce, Mandya",
    period: "2020 – 2023",
    cgpa: "8.08",
    badge: "Distinction Graduate",
  },
]

const certifications = [
  {
    name: "Java Full Stack Development",
    issuer: "ExcelR Solutions",
    type: "Professional Certification",
  },
  {
    name: "Demystifying Networks",
    issuer: "NPTEL",
    type: "Technical Specialization",
  },
  {
    name: "Problem Solving with Creative & Critical Thinking",
    issuer: "Coursera",
    type: "Analytical Mastery",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-5 w-80 h-80 ambient-glow-purple pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            My professional career path, software engineering internships, academic background, and industry credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Work Experience Column (7 cols) */}
          <div className="lg:col-span-7">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="p-2 rounded-xl bg-purple-900/30 border border-purple-700/40 text-cyan-400">
                <Briefcase className="w-5 h-5" />
              </span>
              <span>Work & Professional Experience</span>
            </h3>

            <div className="relative border-l-2 border-purple-900/40 pl-6 sm:pl-8 flex flex-col gap-8">
              {experiences.map((exp) => (
                <div key={exp.role} className="relative">
                  {/* Glowing Timeline Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-[#06070d] shadow-md shadow-purple-500/50" />

                  <TiltCard maxTilt={5} scale={1.01} className="bg-[#0b0d18] border border-purple-900/30 hover:border-purple-500/40 p-6 shadow-xl">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h4 className="text-lg font-bold text-white">
                        {exp.role}
                      </h4>
                      <span className={`text-xs font-mono font-medium px-2.5 py-0.5 rounded-full border ${exp.badgeColor}`}>
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-purple-300 font-semibold text-sm mb-2">
                      {exp.company}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-4 font-mono">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        {exp.period}
                      </span>
                    </div>

                    <ul className="flex flex-col gap-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
                          <span className="text-cyan-400 mt-1 shrink-0">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </TiltCard>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Education */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="p-2 rounded-xl bg-purple-900/30 border border-purple-700/40 text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </span>
                <span>Education</span>
              </h3>

              <div className="relative border-l-2 border-purple-900/40 pl-6 sm:pl-8 flex flex-col gap-6">
                {education.map((edu) => (
                  <div key={edu.degree} className="relative">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-[#06070d] shadow-md shadow-cyan-500/50" />

                    <TiltCard maxTilt={5} scale={1.01} className="bg-[#0b0d18] border border-purple-900/30 hover:border-purple-500/40 p-5 shadow-xl">
                      <h4 className="text-base font-bold text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-purple-300 text-sm font-medium mb-2">
                        {edu.school}
                      </p>
                      <div className="flex items-center justify-between gap-2 text-xs text-gray-400">
                        <span className="font-mono">{edu.period}</span>
                        <span className="px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 font-mono font-semibold">
                          CGPA: {edu.cgpa}
                        </span>
                      </div>
                    </TiltCard>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="p-2 rounded-xl bg-purple-900/30 border border-purple-700/40 text-amber-400">
                  <Award className="w-5 h-5" />
                </span>
                <span>Certifications & Honors</span>
              </h3>

              <TiltCard maxTilt={4} scale={1.01} className="bg-[#0b0d18] border border-purple-900/30 p-5 shadow-xl flex flex-col gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-3 rounded-xl bg-[#121424] border border-purple-900/30 hover:border-purple-600/40 transition-colors flex items-start gap-3"
                  >
                    <span className="text-amber-400 text-base mt-0.5">✦</span>
                    <div>
                      <h5 className="text-sm font-semibold text-white">
                        {cert.name}
                      </h5>
                      <p className="text-xs text-purple-300 font-medium">
                        {cert.issuer}
                      </p>
                      <span className="text-[10px] text-gray-400 font-mono">
                        {cert.type}
                      </span>
                    </div>
                  </div>
                ))}
              </TiltCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}