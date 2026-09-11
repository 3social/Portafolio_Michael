import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/contact";

const DEFAULT_MESSAGE =
  "Hola Michael, vengo del sitio de FLAMIA y quiero conversar sobre un sistema conversacional.";

export function WhatsAppPanel({
  message = DEFAULT_MESSAGE,
  label = "Escribir por WhatsApp",
}: {
  message?: string;
  label?: string;
}) {
  return (
    <div className="closing-card whatsapp-panel">
      <span className="kicker">Un solo canal</span>
      <h3>Hablemos por WhatsApp</h3>
      <p>
        Sin formularios ni esperas. Escríbenos directo y respondemos desde el mismo canal que
        construimos para nuestros clientes.
      </p>
      <a className="btn btn-primary whatsapp-btn" href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m0 1.82c2.16 0 4.19.84 5.72 2.37a8.04 8.04 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.1 8.09a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.11.82.83-3.04-.2-.31a8.04 8.04 0 0 1-1.24-4.24c0-4.46 3.63-8.09 8.2-8.09m-1.5 3.7c-.22 0-.58.08-.88.41-.3.33-1.15 1.13-1.15 2.75s1.18 3.19 1.34 3.41c.17.22 2.29 3.5 5.55 4.77 2.71 1.05 3.26.84 3.85.79.59-.06 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.3-.21-.63-.37-.33-.17-1.9-.94-2.2-1.05-.3-.11-.51-.16-.72.17-.22.33-.83 1.04-1.02 1.26-.19.22-.37.25-.7.08-.33-.17-1.36-.5-2.59-1.6-.96-.85-1.6-1.9-1.79-2.23-.19-.33-.02-.5.14-.67.15-.15.33-.39.5-.58.16-.2.22-.33.33-.55.11-.22.05-.41-.03-.58-.08-.16-.72-1.79-1.01-2.45-.24-.56-.48-.5-.66-.51z"
          />
        </svg>
        {label}
      </a>
      <span className="whatsapp-number">{WHATSAPP_DISPLAY}</span>
    </div>
  );
}
