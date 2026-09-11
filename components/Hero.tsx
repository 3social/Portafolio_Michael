import Image from "next/image";
import { HeroNetwork } from "./HeroNetwork";

export function Hero() {
  return (
    <header className="hero">
      <HeroNetwork />

      <div className="wrap">
        <span className="hero-eyebrow">FLAMIA — Costa Rica · Miami</span>

        <div className="portrait-stack">
          <div className="portrait-wrap">
            <div className="portrait-glow" />
            <Image
              className="portrait"
              src="/mike.jpg"
              alt="Michael González Álvarez"
              fill
              sizes="(max-width: 760px) 62vw, 340px"
              priority
            />
          </div>
        </div>
        <span className="portrait-name">Michael González Álvarez</span>
        <span className="portrait-role">Co-fundador, FLAMIA</span>

        <h1>
          Construimos la infraestructura <em>conversacional</em>
          <br />
          de América Latina.
        </h1>
        <p>
          Agentes de voz, agentes de WhatsApp y CRM automatizado para negocios que necesitan
          responder rápido y vender mejor — sin contratar un call center.
        </p>
      </div>
    </header>
  );
}
