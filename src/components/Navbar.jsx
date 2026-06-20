import React, { useState, useEffect } from 'react';
import { useClock, fmt } from '../hooks/useClock';

const NAV_LINKS = [
  ['work', '#work', '01'],
  ['about', '#about', '02'],
  ['contact', '#contact', '03'],
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const now = useClock();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'background .4s var(--ease), border-color .4s var(--ease), backdrop-filter .4s var(--ease)',
        background: scrolled ? 'rgba(0,0,0,0.55)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--white-10)' : 'transparent'}`,
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 48px', height: 74, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* wordmark */}
        <a href="#top" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, letterSpacing: '-0.01em', fontSize: 15 }}>
          souptik sinha
        </a>

        {/* center nav — hidden ≤900px */}
        <div className="nav-links" style={{ display: 'flex', gap: 40 }}>
          {NAV_LINKS.map(([label, href, n]) => (
            <a
              key={label}
              href={href}
              className="mono"
              style={{ color: 'var(--white-60)', textDecoration: 'none', fontSize: 12, display: 'inline-flex', gap: 8, alignItems: 'baseline', transition: 'color .3s var(--ease)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--white-60)'}
            >
              <span style={{ color: 'var(--white-30)' }}>{n}</span>{label}
            </a>
          ))}
        </div>

        {/* right: clock + availability */}
        <div className="mono" style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'var(--white-50)', fontSize: 12 }}>
          <span className="nav-clock-hide">ind {fmt(now, 'Asia/Kolkata')}</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
            <span
              className="mote"
              style={{ width: 6, height: 6, borderRadius: 99, background: '#fff', display: 'inline-block', animation: 'float 4s ease-in-out infinite', flexShrink: 0 }}
            />
            available
          </span>
        </div>

        {/* hamburger — shown ≤900px */}
        <button
          onClick={() => setIsMenuOpen(o => !o)}
          aria-label="Toggle menu"
          className="mobile-menu-btn"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, flexDirection: 'column', gap: 5, alignItems: 'flex-end' }}
        >
          <span style={{ display: 'block', width: 22, height: 1, background: '#fff', transition: 'all .3s var(--ease)', transform: isMenuOpen ? 'translateY(6px) rotate(45deg)' : '' }} />
          <span style={{ display: 'block', width: 14, height: 1, background: '#fff', transition: 'opacity .3s', opacity: isMenuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: 22, height: 1, background: '#fff', transition: 'all .3s var(--ease)', transform: isMenuOpen ? 'translateY(-6px) rotate(-45deg)' : '' }} />
        </button>
      </div>

      {/* mobile dropdown */}
      {isMenuOpen && (
        <div style={{ borderTop: '1px solid var(--white-10)', background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' }}>
          {NAV_LINKS.map(([label, href, n]) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className="mono"
              style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '18px 24px', color: 'var(--white-60)', textDecoration: 'none', borderBottom: '1px solid var(--white-05)', transition: 'color .3s var(--ease)', fontSize: 14 }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--white-60)'}
            >
              <span style={{ color: 'var(--white-30)' }}>{n}</span>{label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
