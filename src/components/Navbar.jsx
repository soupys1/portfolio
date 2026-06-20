import React, { useState, useEffect } from 'react';
import { useClock, fmt } from '../hooks/useClock';

const NAV_LINKS = [
  ['Work', '#work', '01'],
  ['About', '#about', '02'],
  ['Contact', '#contact', '03'],
];

const SunIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const now = useClock();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'background .4s var(--ease), border-color .4s var(--ease), backdrop-filter .4s var(--ease)',
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--white-10)' : 'transparent'}`,
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 var(--rail-px)', height: 74, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* wordmark */}
        <a href="#top" style={{ color: 'var(--fg)', textDecoration: 'none', fontWeight: 600, letterSpacing: '-0.01em', fontSize: 15 }}>
          Souptik Sinha
        </a>

        {/* center nav — hidden ≤900px */}
        <div className="nav-links" style={{ display: 'flex', gap: 40 }}>
          {NAV_LINKS.map(([label, href, n]) => (
            <a
              key={label}
              href={href}
              className="mono"
              style={{ color: 'var(--white-60)', textDecoration: 'none', fontSize: 12, display: 'inline-flex', gap: 8, alignItems: 'baseline', transition: 'color .3s var(--ease)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--fg)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--white-60)'}
            >
              <span style={{ color: 'var(--white-30)' }}>{n}</span>{label}
            </a>
          ))}
        </div>

        {/* right: clock + availability + theme toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div className="mono" style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'var(--white-50)', fontSize: 12 }}>
            <span className="nav-clock-hide">chi {fmt(now, 'America/Chicago')}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
              <span
                className="mote"
                style={{ width: 6, height: 6, borderRadius: 99, background: 'var(--fg)', display: 'inline-block', animation: 'float 4s ease-in-out infinite', flexShrink: 0 }}
              />
              <span className="nav-avail-text">Available</span>
            </span>
          </div>

          {/* theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            style={{ background: 'none', border: '1px solid var(--white-20)', borderRadius: 8, cursor: 'pointer', padding: '6px 8px', color: 'var(--white-60)', display: 'flex', alignItems: 'center', transition: 'border-color .3s var(--ease), color .3s var(--ease)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--white-50)'; e.currentTarget.style.color = 'var(--fg)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--white-20)'; e.currentTarget.style.color = 'var(--white-60)'; }}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* hamburger — shown ≤900px */}
          <button
            onClick={() => setIsMenuOpen(o => !o)}
            aria-label="Toggle menu"
            className="mobile-menu-btn"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, flexDirection: 'column', gap: 5, alignItems: 'flex-end' }}
          >
            <span style={{ display: 'block', width: 22, height: 1, background: 'var(--fg)', transition: 'all .3s var(--ease)', transform: isMenuOpen ? 'translateY(6px) rotate(45deg)' : '' }} />
            <span style={{ display: 'block', width: 14, height: 1, background: 'var(--fg)', transition: 'opacity .3s', opacity: isMenuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 1, background: 'var(--fg)', transition: 'all .3s var(--ease)', transform: isMenuOpen ? 'translateY(-6px) rotate(-45deg)' : '' }} />
          </button>
        </div>
      </div>

      {/* mobile dropdown */}
      {isMenuOpen && (
        <div style={{ borderTop: '1px solid var(--white-10)', background: 'var(--menu-bg)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' }}>
          {NAV_LINKS.map(([label, href, n]) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className="mono"
              style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '18px 24px', color: 'var(--white-60)', textDecoration: 'none', borderBottom: '1px solid var(--white-05)', transition: 'color .3s var(--ease)', fontSize: 14 }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--fg)'}
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
