import React, { useState } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'A full-featured online shopping platform with payment integration and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: 'https://source.unsplash.com/random/800x400?ecommerce',
    github: '#',
    website: '#',
  },
  {
    title: 'Social Media App',
    desc: 'A modern social networking application with real-time messaging and media sharing.',
    tech: ['React Native', 'Firebase', 'Socket.io'],
    image: 'https://source.unsplash.com/random/800x400?social',
    github: '#',
    website: '#',
  },
  {
    title: 'Analytics Dashboard',
    desc: 'A comprehensive analytics dashboard with data visualization and reporting features.',
    tech: ['Vue.js', 'D3.js', 'Python'],
    image: 'https://source.unsplash.com/random/800x400?dashboard',
    github: '#',
    website: '#',
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const total = projects.length;

  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  const project = projects[current];

  return (
    <section className="py-24 bg-slate-800" id="projects">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-gray-100 mb-16 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-gray-300 after:mx-auto after:mt-4">My Projects</h2>
        
        {/* Carousel Section */}
        <div className="mb-20">
          <h3 className="text-center text-2xl font-semibold text-gray-200 mb-8">Featured Projects</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
              <img src={project.image} alt={project.title} className="w-full h-80 object-cover" />
              <div className="p-8 text-center">
                <h3 className="text-slate-800 text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">{project.desc}</p>
                <div className="flex flex-wrap gap-3 mb-6 justify-center">
                  {project.tech.map(t => (
                    <span key={t} className="bg-emerald-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3 justify-center">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href={project.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-emerald-400 text-slate-900 rounded-lg hover:bg-emerald-300 transition text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live
                  </a>
                </div>
              </div>
            </div>
            <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 rounded-full p-3 shadow-lg transition z-10">&#8592;</button>
            <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 rounded-full p-3 shadow-lg transition z-10">&#8594;</button>
          </div>
          <div className="flex justify-center gap-3 mt-6">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-4 h-4 rounded-full transition ${idx === current ? 'bg-emerald-400' : 'bg-gray-400'}`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid Section */}
        <div>
          <h3 className="text-center text-2xl font-semibold text-gray-200 mb-12">All Projects</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-900 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:-translate-y-2 transition-transform p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {project.tech.map(t => (
                    <span key={t} className="bg-emerald-400 text-slate-900 px-3 py-1 rounded-full text-xs font-bold">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4 justify-center">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700 transition">GitHub</a>
                  <a href={project.website} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-emerald-400 text-slate-900 rounded hover:bg-emerald-300 transition">Live</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 