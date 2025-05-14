import { Link, useLocation } from "@remix-run/react";

export function Navbar() {
  const location = useLocation();

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="w-full py-4 px-6 md:px-12 flex justify-between items-center shadow-sm bg-white border-b border-gray-200 font-inter">
      <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <img src="/icons/logo2.svg" alt="Vibranium Lads" className="h-16" />
          </Link>
      </div>
      <div className="hidden md:flex gap-8 text-gray-700">
        <Link
          to="/"
          className={`hover:text-gray-900 transition-colors ${isActivePath('/') ? 'font-medium text-gray-900 border-b-2 border-gray-900' : ''}`}
        >
          Home
        </Link>
        <Link
          to="/projects"
          className={`hover:text-gray-900 transition-colors ${isActivePath('/projects') ? 'font-medium text-gray-900 border-b-2 border-gray-900' : ''}`}
        >
          Projects
        </Link>
        <Link
          to="/about"
          className={`hover:text-gray-900 transition-colors ${isActivePath('/about') ? 'font-medium text-gray-900 border-b-2 border-gray-900' : ''}`}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`hover:text-gray-900 transition-colors ${isActivePath('/contact') ? 'font-medium text-gray-900 border-b-2 border-gray-900' : ''}`}
        >
          Contact
        </Link>
      </div>
      <div className="md:hidden">
        <button className="text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
}
