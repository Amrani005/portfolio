import React from "react";
import { useParams } from "react-router-dom";
import { myProjects } from "../constants";

const ProjectDetailsPage = () => {
  const { id } = useParams();

  // 🔥 FIND THE PROJECT FROM YOUR DATA
  const project = myProjects.find((p) => String(p.id) === String(id));

  // fallback if not found
  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-30 w-full bg-[#0a0a0a] text-white">

      {/* IMAGE HEADER */}
      <div className="w-full h-[400px] border-b border-white/10">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-8">

        {/* TITLE */}
        <h1 className="text-5xl font-black uppercase">
          {project.title}
        </h1>

        {/* DESCRIPTION */}
        <p className="text-white/60 text-base leading-relaxed">
          {project.description}
        </p>

        {/* SUB DESCRIPTION */}
        {project.subDescription?.map((item, i) => (
          <p key={i} className="text-white/40 text-sm leading-relaxed">
            {item}
          </p>
        ))}

        {/* TAGS */}
        <div className="flex flex-wrap gap-3 pt-4">
          {project.tags?.map((tag, i) => (
            <div
              key={i}
              className="p-2 border border-white/20 bg-black"
            >
              <img
                src={tag.path}
                alt="tech"
                className="w-5 h-5 grayscale"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-6 w-fit
              border border-white/20
              py-4 px-8
              text-center
              text-[10px] tracking-[0.4em]
              uppercase font-bold
              text-white
              hover:bg-white hover:text-black
              transition
            "
          >
            Deploy
          </a>
        )}

      </div>
    </div>
  );
};

export default ProjectDetailsPage;