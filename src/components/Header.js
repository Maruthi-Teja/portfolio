import React, { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen((s) => !s);

  return (
    <>
      <header className="fixed w-full z-40 top-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white font-bold">M</div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold">Maruthi Teja</div>
              <div className="text-xs text-gray-500">Java Backend Engineer</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 bg-white/60 px-4 py-2 rounded-full shadow glass">
            <a className="text-sm hover:text-indigo-600" href="#about">About</a>
            <a className="text-sm hover:text-indigo-600" href="#experience">Experience</a>
            <a className="text-sm hover:text-indigo-600" href="#projects">Projects</a>
            <a className="text-sm hover:text-indigo-600" href="#skills">Skills</a>
            <a className="text-sm hover:text-indigo-600" href="#contact">Contact</a>
            <a className="ml-4 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-sm" href="#contact">Let's Talk</a>
          </nav>

          <div className="md:hidden">
            <button id="mobile-btn" onClick={toggleMobile} className="p-2 bg-white/70 rounded-full shadow glass">☰</button>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      <div id="mobile-menu" className={`fixed inset-0 z-40 ${mobileOpen ? "" : "hidden"}`}>
        <div className="absolute inset-0 bg-black/40" onClick={toggleMobile} />
        <div className="absolute right-4 top-20 bg-white rounded-xl p-4 shadow w-56">
          <a className="block py-2" href="#about" onClick={toggleMobile}>About</a>
          <a className="block py-2" href="#experience" onClick={toggleMobile}>Experience</a>
          <a className="block py-2" href="#projects" onClick={toggleMobile}>Projects</a>
          <a className="block py-2" href="#skills" onClick={toggleMobile}>Skills</a>
          <a className="block py-2" href="#contact" onClick={toggleMobile}>Contact</a>
        </div>
      </div>
    </>
  );
}
