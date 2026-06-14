import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar 
} from "recharts";
import { 
  BookOpen, BrainCircuit, Target, Briefcase, GraduationCap, 
  LayoutDashboard, Settings, User, Bell, Search, Star, Award, ChevronRight, PlayCircle
} from "lucide-react";
import { cn } from "../lib/utils";

const skillsData = [
  { subject: 'Math', A: 120, fullMark: 150 },
  { subject: 'Physics', A: 98, fullMark: 150 },
  { subject: 'Coding', A: 86, fullMark: 150 },
  { subject: 'Analytics', A: 99, fullMark: 150 },
  { subject: 'Logic', A: 85, fullMark: 150 },
  { subject: 'Comms', A: 65, fullMark: 150 },
];

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex h-screen bg-slate-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-slate-100">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900">
              EduPrime.
            </span>
          </Link>
        </div>
        
        <div className="p-4 flex-1 overflow-y-auto space-y-8">
          {/* Nav Section */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3">Menu</h3>
            <nav className="space-y-1">
              <NavItem icon={<LayoutDashboard />} label="Overview" active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} />
              <NavItem icon={<BrainCircuit />} label="AI Coach" active={activeTab === 'ai'} onClick={() => setActiveTab('ai')} />
              <NavItem icon={<BookOpen />} label="My Courses" />
              <NavItem icon={<Target />} label="Assessments" />
            </nav>
          </div>

          {/* Prime ID Section */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3">Prime Profile</h3>
            <nav className="space-y-1">
              <NavItem icon={<Award />} label="Certifications" />
              <NavItem icon={<Briefcase />} label="Career Path" />
              <NavItem icon={<User />} label="Prime ID Card" />
            </nav>
          </div>
        </div>

        <div className="p-4 border-t border-slate-100">
          <NavItem icon={<Settings />} label="Settings" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div>
            <h1 className="text-2xl font-display font-bold text-slate-900">Welcome back, Alex.</h1>
            <p className="text-sm text-slate-500">Stage 2: Test Preparation (JEE Focus)</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="pl-9 pr-4 py-2 border border-slate-200 rounded-full text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all w-64"
              />
            </div>
            <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors relative">
               <Bell className="w-5 h-5" />
               <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-500 to-purple-500 text-white font-bold flex items-center justify-center shadow-sm">
              A
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8 max-w-7xl mx-auto space-y-8">
          
          {/* Hero Banner / Next Action */}
          <div className="bg-slate-900 rounded-3xl p-8 relative overflow-hidden flex items-center justify-between shadow-xl">
             <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-[50%] -left-[10%] w-[50%] h-[150%] rounded-full bg-brand-500/20 blur-[80px]" />
                <div className="absolute top-[0%] -right-[10%] w-[40%] h-[150%] rounded-full bg-purple-500/20 blur-[80px]" />
             </div>
             <div className="relative z-10 text-white max-w-2xl">
               <div className="flex items-center gap-2 mb-3">
                 <BrainCircuit className="w-5 h-5 text-brand-400" />
                 <span className="text-sm font-semibold tracking-wider text-brand-400 uppercase">AI Recommended Next Step</span>
               </div>
               <h2 className="text-3xl font-display font-bold mb-2">Mastering Integrals (Part 2)</h2>
               <p className="text-slate-300 mb-6">Based on your performance in the last mock test, you need to review Definite Integrals before tomorrow's live marathon.</p>
               <button className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold rounded-full text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-lg">
                 <PlayCircle className="w-5 h-5 mr-2" /> Start 45 min Module
               </button>
             </div>
             <div className="hidden lg:block relative z-10 mr-12 text-center">
                 <div className="w-32 h-32 rounded-full border-4 border-slate-700 flex items-center justify-center relative">
                   <svg className="w-full h-full absolute inset-0 -rotate-90">
                     <circle cx="64" cy="64" r="60" stroke="#334155" strokeWidth="8" fill="none" />
                     <circle cx="64" cy="64" r="60" stroke="#2dd4bf" strokeWidth="8" fill="none" strokeDasharray="377" strokeDashoffset="94" className="transition-all duration-1000" />
                   </svg>
                   <div className="text-center">
                     <span className="block text-3xl font-display font-bold text-white">75%</span>
                     <span className="text-xs text-slate-400">JEE Prep</span>
                   </div>
                 </div>
             </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column (2/3) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Daily Schedule */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-slate-900">Today's Learning Pathway</h3>
                  <button className="text-sm text-brand-600 font-medium flex items-center">View Full <ChevronRight className="w-4 h-4" /></button>
                </div>
                <div className="space-y-4">
                  <TaskCard time="10:00 AM" title="Live: Advanced Physics Mechanics" type="Live Class" status="completed" />
                  <TaskCard time="02:30 PM" title="Calculus Mock Test #4" type="Assessment" status="upcoming" />
                  <TaskCard time="05:00 PM" title="AI Doubt Solving Session" type="AI Tutor" status="upcoming" />
                </div>
              </div>

               {/* Progress Metrics */}
               <div className="grid grid-cols-2 gap-4">
                  <MetricCard title="Current Streak" value="14 Days" change="+2 from last week" />
                  <MetricCard title="Modules Completed" value="86" change="Top 10% of cohort" />
               </div>
            </div>

            {/* Right Column (1/3) - Prime Learner ID */}
            <div className="space-y-8">
               <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col h-full">
                 <div className="bg-slate-900 p-6 text-white">
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-display font-bold">Prime ID</span>
                      <Award className="text-brand-400 w-6 h-6" />
                    </div>
                    <div className="mb-2">
                       <p className="text-xs text-slate-400 uppercase tracking-widest">ID Number</p>
                       <p className="font-mono text-sm tracking-widest">PRM-8492-X</p>
                    </div>
                 </div>
                 <div className="p-6 flex-1 flex flex-col">
                   <h4 className="text-sm font-bold text-slate-900 mb-4">Skills Graph</h4>
                   <div className="h-48 w-full -ml-4">
                     <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillsData}>
                          <PolarGrid stroke="#e2e8f0" />
                          <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10 }} />
                          <Radar name="Student" dataKey="A" stroke="#0d9488" fill="#14b8a6" fillOpacity={0.4} />
                        </RadarChart>
                     </ResponsiveContainer>
                   </div>
                   <div className="mt-auto space-y-3 pt-4 border-t border-slate-100">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">Stage</span>
                        <span className="font-bold text-slate-900">Test Prep</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">Career Goal</span>
                        <span className="font-bold text-slate-900">Software Eng.</span>
                      </div>
                   </div>
                 </div>
               </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group text-sm font-medium",
        active 
          ? "bg-brand-50 text-brand-700" 
          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
      )}
    >
      <div className={cn("w-5 h-5 transition-colors", active ? "text-brand-600" : "text-slate-400 group-hover:text-slate-600")}>
        {icon}
      </div>
      {label}
    </button>
  );
}

function TaskCard({ time, title, type, status }: { time: string, title: string, type: string, status: "completed" | "upcoming" }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors bg-slate-50/50">
      <div className="w-20 flex-shrink-0 text-sm font-medium text-slate-500">{time}</div>
      <div className="w-1 h-12 rounded-full bg-slate-200 flex-shrink-0 relative">
        {status === "completed" && <div className="absolute inset-0 bg-brand-500 rounded-full" />}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-bold text-slate-900 truncate">{title}</h4>
        <p className="text-xs text-slate-500 mt-1">{type}</p>
      </div>
      <div>
        {status === "completed" 
          ? <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-50 text-green-600"><CheckCircle2 className="w-4 h-4" /></span>
          : <button className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-bold rounded-full text-brand-700 bg-brand-50 hover:bg-brand-100 transition-colors">Start</button>
        }
      </div>
    </div>
  );
}

function MetricCard({ title, value, change }: { title: string, value: string, change: string }) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
      <p className="text-sm font-medium text-slate-500 mb-2">{title}</p>
      <p className="text-3xl font-display font-bold text-slate-900 mb-1">{value}</p>
      <p className="text-xs text-brand-600 font-medium flex items-center">
        <Star className="w-3 h-3 mr-1 fill-current" /> {change}
      </p>
    </div>
  )
}

function CheckCircle2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <path d="M22 4 12 14.01l-3-3"/>
    </svg>
  );
}
