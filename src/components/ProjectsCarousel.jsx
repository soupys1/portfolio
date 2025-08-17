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
    <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden" ref={carouselRef}>
      {/* Navigation Arrows - Mobile responsive */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 sm:left-4 sm:right-4 lg:left-8 lg:right-8 flex justify-between z-20 pointer-events-none">
        <button
          onClick={prevProject}
          className="w-10 h-10 sm:w-12 sm:h-12 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-black/90 hover:scale-110 active:scale-95 transition-all duration-300 pointer-events-auto touch-manipulation"
          aria-label="Previous project"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextProject}
          className="w-10 h-10 sm:w-12 sm:h-12 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-black/90 hover:scale-110 active:scale-95 transition-all duration-300 pointer-events-auto touch-manipulation"
          aria-label="Next project"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Stacked Cards Container - Mobile responsive */}
      <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-0">
        <AnimatePresence mode="wait">
          {projects.map((project, index) => {
            const isActive = index === currentIndex;
            const isNext = index === (currentIndex + 1) % projects.length;
            const isPrev = index === (currentIndex - 1 + projects.length) % projects.length;

            // Calculate position and scale for stacked effect - responsive
            let transform = '';
            let zIndex = 0;
            let opacity = 0;

            if (isActive) {
              transform = 'translateX(0) scale(1)';
              zIndex = 10;
              opacity = 1;
            } else if (isNext) {
              transform = 'translateX(40px) scale(0.95)'; // Smaller offset for mobile
              zIndex = 5;
              opacity = 0.6;
            } else if (isPrev) {
              transform = 'translateX(-40px) scale(0.95)'; // Smaller offset for mobile
              zIndex = 5;
              opacity = 0.6;
            } else {
              transform = 'translateX(80px) scale(0.9)'; // Smaller for mobile
              zIndex = 1;
              opacity = 0.3;
            }

            return (
              <motion.div
                key={project.title}
                className="absolute w-full max-w-sm sm:max-w-md lg:max-w-4xl h-[400px] sm:h-[450px] lg:h-[500px]" // Fully responsive
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
                  {/* Project Card - Mobile responsive layout */}
                  <div className="relative w-full h-full overflow-hidden rounded-xl lg:rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-2xl flex flex-col lg:flex-row">
                    
                    {/* Top/Left Side - Project Image */}
                    <div className="relative w-full lg:w-1/2 h-2/5 lg:h-full overflow-hidden">
                      <img
                        src={project.image || project.images?.[0]}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                    </div>

                    {/* Bottom/Right Side - Project Info */}
                    <div className="w-full lg:w-1/2 h-3/5 lg:h-full flex flex-col justify-between p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-800/95 to-gray-900/95">
                      {/* Top Section - Title and Description */}
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-3xl font-bold text-white mb-2 lg:mb-4 leading-tight">{project.title}</h3>
                        <p className="text-gray-300 text-sm sm:text-base lg:text-base leading-relaxed mb-3 lg:mb-6 line-clamp-2 sm:line-clamp-3 lg:line-clamp-4">
                          {project.desc}
                        </p>
                      </div>

                      {/* Middle Section - Tech Stack */}
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 lg:mb-8">
                        {/* Show 3 on mobile, 4 on tablet, 6 on desktop */}
                        <div className="flex flex-wrap gap-1 sm:gap-2 sm:hidden">
                          {project.tech.slice(0, 3).map(tech => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="px-2 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20">
                              +{project.tech.length - 3}
                            </span>
                          )}
                        </div>
                        {/* Show 4 on tablet */}
                        <div className="hidden sm:flex lg:hidden flex-wrap gap-2">
                          {project.tech.slice(0, 4).map(tech => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 4 && (
                            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20">
                              +{project.tech.length - 4}
                            </span>
                          )}
                        </div>
                        {/* Show 6 on desktop */}
                        <div className="hidden lg:flex flex-wrap gap-2">
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
                      </div>

                      {/* Bottom Section - Action Buttons */}
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none px-3 sm:px-5 py-2 lg:py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 active:scale-95 transition-all duration-200 text-xs sm:text-sm text-center touch-manipulation min-h-[44px] flex items-center justify-center"
                        >
                          GitHub
                        </a>
                        {project.backend && (
                          <a
                            href={project.backend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-none px-3 sm:px-5 py-2 lg:py-2.5 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 active:scale-95 transition-all duration-200 text-xs sm:text-sm border border-white/30 text-center touch-manipulation min-h-[44px] flex items-center justify-center"
                          >
                            Backend
                          </a>
                        )}
                        {project.website && (
                          <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-none px-3 sm:px-5 py-2 lg:py-2.5 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 active:scale-95 transition-all duration-200 text-xs sm:text-sm text-center touch-manipulation min-h-[44px] flex items-center justify-center"
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
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-white text-xs sm:text-sm font-medium">
        {currentIndex + 1} / {projects.length}
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 flex gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/30 hover:bg-white/50 active:bg-white/70'
            }`}
            style={{
              minWidth: '44px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label={`Go to project ${index + 1}`}
          >
            <span className={`w-3 h-3 rounded-full ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/30'
            }`}></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCarousel;