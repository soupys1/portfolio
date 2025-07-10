import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useAnimation } from 'framer-motion';

const DOT_SIZE = 18;
const CURSOR_SIZE = 16;
const CURSOR_RADIUS = 10;

const Cursor = () => {
  const cursorRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [morph, setMorph] = useState(null); // null or {width, height, borderRadius, x, y}
  const morphControls = useAnimation();
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 20 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 20 });

  // Move dot with mouse
  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - DOT_SIZE / 2);
      mouseY.set(e.clientY - DOT_SIZE / 2);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  // Morphing overlay logic
  useEffect(() => {
    const isInteractive = (el) => {
      if (!el) return false;
      return (
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.tagName === 'IMG' ||
        el.getAttribute('data-cursor') === 'pointer'
      );
    };
    const handlePointerOver = (e) => {
      const el = e.target;
      if (isInteractive(el)) {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        const borderRadius = parseInt(style.borderRadius) || 0;
        setMorph({
          width: rect.width,
          height: rect.height,
          borderRadius: borderRadius,
          x: rect.left,
          y: rect.top,
        });
        morphControls.start({
          opacity: 0.25,
          width: rect.width,
          height: rect.height,
          borderRadius: borderRadius,
          x: rect.left,
          y: rect.top,
        });
      }
    };
    const handlePointerOut = (e) => {
      setMorph(null);
      morphControls.start({
        opacity: 0,
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
        borderRadius: CURSOR_RADIUS,
        x: 0,
        y: 0,
      });
    };
    document.addEventListener('pointerover', handlePointerOver);
    document.addEventListener('pointerout', handlePointerOut);
    return () => {
      document.removeEventListener('pointerover', handlePointerOver);
      document.removeEventListener('pointerout', handlePointerOut);
    };
  }, [morphControls]);

  // Hide overlay by default
  useEffect(() => {
    morphControls.set({
      opacity: 0,
      width: CURSOR_SIZE,
      height: CURSOR_SIZE,
      borderRadius: CURSOR_RADIUS,
      x: 0,
      y: 0,
    });
  }, []);

  return (
    <>
      {/* Morphing overlay (iOS pointer style) */}
      <motion.div
        animate={morphControls}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          background: '#64748b',
          pointerEvents: 'none',
          zIndex: 9998,
          mixBlendMode: 'multiply',
        }}
      />
      {/* Always show a small dot in the center of the pointer */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: DOT_SIZE,
          height: DOT_SIZE,
          borderRadius: '50%',
          background: '#64748b',
          pointerEvents: 'none',
          zIndex: 9999,
          x: dotX,
          y: dotY,
          boxShadow: '0 1px 4px rgba(0,0,0,0.10)',
        }}
      />
    </>
  );
};

export default Cursor; 