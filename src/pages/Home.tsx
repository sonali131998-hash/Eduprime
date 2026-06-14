import { ArrowRight, BookOpen, BrainCircuit, Target, Briefcase, ChevronRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="max-w-[1280px] mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-12 gap-5 my-4">
      {/* Hero Section */}
      <section className="md:col-span-8 md:row-span-2 bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-sm flex flex-col justify-center relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-sm font-bold text-brand-600 mb-6">
            <Sparkles className="w-4 h-4" /> Introducing Prime Learner ID
          </div>
          <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight text-slate-900 mb-4 leading-tight">
            Your Lifelong <span className="text-brand-600 underline decoration-brand-200 decoration-4 underline-offset-4">Learning Partner</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-lg mb-8 leading-relaxed">
            One profile. A lifetime of growth. From K-12 foundations to career-defining certifications, EduPrime evolves with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/dashboard" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
              Explore Pathways
            </Link>
            <Link to="/prime-id" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors">
              View Curriculum <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats & Matrix Card */}
      <section className="md:col-span-4 md:row-span-2 bg-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden flex flex-col">
        <div className="flex justify-between items-start mb-6 w-full">
          <h3 className="text-sm font-bold uppercase tracking-widest text-brand-400">Skills Matrix</h3>
          <span className="bg-brand-500/20 text-brand-300 text-[10px] px-2 py-1 rounded-full border border-brand-400/30">Top 2%</span>
        </div>
        <div className="space-y-4 mb-8 flex-1">
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span>Logical Reasoning</span>
              <span>88%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-brand-400 w-[88%]"></div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span>Data Analysis</span>
              <span>72%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-400 w-[72%]"></div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span>Technical Aptitude</span>
              <span>94%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-400 w-[94%]"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-auto">
          <div>
            <p className="text-2xl font-display font-bold text-white">2M+</p>
            <p className="text-[10px] uppercase font-bold text-slate-400">Learners</p>
          </div>
          <div>
            <p className="text-2xl font-display font-bold text-white">98%</p>
            <p className="text-[10px] uppercase font-bold text-slate-400">Success Rate</p>
          </div>
        </div>
      </section>

      {/* The Ecosystem Intro */}
      <div id="programs" className="md:col-span-12 mt-6 mb-2">
        <h2 className="text-2xl font-display font-bold text-slate-900 mb-1">One Platform. Every Stage.</h2>
        <p className="text-slate-500 text-sm">We seamlessly transition with you as your goals evolve.</p>
      </div>

      {/* Stage 1 */}
      <section className="md:col-span-4 bg-white rounded-3xl p-6 border border-slate-200 hover:border-brand-400 transition-all flex flex-col group shadow-sm">
        <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center mb-4 text-brand-600">
          <BookOpen className="w-6 h-6" />
        </div>
        <h4 className="text-lg font-bold mb-1">K-12 Foundations</h4>
        <p className="text-sm text-slate-500 mb-6 flex-1">Grades 6-12 mastery with live classes & interactive AI tutoring.</p>
        <div className="mt-auto flex items-center justify-between border-t border-slate-50 pt-4">
          <span className="text-xs font-bold text-brand-600">4.2k active students</span>
          <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-500 transition-colors" />
        </div>
      </section>

      {/* Stage 2 */}
      <section className="md:col-span-4 bg-white rounded-3xl p-6 border border-slate-200 hover:border-emerald-400 transition-all flex flex-col group shadow-sm">
        <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4 text-emerald-600">
          <Target className="w-6 h-6" />
        </div>
        <h4 className="text-lg font-bold mb-1">Elite Test Prep</h4>
        <p className="text-sm text-slate-500 mb-6 flex-1">SAT, JEE, GMAT & GRE with predictive score analytics.</p>
        <div className="mt-auto flex items-center justify-between border-t border-slate-50 pt-4">
          <span className="text-xs font-bold text-emerald-600">98th percentile avg.</span>
          <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 transition-colors" />
        </div>
      </section>

      {/* AI Tutor Snippet (Bento specific feature display) */}
      <section id="ai" className="md:col-span-4 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col group relative">
        <div className="bg-brand-50 px-5 py-3 border-b border-brand-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>
            <span className="text-xs font-bold text-brand-700 uppercase">AI Tutor</span>
          </div>
          <button className="text-[10px] text-brand-600 font-bold uppercase transition-colors hover:text-brand-800">History</button>
        </div>
        <div className="flex-1 p-5 overflow-hidden flex flex-col gap-4 text-sm bg-slate-50/50">
          <div className="bg-white border border-slate-100 shadow-sm rounded-2xl rounded-tl-none p-3 max-w-[90%]">
            <p className="text-xs text-slate-600 font-medium">Explain the Doppler effect simply?</p>
          </div>
          <div className="bg-brand-600 text-white rounded-2xl rounded-tr-none p-3 self-end max-w-[90%] shadow-md">
            <p className="text-xs">Imagine a siren moving past you. As it approaches, the sound waves compress...</p>
          </div>
        </div>
      </section>

      {/* Stage 3: Professional Learning */}
      <section className="md:col-span-8 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-6 hover:shadow-md transition-shadow">
        <div className="w-14 h-14 shrink-0 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
          <Briefcase className="w-7 h-7" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-2 mb-1">
            <h4 className="text-lg font-bold text-slate-900">Professional Growth</h4>
            <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase border border-indigo-100">Placement Support</span>
          </div>
          <p className="text-sm text-slate-500">Upskill in Data, AI, & Leadership with industry-certified career pathways.</p>
        </div>
        <div className="flex items-center justify-center md:justify-end gap-4 mt-2 md:mt-0">
          <div className="hidden sm:flex -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
            <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
            <div className="w-8 h-8 rounded-full border-2 border-white bg-brand-500 flex items-center justify-center text-[10px] text-white font-bold">+50</div>
          </div>
          <Link to="/dashboard" className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold shadow-md hover:bg-indigo-700 transition-colors shrink-0">Join Cohort</Link>
        </div>
      </section>

      {/* CTA Section equivalent */}
      <section className="md:col-span-4 bg-brand-600 text-white rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center shadow-lg group">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
             <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40V0H40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">Ready to start?</h2>
          <p className="text-brand-100 text-sm mb-6">Create your Prime ID and join the ecosystem.</p>
          <Link to="/dashboard" className="px-6 py-2.5 bg-white text-brand-700 rounded-full text-sm font-bold shadow-md hover:scale-105 transition-transform inline-block">
            Get Started
          </Link>
        </div>
      </section>

    </div>
  );
}

function Sparkles(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
      <path d="M20 3v4"/>
      <path d="M22 5h-4"/>
      <path d="M4 17v2"/>
      <path d="M5 18H3"/>
    </svg>
  );
}
