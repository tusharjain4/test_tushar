import React from "react";
import Image from "next/image";

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
  heroImageUrl?: string;
}

const Hero: React.FC<HeroProps> = ({ name, role, tagline, heroImageUrl }) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 bg-neutral-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
              {name}
            </h1>
            <h2 className="mt-3 text-xl sm:text-2xl text-neutral-600 font-light">
              {role}
            </h2>
            <p className="mt-4 text-lg text-neutral-500 max-w-lg mx-auto md:mx-0">
              {tagline}
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white text-sm font-medium rounded transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
          {heroImageUrl && (
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src={heroImageUrl}
                  alt={`${name}'s profile picture`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;