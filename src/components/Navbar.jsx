import { useState } from 'react';
import PillNav from './PillNav';

// Red square mark as inline SVG data URL
const LOGO = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Crect width='20' height='20' rx='3' fill='%23ff3d57'/%3E%3C/svg%3E";

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
      baseColor="#141416"
      pillColor="#1e1e21"
      pillTextColor="rgba(245,245,246,.85)"
      hoveredPillTextColor="#ff3d57"
      ease="power3.easeOut"
      initialLoadAnimation={false}
    />
  );
}
