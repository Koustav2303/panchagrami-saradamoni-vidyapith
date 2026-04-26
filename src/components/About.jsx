import React from 'react';
import { BookOpen, Award, Users, Target, History, Globe, ShieldCheck, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Founded", value: "1969", icon: <History className="w-6 h-6" />, color: "bg-blue-500" },
    { label: "Students", value: "800+", icon: <Users className="w-6 h-6" />, color: "bg-amber-500" },
    { label: "Graduation", value: "98%", icon: <Award className="w-6 h-6" />, color: "bg-emerald-500" },
    { label: "Faculty", value: "45+", icon: <ShieldCheck className="w-6 h-6" />, color: "bg-indigo-500" },
  ];

  const pillars = [
    {
      title: "Academic Excellence",
      desc: "Our curriculum for Class V to X is designed to challenge and inspire, following the West Bengal Government standards.",
      icon: <BookOpen className="w-6 h-6 text-school-blue" />,
    },
    {
      title: "Holistic Growth",
      desc: "Beyond textbooks, we focus on sports, arts, and cultural activities to build well-rounded personalities.",
      icon: <Zap className="w-6 h-6 text-school-gold" />,
    },
    {
      title: "Global Vision",
      desc: "Preparing students for a digital future while keeping them rooted in our local heritage and values.",
      icon: <Globe className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Future Ready",
      desc: "Our mission is to empower students with critical thinking and leadership skills for the 21st century.",
      icon: <Target className="w-6 h-6 text-rose-500" />,
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-school-gold font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
              Our Journey Since 1969
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              Shaping Minds, <br />
              <span className="text-school-blue">Defining Excellence.</span>
            </h2>
          </div>
          <div className="hidden md:block w-32 h-32 border-8 border-slate-100 rounded-full flex-shrink-0 relative">
            <div className="absolute inset-0 flex items-center justify-center font-black text-slate-200 text-3xl">PSV</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <History className="w-32 h-32" />
              </div>
              <p className="text-xl text-slate-700 leading-relaxed font-medium mb-6">
                Located in Panikotor, Garhbeta, <span className="text-school-blue font-bold">Panchagrami Saradamani Vidyapith</span> has stood as a cornerstone of education for over half a century.
              </p>
              <p className="text-slate-600 leading-relaxed">
                As a premier Government educational institution, we provide a structured learning environment for students from Class V to X. Our approach combines rigorous academic standards with the warmth of a close-knit community, ensuring every child feels seen, heard, and encouraged to reach their full potential.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center font-bold">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{pillar.title}</h4>
                    <p className="text-sm text-slate-500 leading-snug">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-50 text-center group hover:-translate-y-1 transition-transform">
                  <div className={`w-12 h-12 ${stat.color} rounded-2xl mx-auto mb-4 flex items-center justify-center text-white shadow-lg shadow-current/20`}>
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 leading-none mb-1">{stat.value}</h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-school-blue rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl shadow-blue-900/40">
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <GraduationCap size={160} />
              </div>
              <h4 className="text-school-gold font-bold mb-4 uppercase text-xs tracking-widest">Headmaster's Vision</h4>
              <p className="text-lg font-medium italic leading-relaxed mb-6 relative z-10">
                "We don't just teach students to pass exams; we prepare them to lead with integrity and innovate for a better tomorrow."
              </p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-white/20 border border-white/20" />
                <div>
                  <p className="font-bold text-sm">Official School Motto</p>
                  <p className="text-xs text-blue-200 font-medium">Knowledge is Empowerment</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const GraduationCap = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

export default About;