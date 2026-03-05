import React from 'react';
import { Clock } from 'lucide-react';

const Faculty = () => {
  return (
    <section id="faculty" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Our Dedicated Faculty
          </h2>
          <div className="w-24 h-1.5 bg-school-gold mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the experienced and passionate educators who guide our students.
          </p>
        </div>

        {/* Placeholder / Coming Soon Box */}
        <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
          <Clock className="w-16 h-16 text-school-blue mb-4 opacity-50" />
          <h3 className="text-2xl font-bold text-gray-700 mb-2">
            Will be updated soon
          </h3>
          <p className="text-gray-500 text-center max-w-md px-4">
            We are currently gathering the profiles of our esteemed teaching staff. Please check back later!
          </p>
        </div>

      </div>
    </section>
  );
};

export default Faculty;