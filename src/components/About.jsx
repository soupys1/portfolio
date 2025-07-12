import React from 'react';
import portfolioImg from '../assets/portfolio.PNG';

const techs = [
  [ 'Node.js','Python', 'Javascript ES6+'],
  ['Next.js', 'React.js','PostgreSQL'],
];

const About = () => (
  <section className="py-16 md:py-32 bg-slate-900" id="about">
    <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-16">
      <div className="flex-1 min-w-0 order-2 md:order-1">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-6 md:mb-8 flex items-center gap-4 font-sans tracking-wide">
          <span className="text-emerald-300 text-4xl md:text-5xl font-mono">/</span> about me
        </h2>
        <p className="text-slate-200 text-lg md:text-xl leading-relaxed mb-6 md:mb-8 font-sans">
          I'm a <span className="font-bold text-white">Software Developer</span> passionate about building modern, user-centric web applications.<br className="hidden md:block" />
          Currently pursuing a <span className="font-bold text-emerald-300">Master of Science in Software Engineering</span> to deepen my expertise in scalable system design and development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          {techs.map((col, i) => (
            <ul key={i} className="list-none space-y-2 md:space-y-3">
              {col.map((tech) => (
                <li
                  key={tech}
                  className="text-emerald-300 font-mono text-base md:text-lg flex items-center gap-3"
                >
                  <span className="text-lg md:text-xl">&#9654;</span> {tech}
                </li>
              ))}
            </ul>
          ))}
        </div>

        <p className="text-slate-400 text-sm md:text-base leading-relaxed font-sans">
          Outside of work, I'm interested in music, video games, and side projects.
        </p>
      </div>

      <div className="flex-1 flex justify-center min-w-0 order-1 md:order-2 mb-8 md:mb-0">
        <img
          src={portfolioImg}
          alt="Profile"
          className="rounded-3xl shadow-xl w-64 h-64 md:w-96 md:h-96 object-cover object-center"
        />
      </div>
    </div>
  </section>
);

export default About;
