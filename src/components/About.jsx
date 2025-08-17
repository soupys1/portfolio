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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-gradient font-black mb-8">
            About Me
          </h2>
          
          <div className="space-y-6">
            <p className="text-xl text-white/80 leading-relaxed">
              I'm a <span className="font-semibold text-white">Software Developer</span> passionate about building modern, user-centric web applications that solve real-world problems.
            </p>
            
            <p className="text-xl text-white/80 leading-relaxed">
              Currently pursuing a <span className="font-semibold text-white">Master of Science in Software Engineering</span> to deepen my expertise in scalable system design and development.
            </p>

            <p className="text-lg text-white/60 leading-relaxed">
              I work at the intersection of aesthetic design, performance optimization, and strategic thinking to create impactful digital experiences.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-6">Technologies I work with</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techs.map((col, i) => (
                <ul key={i} className="space-y-3">
                  {col.map((tech) => (
                    <li
                      key={tech}
                      className="flex items-center gap-3 text-white/80 font-medium"
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      {tech}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Personal Interests */}
          <div className="mt-8">
            <p className="text-white/60 text-lg">
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
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl transform rotate-3"></div>
            <img
              src={portfolioImg}
              alt="Souptik Sinha"
              className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover object-center rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"></div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
