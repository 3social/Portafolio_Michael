"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({ defaultPath = "negocio" }: { defaultPath?: "negocio" | "talento" }) {
  const [status, setStatus] = useState<Status>("idle");
  const [path, setPath] = useState<"negocio" | "talento">(defaultPath);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      path,
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="closing-card">
        <h3>¡Listo!</h3>
        <p>Recibimos tu mensaje — te contactamos pronto desde FLAMIA.</p>
      </div>
    );
  }

  return (
    <form className="closing-card contact-form" onSubmit={handleSubmit}>
      <h3>Escríbenos</h3>
      <p>Cuéntanos qué necesitas y por dónde vienes.</p>

      <div className="form-row">
        <label className={path === "negocio" ? "path-pill active" : "path-pill"}>
          <input
            type="radio"
            name="pathType"
            value="negocio"
            checked={path === "negocio"}
            onChange={() => setPath("negocio")}
          />
          Tengo un negocio
        </label>
        <label className={path === "talento" ? "path-pill active" : "path-pill"}>
          <input
            type="radio"
            name="pathType"
            value="talento"
            checked={path === "talento"}
            onChange={() => setPath("talento")}
          />
          Quiero construir con FLAMIA
        </label>
      </div>

      <input className="form-input" name="name" type="text" placeholder="Tu nombre" required />
      <input className="form-input" name="email" type="email" placeholder="Tu correo" required />
      <textarea
        className="form-input"
        name="message"
        rows={4}
        placeholder="Contanos brevemente qué necesitas"
        required
      />

      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando…" : "Enviar mensaje"}
      </button>

      {status === "error" && (
        <p style={{ color: "var(--coral)", fontSize: "0.85rem", marginTop: "4px" }}>
          Algo falló al enviar. Intenta de nuevo o escríbenos directo.
        </p>
      )}
    </form>
  );
}
