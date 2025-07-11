import React, { useState } from 'react';
import joinahackImg from '../assets/joinahack.PNG';
import conversoImg from '../assets/converso.PNG';

const projects = [
  {
    title: 'JoinAHack',
    desc: 'Full-stack social media platform for students to showcase projects, find hackathon teammates, and for organizers to manage events. Features real-time messaging, secure JWT authentication, and Supabase/Postgres integration. Built with React.js, Vite, Node.js, and Express.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'Supabase', 'Postgres', 'JWT'],
    image: joinahackImg,
    github: 'https://github.com/soupys1/socialMedia_frontend',
    website: 'https://social-media-frontend-black-five.vercel.app/',
    featured: true,
  },
  {
    title: 'Converso – AI Learning App',
    desc: 'Built a modern AI learning app with Next.js and React, enabling personalized real-time voice tutors using Vapi. Designed a responsive, accessible UI with TailwindCSS and developed full-stack features including API routes and real-time updates. Integrated Clerk for authentication, Supabase for database management, and deployed on Vercel for scalable delivery.',
    tech: ['Next.js', 'React', 'Vapi', 'TailwindCSS', 'Clerk', 'Supabase', 'Vercel'],
    image: conversoImg,
    github: 'https://github.com/soupys1/saas-ai-tutor',
    website: 'https://saas-app-lemon.vercel.app/',
    featured: true,
  },
  {
    title: 'Health Chat Bot - ML',
    desc: 'Built full-stack AI chatbot with Python Flask backend using Hugging Face RoBERTa model for sentiment analysis and React frontend. Created RESTful API using Flask for real-time sentiment analysis and empathetic response generation.',
    tech: ['Python', 'Flask', 'Hugging Face', 'RoBERTa', 'React'],
    github: 'https://github.com/soupys1/chatbotbackend',
    featured: false,
  },
];

const carouselProjects = projects.filter(p => p.featured);
const cardDeckProjects = projects;

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const total = carouselProjects.length;

  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  const project = carouselProjects[current];

  return (
    <section className="py-24 bg-slate-800" id="projects">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-gray-100 mb-16 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-gray-300 after:mx-auto after:mt-4">My Projects</h2>
        {/* Carousel Section */}
        <div className="mb-20">
          <h3 className="text-center text-2xl font-semibold text-gray-200 mb-8">Featured Projects</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
              <img src={project.image} alt={project.title} className="w-full h-80 object-cover" />
              <div className="p-8 text-center">
                <h3 className="text-slate-100 text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">{project.desc}</p>
                <div className="flex flex-wrap gap-3 mb-6 justify-center">
                  {project.tech && project.tech.map(t => (
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
                  {project.website && (
                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-emerald-400 text-slate-900 rounded-lg hover:bg-emerald-300 transition text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
            <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 rounded-full p-3 shadow-lg transition z-10">&#8592;</button>
            <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 rounded-full p-3 shadow-lg transition z-10">&#8594;</button>
          </div>
          <div className="flex justify-center gap-3 mt-6">
            {carouselProjects.map((_, idx) => (
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
              <div key={idx} className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl shadow-xl flex flex-col hover:-translate-y-1 hover:scale-105 transition-transform p-6 text-center items-center border border-slate-700">
                {/* No project image here */}
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-emerald-200 mb-4 text-sm flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tech && project.tech.map(t => (
                    <span key={t} className="bg-emerald-400 text-slate-900 px-3 py-1 rounded-full text-xs font-bold">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3 justify-center">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition text-xs font-semibold">GitHub</a>
                  {project.website && (
                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-emerald-400 text-slate-900 rounded-lg hover:bg-emerald-300 transition text-xs font-semibold">Live</a>
                  )}
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