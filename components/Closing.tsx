import { Reveal } from "./Reveal";
import { WhatsAppPanel } from "./WhatsAppPanel";

export function Closing() {
  return (
    <section className="closing" id="contacto">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <span className="kicker">Dos caminos, una agencia</span>
            <h2>¿Buscas un sistema o buscas construir uno con nosotros?</h2>
          </div>
        </Reveal>

        <Reveal>
          <WhatsAppPanel />
        </Reveal>
      </div>
    </section>
  );
}
