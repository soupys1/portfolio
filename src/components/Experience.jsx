import { useState } from 'react';

// ⚠️ Placeholder data — replace with real roles before deploying
const EXPERIENCE = [
  {
    period:  '2025 — Now',
    role:    'Full-Stack Developer',
    org:     'Freelance / Independent',
    desc:    'Building AI-powered web applications, CRM platforms, and SaaS products for clients. Focus on React frontends, Node.js/Python backends, and RAG pipeline integrations.',
  },
  {
    period:  '2024 — 2025',
    role:    'Software Engineer',
    org:     'Project-based',
    desc:    'Developed social platforms and voice AI tools using Next.js, Supabase, Vapi, and real-time features. Shipped JoinAHack and Converso.',
  },
  {
    period:  '2023 — 2024',
    role:    'ML / Backend Developer',
    org:     'Academic & Personal',
    desc:    'Built machine learning applications including football match prediction models with Python/Flask backends serving live data to React frontends.',
  },
];

function ExpRow({ entry }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:     'grid',
        gridTemplateColumns: '200px 1fr',
        gap:         40,
        padding:     '36px 0',
        paddingLeft: hovered ? 12 : 0,
        borderBottom:'1px solid var(--hairline)',
        transition:  'padding-left .2s var(--ease)',
        cursor:      'default',
      }}
      className="exp-grid"
    >
      <div style={{ paddingTop: 4 }}>
        <span style={{ fontSize: 13, fontWeight: 400, color: 'var(--accent)' }}>{entry.period}</span>
      </div>
      <div>
        <h3 style={{
          fontSize:      30,
          fontWeight:    700,
          letterSpacing: '-0.02em',
          color:         '#fff',
          lineHeight:    1.2,
          marginBottom:  4,
        }}>
          {entry.role}
        </h3>
        <div style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 14, fontWeight: 400 }}>
          {entry.org}
        </div>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'var(--body)' }}>
          {entry.desc}
        </p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section style={{ borderTop: '1px solid var(--hairline)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 40px' }}>
        <div className="eyebrow" style={{ marginBottom: 24 }}>04 Experience</div>
        <h2 style={{
          fontSize:      'clamp(32px, 5vw, 60px)',
          fontWeight:    700,
          letterSpacing: '-0.02em',
          color:         '#fff',
          marginBottom:  48,
          lineHeight:    1.1,
        }}>
          Where I've worked
        </h2>

        <div style={{ borderTop: '1px solid var(--hairline)' }}>
          {EXPERIENCE.map((e, i) => <ExpRow key={i} entry={e} />)}
        </div>
      </div>
    </section>
  );
}
