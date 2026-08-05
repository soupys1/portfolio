import { useReducedMotion } from 'framer-motion';
import Strands from './Strands';

export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <header
      id="top"
      style={{
        position:       'relative',
        minHeight:      '100vh',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'center',
        overflow:       'hidden',
        background:     'var(--bg)',
      }}
    >
      {/* Strands canvas */}
      {!prefersReduced && (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.85 }}>
          <Strands
            colors={['#ff3d57', '#8b5cf6', '#3b5bff']}
            count={4}
            speed={0.45}
            amplitude={1.15}
            waviness={1}
            thickness={0.7}
            glow={2.6}
            spread={1}
            intensity={0.6}
            opacity={1}
            scale={1.5}
          />
        </div>
      )}

      {/* Radial blob overlay */}
      <div style={{
        position:   'absolute',
        inset:      0,
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,61,87,.10) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        maxWidth:    1280,
        margin:      '0 auto',
        padding:     '132px 40px 96px',
        position:    'relative',
        width:       '100%',
      }}>
        {/* Eyebrow row */}
        <div style={{
          display:     'flex',
          flexWrap:    'wrap',
          gap:         '10px 20px',
          alignItems:  'center',
          marginBottom: 40,
        }}>
          <span className="eyebrow">Full-Stack Developer</span>
          <span style={{ color: 'var(--hairline)', fontSize: 11 }}>/</span>
          <span className="eyebrow">Selected work — 2026</span>
          <span style={{ color: 'var(--hairline)', fontSize: 11 }}>/</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
            <span
              className="avail-dot"
              style={{
                width: 7, height: 7,
                borderRadius: 99,
                background: 'var(--accent)',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            <span className="eyebrow" style={{ color: 'var(--accent)' }}>Available</span>
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          margin:        0,
          fontSize:      'clamp(56px, 11vw, 150px)',
          fontWeight:    700,
          lineHeight:    0.92,
          letterSpacing: '-0.035em',
          color:         '#fff',
        }}>
          <span style={{ display: 'block' }}>Crafting</span>
          <span style={{ display: 'block', color: '#db2777', fontStyle: 'italic' }}>Digital</span>
          <span style={{ display: 'block' }}>Experiences</span>
        </h1>

        {/* Sub row */}
        <div style={{ marginTop: 48, display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32 }}>
          <p style={{
            margin:     0,
            fontSize:   20,
            fontWeight: 600,
            lineHeight: 1.5,
            color:      'var(--body-strong)',
            maxWidth:   500,
          }}>
            I'm Souptik Sinha, a developer building modern, impactful web applications where{' '}
            <em style={{ color: '#fff', fontStyle: 'italic' }}>engineering meets craft</em>.
          </p>

          <a
            href="#work"
            style={{
              display:        'inline-flex',
              alignItems:     'center',
              gap:            10,
              padding:        '12px 24px',
              background:     'var(--accent)',
              color:          '#fff',
              textDecoration: 'none',
              fontSize:       14,
              fontWeight:     700,
              borderRadius:   99,
              letterSpacing:  '-0.01em',
              transition:     'opacity .2s',
              whiteSpace:     'nowrap',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.82'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            View selected work →
          </a>
        </div>
      </div>
    </header>
  );
}
