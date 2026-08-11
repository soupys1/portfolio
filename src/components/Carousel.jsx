import { useState, useEffect, useRef, useCallback } from 'react';

export default function Carousel({
  items = [],
  baseWidth = 300,
  baseHeight = 420,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = true,
  round = false,
}) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);
  const n = items.length;
  const gap = 20;

  const go = useCallback((d) => {
    setIdx(i =>
      loop
        ? (i + d + n) % n
        : Math.max(0, Math.min(n - 1, i + d))
    );
  }, [loop, n]);

  useEffect(() => {
    if (!autoplay || paused || n <= 1) return;
    timer.current = setInterval(() => go(1), autoplayDelay);
    return () => clearInterval(timer.current);
  }, [autoplay, paused, autoplayDelay, go, n]);

  return (
    <div
      style={{ position: 'relative', overflow: 'hidden', width: '100%' }}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      {/* sliding track */}
      <div
        style={{
          display: 'flex',
          gap: gap,
          transition: 'transform .52s cubic-bezier(.4,0,.2,1)',
          transform: `translateX(calc(50% - ${baseWidth / 2}px - ${idx} * ${baseWidth + gap}px))`,
          willChange: 'transform',
          padding: '10px 0 6px',
        }}
      >
        {items.map((item, i) => {
          const active = i === idx;
          return (
            <div
              key={i}
              onClick={() => setIdx(i)}
              style={{
                flexShrink: 0,
                width: baseWidth,
                height: baseHeight,
                borderRadius: round ? 999 : 14,
                overflow: 'hidden',
                cursor: active ? 'default' : 'pointer',
                transition: 'opacity .35s ease, transform .35s ease, box-shadow .35s ease',
                opacity: active ? 1 : 0.38,
                transform: active ? 'scale(1)' : 'scale(0.87)',
                boxShadow: active ? '0 24px 60px rgba(0,0,0,.7), 0 0 0 1px rgba(192,132,252,.3)' : 'none',
              }}
            >
              {item}
            </div>
          );
        })}
      </div>

      {/* prev arrow */}
      <button
        onClick={() => go(-1)}
        aria-label="Previous"
        style={{
          position: 'absolute', top: '50%', left: 16,
          transform: 'translateY(calc(-50% - 14px))',
          zIndex: 10, width: 38, height: 38, borderRadius: '50%',
          background: 'rgba(20,17,24,.9)', border: '1px solid rgba(255,255,255,.14)',
          color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: 20, lineHeight: 1,
          backdropFilter: 'blur(8px)', transition: 'background .2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(192,132,252,.25)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(20,17,24,.9)'}
      >
        ‹
      </button>

      {/* next arrow */}
      <button
        onClick={() => go(1)}
        aria-label="Next"
        style={{
          position: 'absolute', top: '50%', right: 16,
          transform: 'translateY(calc(-50% - 14px))',
          zIndex: 10, width: 38, height: 38, borderRadius: '50%',
          background: 'rgba(20,17,24,.9)', border: '1px solid rgba(255,255,255,.14)',
          color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: 20, lineHeight: 1,
          backdropFilter: 'blur(8px)', transition: 'background .2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(192,132,252,.25)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(20,17,24,.9)'}
      >
        ›
      </button>

      {/* dot indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 18 }}>
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            style={{
              width: i === idx ? 22 : 6,
              height: 6,
              borderRadius: 99,
              background: i === idx ? '#c084fc' : 'rgba(255,255,255,.2)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'all .3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}
