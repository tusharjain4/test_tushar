import React from "react";
import Image from "next/image";

interface Project {
  name: string;
  description: string;
  tech?: string[];
  github?: string;
  demo?: string;
  imageUrl?: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
              Projects
            </h2>
            <div className="mt-2 w-20 h-1 bg-neutral-900 mx-auto"></div>
          </div>
          <div className="text-center text-neutral-500">
            <p>No projects listed yet.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            Projects
          </h2>
          <div className="mt-2 w-20 h-1 bg-neutral-900 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-neutral-50 rounded overflow-hidden border border-neutral-200 hover:shadow-md transition-shadow"
            >
              {project.imageUrl && (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {project.name}
                </h3>
                <p className="text-neutral-600 mb-4">{project.description}</p>
                {project.tech && project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-neutral-200 text-neutral-700 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-900 hover:underline font-medium"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-900 hover:underline font-medium"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;