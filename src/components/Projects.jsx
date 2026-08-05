import { useState, useRef } from 'react';
import gsap from 'gsap';
import CardSwap, { Card } from './CardSwap';
import footballImg    from '../assets/football.PNG';
import joinahackImg   from '../assets/joinahack.PNG';
import conversoImg    from '../assets/converso.PNG';
import aiCompanionImg from '../assets/AIcompanion.png';
import crmImg         from '../assets/pulse.png';

const WORK = [
  { n: '01', title: 'AI Travel Companion', tag: 'AI · Full-stack',      year: '2025', image: aiCompanionImg, href: 'https://travel-companion-frontend-sandy.vercel.app/' },
  { n: '02', title: 'CRM Platform',        tag: 'Full-stack',            year: '2025', image: crmImg,         href: 'https://crm-frontend-nu-gold.vercel.app/login' },
  { n: '03', title: 'ML Football Predictions', tag: 'Machine learning',  year: '2025', image: footballImg,    href: 'https://ml-football-predictions-frontend.vercel.app/' },
  { n: '04', title: 'JoinAHack',            tag: 'Social platform',      year: '2024', image: joinahackImg,   href: 'https://social-media-frontend-black-five.vercel.app/' },
  { n: '05', title: 'Converso',             tag: 'AI · Voice',           year: '2024', image: conversoImg,    href: 'https://saas-app-lemon.vercel.app/' },
];

function ProjectRow({ w, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={w.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:        'grid',
        gridTemplateColumns: '36px 1fr auto',
        alignItems:     'center',
        gap:            20,
        padding:        '20px 0',
        borderBottom:   '1px solid var(--hairline)',
        textDecoration: 'none',
        paddingLeft:    hovered ? 10 : 0,
        transition:     'padding-left .2s var(--ease)',
      }}
    >
      <span style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 400 }}>{w.n}</span>
      <span style={{
        fontSize:      24,
        fontWeight:    700,
        letterSpacing: '-0.02em',
        color:         hovered ? 'var(--accent)' : '#fff',
        transition:    'color .2s',
      }}>
        {w.title}
      </span>
      <span style={{
        fontSize:   18,
        color:      hovered ? 'var(--accent)' : 'var(--muted)',
        transition: 'color .2s',
        lineHeight: 1,
      }}>
        ↗
      </span>
    </a>
  );
}

function ProjectCard({ w }) {
  const ref = useRef(null);

  const onEnter = () => {
    gsap.to(ref.current, {
      scale: 1.14,
      y: '-=26',
      duration: 0.32,
      ease: 'back.out(2.4)',
      overwrite: 'auto',
      borderColor: '#ff3d57',
      boxShadow: '0 46px 80px -14px rgba(0,0,0,.85), 0 0 0 1px rgba(255,61,87,.6), 0 26px 60px -10px rgba(255,61,87,.6)',
    });
  };

  const onLeave = () => {
    gsap.to(ref.current, {
      scale: 1,
      y: '+=26',
      duration: 0.25,
      ease: 'power2.out',
      overwrite: 'auto',
      borderColor: 'rgba(255,255,255,.22)',
      boxShadow: 'none',
    });
  };

  return (
    <a
      ref={ref}
      href={w.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        position:     'absolute',
        top: 0, left: 0,
        width:        '100%',
        height:       '100%',
        borderRadius: 14,
        overflow:     'hidden',
        background:   '#141416',
        border:       '1px solid rgba(255,255,255,.22)',
        textDecoration: 'none',
        display:      'flex',
        flexDirection:'column',
        willChange:   'transform',
      }}
    >
      {/* Title bar */}
      <div style={{
        display:    'flex',
        alignItems: 'center',
        gap:        6,
        padding:    '10px 14px',
        borderBottom: '1px solid var(--hairline)',
        flexShrink: 0,
      }}>
        <span style={{ width: 9, height: 9, borderRadius: 99, background: 'var(--accent)', flexShrink: 0 }} />
        <span style={{ width: 9, height: 9, borderRadius: 99, background: 'rgba(255,255,255,.20)', flexShrink: 0 }} />
        <span style={{ width: 9, height: 9, borderRadius: 99, background: 'rgba(255,255,255,.20)', flexShrink: 0 }} />
        <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--muted)', fontWeight: 400 }}>{w.year}</span>
      </div>

      {/* Screenshot */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <img
          src={w.image}
          alt={w.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
        />
      </div>

      {/* Footer */}
      <div style={{
        padding:        '10px 14px',
        borderTop:      '1px solid var(--hairline)',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-between',
        flexShrink:     0,
      }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>{w.title}</span>
        <span style={{
          fontSize:    11,
          fontWeight:  700,
          color:       'var(--accent)',
          background:  'rgba(255,61,87,.12)',
          padding:     '3px 8px',
          borderRadius: 99,
          whiteSpace:  'nowrap',
        }}>
          {w.tag}
        </span>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="work" style={{ borderTop: '1px solid var(--hairline)' }}>
      <div
        className="work-two-col"
        style={{
          maxWidth:             1280,
          margin:               '0 auto',
          padding:              '96px 40px',
          display:              'grid',
          gridTemplateColumns:  '1fr 1fr',
          gap:                  120,
          alignItems:           'start',
        }}
      >
        {/* Left: index list */}
        <div>
          <div className="eyebrow" style={{ marginBottom: 24 }}>01 Work</div>
          <h2 style={{
            fontSize:      'clamp(32px, 5vw, 60px)',
            fontWeight:    700,
            letterSpacing: '-0.02em',
            color:         '#fff',
            marginBottom:  48,
            lineHeight:    1.1,
          }}>
            Things I've built
          </h2>

          <div style={{ borderTop: '1px solid var(--hairline)' }}>
            {WORK.map((w, i) => <ProjectRow key={w.n} w={w} index={i} />)}
          </div>
        </div>

        {/* Right: CardSwap (hidden on mobile via CSS) */}
        <div
          className="card-swap-col"
          style={{
            display:        'flex',
            justifyContent: 'flex-start',
            alignItems:     'flex-start',
            minHeight:      600,
            paddingRight:   80,
            paddingTop:     120,
          }}
        >
          <CardSwap
            width={280}
            height={220}
            cardDistance={28}
            verticalDistance={38}
            delay={2000}
            skewAmount={5}
            pauseOnHover
          >
            {WORK.map(w => (
              <ProjectCard key={w.n} w={w} />
            ))}
          </CardSwap>
        </div>
      </div>

      {/* Mobile card grid */}
      <div
        className="work-cards-mobile"
        style={{
          display:             'none',
          gridTemplateColumns: '1fr 1fr',
          gap:                 16,
          padding:             '0 40px 96px',
          maxWidth:            1280,
          margin:              '0 auto',
        }}
      >
        {WORK.map(w => (
          <a
            key={w.n}
            href={w.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display:      'flex',
              flexDirection:'column',
              borderRadius: 12,
              overflow:     'hidden',
              background:   '#141416',
              border:       '1px solid var(--hairline)',
              textDecoration:'none',
            }}
          >
            <img src={w.image} alt={w.title} style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', objectPosition: 'top' }} />
            <div style={{ padding: '10px 12px' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{w.title}</div>
              <div style={{ fontSize: 11, color: 'var(--accent)', marginTop: 4 }}>{w.tag}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
