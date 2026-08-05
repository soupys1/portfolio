const DETAILS = [
  ['currently', 'Building full-stack products'],
  ['focus',     'React · RAG · AI Models · Backend'],
  ['stack',     'React · Next.js · Node.js · Python'],
  ['based in',  'Chicago, IL'],
];

export default function About() {
  return (
    <section id="about" style={{ borderTop: '1px solid var(--hairline)' }}>
      <div
        className="about-grid"
        style={{
          maxWidth:            1280,
          margin:              '0 auto',
          padding:             '96px 40px',
          display:             'grid',
          gridTemplateColumns: 'minmax(0,1.5fr) minmax(0,1fr)',
          gap:                 'clamp(40px, 6vw, 100px)',
        }}
      >
        {/* Left: statement */}
        <div>
          <div className="eyebrow" style={{ marginBottom: 24 }}>02 About</div>
          <p style={{
            margin:        0,
            fontSize:      'clamp(20px, 2.6vw, 34px)',
            fontWeight:    400,
            lineHeight:    1.36,
            letterSpacing: '-0.01em',
            color:         'var(--body-strong)',
          }}>
            I design and build full-stack products where{' '}
            <em style={{ color: '#fff', fontStyle: 'italic' }}>engineering meets craft</em>
            {', '}combining strong Node.js and Python backends with RAG pipelines and AI-powered React interfaces. I care about the details that make software feel{' '}
            <em style={{ color: '#fff', fontStyle: 'italic' }}>considered</em>.
          </p>
        </div>

        {/* Right: definition rows */}
        <div style={{ borderTop: '1px solid var(--hairline)', alignSelf: 'start' }}>
          {DETAILS.map(([k, v]) => (
            <div
              key={k}
              style={{
                display:             'grid',
                gridTemplateColumns: '96px 1fr',
                gap:                 16,
                padding:             '18px 0',
                borderBottom:        '1px solid var(--hairline)',
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--muted)' }}>{k}</span>
              <span style={{ fontSize: 15, color: 'var(--body-strong)', lineHeight: 1.5 }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
