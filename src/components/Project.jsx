import React from 'react'
import { useNavigate } from 'react-router-dom'

const Project = ({
  id,
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const navigate = useNavigate()

  const handleOpenProject = () => {
    setPreview(null)
    navigate(`/project/${id}`)
  }

  return (
    <div
      className="group w-full flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b border-white/20 transition-colors duration-500 hover:bg-white/5 cursor-pointer relative"
      onMouseEnter={() => setPreview(image)}
      onMouseLeave={() => setPreview(null)}
      onClick={handleOpenProject}
    >
      <div className="flex flex-col">
        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white group-hover:pl-4 transition-all duration-300">
          {title}
        </h3>

        <div className="flex flex-wrap gap-4 mt-4 md:group-hover:pl-4 transition-all duration-300 delay-75">
          {tags?.map((tag) => (
            <span
              key={tag.id || tag.name}
              className="text-[9px] tracking-[0.3em] uppercase text-white/40"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 md:mt-0 flex items-center gap-4 text-[10px] tracking-[0.4em] font-bold uppercase text-white/40 group-hover:text-white transition-colors duration-300">
        <span>Read More</span>
        <svg
          className="w-4 h-4 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    </div>
  )
}

export default Project