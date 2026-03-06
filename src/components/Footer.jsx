import React from 'react';
import { 
  MapPin, Mail, Phone, Facebook, Twitter, Youtube, 
  GraduationCap, ArrowRight, Heart, ExternalLink 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const lat = 22.8032235;
  const lng = 87.4176659;
  
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3681.258804675765!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQ4JzExLjYiTiA4N8KwMjUnMDMuNiJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin`;

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Notices', href: '#notices' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Admission', href: '#admission' },
  ];

  // UPDATED: Specific links for social media icons
  const socialLinks = [
    { icon: <Facebook />, href: "https://www.facebook.com/panchagramisaradamonividyapith1969/" },
    { icon: <Twitter />, href: "#" },
    { icon: <Youtube />, href: "#" }
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-8 border-t border-white/5 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: School Identity */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3 text-white">
              <div className="p-2 bg-school-blue rounded-xl shadow-lg shadow-blue-900/20">
                <GraduationCap className="w-8 h-8 text-school-gold" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tighter uppercase leading-tight">Panchagrami</span>
                <span className="text-[10px] font-bold text-school-gold uppercase tracking-[0.3em]">Saradamani Vidyapith</span>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed max-w-sm">
              Dedicated to academic excellence and character building since 1969. A government-sponsored institution in the heart of Garhbeta.
            </p>

            {/* UPDATED: Mapping the socialLinks array with correct hrefs and target attributes */}
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target={social.href !== "#" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-school-blue hover:text-white transition-all duration-300 border border-white/5"
                >
                  {React.cloneElement(social.icon, { size: 18 })}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[10px]">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-school-gold transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[10px]">Reach Us</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4 group">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:text-school-gold transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="leading-relaxed">
                  Panikotar, Garhbeta, <br />
                  Paschim Medinipur, WB - 721127
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:text-school-gold transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+919635690400" className="hover:text-white transition-colors tracking-wide">
                  +91 96356 90400
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Precision Map */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[10px]">Campus Location</h4>
            <div className="w-full h-44 rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-white/5 shadow-2xl relative group">
              <iframe 
                src={mapUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Exact School Location"
                className="opacity-70 group-hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 text-center md:text-left">
            © {currentYear} Panchagrami Saradamani Vidyapith. Govt Sponsored.
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-center md:text-left">
            <span>Developed with</span> 
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> 
            <span>by</span>
            <a 
              href="https://koustav2303.github.io/koustavpan-portfolio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-school-gold underline underline-offset-4 decoration-school-blue hover:decoration-school-gold decoration-2 transition-all"
            >
              Koustav Pan
            </a>
            <span className="text-slate-500">&</span>
            <a 
              href="https://subhajit75.github.io/portfolio-subhajit75_1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-school-gold underline underline-offset-4 decoration-school-blue hover:decoration-school-gold decoration-2 transition-all"
            >
              Subhajit Ghosh
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;