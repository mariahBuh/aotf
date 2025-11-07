import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-[#2b0e13] to-[#1a0a0c] text-gray-200 py-10 px-6 border-t border-gray-700">
      <div className="max-w-6xl mx-auto">
        {/* Top section: Logo + Quote */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start border-b border-gray-700 pb-8 mb-8">
          {/* Left: Logo and Quote */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-2xl font-semibold tracking-wide uppercase">
              <span className="block text-sm font-normal">Ascension</span>
              <span className="block text-lg">of the Forgotten</span>
            </h2>
            <p className="mt-4 text-sm italic text-gray-400">
              “In the light we find what the darkness tried to hide.”
            </p>
          </div>

          {/* Right: Link Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm md:w-2/3">
            {/* About */}
            <div>
              <h3 className="text-white font-semibold mb-3 tracking-widest">
                ABOUT
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-white">
                    Meow Meow Studios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Roles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Productions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    History
                  </a>
                </li>
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-white font-semibold mb-3 tracking-widest">
                TOOLS
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-white">
                    Unreal Engine
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Figma
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blender
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Ableton
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Mocap
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-3 tracking-widest">
                RESOURCES
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section: Copyright + Legal Text */}
        <div className="text-center text-xs text-gray-500 leading-relaxed">
          <p className="mb-2">© 2025 Meow Meow Studios</p>
          <p>
            All content, game titles, trade names, and/or trade dress,
            trademarks, artwork, and associated imagery are trademarks and/or
            copyright material of their respective owners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
