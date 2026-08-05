import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function Card({ children, style, ...props }) {
  return (
    <div
      style={{
        position:     'absolute',
        top: 0, left: 0,
        width:        '100%',
        height:       '100%',
        borderRadius: 14,
        overflow:     'hidden',
        background:   '#141416',
        border:       '1px solid rgba(255,255,255,.22)',
        willChange:   'transform',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export default function CardSwap({
  width            = 300,
  height           = 250,
  cardDistance     = 30,
  verticalDistance = 40,
  delay            = 2000,
  skewAmount       = 5,
  pauseOnHover     = true,
  children,
}) {
  const containerRef = useRef(null);
  const orderRef     = useRef([]);
  const pausedRef    = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.children);
    const n     = cards.length;
    if (!n) return;

    orderRef.current = cards.map((_, i) => i);

    const setPositions = (animated = false) => {
      orderRef.current.forEach((cardIdx, stackPos) => {
        const props = {
          zIndex: n - stackPos,
          y:      stackPos * verticalDistance,
          x:      stackPos * cardDistance,
          scale:  1 - stackPos * 0.045,
          skewY:  0,
        };
        animated
          ? gsap.to(cards[cardIdx],  { ...props, duration: 0.55, ease: 'power3.inOut' })
          : gsap.set(cards[cardIdx], props);
      });
    };

    setPositions(false);

    const swap = () => {
      if (pausedRef.current) return;
      const order    = orderRef.current;
      const frontIdx = order[0];

      order.slice(1).forEach((cardIdx, i) => {
        gsap.to(cards[cardIdx], {
          y:      i * verticalDistance,
          x:      i * cardDistance,
          scale:  1 - i * 0.045,
          zIndex: n - i,
          skewY:  i === 0 ? skewAmount : 0,
          duration: 0.55,
          ease:   'power3.inOut',
          overwrite: 'auto',
          onComplete: i === 0
            ? () => gsap.to(cards[cardIdx], { skewY: 0, duration: 0.22, ease: 'power2.out' })
            : undefined,
        });
      });

      gsap.to(cards[frontIdx], {
        y:      (n - 1) * verticalDistance,
        x:      (n - 1) * cardDistance,
        scale:  1 - (n - 1) * 0.045,
        zIndex: 1,
        duration: 0.55,
        ease:   'power3.inOut',
        overwrite: 'auto',
      });

      orderRef.current = [...order.slice(1), order[0]];
    };

    const id = setInterval(swap, delay);

    const onEnter = () => { pausedRef.current = pauseOnHover; };
    const onLeave = () => { pausedRef.current = false; };
    container.addEventListener('mouseenter', onEnter);
    container.addEventListener('mouseleave', onLeave);

    return () => {
      clearInterval(id);
      container.removeEventListener('mouseenter', onEnter);
      container.removeEventListener('mouseleave', onLeave);
    };
  }, [cardDistance, verticalDistance, delay, skewAmount, pauseOnHover]);

  return (
    <div ref={containerRef} style={{ position: 'relative', width, height, flexShrink: 0 }}>
      {children}
    </div>
  );
}
