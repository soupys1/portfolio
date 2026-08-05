import { useState, useEffect } from 'react';

const NAV_LINKS = [
  ['Work',  '#work'],
  ['About', '#about'],
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [btnLabel,  setBtnLabel]  = useState('Contact');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard?.writeText('souptiksinha73@gmail.com').catch(() => {});
    setBtnLabel('Email copied!');
    setTimeout(() => setBtnLabel('Contact'), 2200);
  };

  return (
    <nav style={{
      position:             'fixed',
      top: 0, left: 0, right: 0,
      zIndex:               50,
      height:               72,
      background:           scrolled ? 'rgba(10,10,11,.72)' : 'transparent',
      backdropFilter:       scrolled ? 'blur(14px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom:         scrolled ? '1px solid rgba(255,255,255,.08)' : '1px solid transparent',
      transition:           'background .35s, border-color .35s',
    }}>
      <div style={{
        maxWidth:       1280,
        margin:         '0 auto',
        padding:        '0 40px',
        height:         '100%',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-between',
      }}>
        {/* Mark + wordmark */}
        <a href="#top" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{
            width: 20, height: 20,
            background: 'var(--accent)',
            borderRadius: 3,
            display: 'inline-block',
            flexShrink: 0,
          }} />
          <span style={{ color: '#fff', fontWeight: 700, fontSize: 15, letterSpacing: '-0.01em' }}>
            Souptik Sinha
          </span>
        </a>

        {/* Desktop links */}
        <div className="nav-links" style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={{ color: 'var(--body-strong)', textDecoration: 'none', fontSize: 14, fontWeight: 600, transition: 'color .2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--body-strong)'}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right: Contact pill + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href="mailto:souptiksinha73@gmail.com"
            onClick={copyEmail}
            className="nav-links"
            style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '8px 18px',
              background: 'var(--accent)',
              color: '#fff',
              textDecoration: 'none',
              fontSize: 13, fontWeight: 700,
              borderRadius: 99,
              transition: 'opacity .2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.82'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            {btnLabel}
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, flexDirection: 'column', gap: 5, alignItems: 'flex-end' }}
          >
            <span style={{ display: 'block', width: 22, height: 1.5, background: '#fff', transition: 'all .25s', transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : '' }} />
            <span style={{ display: 'block', width: 14, height: 1.5, background: '#fff', transition: 'opacity .25s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: '#fff', transition: 'all .25s', transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : '' }} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{ background: 'rgba(10,10,11,.96)', backdropFilter: 'blur(14px)', borderTop: '1px solid var(--hairline)' }}>
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '16px 40px', color: 'var(--body-strong)', textDecoration: 'none', fontSize: 15, fontWeight: 600, borderBottom: '1px solid var(--hairline)' }}
            >
              {label}
            </a>
          ))}
          <div style={{ padding: '16px 40px' }}>
            <a
              href="mailto:souptiksinha73@gmail.com"
              onClick={(e) => { copyEmail(e); setMenuOpen(false); }}
              style={{ display: 'inline-block', padding: '8px 18px', background: 'var(--accent)', color: '#fff', textDecoration: 'none', fontSize: 13, fontWeight: 700, borderRadius: 99 }}
            >
              {btnLabel}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
