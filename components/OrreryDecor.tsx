// Fixed (non-random) glyph positions so server-rendered and client-rendered
// markup always match — using Math.random() here would cause a hydration
// mismatch between server and client.
const GLYPH_SETS: Record<string, { top: number; left: number; delay: number }[]> = {
  metrics: [
    { top: 12, left: 8, delay: 0.1 },
    { top: 78, left: 14, delay: 0.6 },
    { top: 22, left: 92, delay: 1.1 },
    { top: 64, left: 88, delay: 1.6 },
    { top: 40, left: 50, delay: 0.3 },
    { top: 88, left: 46, delay: 2.0 },
    { top: 8, left: 60, delay: 1.4 },
    { top: 55, left: 6, delay: 2.4 },
    { top: 30, left: 30, delay: 0.9 },
    { top: 70, left: 70, delay: 1.9 },
  ],
  channels: [
    { top: 10, left: 12, delay: 0.2 },
    { top: 85, left: 10, delay: 1.2 },
    { top: 18, left: 88, delay: 0.7 },
    { top: 75, left: 90, delay: 1.7 },
    { top: 45, left: 5, delay: 2.1 },
    { top: 50, left: 95, delay: 0.4 },
    { top: 6, left: 45, delay: 1.5 },
    { top: 92, left: 55, delay: 2.3 },
    { top: 30, left: 65, delay: 0.9 },
    { top: 60, left: 30, delay: 1.0 },
  ],
};

export function OrreryDecor({ set }: { set: "metrics" | "channels" }) {
  const glyphs = GLYPH_SETS[set];
  return (
    <div className="orrery-decor" aria-hidden="true">
      <div className="orbit orbit-1">
        <div className="planet" />
      </div>
      <div className="orbit orbit-2">
        <div className="planet" />
      </div>
      <div className="orbit orbit-3">
        <div className="planet" />
      </div>
      <div className="orbit orbit-4">
        <div className="planet" />
      </div>
      {glyphs.map((g, i) => (
        <span
          key={i}
          className="glyph"
          style={{ top: `${g.top}%`, left: `${g.left}%`, animationDelay: `${g.delay}s` }}
        />
      ))}
    </div>
  );
}
