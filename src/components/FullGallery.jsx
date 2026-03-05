import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ArrowLeft, Grid3X3, Layers3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

const FullGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // 1. Vite automatically pulls all 100+ images from your assets/gallery folder
  const imageFiles = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true });

  const allImages = Object.keys(imageFiles).map((path, index) => {
    return {
      id: index,
      src: imageFiles[path].default,
      alt: `Panchagrami School Campus Image ${index + 1}`
    };
  });

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Back Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6 p-8 bg-white rounded-3xl shadow-lg border border-slate-100">
          <div>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-school-blue hover:text-school-gold transition-colors font-bold mb-3"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Homepage
            </Link>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              Complete Image <span className="text-school-blue">Archive.</span>
            </h1>
          </div>
          <div className="flex items-center gap-3 p-4 bg-slate-100 rounded-xl text-slate-600 font-medium">
            <Layers3 className="w-6 h-6 text-school-gold" />
            <span className="text-xl font-bold">{allImages.length} Photos</span>
            <span className="text-xs uppercase tracking-widest text-slate-400 hidden md:inline">Campus & Events</span>
          </div>
        </div>

        {/* 2. Optimized dense grid (5 columns) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {allImages.map((img, index) => (
            
            // Apply the 3D Tilt Wrapper to every single image
            <Tilt
              key={img.id}
              glareEnable={true}
              glareMaxOpacity={0.2} // Subtle glare for the full list
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              scale={1.02}
              transitionSpeed={2000}
              className="rounded-xl overflow-hidden shadow-sm"
            >
              <div 
                className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square bg-slate-200 transition-all duration-700 animate-cascade"
                style={{ animationDelay: `${index * 50}ms` }} // Cascade timing
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  loading="lazy" // Critical for 100+ images!
                  className="w-full h-full object-cover transform transition-transform duration-[8000ms] group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-school-blue/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                  <ZoomIn className="text-white w-8 h-8 transform scale-90 group-hover:scale-100 transition-transform delay-75 duration-300" />
                </div>
              </div>
            </Tilt>
          ))}
        </div>

        {/* Empty state fallback */}
        {allImages.length === 0 && (
          <div className="text-center text-slate-500 py-20 bg-white rounded-2xl border-2 border-dashed border-slate-300 mt-10">
            <Grid3X3 className="w-16 h-16 mx-auto mb-4 text-slate-300" />
            <p>No images found. Please add photos to your src/assets/gallery folder.</p>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
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
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10" />
          </div>
        </div>
      )}
    </div>
  );
};

export default FullGallery;