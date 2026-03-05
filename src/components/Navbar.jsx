import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight, Mail } from 'lucide-react';
import schoolLogo from '../assets/school-logo.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Notices', href: '#notices' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Admission', href: '#admission' },
  ];

  return (
    <>
      {/* --- Main Desktop Navbar --- */}
      <nav 
        className={`fixed w-full z-[100] transition-all duration-500 ${
          isScrolled 
            ? 'py-3 bg-white/95 backdrop-blur-md shadow-xl border-b border-slate-100' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo & Unified Name Section */}
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className={`relative overflow-hidden rounded-xl transition-all duration-500 ${
                isScrolled ? 'w-10 h-10 md:w-12 md:h-12 shadow-md' : 'w-12 h-12 md:w-14 md:h-14'
              }`}>
                <img 
                  src={schoolLogo} 
                  alt="School Logo" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="flex flex-col">
                <h1 className={`text-sm md:text-lg font-black uppercase tracking-tighter leading-tight transition-colors duration-500 ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}>
                  Panchagrami Saradamani <br className="md:hidden" /> Vidyapith
                </h1>
              </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-[11px] font-black uppercase tracking-widest transition-all hover:text-school-gold relative group ${
                      isScrolled ? 'text-slate-600' : 'text-white/90'
                    }`}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-school-gold transition-all group-hover:w-full" />
                  </a>
                ))}
              </div>

              <a 
                href="tel:+919635690400"
                className="flex items-center gap-2 px-5 py-2.5 bg-school-blue text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20 active:scale-95"
              >
                <Phone className="w-3.5 h-3.5" />
                Contact
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center gap-3">
              <a 
                href="tel:+919635690400" 
                className={`p-2.5 rounded-xl transition-all ${
                  isScrolled ? 'bg-slate-100 text-school-blue' : 'bg-white/10 text-white border border-white/10'
                }`}
              >
                <Phone size={18} />
              </a>
              <button 
                onClick={() => setIsMenuOpen(true)}
                className={`p-2.5 rounded-xl transition-all ${
                  isScrolled ? 'text-slate-900 bg-slate-100' : 'text-white bg-white/10 border border-white/10'
                }`}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Fullscreen Mobile Menu --- */}
      <div 
        className={`fixed inset-0 z-[110] bg-white transition-all duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute top-0 w-full p-6 flex justify-between items-center border-b border-slate-50">
          <div className="flex items-center gap-3">
            <img src={schoolLogo} alt="Logo" className="w-8 h-8 rounded-lg object-cover" />
            <span className="font-black text-slate-900 uppercase tracking-tighter text-sm">P.S. Vidyapith</span>
          </div>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="p-3 bg-slate-100 rounded-full text-slate-900 active:scale-90"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col h-full pt-28 px-8 pb-12 overflow-y-auto">
          <div className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between text-4xl font-black text-slate-900 border-b border-slate-50 pb-4 group"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="group-active:text-school-blue transition-colors">
                  {link.name}
                </span>
                <ChevronRight className="text-school-gold" size={32} />
              </a>
            ))}
          </div>

          <div className="mt-auto pt-10 grid grid-cols-2 gap-4">
            <a href="tel:+919635690400" className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-2xl active:bg-school-blue active:text-white transition-all">
              <Phone size={20} className="text-school-blue" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Call</span>
            </a>
            <a href="mailto:psvpanikotor1969@gmail.com" className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-2xl active:bg-school-blue active:text-white transition-all">
              <Mail size={20} className="text-school-blue" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Email</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;