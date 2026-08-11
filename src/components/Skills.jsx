import { useState } from 'react';

const SKILL_GROUPS = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'Flask', 'REST APIs'],
  },
  {
    title: 'AI & Data',
    items: ['RAG pipelines', 'AI models', 'Vector search', 'Vapi'],
  },
  {
    title: 'Infra',
    items: ['Supabase', 'PostgreSQL', 'Vercel', 'Git', 'JWT auth'],
  },
];

function SkillItem({ label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        listStyle:   'none',
        fontSize:    15,
        fontWeight:  400,
        lineHeight:  1.6,
        color:       hovered ? 'var(--accent)' : 'var(--body)',
        transform:   hovered ? 'translateX(5px)' : 'none',
        transition:  'color .18s, transform .18s',
        cursor:      'default',
      }}
    >
      {label}
    </li>
  );
}

export default function Skills() {
  return (
    <section style={{ borderTop: '1px solid var(--hairline)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 40px' }}>
        <div className="eyebrow" style={{ marginBottom: 24 }}>Skills</div>
        <h2 style={{
          fontSize:      'clamp(32px, 5vw, 60px)',
          fontWeight:    700,
          letterSpacing: '-0.02em',
          color:         '#fff',
          marginBottom:  56,
          lineHeight:    1.1,
        }}>
          What I work with
        </h2>

        <div
          className="skills-grid"
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap:                 40,
          }}
        >
          {SKILL_GROUPS.map(group => (
            <div key={group.title}>
              <h3 style={{
                fontSize:      26,
                fontWeight:    700,
                letterSpacing: '-0.02em',
                color:         '#fff',
                marginBottom:  20,
              }}>
                {group.title}
              </h3>
              <ul style={{ margin: 0, padding: 0 }}>
                {group.items.map(item => (
                  <SkillItem key={item} label={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
