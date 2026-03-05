import React, { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, MessageCircle } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Ayan Mukherjee",
      role: "Alumni (Batch 2018)",
      text: "Panchagrami Saradamani Vidyapith shaped my foundation. The teachers here don't just teach subjects; they teach life values that stay with you forever.",
      stars: 5,
      avatar: "AM"
    },
    {
      id: 2,
      name: "Smt. Priya Malakar",
      role: "Guardian",
      text: "The discipline and academic environment are unparalleled. My daughter has shown immense growth in both her grades and her confidence since joining.",
      stars: 5,
      avatar: "PM"
    },
    {
      id: 3,
      name: "Suman Das",
      role: "Current Student (Class X)",
      text: "The new science lab and the library are incredible. It's a great place to learn and prepare for our board exams with full support from the faculty.",
      stars: 4,
      avatar: "SD"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating, reviews.length]);

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="testimonials" className="relative py-20 bg-white overflow-hidden">
      
      {/* Background Decorative Blurs - Reduced Opacity */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-amber-50 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Sized Down */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-school-blue text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <MessageCircle className="w-3.5 h-3.5" />
            Feedback
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            Voices of <span className="text-school-blue">Excellence.</span>
          </h2>
          <div className="w-16 h-1.5 bg-school-gold mx-auto rounded-full mt-4"></div>
        </div>

        {/* Main Slider Container - Width restricted to max-3xl for better reading */}
        <div className="relative max-w-3xl mx-auto">
          
          <Quote className="absolute -top-8 -left-6 w-20 h-20 text-slate-100 -z-10 rotate-12" />

          <div className={`transition-all duration-500 transform ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100 relative overflow-hidden group">
              
              <div className="flex flex-col items-center text-center">
                
                {/* Star Rating - Sized Down */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 transition-all duration-500 ${
                        i < reviews[current].stars 
                        ? 'fill-school-gold text-school-gold drop-shadow-[0_0_5px_rgba(251,191,36,0.3)]' 
                        : 'text-slate-200'
                      }`} 
                    />
                  ))}
                </div>

                {/* Testimonial Text - Font size reduced from 4xl to 2xl */}
                <p className="text-lg md:text-xl lg:text-2xl text-slate-700 font-medium italic leading-relaxed mb-10 relative px-4">
                   {reviews[current].text}
                </p>

                {/* Author Branding - Sized Down Avatar */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-school-blue to-blue-800 text-white flex items-center justify-center font-black text-lg mb-3 shadow-lg shadow-blue-900/20 transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                    {reviews[current].avatar}
                  </div>
                  <h4 className="text-lg font-black text-slate-900 tracking-tight">
                    {reviews[current].name}
                  </h4>
                  <p className="text-school-gold font-bold uppercase text-[10px] tracking-[0.2em] mt-0.5">
                    {reviews[current].role}
                  </p>
                </div>
              </div>

              {/* Dynamic Progress Bar */}
              <div className="absolute bottom-0 left-0 h-1 bg-slate-100 w-full">
                <div 
                  key={current}
                  className="h-full bg-school-gold transition-all animate-progress" 
                />
              </div>
            </div>
          </div>

          {/* Navigation Controls - More Compact */}
          <div className="flex justify-between items-center mt-8 px-2">
            <button 
              onClick={prevSlide}
              className="group p-3 rounded-xl bg-white shadow-md border border-slate-50 hover:bg-school-blue hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
            
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === current ? 'w-8 bg-school-blue' : 'w-1.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="group p-3 rounded-xl bg-white shadow-md border border-slate-50 hover:bg-school-blue hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;