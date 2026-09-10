import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "FLAMIA — Michael González Álvarez",
  description:
    "Agentes de voz, agentes de WhatsApp y CRM automatizado para negocios en LATAM y EE.UU. hispano. FLAMIA — Costa Rica · Miami.",
  metadataBase: new URL("https://flamiagroup.com"),
  openGraph: {
    title: "FLAMIA — Michael González Álvarez",
    description:
      "Construimos la infraestructura conversacional de América Latina: voz, WhatsApp y CRM automatizado.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,600;1,9..144,500&family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
