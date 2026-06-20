import React from 'react';

const Footer = () => (
  <footer style={{ borderTop: '1px solid var(--white-10)', padding: '30px 0' }}>
    <div className="footer-inner" style={{ maxWidth: 1400, margin: '0 auto', padding: '0 var(--rail-px)' }}>
      <span className="mono" style={{ color: 'var(--white-50)' }}>© 2026 Souptik Sinha</span>
      <a
        href="#top"
        className="mono"
        style={{ color: 'var(--white-60)', textDecoration: 'none', transition: 'color .3s var(--ease)' }}
        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--white-60)'}
      >
        Back to Top ↑
      </a>
    </div>
  </footer>
);

export default Footer;
