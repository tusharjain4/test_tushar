import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-neutral-200 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-neutral-500 text-sm">
          © {currentYear} tushairhia. All rights reserved.
        </p>
        <p className="text-neutral-400 text-xs mt-2">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;