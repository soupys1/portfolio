import { lazy, Suspense } from 'react';
const LightPillar = lazy(() => import('./LightPillar'));

const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Hero() {

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
        background:     'var(--bg-hero)',
      }}
    >
      {/* WebGL light pillar — lazy so Three.js doesn't block first paint */}
      {!reduced && (
        <Suspense fallback={null}>
        <LightPillar
          topColor="#5b21b6"
          bottomColor="#c084fc"
          intensity={1.0}
          rotationSpeed={0.25}
          glowAmount={0.007}
          pillarWidth={2.5}
          pillarHeight={0.4}
          noiseIntensity={0.15}
          pillarRotation={18}
          mixBlendMode="screen"
          quality="low"
        />
        </Suspense>
      )}

      {/* Vignette — sells depth, sits above the pillar */}
      <div style={{
        position:      'absolute',
        inset:         0,
        background:    'radial-gradient(70% 55% at 50% 46%, transparent 0%, rgba(11,7,16,.55) 72%, rgba(11,7,16,.92) 100%)',
        pointerEvents: 'none',
        zIndex:        2,
      }} />

      {/* Content */}
      <div style={{
        maxWidth:      1280,
        margin:        '0 auto',
        padding:       '130px 32px 96px',
        position:      'relative',
        zIndex:        10,
        width:         '100%',
        display:       'flex',
        flexDirection: 'column',
        alignItems:    'center',
        textAlign:     'center',
      }}>
        {/* Eyebrow row — glass pills */}
        <div style={{
          display:        'flex',
          flexWrap:       'wrap',
          gap:            8,
          alignItems:     'center',
          justifyContent: 'center',
          marginBottom:   40,
        }}>
          {[
            { label: 'Full-Stack Developer' },
            { label: 'Projects' },
            { label: 'Available', dot: true },
          ].map(({ label, dot }) => (
            <span
              key={label}
              style={{
                display:       'inline-flex',
                alignItems:    'center',
                gap:           6,
                padding:       '6px 14px',
                background:    'rgba(12,8,20,.82)',
                border:        '1px solid rgba(255,255,255,.12)',
                borderRadius:  99,
                fontSize:      11,
                fontWeight:    700,
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                color:         'rgba(244,241,248,.9)',
              }}
            >
              {dot && (
                <span
                  className="avail-dot"
                  style={{
                    width: 6, height: 6,
                    borderRadius: 99,
                    background: 'var(--accent)',
                    flexShrink: 0,
                  }}
                />
              )}
              {label}
            </span>
          ))}
        </div>

        {/* Headline — all white */}
        <h1 style={{
          margin:        0,
          fontSize:      'clamp(40px, 6.4vw, 72px)',
          fontWeight:    700,
          lineHeight:    1.06,
          letterSpacing: '-0.03em',
          color:         '#ffffff',
        }}>
          <span style={{ display: 'block' }}>Crafting</span>
          <span style={{ display: 'block', fontStyle: 'italic' }}>Digital</span>
          <span style={{ display: 'block' }}>Experiences</span>
        </h1>

        {/* Lede */}
        <p style={{
          margin:     '36px 0 0',
          fontSize:   'clamp(16px, 1.6vw, 20px)',
          fontWeight: 600,
          lineHeight: 1.6,
          color:      'var(--body)',
          maxWidth:   480,
        }}>
          I'm Souptik Sinha, a developer building modern, impactful web applications where{' '}
          <em style={{ color: '#ffffff', fontStyle: 'italic', fontWeight: 700 }}>engineering meets craft</em>.
        </p>

        {/* CTA — white per spec; direct style manipulation avoids React re-render */}
        <a
          href="#work"
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 14px 32px rgba(216,140,255,.45)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          style={{
            display:        'inline-flex',
            alignItems:     'center',
            gap:            10,
            marginTop:      40,
            padding:        '14px 28px',
            background:     '#ffffff',
            color:          '#0b0710',
            textDecoration: 'none',
            fontSize:       14,
            fontWeight:     700,
            borderRadius:   99,
            letterSpacing:  '-0.01em',
            whiteSpace:     'nowrap',
            transition:     'transform .18s ease-out, box-shadow .18s ease-out',
          }}
        >
          View selected work →
        </a>
      </div>
    </header>
  );
}
