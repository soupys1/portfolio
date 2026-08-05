import { useState } from 'react';

const LINKS = [
  ['email',    'souptiksinha73@gmail.com', 'mailto:souptiksinha73@gmail.com'],
  ['github',   'github.com/soupys1',       'https://github.com/soupys1'],
  ['linkedin', 'in/souptik-sinha',         'https://www.linkedin.com/in/souptik-sinha-0774641ba/'],
];

function FooterLink({ label, value, href }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={label !== 'email' ? '_blank' : undefined}
      rel={label !== 'email' ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:        'flex',
        alignItems:     'center',
        gap:            12,
        textDecoration: 'none',
        color:          hovered ? '#fff' : 'var(--body)',
        transition:     'color .2s',
        padding:        '12px 0',
        borderBottom:   '1px solid var(--hairline)',
      }}
    >
      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--muted)', width: 76, flexShrink: 0 }}>{label}</span>
      <span style={{ fontSize: 14, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</span>
      <span style={{ color: hovered ? 'var(--accent)' : 'var(--muted)', flexShrink: 0 }}>↗</span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--hairline)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 40px 60px' }}>

        {/* Big headline */}
        <div style={{ marginBottom: 72 }}>
          <h2 style={{
            fontSize:      'clamp(44px, 8vw, 110px)',
            fontWeight:    700,
            letterSpacing: '-0.02em',
            color:         '#fff',
            lineHeight:    0.95,
            margin:        0,
          }}>
            Let's Build{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Something</em>
          </h2>
        </div>

        {/* Links + availability */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 60, alignItems: 'flex-start', marginBottom: 72 }}>
          {/* Contact links */}
          <div style={{ flex: '1 1 280px', minWidth: 260 }}>
            <div style={{ borderTop: '1px solid var(--hairline)' }}>
              {LINKS.map(([label, value, href]) => (
                <FooterLink key={label} label={label} value={value} href={href} />
              ))}
            </div>
          </div>

          {/* Availability badge */}
          <div style={{ paddingTop: 16 }}>
            <div style={{
              display:      'inline-flex',
              alignItems:   'center',
              gap:          10,
              padding:      '10px 20px',
              border:       '1px solid var(--hairline)',
              borderRadius: 99,
            }}>
              <span
                className="avail-dot"
                style={{ width: 8, height: 8, borderRadius: 99, background: 'var(--accent)', flexShrink: 0 }}
              />
              <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Available 2026</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 13, color: 'var(--muted)' }}>© 2026 Souptik Sinha</span>
          <a
            href="#top"
            style={{ fontSize: 13, color: 'var(--muted)', textDecoration: 'none', transition: 'color .2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
