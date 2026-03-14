import React from "react";

interface Skill {
  category?: string;
  items?: string[];
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  if (!skills || skills.length === 0) {
    return (
      <section id="skills" className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
              Skills
            </h2>
            <div className="mt-2 w-20 h-1 bg-neutral-900 mx-auto"></div>
          </div>
          <div className="text-center text-neutral-500">
            <p>No skills listed yet.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            Skills
          </h2>
          <div className="mt-2 w-20 h-1 bg-neutral-900 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded border border-neutral-200 shadow-sm"
            >
              {skillCategory.category && (
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  {skillCategory.category}
                </h3>
              )}
              {skillCategory.items && skillCategory.items.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;