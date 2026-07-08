import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const navLink = [
    { name: "Home", href: "/" },
    { name: "Club", href: "/clubs" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-20 bg-[#003366]">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Title */}
          <div className="shrink-0">
            <a href="/" className="text-xl font-bold text-[#ffd700] tracking-wide flex items-center gap-3 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15 15">
                <path fill="currentColor" d="M7.5 1L0 4.5l2 .9v1.7c-.6.2-1 .8-1 1.4s.4 1.2 1 1.4v.1l-.9 2.1C.8 13 1 14 2.5 14s1.7-1 1.4-1.9L3 10c.6-.3 1-.8 1-1.5s-.4-1.2-1-1.4V5.9L7.5 8L15 4.5zm4.4 6.5l-4.5 2L5 8.4v.1c0 .7-.3 1.3-.8 1.8l.6 1.4v.1c.1.4.2.8.1 1.2c.7.3 1.5.5 2.5.5c3.3 0 4.5-2 4.5-3z"/>
              </svg>
              Campus Club
            </a>
          </div>

          {/* NavLink (desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-4 gap-6">
            {navLink.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-medium text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#ffd700] after:transition-transform after:duration-300 after:ease-in-out hover:text-[#ffd700] hover:after:scale-x-100 ${isActive ? "text-[#ffd700] after:scale-x-100" : ""}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile burger button and menu */}
          <MobileMenu navLink={navLink} />
        </div>
      </div>
    </nav>
  );
}

function MobileMenu({ navLink }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden ml-auto">
      <button
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile menu panel */}
      {open && (
        <div className="absolute top-16 left-0 right-0 bg-[#003366] shadow-md py-3">
          <div className="flex flex-col px-4 space-y-1">
            {navLink.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#ffd700] ${isActive ? "text-[#ffd700]" : ""}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
