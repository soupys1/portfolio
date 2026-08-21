import { useState, useEffect, useRef } from 'react';
import Carousel from './Carousel';

import aiCompanionImg from '../assets/AIcompanion.png';
import crmImg         from '../assets/pulse.png';
import footballImg    from '../assets/football.PNG';
import joinahackImg   from '../assets/joinahack.PNG';
import conversoImg    from '../assets/converso.PNG';
import studyforgeImg  from '../assets/studyforge.png';

const ACCENT = '#c084fc';

const WORK = [
  { n: '01', title: 'StudyForge',              tag: 'AI · EdTech',      year: '2026', image: studyforgeImg,  href: 'https://studyforge-frontend-nu.vercel.app/' },
  { n: '02', title: 'AI Travel Companion',     tag: 'AI · Full-stack',  year: '2026', image: aiCompanionImg, href: 'https://travel-companion-frontend-sandy.vercel.app/' },
  { n: '03', title: 'CRM Platform',            tag: 'Full-stack',       year: '2026', image: crmImg,         href: 'https://crm-frontend-nu-gold.vercel.app/login' },
  { n: '04', title: 'ML Football Predictions', tag: 'Machine learning', year: '2025', image: footballImg,    href: 'https://ml-football-predictions-frontend.vercel.app/' },
  { n: '05', title: 'JoinAHack',               tag: 'Social platform',  year: '2025', image: joinahackImg,   href: 'https://social-media-frontend-black-five.vercel.app/' },
  { n: '06', title: 'Converso',                tag: 'AI · Voice',       year: '2025', image: conversoImg,    href: 'https://saas-app-lemon.vercel.app/' },
];

export default function Projects() {
  const rightColRef = useRef(null);
  const [colWidth, setColWidth] = useState(480);

  useEffect(() => {
    if (!rightColRef.current) return;
    const ro = new ResizeObserver(([e]) => setColWidth(Math.floor(e.contentRect.width)));
    ro.observe(rightColRef.current);
    return () => ro.disconnect();
  }, []);

  const carouselHeight = Math.round(colWidth * 0.78);

  return (
    <section id="work" style={{ borderTop: '1px solid rgba(255,255,255,.1)', overflow: 'hidden' }}>

      {/* ── desktop: two-column grid ── */}
      <div
        className="work-grid"
        style={{
          maxWidth: 1280, margin: '0 auto', padding: '96px 40px 72px',
          display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
          gap: 80, alignItems: 'start',
        }}
      >
        {/* left: project index */}
        <div>
          <span style={{
            display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '.08em',
            textTransform: 'uppercase', color: ACCENT, marginBottom: 22,
          }}>
            Projects
          </span>

          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 700,
            letterSpacing: '-0.02em', color: '#fff', margin: '0 0 36px',
          }}>
            Things I've built
          </h2>

          <div style={{ borderTop: '1px solid rgba(255,255,255,.1)' }}>
            {WORK.map(p => (
              <a
                key={p.n}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 18,
                  padding: '18px 0', borderBottom: '1px solid rgba(255,255,255,.1)',
                  textDecoration: 'none', color: '#f4f1f8',
                  transition: 'padding-left .25s ease-out, color .25s ease-out',
                }}
                onMouseEnter={e => { e.currentTarget.style.paddingLeft = '10px'; e.currentTarget.style.color = ACCENT; }}
                onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0px';  e.currentTarget.style.color = '#f4f1f8'; }}
              >
                <span style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.01em', color: 'inherit' }}>{p.title}</span>
                <span style={{ fontSize: 17, color: 'inherit' }}>↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* right: carousel — fills column width */}
        <div ref={rightColRef} className="carousel-col" style={{ minHeight: carouselHeight + 60 }}>
          <Carousel
            items={WORK.map(p => ({
              id:          p.n,
              title:       p.title,
              description: p.tag,
              year:        p.year,
              image:       p.image,
              href:        p.href,
            }))}
            baseWidth={colWidth}
            baseHeight={carouselHeight}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
      </div>

      {/* ── mobile: stacked list ── */}
      <div
        className="work-cards-mobile"
        style={{ flexDirection: 'column', gap: 14, padding: '48px 24px 80px', maxWidth: 560, margin: '0 auto' }}
      >
        <span style={{
          display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '.08em',
          textTransform: 'uppercase', color: ACCENT, marginBottom: 16,
        }}>
          Projects
        </span>
        <h2 style={{
          fontSize: 'clamp(28px, 7vw, 40px)', fontWeight: 700,
          letterSpacing: '-0.02em', color: '#fff', marginBottom: 28, lineHeight: 1.1,
        }}>
          Things I've built
        </h2>
        {WORK.map(p => (
          <a
            key={p.n}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', flexDirection: 'column', borderRadius: 12,
              overflow: 'hidden', background: '#141118',
              border: '1px solid rgba(255,255,255,.22)', textDecoration: 'none',
            }}
          >
            <img src={p.image} alt={p.title} loading="lazy" decoding="async" style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', objectPosition: 'top' }} />
            <div style={{ padding: '12px 16px' }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#f4f1f8' }}>{p.title}</div>
              <div style={{ fontSize: 12, color: ACCENT, marginTop: 4 }}>{p.tag}</div>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}
