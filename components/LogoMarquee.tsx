import { stackLogos, BrandLogo } from "@/lib/data";
import { brandPaths } from "@/lib/brandPaths";

function Logo({ logo }: { logo: BrandLogo }) {
  const path = logo.icon ? brandPaths[logo.icon] : undefined;

  return (
    <div className="logo-chip" title={logo.name}>
      {path ? (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path fill="currentColor" d={path} />
        </svg>
      ) : null}
      <span>{logo.name}</span>
    </div>
  );
}

export function LogoMarquee() {
  return (
    <div className="logo-marquee" aria-label="Herramientas del stack">
      <div className="logo-track">
        {[0, 1].map((copy) => (
          <div className="logo-row" key={copy} aria-hidden={copy === 1}>
            {stackLogos.map((logo) => (
              <Logo key={`${copy}-${logo.name}`} logo={logo} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
