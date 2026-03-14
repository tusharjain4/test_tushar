import React from "react";

interface AboutProps {
  about: string;
  experience: number;
  currentRole: string;
  highlights: string[];
}

const About: React.FC<AboutProps> = ({
  about,
  experience,
  currentRole,
  highlights,
}) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            About Me
          </h2>
          <div className="mt-2 w-20 h-1 bg-neutral-900 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-lg text-neutral-600 leading-relaxed">{about}</p>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-neutral-50 rounded border border-neutral-200">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-neutral-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-neutral-500">
                    Current Role
                  </h3>
                  <p className="text-lg font-semibold text-neutral-900">
                    {currentRole}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-neutral-50 rounded border border-neutral-200">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-neutral-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-neutral-500">
                    Experience
                  </h3>
                  <p className="text-lg font-semibold text-neutral-900">
                    {experience} Years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {highlights && highlights.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">
              Highlights
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start bg-neutral-50 p-4 rounded border border-neutral-200"
                >
                  <svg
                    className="h-5 w-5 text-neutral-900 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;