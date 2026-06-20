import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useClock, fmt } from '../hooks/useClock';

const CLOCKS = [['chi', 'America/Chicago'], ['lon', 'Europe/London'], ['nyc', 'America/New_York']];
const MOTES = [['14%', '26%', '0s'], ['84%', '34%', '1.4s'], ['70%', '72%', '2.6s'], ['22%', '76%', '3.4s']];

const Hero = () => {
  const now = useClock();
  const prefersReduced = useReducedMotion();

  const entry = (delay = 0) => ({
    initial: { opacity: 0, y: prefersReduced ? 0 : 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: prefersReduced ? 0 : delay },
  });

  return (
    <header
      id="top"
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden', background: 'var(--bg)' }}
    >
      {/* radial glow */}
      <div style={{ position: 'absolute', inset: 0, background: 'var(--hero-radial)' }} />

      {/* grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.4,
        backgroundImage: 'linear-gradient(var(--white-05) 1px, transparent 1px), linear-gradient(90deg, var(--white-05) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
        WebkitMaskImage: 'radial-gradient(circle at 50% 44%, var(--bg) 0%, transparent 68%)',
        maskImage: 'radial-gradient(circle at 50% 44%, var(--bg) 0%, transparent 68%)',
      }} />

      {/* floating motes */}
      {MOTES.map(([l, t, d], i) => (
        <span
          key={i}
          className="mote"
          style={{ position: 'absolute', left: l, top: t, width: 4, height: 4, borderRadius: 99, background: 'var(--white-30)', animation: 'float 6s ease-in-out infinite', animationDelay: d }}
        />
      ))}

      <div style={{ maxWidth: 1400, margin: '0 auto', paddingLeft: 'var(--rail-px)', paddingRight: 'var(--rail-px)', paddingTop: 'var(--hero-pt)', paddingBottom: 'var(--section-py)', position: 'relative', width: '100%' }}>

        {/* eyebrow */}
        <motion.div className="mono hero-eyebrow" style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }} {...entry(0)}>
          <span>Full-Stack Developer</span>
          <span style={{ color: 'var(--white-20)' }}>/</span>
          <span>Selected Work / 2026</span>
          <span style={{ color: 'var(--white-20)' }}>/</span>
          {CLOCKS.map(([c, tz]) => (
            <span key={c} style={{ color: 'var(--white-40)' }}>{c} {fmt(now, tz)}</span>
          ))}
        </motion.div>

        {/* headline */}
        <motion.h1
          {...entry(0.08)}
          style={{ margin: 0, lineHeight: 0.92, fontSize: 'clamp(3rem, 11vw, 10rem)', letterSpacing: '-0.035em' }}
        >
          <span className="grad-text" style={{ fontWeight: 900, display: 'block' }}>Crafting</span>
          <span className="grad-text" style={{ fontWeight: 300, fontStyle: 'italic', display: 'block', letterSpacing: '-0.02em' }}>Digital</span>
          <span className="grad-text" style={{ fontWeight: 900, display: 'block' }}>Experiences</span>
        </motion.h1>

        {/* sub row */}
        <div className="hero-sub">
          <motion.p
            {...entry(0.16)}
            style={{ margin: 0, fontSize: 'clamp(1rem, 2.2vw, 1.2rem)', lineHeight: 1.6, color: 'var(--zinc-400)', maxWidth: 460 }}
          >
            I'm Souptik Sinha, a developer building modern, impactful web applications where{' '}
            <em style={{ color: 'var(--white-90)', fontStyle: 'italic' }}>engineering meets craft</em>.
          </motion.p>

          <motion.a
            href="#work"
            className="mono"
            {...entry(0.24)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: 'var(--fg)', textDecoration: 'none', fontSize: 12, borderBottom: '1px solid var(--white-30)', paddingBottom: 8 }}
          >
            View Selected Work →
          </motion.a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
