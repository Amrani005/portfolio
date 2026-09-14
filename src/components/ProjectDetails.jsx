import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { myProjects } from "../constants";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const project = myProjects.find((p) => String(p.id) === String(id));

  const projectImages = Array.isArray(project?.galleryimages)
    ? project.galleryimages
    : project?.galleryimages
      ? [project.galleryimages]
      : [];

  useEffect(() => {
    setActiveImageIndex(0);
  }, [id]);

  const handlePrevImage = () => {
    if (projectImages.length <= 1) return;

    setActiveImageIndex((prev) =>
      prev === 0 ? projectImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    if (projectImages.length <= 1) return;

    setActiveImageIndex((prev) =>
      prev === projectImages.length - 1 ? 0 : prev + 1
    );
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-semibold">Project not found</h2>
        <button 
          onClick={() => navigate(-1)} 
          className="text-zinc-400 hover:text-white transition"
        >
          ← Go back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 py-12 px-4
     sm:px-6 md:py-20 flex justify-center items-start z-100">
      
      <div className="w-full max-w-6xl bg-[#111315] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        
        {/* HEADER */}
        <div className="px-6 py-8 md:px-10 border-b border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {project.title}
          </h1>
          
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
            title="Go Back"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 md:p-10">
          
          <div className="relative w-full aspect-video md:aspect-[21/9] bg-[#0a0a0a] rounded-xl overflow-hidden mb-12 border border-white/5 shadow-inner">
            <img
              src={projectImages[activeImageIndex]}
              alt={project.title}
              className="w-full h-full object-cover"
            />

            {projectImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/65"
                  aria-label="Previous project image"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/65"
                  aria-label="Next project image"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                  </svg>
                </button>

                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-sm">
                  {projectImages.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        index === activeImageIndex ? "bg-white" : "bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="space-y-10">

              {project.description && (
                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">Project Description</h2>
                  <p className="text-zinc-400 leading-relaxed text-[15px]">
                    {project.description}
                  </p>
                </section>
              )}
              
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Skills & Deliverables</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-[#1a1c1e] border border-white/10 px-3 py-1.5 rounded-full"
                    >
                      <img
                        src={tag.path}
                        alt="tech"
                        className="w-4 h-4 object-contain"
                      />
                      {/* If your tag object has a name property (e.g., tag.name), it will show here nicely */}
                      {tag.name && (
                        <span className="text-sm font-medium text-zinc-300">{tag.name}</span>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* ACTION BUTTON */}
              {project.href && (
                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">Project Link</h2>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex w-full justify-center items-center gap-2 
                      bg-[#108a00] hover:bg-[#14a600] text-white 
                      font-medium px-6 py-3 rounded-full transition-colors
                    "
                  >
                    View Live Project
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </section>
              )}
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;