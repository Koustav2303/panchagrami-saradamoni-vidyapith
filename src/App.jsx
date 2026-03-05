import React from 'react';
// Changed BrowserRouter to HashRouter right here:
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// Import all your individual section components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import FullGallery from './components/FullGallery';
import Faculty from './components/Faculty';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import NoticeBoard from './components/NoticeBoard';
import Admission from './components/Admission';

// The Home component stacks all your landing page sections in order
const Home = () => (
  <main>
    <Hero />
    <NoticeBoard />
    <About />
    <Stats />
    <Admission />
    <Gallery />
    <Faculty />
    <Testimonials />
  </main>
);

function App() {
  return (
    <Router>
      {/* 1. This component must stay inside the Router to access the navigation state */}
      <ScrollToTop />
      
      {/* We apply a global font and background color to the entire app */}
      <div className="font-sans text-gray-900 bg-gray-50 min-h-screen flex flex-col">
        
        {/* Navbar is outside the Routes so it persists across all pages */}
        <Navbar />
        
        {/* Main Content Area */}
        <div className="flex-grow">
          <Routes>
            {/* The main scrolling homepage */}
            <Route path="/" element={<Home />} />
            
            {/* The dedicated full image gallery page */}
            <Route path="/full-gallery" element={<FullGallery />} />
          </Routes>
        </div>

        {/* Footer is outside the Routes so it always anchors the bottom of the site */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;