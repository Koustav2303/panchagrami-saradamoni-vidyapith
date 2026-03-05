import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, MapPin, Award } from 'lucide-react';
import heroImg1 from '../assets/image1.jpg'; 
import heroImg2 from '../assets/image2.jpg';
import heroImg3 from '../assets/image3.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const slides = [
    {
      image: heroImg1,
      tag: "Excellence in Education",
      title: "Building Brighter",
      accent: "Futures",
      desc: "Providing a robust foundation for students from Class V to X since 1969."
    },
    {
      image: heroImg2,
      tag: "State-of-the-Art Campus",
      title: "Learning Without",
      accent: "Boundaries",
      desc: "Experience modern laboratories, a digital library, and a vibrant campus life."
    },
    {
      image: heroImg3,
      tag: "Government Sponsored",
      title: "Nurturing Young",
      accent: "Talent",
      desc: "Join a community dedicated to academic rigor and holistic development."
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    // Changed h-screen to min-h-screen and added padding for mobile
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-slate-900 flex flex-col">
      
      {/* 1. Background Layer */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-slate-900 z-10 md:bg-gradient-to-r" />
          <img
            src={slide.image}
            alt="School Campus"
            className={`w-full h-full object-cover transition-transform duration-[10000ms] ${
              index === currentSlide ? 'scale-110' : 'scale-100'
            }`}
          />
        </div>
      ))}

      {/* 2. Content Layer */}
      <div className="relative z-20 flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-32 pb-20 md:pt-0 md:pb-0">
        <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-school-gold/20 border border-school-gold/30 text-school-gold text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
            <Award className="w-4 h-4" />
            {slides[currentSlide].tag}
          </div>

          {/* Adjusted font sizes for mobile (text-4xl vs md:text-7xl) */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6">
            {slides[currentSlide].title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-school-gold to-yellow-200">
              {slides[currentSlide].accent}
            </span>
          </h1>

          <p className="max-w-xl text-base md:text-xl text-gray-300 mb-8 leading-relaxed font-medium">
            {slides[currentSlide].desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#about" 
              className="px-8 py-4 bg-school-blue hover:bg-blue-700 text-white text-center font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-900/20"
            >
              Start Journey
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#gallery" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white text-center font-bold rounded-xl backdrop-blur-md border border-white/10 transition-all"
            >
              View Campus
            </a>
          </div>
        </div>

        {/* 3. Floating Info Cards (Moved to bottom of container flow for mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-auto md:absolute md:bottom-12 md:left-auto md:right-8 md:mt-0">
          {[
            { icon: <Calendar />, label: "Est. 1969", sub: "Legacy of 50+ Years" },
            { icon: <MapPin />, label: "Location", sub: "Garhbeta, WB" },
            { icon: <Award />, label: "Govt. Sponsored", sub: "WBBSE Board" }
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center gap-4">
              <div className="p-2 rounded-lg bg-school-gold/20 text-school-gold">
                {item.icon}
              </div>
              <div>
                <p className="text-white font-bold text-sm">{item.label}</p>
                <p className="text-gray-400 text-xs">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Slide Indicators (Hidden on small mobile to save space) */}
      <div className="hidden sm:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 flex-col gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`transition-all duration-500 rounded-full ${
              i === currentSlide ? 'h-12 w-1.5 bg-school-gold' : 'h-4 w-1.5 bg-white/20'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;