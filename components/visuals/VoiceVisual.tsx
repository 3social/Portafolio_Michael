// Fixed bar heights (deterministic) instead of Math.random() to avoid
// server/client hydration mismatches.
const BAR_HEIGHTS = [30, 62, 45, 80, 55, 95, 40, 70, 50, 85, 35, 60, 90, 48, 75, 38, 65, 82, 44, 58];
const DELAYS = [0.1, 0.4, 0.7, 0.2, 0.9, 0.05, 0.6, 0.3, 1.0, 0.15, 0.5, 0.8, 0.25, 0.65, 0.35, 0.95, 0.45, 0.75, 0.55, 0.85];

export function VoiceVisual() {
  return (
    <div className="voice-visual">
      <div className="status">Llamada activa</div>
      <div className="bars2">
        {BAR_HEIGHTS.map((h, i) => (
          <div
            key={i}
            className="bar"
            style={{ ["--h" as any]: `${h}px`, animationDelay: `${DELAYS[i]}s` }}
          />
        ))}
      </div>
    </div>
  );
}
