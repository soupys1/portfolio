import React, { useEffect } from 'react';

const SectionTransition = () => {
  useEffect(() => {
    // Smooth scroll behavior for all anchor links
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;

      const href = target.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      
      const targetElement = document.querySelector(href);
      if (!targetElement) return;

      // Calculate offset to account for fixed navbar
      const navbarHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      // Add transition animation class to target section
      targetElement.classList.add('section-entering');
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Remove animation class after animation completes
      setTimeout(() => {
        targetElement.classList.remove('section-entering');
      }, 800);
    };

    // Add event listener to document for event delegation
    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SectionTransition;
