import { Reveal } from "./Reveal";
import { LogoMarquee } from "./LogoMarquee";

export function Stack() {
  return (
    <section className="stack-section" id="stack">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <span className="kicker" style={{ color: "var(--coral)" }}>
              Debajo del capó
            </span>
            <h2 style={{ color: "#fff" }}>El stack que sostiene todo esto</h2>
            <p>Herramientas elegidas por lo que resuelven, no por moda.</p>
          </div>
        </Reveal>
        <Reveal>
          <LogoMarquee />
        </Reveal>
      </div>
    </section>
  );
}
