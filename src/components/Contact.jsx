import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const SOCIALS = [
  ['email', 'souptiksinha73@gmail.com', 'mailto:souptiksinha73@gmail.com'],
  ['github', 'github.com/soupys1', 'https://github.com/soupys1'],
  ['linkedin', 'in/souptik-sinha-0774641ba', 'https://www.linkedin.com/in/souptik-sinha-0774641ba/'],
];

const Arrow = () => (
  <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const Contact = () => {
  const prefersReduced = useReducedMotion();
  const [btnLabel, setBtnLabel] = useState('Send Me a Message');

  const entry = (delay = 0) => ({
    initial: { opacity: 0, y: prefersReduced ? 0 : 26 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: prefersReduced ? 0 : delay },
    viewport: { once: true, margin: '0px' },
  });

  const handleEmailClick = (e) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('souptiksinha73@gmail.com').catch(() => {});
    }
    setBtnLabel('Email Copied!');
    setTimeout(() => setBtnLabel('Send Me a Message'), 2500);
    // Let the href handle mailto naturally — don't preventDefault
  };

  return (
    <section id="contact" style={{ padding: 'var(--section-py) 0 var(--contact-pb)', borderTop: '1px solid var(--white-10)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 var(--rail-px)' }}>

        {/* eyebrow + headline */}
        <motion.div {...entry(0)}>
          <span className="mono" style={{ display: 'block', marginBottom: 30, color: 'var(--white-50)' }}>03 Let's Connect</span>
          <h2 style={{ margin: 0, lineHeight: 0.95, fontSize: 'clamp(2.6rem, 9vw, 8rem)', letterSpacing: '-0.035em' }}>
            <span className="grad-text" style={{ fontWeight: 900 }}>Let's Build </span>
            <span className="grad-text" style={{ fontWeight: 300, fontStyle: 'italic' }}>Something</span>
          </h2>
        </motion.div>

        {/* sub row */}
        <div className="contact-sub">

          {/* pill button */}
          <motion.a
            href="mailto:souptiksinha73@gmail.com"
            className="mono"
            onClick={handleEmailClick}
            {...entry(0.12)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 14, color: 'var(--fg)', textDecoration: 'none', fontSize: 13, padding: '16px 26px', border: '1px solid var(--white-30)', borderRadius: 99, transition: 'background .3s var(--ease)' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--white-10)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            {btnLabel}{' '}
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </motion.a>

          {/* social rows */}
          <motion.div {...entry(0.2)} className="contact-socials" style={{ display: 'grid', gap: 2, minWidth: 280 }}>
            {SOCIALS.map(([k, v, h]) => (
              <a
                key={k}
                href={h}
                target={k !== 'email' ? '_blank' : undefined}
                rel={k !== 'email' ? 'noopener noreferrer' : undefined}
                style={{ display: 'grid', gridTemplateColumns: '94px 1fr auto', gap: 18, alignItems: 'center', padding: '12px 0', textDecoration: 'none', color: 'var(--white-70)', borderBottom: '1px solid var(--white-10)', transition: 'color .3s var(--ease)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--fg)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--white-70)'}
              >
                <span className="mono" style={{ color: 'var(--white-40)' }}>{k}</span>
                <span className="mono" style={{ color: 'inherit', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{v}</span>
                <span style={{ color: 'inherit', display: 'inline-flex' }}><Arrow /></span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
