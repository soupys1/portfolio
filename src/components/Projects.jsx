import React from 'react';
import { motion } from 'framer-motion';
import ProjectsCarousel from './ProjectsCarousel';
import joinahackImg from '../assets/joinahack.PNG';
import conversoImg from '../assets/converso.PNG';
import footballImg from '../assets/football.PNG';  

const projects = [
  {
    title: 'ML Football Predictions',
    desc: 'Full-stack machine learning application for predicting football match outcomes using historical data. Built with Python Flask backend for ML model serving and React frontend for interactive predictions. Features real-time predictions, historical data analysis, and comprehensive match statistics.',
    tech: ['Python', 'Flask', 'React', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Vercel'],
    image: footballImg, 
    github: 'https://github.com/soupys1/ML-football-predictions-frontend',
    backend: 'https://github.com/soupys1/ML-football-predictions-backend',
    website: 'https://ml-football-predictions-frontend.vercel.app/',
    featured: true,
    hasCarousel: true,
  },
  {
    title: 'JoinAHack',
    desc: 'Full-stack social media platform for students to showcase projects, find hackathon teammates, and for organizers to manage events. Features real-time messaging, secure JWT authentication, and Supabase/Postgres integration.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'Supabase', 'Postgres', 'JWT'],
    image: joinahackImg,
    github: 'https://github.com/soupys1/socialMedia_frontend',
    website: 'https://social-media-frontend-black-five.vercel.app/',
    featured: true,
  },
  {
    title: 'Converso – AI Learning App',
    desc: 'Built a modern AI learning app with Next.js and React, enabling personalized real-time voice tutors using Vapi. Designed a responsive, accessible UI with TailwindCSS and developed full-stack features.',
    tech: ['Next.js', 'React', 'Vapi', 'TailwindCSS', 'Clerk', 'Supabase', 'Vercel'],
    image: conversoImg,
    github: 'https://github.com/soupys1/saas-ai-tutor',
    website: 'https://saas-app-lemon.vercel.app/',
    featured: true,
  },
  {
    title: 'Health Chat Bot - ML',
    desc: 'Built full-stack AI chatbot with Python Flask backend using Hugging Face RoBERTa model for sentiment analysis and React frontend. Created RESTful API using Flask for real-time sentiment analysis.',
    tech: ['Python', 'Flask', 'Hugging Face', 'RoBERTa', 'React'],
    github: 'https://github.com/soupys1/chatbotbackend',
    featured: false,
  },
];

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section className="py-32 bg-gradient-to-br from-black via-gray-900 to-black" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here is a selection of my most recent works. Navigate through projects to explore each one in detail.
          </p>
        </motion.div>

        {/* Featured Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <ProjectsCarousel projects={featuredProjects} />
        </motion.div>

        {/* All Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">All Projects</h3>
          <p className="text-gray-300">Additional works and experiments</p>
        </motion.div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-6 group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.desc}</p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 3).map(tech => (
                  <span 
                    key={tech} 
                    className="px-2 py-1 bg-gray-700 text-gray-200 text-xs font-medium rounded"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 bg-gray-700 text-gray-200 text-xs font-medium rounded">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-2 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition-colors duration-200 text-sm text-center"
                >
                  Frontend
                </a>
                {project.backend && (
                  <a 
                    href={project.backend} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition-colors duration-200 text-sm text-center"
                  >
                    Backend
                  </a>
                )}
                {project.website && (
                  <a 
                    href={project.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 border border-gray-600 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm text-center"
                  >
                    Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">Have a project in mind?</p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
          >
            Let's talk about it!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
