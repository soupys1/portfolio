import { useState } from 'react';
import PillNav from './PillNav';

const LOGO = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Crect width='20' height='20' rx='3' fill='%238b5cf6'/%3E%3C/svg%3E";

export default function Navbar() {
  const [contactLabel, setContactLabel] = useState('Contact');

  const handleContact = (e) => {
    e.preventDefault();
    navigator.clipboard?.writeText('souptiksinha73@gmail.com').catch(() => {});
    setContactLabel('Copied!');
    setTimeout(() => setContactLabel('Contact'), 2200);
  };

  const items = [
    { label: 'Work',         href: '#work' },
    { label: 'About',        href: '#about' },
    { label: contactLabel,   href: 'mailto:souptiksinha73@gmail.com', onClick: handleContact, accent: true },
  ];

  return (
    <PillNav
      logo={LOGO}
      logoAlt="Souptik Sinha"
      items={items}
      baseColor="rgba(18,12,26,.62)"
      pillColor="rgba(28,18,42,.85)"
      pillTextColor="rgba(244,241,248,.78)"
      hoveredPillTextColor="#c084fc"
      ease="power3.easeOut"
      initialLoadAnimation={false}
    />
  );
}
