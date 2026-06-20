import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import footballImg from '../assets/football.PNG';
import joinahackImg from '../assets/joinahack.PNG';
import conversoImg from '../assets/converso.PNG';
import aiCompanionImg from '../assets/AIcompanion.png';
import crmImg from '../assets/pulse.png';

const WORK = [
  {
    n: '01',
    title: 'ai travel companion',
    desc: 'full-stack ai-powered travel companion for personalised trip planning and real-time destination recommendations.',
    year: '2025',
    image: aiCompanionImg,
    href: 'https://travel-companion-frontend-sandy.vercel.app/',
  },
  {
    n: '02',
    title: 'crm platform',
    desc: 'full-stack customer relationship management platform with lead tracking, pipeline management, and analytics dashboard.',
    year: '2025',
    image: crmImg,
    href: 'https://crm-frontend-nu-gold.vercel.app/login',
  },
  {
    n: '03',
    title: 'ml football predictions',
    desc: 'full-stack ml app predicting match outcomes with a python flask backend serving the model and react front end for live stats.',
    year: '2025',
    image: footballImg,
    href: 'https://ml-football-predictions-frontend.vercel.app/',
  },
  {
    n: '04',
    title: 'joinahack',
    desc: 'social platform to showcase projects and find hackathon teammates, realtime messaging, jwt auth, supabase and postgres.',
    year: '2024',
    image: joinahackImg,
    href: 'https://social-media-frontend-black-five.vercel.app/',
  },
  {
    n: '05',
    title: 'converso',
    desc: 'ai learning app with personalised real-time voice tutors, built on next.js and vapi with a responsive, accessible ui.',
    year: '2024',
    image: conversoImg,
    href: 'https://saas-app-lemon.vercel.app/',
  },
];

const Projects = () => {
  const [active, setActive] = useState(null);
  const prefersReduced = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 300, damping: 30 });
  const y = useSpring(my, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    mx.set(e.clientX);
    my.set(e.clientY);
  };

  const entry = (delay = 0) => ({
    initial: { opacity: 0, y: prefersReduced ? 0 : 26 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: prefersReduced ? 0 : delay },
    viewport: { once: true, margin: '-12%' },
  });

  return (
    <section id="work" style={{ padding: '130px 0' }} onMouseMove={handleMouseMove}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 48px' }}>

        {/* header */}
        <motion.div
          {...entry(0)}
          style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 16 }}
        >
          <h2 style={{ margin: 0, fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#fff' }}>
            selected work
          </h2>
          <span className="mono" style={{ color: 'var(--white-50)' }}>
            {String(WORK.length).padStart(2, '0')} projects
          </span>
        </motion.div>

        {/* work list */}
        <div style={{ borderTop: '1px solid var(--white-10)' }}>
          {WORK.map((w, i) => {
            const isActive = active === i;
            const isDimmed = active !== null && !isActive;
            return (
              <motion.div
                key={w.n}
                {...entry(i * 0.08)}
                style={{ borderBottom: '1px solid var(--white-10)' }}
              >
                <a
                  href={w.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '56px 1fr auto',
                    alignItems: 'start',
                    gap: 'clamp(16px, 3vw, 48px)',
                    padding: 'clamp(26px, 3.6vw, 46px) 0',
                    textDecoration: 'none',
                    transition: 'opacity .4s var(--ease)',
                    opacity: isDimmed ? 0.3 : 1,
                  }}
                >
                  {/* index */}
                  <span className="mono" style={{ fontSize: 13, color: 'var(--white-40)', paddingTop: 10 }}>{w.n}</span>

                  {/* title + desc */}
                  <span style={{ display: 'block' }}>
                    <span style={{
                      display: 'block',
                      fontSize: 'clamp(1.7rem, 4.6vw, 3.4rem)',
                      fontWeight: 800,
                      letterSpacing: '-0.03em',
                      color: '#fff',
                      transition: 'transform .4s var(--ease)',
                      transform: isActive ? 'translateX(16px)' : 'none',
                    }}>
                      {w.title}
                    </span>
                    <span style={{
                      display: 'block',
                      marginTop: 14,
                      maxWidth: 460,
                      fontSize: 14.5,
                      lineHeight: 1.55,
                      color: 'var(--zinc-400)',
                      transition: 'transform .4s var(--ease) .03s',
                      transform: isActive ? 'translateX(16px)' : 'none',
                    }}>
                      {w.desc}
                    </span>
                  </span>

                  {/* year + arrow */}
                  <span style={{ display: 'flex', alignItems: 'center', gap: 'clamp(14px, 2.4vw, 34px)', justifySelf: 'end', paddingTop: 10 }}>
                    <span className="mono" style={{ color: 'var(--white-40)' }}>{w.year}</span>
                    <span style={{
                      color: isActive ? '#fff' : 'var(--white-40)',
                      transition: 'color .3s var(--ease), transform .4s var(--ease)',
                      transform: isActive ? 'translateX(6px)' : 'none',
                      display: 'inline-flex',
                    }}>
                      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </span>
                </a>

                {/* mobile inline thumbnail */}
                <img
                  className="work-thumb"
                  src={w.image}
                  alt={w.title}
                  style={{ width: '100%', borderRadius: 12, border: '1px solid var(--white-10)', marginBottom: 26, objectFit: 'cover', aspectRatio: '16/10' }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* cursor-follow image reveal (desktop only) */}
      <motion.div
        className="work-cursor"
        style={{
          position: 'fixed', left: 0, top: 0, zIndex: 40, pointerEvents: 'none',
          width: 'clamp(260px, 24vw, 400px)', aspectRatio: '16 / 10',
          borderRadius: 14, overflow: 'hidden',
          border: '1px solid var(--white-20)',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.6)',
          x, y,
          translateX: '-50%', translateY: '-50%',
        }}
        animate={{ opacity: active !== null ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      >
        {WORK.map((w, i) => (
          <motion.img
            key={i}
            src={w.image}
            alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            animate={{ opacity: active === i ? 1 : 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
