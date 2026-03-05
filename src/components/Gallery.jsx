import React, { useState } from 'react';
import { X, ZoomIn, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt'; // 1. Import Tilt

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // 2. Automatically fetch all images from assets/gallery
  const imageFiles = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true });

  // 3. Process the images and TAKE ONLY THE FIRST 8
  const allImages = Object.keys(imageFiles).map((path, index) => {
    return {
      id: index,
      src: imageFiles[path].default,
      alt: `Panchagrami School Campus Life ${index + 1}`
    };
  });

  const previewImages = allImages.slice(0, 8); // Limits the array

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative background element */}
      <div className="absolute inset-0 bg-slate-50 [mask-image:radial-gradient(#fff,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-school-gold font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
              Life at Panchagrami
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              Campus <span className="text-school-blue">Gallery.</span>
            </h2>
          </div>
          <p className="text-slate-600 max-w-sm">A visual journey through our academic environment, infrastructure, and student achievements.</p>
        </div>

        {/* 4. The Interactive Motion Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {previewImages.map((img, index) => (
            
            // 5. Apply the 3D Tilt Wrapper
            <Tilt
              key={img.id}
              glareEnable={true} // Add realistic shine
              glareMaxOpacity={0.4}
              glareColor="white"
              glarePosition="all"
              tiltMaxAngleX={10} // Control the tilt angles
              tiltMaxAngleY={10}
              scale={1.03} // Slight zoom on hover
              transitionSpeed={1500}
              className="parallax-effect rounded-2xl"
            >
              <div 
                className={`group relative overflow-hidden rounded-2xl shadow-lg border border-slate-100 cursor-pointer aspect-[4/5] bg-slate-100 transition-all duration-700 animate-cascade ${
                  index % 2 === 0 ? 'mt-4 md:mt-8' : '' // Subtle staggered column effect
                }`}
                style={{ animationDelay: `${index * 100}ms` }} // Cascade timing
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-transform duration-[10000ms] group-hover:scale-110"
                />
                
                {/* 6. Refined Hover Overlay */}
                <div className="absolute inset-0 bg-school-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-[1px]">
                  <div className="p-3 bg-white/10 rounded-full text-white transform scale-90 group-hover:scale-100 transition-transform delay-75 duration-300">
                    <ZoomIn className="w-8 h-8" />
                  </div>
                  <span className="text-white text-xs mt-3 font-bold uppercase tracking-widest opacity-70">Expand View</span>
                </div>

                {/* Glassmorphism Border Shimmer */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:via-white transition-all"></div>
              </div>
            </Tilt>
          ))}
        </div>

        {/* 7. Enhanced "View All" Button linking to /full-gallery */}
        <div className="mt-20 text-center">
          <Link 
            to="/full-gallery" 
            className="group relative inline-flex items-center gap-2 px-10 py-5 bg-school-blue text-white font-bold rounded-full overflow-hidden shadow-2xl shadow-blue-900/40 transform hover:-translate-y-1 transition-all duration-300 border border-blue-400"
          >
            <span className="absolute inset-0 bg-blue-700 w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
            <span className="relative z-10">Explore All {allImages.length} Photos</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

      {/* 8. The Custom Animated Lightbox (Modal) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
          onClick={handleOverlayClick}
        >
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-gray-400 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center animate-scale-up">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            <p className="text-white/60 mt-4 text-sm font-medium tracking-wide">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;