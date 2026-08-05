const { useState, useEffect, useRef } = React;

/* ----------------------------- data ----------------------------- */
const WORK = [
  { n: '01', title: 'ml football predictions', desc: 'full-stack ml app predicting match outcomes — a python flask backend serving the model, react front end for live stats.', year: '2025', img: '../../assets/img/football.png', href: '#' },
  { n: '02', title: 'joinahack', desc: 'social platform to showcase projects and find hackathon teammates — realtime messaging, jwt auth, supabase + postgres.', year: '2024', img: '../../assets/img/joinahack.png', href: '#' },
  { n: '03', title: 'converso', desc: 'ai learning app with personalised real-time voice tutors, built on next.js and vapi with a responsive, accessible ui.', year: '2024', img: '../../assets/img/converso.png', href: '#' },
];
const CLOCKS = [['ind', 'Asia/Kolkata'], ['lon', 'Europe/London'], ['nyc', 'America/New_York']];
const SOCIALS = [['email', 'hello@souptik.dev', 'mailto:hello@souptik.dev'], ['github', 'github.com/soupys1', 'https://github.com/soupys1'], ['linkedin', 'in/souptik-sinha', '#'], ['dribbble', '@souptik', '#']];

/* --------------------------- live clock ------------------------- */
function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}
function fmt(now, tz) {
  try { return now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: tz }); }
  catch (e) { return '--:--'; }
}

/* ----------------------------- reveal --------------------------- */
function Reveal({ children, delay = 0, as = 'div', style }) {
  // entrance is transform-only (opacity stays 1) so content is never stuck
  // hidden if the animation timeline is throttled.
  const El = as;
  return (
    <El className="ds-reveal" style={{ animation: `dsRise .8s var(--ease) ${delay}ms both`, ...style }}>{children}</El>
  );
}

function Arrow({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/* ----------------------------- nav ------------------------------ */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const now = useClock();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const link = { color: 'var(--white-60)', textDecoration: 'none', transition: 'color .3s var(--ease)', display: 'inline-flex', gap: 8, alignItems: 'baseline' };
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'background .4s var(--ease), border-color .4s var(--ease), backdrop-filter .4s var(--ease)',
      background: scrolled ? 'rgba(0,0,0,0.55)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: '1px solid ' + (scrolled ? 'var(--white-10)' : 'transparent'),
    }}>
      <div className="rail" style={{ height: 74, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#top" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, letterSpacing: '-0.01em', fontSize: 15 }}>souptik sinha</a>
        <div className="nav-links" style={{ display: 'flex', gap: 40 }}>
          {[['work', '#work', '01'], ['about', '#about', '02'], ['contact', '#contact', '03']].map(([t, h, n]) => (
            <a key={t} href={h} className="mono" style={{ ...link, fontSize: 12 }}
               onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
               onMouseLeave={(e) => e.currentTarget.style.color = 'var(--white-60)'}>
              <span style={{ color: 'var(--white-30)' }}>{n}</span>{t}
            </a>
          ))}
        </div>
        <div className="nav-time mono" style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 12 }}>
          <span>ind {fmt(now, 'Asia/Kolkata')}</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
            <span className="mote" style={{ width: 6, height: 6, borderRadius: 99, background: '#fff', animation: 'float 4s ease-in-out infinite' }} />
            available
          </span>
        </div>
      </div>
    </nav>
  );
}

/* ----------------------------- hero ----------------------------- */
function Hero() {
  const now = useClock();
  return (
    <header id="top" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 44%, #151515 0%, #000 60%)' }} />
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.4,
        backgroundImage: 'linear-gradient(var(--white-05) 1px, transparent 1px), linear-gradient(90deg, var(--white-05) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
        WebkitMaskImage: 'radial-gradient(circle at 50% 44%, #000 0%, transparent 68%)',
        maskImage: 'radial-gradient(circle at 50% 44%, #000 0%, transparent 68%)',
      }} />
      {[['14%', '26%', '0s'], ['84%', '34%', '1.4s'], ['70%', '72%', '2.6s'], ['22%', '76%', '3.4s']].map(([l, t, d], i) => (
        <span key={i} className="mote" style={{ position: 'absolute', left: l, top: t, width: 4, height: 4, borderRadius: 99, background: 'var(--white-30)', animation: 'float 6s ease-in-out infinite', animationDelay: d }} />
      ))}

      <div className="rail" style={{ position: 'relative', paddingTop: 110 }}>
        <Reveal>
          <div className="mono" style={{ display: 'flex', flexWrap: 'wrap', gap: 18, marginBottom: 38 }}>
            <span>full-stack developer</span>
            <span style={{ color: 'var(--white-20)' }}>/</span>
            <span>selected work — 2026</span>
            <span style={{ color: 'var(--white-20)' }}>/</span>
            {CLOCKS.map(([c, tz]) => <span key={c} style={{ color: 'var(--white-40)' }}>{c} {fmt(now, tz)}</span>)}
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 style={{ margin: 0, lineHeight: 0.92, fontSize: 'clamp(3rem, 11vw, 10rem)', letterSpacing: '-0.035em' }}>
            <span className="grad-text" style={{ fontWeight: 900, display: 'block' }}>crafting</span>
            <span className="grad-text" style={{ fontWeight: 300, fontStyle: 'italic', display: 'block', letterSpacing: '-0.02em' }}>digital</span>
            <span className="grad-text" style={{ fontWeight: 900, display: 'block' }}>experiences</span>
          </h1>
        </Reveal>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, marginTop: 54 }}>
          <Reveal delay={160} style={{ maxWidth: 460 }}>
            <p style={{ margin: 0, fontSize: 'clamp(1rem, 2.2vw, 1.2rem)', lineHeight: 1.6, color: 'var(--zinc-400)' }}>
              i'm souptik sinha — a developer building modern, impactful web applications where <em style={{ color: 'var(--white-90)' }}>engineering meets craft</em>.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <a href="#work" className="mono" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: '#fff', textDecoration: 'none', fontSize: 12, borderBottom: '1px solid var(--white-30)', paddingBottom: 8 }}>
              view selected work <Arrow />
            </a>
          </Reveal>
        </div>
      </div>
    </header>
  );
}

/* --------------------------- work index ------------------------- */
function Work() {
  const [active, setActive] = useState(null);
  const imgRef = useRef(null);
  const onMove = (e) => {
    const el = imgRef.current;
    if (el) el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  };
  return (
    <section id="work" style={{ padding: '130px 0' }} onMouseMove={onMove}>
      <div className="rail">
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 16 }}>
            <h2 style={{ margin: 0, fontSize: 'var(--text-h2)', fontWeight: 800, letterSpacing: '-0.025em' }}>selected work</h2>
            <span className="mono">{String(WORK.length).padStart(2, '0')} projects</span>
          </div>
        </Reveal>

        <div style={{ borderTop: '1px solid var(--white-10)' }}>
          {WORK.map((w, i) => {
            const dim = active !== null && active !== i;
            return (
              <Reveal as="div" key={w.n} delay={i * 80} style={{ borderBottom: '1px solid var(--white-10)' }}>
                <a href={w.href}
                   onMouseEnter={() => setActive(i)}
                   onMouseLeave={() => setActive(null)}
                   style={{ display: 'grid', gridTemplateColumns: '56px 1fr auto', alignItems: 'start', gap: 'clamp(16px,3vw,48px)', padding: 'clamp(26px, 3.6vw, 46px) 0', textDecoration: 'none', transition: 'opacity .4s var(--ease)', opacity: dim ? 0.3 : 1 }}>
                  <span className="mono" style={{ fontSize: 13, color: 'var(--white-40)', paddingTop: 10 }}>{w.n}</span>
                  <span style={{ display: 'block' }}>
                    <span style={{ display: 'block', fontSize: 'clamp(1.7rem, 4.6vw, 3.4rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', transition: 'transform .4s var(--ease)', transform: active === i ? 'translateX(16px)' : 'none' }}>{w.title}</span>
                    <span className="work-desc" style={{ display: 'block', marginTop: 14, maxWidth: 460, fontSize: 14.5, lineHeight: 1.55, color: 'var(--zinc-400)', transition: 'transform .4s var(--ease) .03s', transform: active === i ? 'translateX(16px)' : 'none' }}>{w.desc}</span>
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 'clamp(14px,2.4vw,34px)', justifySelf: 'end', paddingTop: 10 }}>
                    <span className="mono" style={{ color: 'var(--white-40)' }}>{w.year}</span>
                    <span style={{ color: active === i ? '#fff' : 'var(--white-40)', transition: 'color .3s var(--ease), transform .4s var(--ease)', transform: active === i ? 'translateX(6px)' : 'none', display: 'inline-flex' }}><Arrow size={18} /></span>
                  </span>
                </a>
                <img className="work-thumb" src={w.img} alt={w.title} style={{ display: 'none', width: '100%', borderRadius: 12, border: '1px solid var(--white-10)', marginBottom: 26 }} />
              </Reveal>
            );
          })}
        </div>
      </div>

      <div ref={imgRef} className="work-cursor" style={{
        position: 'fixed', top: 0, left: 0, zIndex: 40, pointerEvents: 'none',
        width: 'clamp(260px, 24vw, 400px)', aspectRatio: '16 / 10',
        opacity: active !== null ? 1 : 0,
        transition: 'opacity .35s var(--ease), transform .16s ease-out',
        borderRadius: 14, overflow: 'hidden', border: '1px solid var(--white-20)',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.6)',
      }}>
        {WORK.map((w, i) => (
          <img key={i} src={w.img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: active === i ? 1 : 0, transition: 'opacity .35s var(--ease)' }} />
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- about ---------------------------- */
function About() {
  const details = [
    ['currently', 'building full-stack products'],
    ['focus', 'web apps · ml · real-time'],
    ['stack', 'react · next.js · python · flask'],
    ['based in', 'india — open to remote'],
  ];
  return (
    <section id="about" style={{ padding: '130px 0', borderTop: '1px solid var(--white-10)' }}>
      <div className="rail" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.55fr) minmax(0,1fr)', gap: 'clamp(40px, 6vw, 100px)' }}>
        <Reveal>
          <span className="mono" style={{ display: 'block', marginBottom: 38 }}>02 — about</span>
          <p style={{ margin: 0, fontSize: 'clamp(1.4rem, 3.2vw, 2.4rem)', fontWeight: 500, lineHeight: 1.34, letterSpacing: '-0.02em', color: 'var(--white-90)' }}>
            i design and build at the seam where <em style={{ color: '#fff' }}>engineering meets craft</em> — from python and flask backends serving ml models to responsive, accessible react interfaces. i care about the details that make software feel <em style={{ color: '#fff' }}>considered</em>.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div style={{ borderTop: '1px solid var(--white-10)' }}>
            {details.map(([k, v]) => (
              <div key={k} style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: 16, padding: '18px 0', borderBottom: '1px solid var(--white-10)' }}>
                <span className="mono" style={{ color: 'var(--white-40)' }}>{k}</span>
                <span style={{ fontSize: 15, color: 'var(--white-80)', lineHeight: 1.5 }}>{v}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------- contact --------------------------- */
function Contact() {
  return (
    <section id="contact" style={{ padding: '130px 0 110px', borderTop: '1px solid var(--white-10)' }}>
      <div className="rail">
        <Reveal>
          <span className="mono" style={{ display: 'block', marginBottom: 30 }}>03 — let's connect</span>
          <h2 style={{ margin: 0, lineHeight: 0.95, fontSize: 'clamp(2.6rem, 9vw, 8rem)', letterSpacing: '-0.035em' }}>
            <span className="grad-text" style={{ fontWeight: 900 }}>let's build </span>
            <span className="grad-text" style={{ fontWeight: 300, fontStyle: 'italic' }}>something</span>
          </h2>
        </Reveal>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, marginTop: 64 }}>
          <Reveal delay={120}>
            <a href="mailto:hello@souptik.dev" className="mono" style={{ display: 'inline-flex', alignItems: 'center', gap: 14, color: '#fff', textDecoration: 'none', fontSize: 13, padding: '16px 26px', border: '1px solid var(--white-30)', borderRadius: 99, transition: 'background .3s var(--ease)' }}
               onMouseEnter={(e) => e.currentTarget.style.background = 'var(--white-10)'}
               onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
              send me a message <Arrow />
            </a>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: 'grid', gap: 2, minWidth: 280 }}>
              {SOCIALS.map(([k, v, h]) => (
                <a key={k} href={h} style={{ display: 'grid', gridTemplateColumns: '94px 1fr auto', gap: 18, alignItems: 'center', padding: '12px 0', textDecoration: 'none', color: 'var(--white-70)', borderBottom: '1px solid var(--white-10)', transition: 'color .3s var(--ease)' }}
                   onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                   onMouseLeave={(e) => e.currentTarget.style.color = 'var(--white-70)'}>
                  <span className="mono" style={{ color: 'var(--white-40)' }}>{k}</span>
                  <span className="mono" style={{ color: 'inherit' }}>{v}</span>
                  <span style={{ color: 'inherit', display: 'inline-flex' }}><Arrow size={13} /></span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- footer --------------------------- */
function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--white-10)', padding: '30px 0' }}>
      <div className="rail" style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="mono">© 2026 souptik sinha</span>
        <a href="#top" className="mono" style={{ color: 'var(--white-60)', textDecoration: 'none' }}
           onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
           onMouseLeave={(e) => e.currentTarget.style.color = 'var(--white-60)'}>back to top ↑</a>
        <span className="mono">designed &amp; built with care</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
