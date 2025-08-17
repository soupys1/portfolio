import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[700px] overflow-hidden" ref={carouselRef}>
      {/* Navigation Arrows - Horizontal for landscape */}
      <div className="absolute top-1/2 -translate-y-1/2 left-8 right-8 flex justify-between z-20 pointer-events-none">
        <button
          onClick={prevProject}
          className="w-12 h-12 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-black/90 hover:scale-110 transition-all duration-300 pointer-events-auto"
          aria-label="Previous project"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextProject}
          className="w-12 h-12 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-black/90 hover:scale-110 transition-all duration-300 pointer-events-auto"
          aria-label="Next project"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Stacked Cards Container - Landscape Layout */}
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          {projects.map((project, index) => {
            const isActive = index === currentIndex;
            const isNext = index === (currentIndex + 1) % projects.length;
            const isPrev = index === (currentIndex - 1 + projects.length) % projects.length;

            // Calculate position and scale for stacked effect - now horizontal
            let transform = '';
            let zIndex = 0;
            let opacity = 0;

            if (isActive) {
              transform = 'translateX(0) scale(1)';
              zIndex = 10;
              opacity = 1;
            } else if (isNext) {
              transform = 'translateX(120px) scale(0.85)';
              zIndex = 5;
              opacity = 0.7;
            } else if (isPrev) {
              transform = 'translateX(-120px) scale(0.85)';
              zIndex = 5;
              opacity = 0.7;
            } else {
              transform = 'translateX(240px) scale(0.7)';
              zIndex = 1;
              opacity = 0.4;
            }

            return (
              <motion.div
                key={project.title}
                className="absolute w-[900px] h-[500px]" // Landscape dimensions
                initial={{ opacity: 0, x: 200, scale: 0.8 }}
                animate={isVisible ? {
                  opacity: opacity,
                  x: transform.includes('translateX(') ?
                    parseInt(transform.match(/translateX\(([^)]+)\)/)?.[1] || '0') : 0,
                  scale: transform.includes('scale(') ?
                    parseFloat(transform.match(/scale\(([^)]+)\)/)?.[1] || '1') : 1,
                  zIndex: zIndex
                } : { opacity: 0, x: 200, scale: 0.8 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                style={{ zIndex }}
              >
                <div className="relative w-full h-full group">
                  {/* Project Card - Landscape Layout */}
                  <div className="relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-2xl flex">
                    
                    {/* Left Side - Project Image */}
                    <div className="relative w-1/2 h-full overflow-hidden">
                      <img
                        src={project.image || project.images?.[0]}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                    </div>

                    {/* Right Side - Project Info */}
                    <div className="w-1/2 h-full flex flex-col justify-between p-8 bg-gradient-to-br from-gray-800/95 to-gray-900/95">
                      {/* Top Section - Title and Description */}
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{project.title}</h3>
                        <p className="text-gray-300 text-base leading-relaxed mb-6 line-clamp-4">
                          {project.desc}
                        </p>
                      </div>

                      {/* Middle Section - Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.slice(0, 6).map(tech => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 6 && (
                          <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20">
                            +{project.tech.length - 6}
                          </span>
                        )}
                      </div>

                      {/* Bottom Section - Action Buttons */}
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 text-sm hover:scale-105"
                        >
                          Frontend
                        </a>
                        {project.backend && (
                          <a
                            href={project.backend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-200 text-sm border border-white/30 hover:scale-105"
                          >
                            Backend
                          </a>
                        )}
                        {project.website && (
                          <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 text-sm hover:scale-105"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Project Counter */}
      <div className="absolute bottom-8 left-8 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
        {currentIndex + 1} / {projects.length}
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCarousel;