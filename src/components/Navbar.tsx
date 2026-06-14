import { Link, useLocation } from "react-router-dom";
import { GraduationCap, Sparkles, User, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

export function Navbar() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  if (isDashboard) return null; // Dashboard has its own sidebar/navigation

  const navLinks = [
    { name: "Programs", href: "/#programs" },
    { name: "Prime ID", href: "/prime-id" },
    { name: "AI Ecosystem", href: "/#ai" },
    { name: "Career Outcomes", href: "/#careers" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shrink-0">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="font-display font-bold text-2xl tracking-tight text-brand-600">
                EduPrime<span className="text-slate-400 font-light text-lg ml-1">™</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center mt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex flex-col items-end pr-2">
              <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Prime Learner ID</span>
              <span className="text-sm font-mono font-medium text-slate-900">PR-992-K12-2024</span>
            </div>
            <Link
              to="/dashboard"
              className="h-10 w-10 rounded-full bg-gradient-to-tr from-brand-500 to-indigo-600 flex items-center justify-center text-white font-bold hover:opacity-90 transition-opacity shadow-sm"
            >
              JD
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
