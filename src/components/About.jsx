import React from 'react';
import { motion } from 'framer-motion';
import portfolioImg from '../assets/portfolio.PNG';

const techs = [
  ['Node.js', 'Python', 'JavaScript ES6+'],
  ['Next.js', 'React.js', 'PostgreSQL'],
];

const About = () => (
  <section className="section-padding gradient-bg" id="about">
    <div className="container-custom">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-gradient font-black mb-6 lg:mb-8 text-center lg:text-left">
            About Me
          </h2>
          
          <div className="space-y-4 lg:space-y-6">
            <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
              I'm a <span className="font-semibold text-white">Software Developer</span> passionate about building modern, user-centric web applications that solve real-world problems.
            </p>
            
            <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
              Currently pursuing a <span className="font-semibold text-white">Master of Science in Software Engineering</span> to deepen my expertise in scalable system design and development.
            </p>

            <p className="text-base lg:text-lg text-white/60 leading-relaxed">
              I work at the intersection of aesthetic design, performance optimization, and strategic thinking to create impactful digital experiences.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mt-8 lg:mt-12">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6 text-center lg:text-left">Technologies I work with</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {techs.map((col, i) => (
                <ul key={i} className="space-y-2 lg:space-y-3">
                  {col.map((tech) => (
                    <li
                      key={tech}
                      className="flex items-center gap-3 text-white/80 font-medium text-sm lg:text-base"
                    >
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                      {tech}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Personal Interests */}
          <div className="mt-6 lg:mt-8">
            <p className="text-white/60 text-base lg:text-lg text-center lg:text-left">
              Outside of work, I'm interested in music, video games, and exploring new technologies through side projects.
            </p>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end order-first lg:order-last mb-8 lg:mb-0"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl transform rotate-3"></div>
            <img
              src={portfolioImg}
              alt="Souptik Sinha - Full Stack Developer"
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover object-center rounded-3xl shadow-2xl high-quality-image"
              loading="eager"
              decoding="sync"
              fetchpriority="high"
            />
            <div className="absolute -bottom-3 -right-3 lg:-bottom-4 lg:-right-4 w-16 h-16 lg:w-24 lg:h-24 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"></div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
