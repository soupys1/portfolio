import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const DETAILS = [
  ['currently', 'Building full-stack products'],
  ['focus', 'React · RAG · AI Models · Backend'],
  ['stack', 'React · Next.js · Node.js · Python'],
  ['based in', 'Chicago, IL'],
];

const About = () => {
  const prefersReduced = useReducedMotion();

  const entry = (delay = 0) => ({
    initial: { opacity: 0, y: prefersReduced ? 0 : 26 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: prefersReduced ? 0 : delay },
    viewport: { once: true, margin: '-12%' },
  });

  return (
    <section id="about" style={{ padding: 'var(--section-py) 0', borderTop: '1px solid var(--white-10)' }}>
      <div
        className="about-grid"
        style={{ maxWidth: 1400, margin: '0 auto', padding: '0 var(--rail-px)', display: 'grid', gridTemplateColumns: 'minmax(0,1.55fr) minmax(0,1fr)', gap: 'clamp(40px, 6vw, 100px)' }}
      >
        {/* left: statement */}
        <motion.div {...entry(0)}>
          <span className="mono" style={{ display: 'block', marginBottom: 38, color: 'var(--white-50)' }}>02 About</span>
          <p style={{
            margin: 0,
            fontSize: 'clamp(1.4rem, 3.2vw, 2.4rem)',
            fontWeight: 500,
            lineHeight: 1.34,
            letterSpacing: '-0.02em',
            color: 'var(--white-90)',
          }}>
            I design and build full-stack products where{' '}
            <em style={{ color: 'var(--fg)', fontStyle: 'italic' }}>engineering meets craft</em>
            {', '}combining strong Node.js and Python backends with RAG pipelines and AI-powered React interfaces. I care about the details that make software feel{' '}
            <em style={{ color: 'var(--fg)', fontStyle: 'italic' }}>considered</em>.
          </p>
        </motion.div>

        {/* right: definition list */}
        <motion.div {...entry(0.12)}>
          <div style={{ borderTop: '1px solid var(--white-10)' }}>
            {DETAILS.map(([k, v]) => (
              <div key={k} style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: 16, padding: '18px 0', borderBottom: '1px solid var(--white-10)' }}>
                <span className="mono" style={{ color: 'var(--white-40)' }}>{k}</span>
                <span style={{ fontSize: 15, color: 'var(--white-80)', lineHeight: 1.5 }}>{v}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
