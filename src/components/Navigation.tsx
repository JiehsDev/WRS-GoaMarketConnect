import { Link, useLocation } from "react-router-dom";
import { Menu, X, Database, Home, BarChart3, Briefcase } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
    {
      name: "Data Gathering",
      path: "/data-gathering",
      icon: <Database className="w-4 h-4" />,
    },
    {
      name: "Evaluation Results",
      path: "/results",
      icon: <BarChart3 className="w-4 h-4" />,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-light/80 backdrop-blur-md border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-xl tracking-tight text-gray-900">
              GM <span className="text-primary">Connect</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-gray-600"
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-card border-b border-orange-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    location.pathname === link.path
                      ? "bg-primary text-white shadow-lg shadow-orange-200"
                      : "text-gray-600 hover:bg-orange-50 hover:text-primary"
                  }`}
                >
                  {link.icon}
                  <span className="font-medium">{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-bg-card border-t border-orange-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="font-display font-bold text-xl tracking-tight text-gray-900">
              Goa Market <span className="text-primary text-2xl">.</span>
            </span>
            <p className="mt-2 text-sm text-gray-500 font-medium">
              Partido State University • HCI Usability Evaluation Project
            </p>
          </div>
          <div className="flex md:justify-end text-sm text-gray-400">
            © {new Date().getFullYear()} Goa Market Connect. Built for Academic
            Excellence.
          </div>
        </div>
      </div>
    </footer>
  );
};
