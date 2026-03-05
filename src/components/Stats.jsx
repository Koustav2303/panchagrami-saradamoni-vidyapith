import React from 'react';
import { Users, GraduationCap, Award, Trophy, BookOpen, Heart } from 'lucide-react';

const Stats = () => {
  const stats = [
    { 
      id: 1, 
      label: "Students", 
      value: "850+", 
      icon: <Users className="w-8 h-8 text-blue-400" />,
      desc: "Nurturing young minds from Class V to X",
      gradient: "from-blue-500/20 to-transparent"
    },
    { 
      id: 2, 
      label: "Success Rate", 
      value: "99%", 
      icon: <GraduationCap className="w-8 h-8 text-school-gold" />,
      desc: "Outstanding WBBSE Board Results",
      gradient: "from-amber-500/20 to-transparent"
    },
    { 
      id: 3, 
      label: "Legacy", 
      value: "57 Yrs", 
      icon: <Award className="w-8 h-8 text-emerald-400" />,
      desc: "Serving the community since 1969",
      gradient: "from-emerald-500/20 to-transparent"
    },
    { 
      id: 4, 
      label: "Faculty", 
      value: "40+", 
      icon: <Heart className="w-8 h-8 text-rose-400" />,
      desc: "Dedicated and qualified educators",
      gradient: "from-rose-500/20 to-transparent"
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-slate-950 overflow-hidden">
      
      {/* 1. Cinematic Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-school-blue/20 rounded-full blur-[120px]" />
        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-school-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
            The Numbers Behind the Excellence
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Our Legacy in <span className="text-blue-500">Motion.</span>
          </h2>
          <div className="w-20 h-1.5 bg-school-gold mx-auto rounded-full mt-6"></div>
        </div>

        {/* 2. Responsive Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className="group relative p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 flex flex-col items-center text-center md:items-start md:text-left overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Internal Accent Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Icon Container */}
              <div className="relative mb-8 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-white/20 transition-all duration-500 shadow-2xl">
                {stat.icon}
                {/* Micro-glow behind icon */}
                <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
              </div>
              
              <div className="relative space-y-3">
                <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                  {stat.value}
                </h3>
                <p className="text-school-gold font-bold uppercase text-[10px] md:text-xs tracking-[0.2em]">
                  {stat.label}
                </p>
                <p className="text-slate-400 text-sm font-medium leading-relaxed pt-4 border-t border-white/10">
                  {stat.desc}
                </p>
              </div>

              {/* Decorative Corner Shimmer */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
            </div>
          ))}
        </div>

        {/* 3. Bottom Call-to-Action Text */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-slate-800"></span>
            Recognized by West Bengal Government
            <span className="w-8 h-[1px] bg-slate-800"></span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;