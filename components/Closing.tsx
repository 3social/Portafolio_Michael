import { Reveal } from "./Reveal";
import { WhatsAppPanel } from "./WhatsAppPanel";
import { whatsappLink } from "@/lib/contact";

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

        <div className="closing-grid">
          <Reveal>
            <div className="closing-card">
              <h3>Para negocios</h3>
              <p>
                Real estate, estética, salud y servicios que necesitan responder rápido, calificar
                leads y agendar sin depender de más personal.
              </p>
              <a
                className="btn btn-primary"
                href={whatsappLink(
                  "Hola Michael, tengo un negocio y quiero un sistema conversacional con FLAMIA."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar una llamada
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div className="closing-card">
              <h3>Para talento y socios</h3>
              <p>
                Desarrolladores, closers y agencias que quieren construir sistemas conversacionales
                con nosotros en LATAM y EE.UU. hispano.
              </p>
              <a
                className="btn btn-ghost"
                style={{ color: "var(--ink-text)", borderColor: "var(--line)" }}
                href={whatsappLink("Hola Michael, quiero construir con FLAMIA.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Escribir a FLAMIA
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="closing-grid" style={{ marginTop: "24px", gridTemplateColumns: "1fr" }}>
            <WhatsAppPanel />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
