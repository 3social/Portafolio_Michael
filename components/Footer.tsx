import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/contact";

export function Footer() {
  return (
    <footer>
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", width: "100%", flexWrap: "wrap", gap: "16px" }}>
        <span>FLAMIA — Michael González Álvarez</span>
        <a
          href={whatsappLink("Hola Michael, vengo del sitio de FLAMIA.")}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          WhatsApp {WHATSAPP_DISPLAY}
        </a>
        <span>Costa Rica · Miami · LATAM</span>
      </div>
    </footer>
  );
}
