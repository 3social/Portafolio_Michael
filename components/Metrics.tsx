import { metrics } from "@/lib/data";
import { OrreryDecor } from "./OrreryDecor";
import { AnimatedNumber } from "./AnimatedNumber";

export function Metrics() {
  return (
    <section className="metrics">
      <OrreryDecor set="metrics" />
      <div className="wrap">
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="metric-num">
              <AnimatedNumber value={m.value} suffix={m.suffix} />
            </div>
            <div className="metric-label">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
