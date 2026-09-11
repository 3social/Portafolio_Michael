import { metrics } from "@/lib/data";
import { OrreryDecor } from "./OrreryDecor";
import { AnimatedNumber } from "./AnimatedNumber";
import { Reveal } from "./Reveal";

export function Metrics() {
  return (
    <section className="metrics">
      <OrreryDecor set="metrics" />
      <div className="wrap">
        {metrics.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.08}>
            <div className="metric-num">
              <AnimatedNumber value={m.value} suffix={m.suffix} />
            </div>
            <div className="metric-label">{m.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
