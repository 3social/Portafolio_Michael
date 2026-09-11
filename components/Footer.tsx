import { brandPaths } from "@/lib/brandPaths";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/contact";

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/mikeiacr/" },
  { name: "Instagram", href: "https://www.instagram.com/mikecr_ia/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/flamiagroup" },
];

const pages = [
  { name: "flamiagroup.com", href: "https://www.flamiagroup.com" },
  { name: "ghl.flamiagroup.com", href: "https://ghl.flamiagroup.com" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-panel">
        <div className="wrap site-footer-inner">
          <div className="site-footer-top">
            <div className="site-footer-brand">
              <span className="site-footer-logo">FLAMIA</span>
              <p>
                Infraestructura conversacional para negocios en LATAM y EE.UU. hispano — voz,
                WhatsApp y CRM automatizado.
              </p>
              <div className="site-footer-social">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path fill="currentColor" d={brandPaths[social.name]} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="site-footer-group">
              <h3>Páginas</h3>
              <ul>
                {pages.map((page) => (
                  <li key={page.name}>
                    <a href={page.href} target="_blank" rel="noopener noreferrer">
                      {page.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="site-footer-bottom">
            <p>© {new Date().getFullYear()} FLAMIA — Michael González Álvarez</p>
            <a href={whatsappLink("Hola Michael, vengo del sitio de FLAMIA.")} target="_blank" rel="noopener noreferrer">
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            <p>Costa Rica · Miami · LATAM</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
