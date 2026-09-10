"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";

export function Closing() {
  const [selectedPath, setSelectedPath] = useState<"negocio" | "talento">("negocio");

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
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setSelectedPath("negocio")}
              >
                Agendar una llamada
              </button>
            </div>
          </Reveal>

          <Reveal>
            <div className="closing-card">
              <h3>Para talento y socios</h3>
              <p>
                Desarrolladores, closers y agencias que quieren construir sistemas conversacionales
                con nosotros en LATAM y EE.UU. hispano.
              </p>
              <button
                type="button"
                className="btn btn-ghost"
                style={{ color: "var(--ink-text)", borderColor: "var(--line)" }}
                onClick={() => setSelectedPath("talento")}
              >
                Escribir a FLAMIA
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="closing-grid" style={{ marginTop: "24px", gridTemplateColumns: "1fr" }}>
            <ContactForm key={selectedPath} defaultPath={selectedPath} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
