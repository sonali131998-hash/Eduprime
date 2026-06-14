import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900">
                EduPrime.
              </span>
            </Link>
            <p className="text-sm text-slate-500 mb-6 max-w-xs">
              Your Lifelong Learning Partner. From your first academic milestone to your next career advancement.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-slate-900 mb-4">Programs</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-600 transition-colors">K-12 Education</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Test Preparation</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Professional Certifications</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Career Pathways</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-slate-900 mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link to="/prime-id" className="hover:text-brand-600 transition-colors">Prime Learner ID</Link></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">AI Learning Coach</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">AI Interview Coach</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Employer Network</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Investors</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} EduPrime Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
