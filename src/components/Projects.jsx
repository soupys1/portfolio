import gsap from 'gsap';
import CardSwap, { Card } from './CardSwap';

import aiCompanionImg from '../assets/AIcompanion.png';
import crmImg         from '../assets/pulse.png';
import footballImg    from '../assets/football.PNG';
import joinahackImg   from '../assets/joinahack.PNG';
import conversoImg    from '../assets/converso.PNG';

const ACCENT      = '#c084fc';
const CARD_SHADOW = '0 25px 50px -12px rgba(0,0,0,.7)';
const CARD_HOVER  = `0 46px 80px -14px rgba(0,0,0,.85), 0 0 0 1px #c084fc, 0 26px 60px -10px #c084fc`;

const WORK = [
  { n: '01', title: 'AI Travel Companion',     tag: 'AI · Full-stack',  year: '2026', image: aiCompanionImg, href: 'https://travel-companion-frontend-sandy.vercel.app/' },
  { n: '02', title: 'CRM Platform',            tag: 'Full-stack',       year: '2026', image: crmImg,         href: 'https://crm-frontend-nu-gold.vercel.app/login' },
  { n: '03', title: 'ML Football Predictions', tag: 'Machine learning', year: '2025', image: footballImg,    href: 'https://ml-football-predictions-frontend.vercel.app/' },
  { n: '04', title: 'JoinAHack',               tag: 'Social platform',  year: '2025', image: joinahackImg,   href: 'https://social-media-frontend-black-five.vercel.app/' },
  { n: '05', title: 'Converso',                tag: 'AI · Voice',       year: '2025', image: conversoImg,    href: 'https://saas-app-lemon.vercel.app/' },
];

function ProjectCard({ p }) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex', flexDirection: 'column', position: 'relative',
        width: '100%', height: '100%',
        overflow: 'hidden', background: '#141118', borderRadius: 14,
        border: '1px solid rgba(255,255,255,.22)',
        textDecoration: 'none', color: '#f4f1f8',
      }}
    >
      {/* pre-baked glow — only opacity is animated, no repaint per frame */}
      <div
        data-glow="1"
        style={{
          position: 'absolute', inset: -1, borderRadius: 14,
          boxShadow: CARD_HOVER,
          opacity: 0, pointerEvents: 'none',
        }}
      />

      {/* fake title bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,.12)', flexShrink: 0,
      }}>
        <span style={{ width: 9, height: 9, borderRadius: 999, background: ACCENT }} />
        <span style={{ width: 9, height: 9, borderRadius: 999, background: 'rgba(255,255,255,.2)' }} />
        <span style={{ width: 9, height: 9, borderRadius: 999, background: 'rgba(255,255,255,.2)' }} />
        <span style={{
          marginLeft: 'auto', fontSize: 11, fontWeight: 700,
          letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(244,241,248,.4)',
        }}>
          {p.year}
        </span>
      </div>

      {/* screenshot */}
      <img
        src={p.image}
        alt={p.title}
        style={{ width: '100%', flex: 1, minHeight: 0, objectFit: 'cover', objectPosition: 'top', display: 'block' }}
      />

      {/* footer */}
      <div style={{ padding: '14px 18px 16px', borderTop: '1px solid rgba(255,255,255,.12)', flexShrink: 0 }}>
        <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.01em', color: '#f4f1f8' }}>{p.title}</div>
        <div style={{ fontSize: 13, color: ACCENT, marginTop: 4 }}>{p.tag}</div>
      </div>
    </a>
  );
}

const enterCard = e => {
  gsap.to(e.currentTarget, { scale: 1.14, y: '-=26', duration: 0.32, ease: 'back.out(2.4)', overwrite: 'auto' });
  const inner = e.currentTarget.firstElementChild;
  if (!inner) return;
  inner.style.borderColor = ACCENT;
  const glow = inner.querySelector('[data-glow]');
  if (glow) gsap.to(glow, { opacity: 1, duration: 0.25, ease: 'power2.out' });
};
const leaveCard = e => {
  gsap.to(e.currentTarget, { scale: 1, y: '+=26', duration: 0.32, ease: 'power2.out', overwrite: 'auto' });
  const inner = e.currentTarget.firstElementChild;
  if (!inner) return;
  inner.style.borderColor = 'rgba(255,255,255,.22)';
  const glow = inner.querySelector('[data-glow]');
  if (glow) gsap.to(glow, { opacity: 0, duration: 0.2, ease: 'power2.out' });
};

export default function Projects() {
  return (
    <section id="work" style={{ borderTop: '1px solid rgba(255,255,255,.1)', overflow: 'hidden' }}>

      {/* ── desktop: two-column grid ── */}
      <div
        className="work-grid"
        style={{
          maxWidth: 1280, margin: '0 auto', padding: '96px 40px',
          display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
          gap: 120, alignItems: 'center',
        }}
      >
        {/* left: index */}
        <div>
          <span style={{
            display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '.08em',
            textTransform: 'uppercase', color: ACCENT, marginBottom: 22,
          }}>
            01 Selected work — 05 projects
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
                  display: 'grid', gridTemplateColumns: '34px 1fr auto', alignItems: 'center', gap: 18,
                  padding: '18px 0', borderBottom: '1px solid rgba(255,255,255,.1)',
                  textDecoration: 'none', color: '#f4f1f8',
                  transition: 'padding-left .25s ease-out, color .25s ease-out',
                }}
                onMouseEnter={e => { e.currentTarget.style.paddingLeft = '10px'; e.currentTarget.style.color = ACCENT; }}
                onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0px';  e.currentTarget.style.color = '#f4f1f8'; }}
              >
                <span style={{ fontSize: 13, color: 'rgba(244,241,248,.4)' }}>{p.n}</span>
                <span style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.01em', color: 'inherit' }}>{p.title}</span>
                <span style={{ fontSize: 17, color: 'inherit' }}>↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* right: card stack — width+(count-1)*cardDistance = 300+4*34 = 436px */}
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
            delay={3500}
            skewAmount={0}
            easing="elastic"
            pauseOnHover
          >
            {WORK.map(p => (
              <Card
                key={p.n}
                style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}
                onMouseEnter={enterCard}
                onMouseLeave={leaveCard}
              >
                <ProjectCard p={p} />
              </Card>
            ))}
          </CardSwap>
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
          01 Selected work
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
            <img src={p.image} alt={p.title} style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', objectPosition: 'top' }} />
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
