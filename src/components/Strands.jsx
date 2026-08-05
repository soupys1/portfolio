import { useEffect, useRef } from 'react';

export default function Strands({
  colors     = ['#ff3d57', '#8b5cf6', '#3b5bff'],
  count      = 4,
  speed      = 0.45,
  amplitude  = 1.15,
  waviness   = 1,
  thickness  = 0.7,
  glow       = 2.6,
  spread     = 1,
  intensity  = 0.6,
  opacity    = 1,
  scale      = 1.5,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W = 0, H = 0;
    const resize = () => {
      const dpr = devicePixelRatio || 1;
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const totalStrands = count * colors.length;
    const strands = Array.from({ length: totalStrands }, (_, i) => ({
      color:   colors[i % colors.length],
      yFrac:   i / Math.max(totalStrands - 1, 1),
      phase:   (i / totalStrands) * Math.PI * 2,
      freq:    1 + (i % 4) * 0.28 * waviness,
      ampMult: 0.75 + (i % 3) * 0.25,
    }));

    let t = 0, rafId;

    const draw = () => {
      rafId = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, W, H);
      t += speed * 0.005;

      for (const s of strands) {
        const yCenter = H * (0.2 + s.yFrac * 0.6) * spread;

        ctx.beginPath();
        for (let i = 0; i <= 100; i++) {
          const xp = i / 100;
          const x  = xp * W;
          const y  = yCenter
            + Math.sin(xp * Math.PI * 2.4 * s.freq + t + s.phase)       * H * 0.09 * amplitude * s.ampMult * scale
            + Math.sin(xp * Math.PI * 5.5 * s.freq + t * 1.7 + s.phase * 2) * H * 0.03 * amplitude * s.ampMult;
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }

        // Glow halo
        const glowPasses = Math.ceil(glow * 1.5);
        for (let g = glowPasses; g > 0; g--) {
          ctx.lineWidth    = thickness * 2 + g * 4;
          ctx.strokeStyle  = s.color;
          ctx.globalAlpha  = opacity * intensity * 0.08 * (1 - g / (glowPasses + 2));
          ctx.shadowColor  = s.color;
          ctx.shadowBlur   = g * 10;
          ctx.stroke();
        }

        // Core line
        ctx.lineWidth   = thickness * 2;
        ctx.strokeStyle = s.color;
        ctx.globalAlpha = opacity * intensity * 0.9;
        ctx.shadowColor = s.color;
        ctx.shadowBlur  = glow * 8;
        ctx.stroke();

        ctx.globalAlpha = 1;
        ctx.shadowBlur  = 0;
      }
    };

    draw();
    return () => { cancelAnimationFrame(rafId); ro.disconnect(); };
  }, [colors, count, speed, amplitude, waviness, thickness, glow, spread, intensity, opacity, scale]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
    />
  );
}
