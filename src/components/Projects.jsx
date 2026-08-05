import { useState } from 'react';
import gsap from 'gsap';
import CardSwap, { Card } from './CardSwap';
import footballImg    from '../assets/football.PNG';
import joinahackImg   from '../assets/joinahack.PNG';
import conversoImg    from '../assets/converso.PNG';
import aiCompanionImg from '../assets/AIcompanion.png';
import crmImg         from '../assets/pulse.png';

const WORK = [
  { n: '01', title: 'AI Travel Companion',     tag: 'AI · Full-stack',  year: '2025', image: aiCompanionImg, href: 'https://travel-companion-frontend-sandy.vercel.app/' },
  { n: '02', title: 'CRM Platform',            tag: 'Full-stack',       year: '2025', image: crmImg,         href: 'https://crm-frontend-nu-gold.vercel.app/login' },
  { n: '03', title: 'ML Football Predictions', tag: 'Machine learning', year: '2025', image: footballImg,    href: 'https://ml-football-predictions-frontend.vercel.app/' },
  { n: '04', title: 'JoinAHack',               tag: 'Social platform',  year: '2024', image: joinahackImg,   href: 'https://social-media-frontend-black-five.vercel.app/' },
  { n: '05', title: 'Converso',                tag: 'AI · Voice',       year: '2024', image: conversoImg,    href: 'https://saas-app-lemon.vercel.app/' },
];

function ProjectRow({ w }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={w.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '34px 1fr auto',
        alignItems: 'center',
        gap: 20,
        padding: '18px 0',
        paddingLeft: hovered ? 10 : 0,
        borderBottom: '1px solid rgba(255,255,255,.1)',
        textDecoration: 'none',
        transition: 'padding-left .25s ease-out',
      }}
    >
      <span style={{ fontSize: 13, color: 'rgba(245,245,246,.4)', fontWeight: 400 }}>{w.n}</span>
      <span style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em', color: hovered ? '#ff3d57' : '#fff', transition: 'color .25s ease-out' }}>
        {w.title}
      </span>
      <span style={{ fontSize: 18, color: hovered ? '#ff3d57' : 'rgba(245,245,246,.4)', transition: 'color .25s ease-out', lineHeight: 1 }}>↗</span>
    </a>
  );
}

function ProjectCard({ w }) {
  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.14, y: '-=26', duration: 0.32,
      ease: 'back.out(2.4)', overwrite: 'auto',
    });
    e.currentTarget.style.borderColor = '#ff3d57';
    e.currentTarget.style.boxShadow =
      '0 46px 80px -14px rgba(0,0,0,.85), 0 0 0 1px rgba(255,61,87,.6), 0 26px 60px -10px rgba(255,61,87,.6)';
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1, y: '+=26', duration: 0.32,
      ease: 'power2.out', overwrite: 'auto',
    });
    e.currentTarget.style.borderColor = 'rgba(255,255,255,.22)';
    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0,0,0,.7)';
  };

  return (
    <Card onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a
        href={w.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', textDecoration: 'none' }}
      >
        {/* Fake browser title bar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,.12)',
          flexShrink: 0,
        }}>
          <span style={{ width: 9, height: 9, borderRadius: 99, background: '#ff3d57', flexShrink: 0 }} />
          <span style={{ width: 9, height: 9, borderRadius: 99, background: 'rgba(255,255,255,.2)', flexShrink: 0 }} />
          <span style={{ width: 9, height: 9, borderRadius: 99, background: 'rgba(255,255,255,.2)', flexShrink: 0 }} />
          <span style={{ marginLeft: 'auto', fontSize: 11, color: 'rgba(245,245,246,.4)', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' }}>
            {w.year}
          </span>
        </div>

        {/* Screenshot */}
        <div style={{ flex: 1, overflow: 'hidden', minHeight: 0 }}>
          <img
            src={w.image}
            alt={w.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
          />
        </div>

        {/* Footer */}
        <div style={{ padding: '14px 18px 16px', borderTop: '1px solid rgba(255,255,255,.12)', flexShrink: 0 }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em', marginBottom: 2 }}>{w.title}</div>
          <div style={{ fontSize: 13, color: '#ff3d57', fontWeight: 600 }}>{w.tag}</div>
        </div>
      </a>
    </Card>
  );
}

export default function Projects() {
  return (
    <section id="work" style={{ borderTop: '1px solid rgba(255,255,255,.1)', overflow: 'hidden' }}>

      {/* Desktop: two-column grid */}
      <div
        className="work-two-col"
        style={{
          maxWidth: 1280, margin: '0 auto', padding: '96px 40px',
          display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
          gap: 120, alignItems: 'center',
        }}
      >
        {/* Left: project index */}
        <div>
          <div className="eyebrow" style={{ marginBottom: 24 }}>01 Selected work — 05 projects</div>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 700,
            letterSpacing: '-0.02em', color: '#fff', marginBottom: 48, lineHeight: 1.1,
          }}>
            Things I've built
          </h2>
          <div style={{ borderTop: '1px solid rgba(255,255,255,.1)' }}>
            {WORK.map(w => <ProjectRow key={w.n} w={w} />)}
          </div>
        </div>

        {/* Right: card stack */}
        <div
          className="card-swap-col"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
            minHeight: 600, position: 'relative', paddingRight: 140,
          }}
        >
          <CardSwap
            width={300}
            height={250}
            cardDistance={34}
            verticalDistance={42}
            delay={2000}
            skewAmount={5}
            easing="elastic"
            pauseOnHover
          >
            {WORK.map(w => <ProjectCard key={w.n} w={w} />)}
          </CardSwap>
        </div>
      </div>

      {/* Mobile: stacked list */}
      <div
        className="work-cards-mobile"
        style={{ flexDirection: 'column', gap: 16, padding: '48px 24px 80px', maxWidth: 640, margin: '0 auto' }}
      >
        <div className="eyebrow" style={{ marginBottom: 20 }}>01 Selected work</div>
        <h2 style={{
          fontSize: 'clamp(28px, 7vw, 40px)', fontWeight: 700,
          letterSpacing: '-0.02em', color: '#fff', marginBottom: 32, lineHeight: 1.1,
        }}>
          Things I've built
        </h2>
        {WORK.map(w => (
          <a
            key={w.n}
            href={w.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', flexDirection: 'column', borderRadius: 12,
              overflow: 'hidden', background: '#141416',
              border: '1px solid rgba(255,255,255,.22)', textDecoration: 'none',
            }}
          >
            <img src={w.image} alt={w.title} style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', objectPosition: 'top' }} />
            <div style={{ padding: '12px 16px' }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>{w.title}</div>
              <div style={{ fontSize: 12, color: '#ff3d57', marginTop: 4 }}>{w.tag}</div>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}
