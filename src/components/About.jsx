import React from 'react';

const techs = [
  [ 'Node.js','Python', 'Javascript ES6+'],
  ['Next.js', 'React.js','PostgreSQL'],
];

const About = () => (
  <section className="py-32 bg-slate-900" id="about">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1 min-w-0">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-8 flex items-center gap-4 font-sans tracking-wide">
          <span className="text-emerald-300 text-5xl font-mono">/</span> about me
        </h2>
        <p className="text-slate-200 text-xl leading-relaxed mb-8 font-sans">
          I am a <span className="font-bold text-white">Software Developer</span> passionate about building modern web applications.<br />
          I am pursuing a <span className="font-bold text-emerald-300">Master's of Science</span> in Software Engineering.
        </p>

        <div className="grid grid-cols-2 gap-6 mb-8">
          {techs.map((col, i) => (
            <ul key={i} className="list-none space-y-3">
              {col.map((tech) => (
                <li
                  key={tech}
                  className="text-emerald-300 font-mono text-lg flex items-center gap-3"
                >
                  <span className="text-xl">&#9654;</span> {tech}
                </li>
              ))}
            </ul>
          ))}
        </div>

        <p className="text-slate-400 text-base leading-relaxed font-sans">
          Outside of work, I'm interested in science, video games, and side projects.
        </p>
      </div>

      <div className="flex-1 flex justify-center min-w-0">
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=300&h=300&q=80"
          alt="Profile"
          className="rounded-3xl shadow-xl w-56 h-56 object-cover object-center"
        />
      </div>
    </div>
  </section>
);

export default About;
