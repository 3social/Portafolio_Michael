import { networkNodes } from "@/lib/data";

const PATHS = [
  { d: "M 50 34 Q 30 20 14 16", color: "var(--violet-soft)", id: "netGrad1", dur: "3.2s", delay: "0s" },
  { d: "M 50 34 Q 70 20 86 16", color: "var(--coral)", id: "netGrad2", dur: "3.6s", delay: "0.3s" },
  { d: "M 50 34 Q 25 45 8 52", color: "var(--violet-soft)", id: "netGrad3", dur: "4s", delay: "0.6s" },
  { d: "M 50 34 Q 75 45 92 52", color: "var(--signal)", id: "netGrad4", dur: "3.4s", delay: "0.9s" },
  { d: "M 50 34 Q 35 65 22 84", color: "var(--coral)", id: "netGrad5", dur: "3.8s", delay: "1.2s" },
  { d: "M 50 34 Q 65 65 78 84", color: "var(--violet-soft)", id: "netGrad6", dur: "3.5s", delay: "1.5s" },
];

export function HeroNetwork() {
  return (
    <div className="hero-network" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          {PATHS.map((p) => {
            const [x1, y1] = [50, 34];
            const [x2, y2] = p.d.split(" ").slice(-2).map(Number);
            return (
              <linearGradient key={p.id} id={p.id} gradientUnits="userSpaceOnUse" x1={x1} y1={y1} x2={x2} y2={y2}>
                <stop offset="0%" stopColor={p.color} stopOpacity="0" />
                <stop offset="50%" stopColor={p.color} stopOpacity="0.85" />
                <stop offset="100%" stopColor={p.color} stopOpacity="0" />
              </linearGradient>
            );
          })}
        </defs>

        {PATHS.map((p, i) => (
          <path
            key={`static-${i}`}
            d={p.d}
            stroke="var(--line-dark)"
            strokeWidth={0.6}
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        ))}

        {PATHS.map((p) => (
          <path
            key={p.id}
            d={p.d}
            stroke={`url(#${p.id})`}
            strokeWidth={1}
            fill="none"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="10 30"
            style={{ animation: `flowDash ${p.dur} linear infinite ${p.delay}` }}
          />
        ))}
      </svg>

      {networkNodes.map((node, i) => (
        <div
          key={node.label}
          className="net-node"
          style={{ left: `${node.left}%`, top: `${node.top}%`, animationDelay: `${0.9 + i * 0.1}s` }}
        >
          {node.label}
        </div>
      ))}
    </div>
  );
}
