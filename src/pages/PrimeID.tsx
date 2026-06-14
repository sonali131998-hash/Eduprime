import { ShieldCheck, LineChart, Globe, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function PrimeID() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-sm font-bold text-brand-600 mb-6">
                <ShieldCheck className="w-4 h-4" /> One Account for Life
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                Your entire educational history, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-purple-600">unified.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                Stop starting from zero. Prime Learner ID tracks your K-12 grades, test prep percentiles, and professional certifications in one continuous skills graph.
              </p>
              <div className="flex flex-wrap gap-4">
                 <Link to="/dashboard" className="px-6 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors">
                   Claim Your Prime ID
                 </Link>
              </div>
            </div>
            
            {/* Visual */}
            <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-purple-50 transform rotate-3 rounded-3xl -z-10"></div>
               <div className="bg-slate-900 rounded-3xl shadow-xl border border-slate-800 p-8 text-white">
                  <div className="flex justify-between items-start mb-12">
                     <div>
                       <p className="text-slate-400 text-sm mb-1 uppercase tracking-widest font-bold">Prime Learner ID</p>
                       <h3 className="text-3xl font-display font-bold">PRM-8492-X</h3>
                     </div>
                     <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600"></div>
                  </div>
                  
                  <div className="space-y-6">
                     <div className="flex justify-between items-end border-b border-slate-800 pb-4">
                        <div>
                          <p className="text-sm text-slate-400 mb-1">Current Stage</p>
                          <p className="font-bold">Test Preparation</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-slate-400 mb-1">Career Goal</p>
                          <p className="font-bold text-brand-400">Software Engineer</p>
                        </div>
                     </div>
                     
                     <div>
                       <p className="text-sm text-slate-400 mb-3">Verified Credentials</p>
                       <div className="flex flex-wrap gap-2">
                         <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-medium border border-slate-700">10th Grade Math Top 5%</span>
                         <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-medium border border-slate-700">Intro to Python</span>
                         <span className="px-3 py-1 rounded-full bg-brand-900/50 text-brand-400 text-xs font-medium border border-brand-800">JEE Prep Active</span>
                       </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Why Prime ID is different</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Traditional education isolates your data. We connect it to show employers your true trajectory.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
               icon={<LineChart className="w-6 h-6 text-brand-600" />}
               title="Continuous Skills Graph"
               description="Every module passed, every quiz aced, and every project submitted maps to a micro-skill in your permanent profile."
            />
            <FeatureCard 
               icon={<Zap className="w-6 h-6 text-purple-600" />}
               title="Adaptive Start Points"
               description="Transitioning from Test Prep to Pro? Our AI already knows your math aptitude and skips the basics in your Data Science course."
            />
            <FeatureCard 
               icon={<Globe className="w-6 h-6 text-blue-600" />}
               title="Employer Ready"
               description="Share a cryptographically verified link with hiring managers showing years of learning consistency, not just a static resume."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-xl mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  )
}
