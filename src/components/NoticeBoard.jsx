import React from 'react';
import { Megaphone, Clock, Bell, ExternalLink } from 'lucide-react';

const NoticeBoard = () => {
  return (
    <section id="notices" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Branding & Status */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-school-blue text-[10px] font-black uppercase tracking-[0.2em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-school-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-school-blue"></span>
              </span>
              System Active
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Academic <br /> 
              <span className="text-school-blue">Notice Board.</span>
            </h2>
            
            <p className="text-slate-500 font-medium leading-relaxed max-w-md">
              Our digital notice board keeps students and parents updated with the latest institutional news, exam schedules, and holiday alerts.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                ))}
              </div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                Trusted by 800+ Students
              </p>
            </div>
          </div>

          {/* Right: The "Will be updated soon" Placeholder */}
          <div className="lg:col-span-7">
            <div className="relative group">
              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-school-blue to-school-gold rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
              
              <div className="relative bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center text-center space-y-6 shadow-xl shadow-slate-200/50">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center text-school-blue relative">
                  <Megaphone className="w-10 h-10" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-school-gold rounded-full border-4 border-slate-50 animate-bounce" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900">
                    Will be updated soon
                  </h3>
                  <p className="text-slate-500 text-sm font-medium max-w-xs mx-auto">
                    We are currently finalizing the academic calendar and upcoming event schedules. Please check back shortly!
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <Clock className="w-3.5 h-3.5" />
                    Last Sync: Today
                  </div>
                  <button className="flex items-center justify-center gap-2 px-6 py-2 bg-school-blue text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20">
                    <Bell className="w-3.5 h-3.5" />
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;