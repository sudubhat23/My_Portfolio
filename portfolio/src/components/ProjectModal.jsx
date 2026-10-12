import { X, ExternalLink, CheckCircle2, Layers, Cpu, Sparkles } from 'lucide-react'
import { GithubIcon } from './Icons'

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#0d0f1c] border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-950/60 p-6 sm:p-8 overflow-y-auto max-h-[90vh] text-left"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Header / Close button */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-purple-900/50 border border-purple-500/40 text-purple-300">
              {project.badge || 'Featured Project'}
            </span>
            <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              {project.category || 'Full Stack'}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white bg-purple-900/20 hover:bg-purple-900/50 border border-purple-800/30 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Title */}
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          {project.title}
        </h3>

        {/* Long Description */}
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
          {project.longDescription || project.description}
        </p>

        {/* Highlights / Features */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-6 bg-purple-950/20 border border-purple-900/40 rounded-xl p-4">
            <h4 className="text-sm font-semibold text-purple-300 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Key Capabilities & Highlights
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-300">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Architecture & Tech Stack */}
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-gray-300 mb-2.5 flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-400" />
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="text-xs font-mono bg-purple-900/30 border border-purple-700/40 text-purple-200 px-3 py-1 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links Footer */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-purple-900/30">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium py-3 px-5 rounded-xl transition-all shadow-lg shadow-purple-900/30"
            >
              <ExternalLink className="w-4 h-4" />
              Launch Live App
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#121424] hover:bg-[#1a1c33] border border-purple-700/50 hover:border-purple-400 text-purple-200 font-medium py-3 px-5 rounded-xl transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              View Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
