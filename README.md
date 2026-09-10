# FLAMIA — Portafolio (Next.js)

Migración del portafolio a Next.js 14 (App Router) + TypeScript, listo para desplegar en Vercel.

## Qué cambió respecto a la versión HTML estática

- **Contenido separado del diseño**: los casos de estudio, métricas y stack viven en `lib/data.ts` — para agregar un cliente nuevo o actualizar una métrica no tocas el JSX, solo ese archivo.
- **Contadores animados** en la sección de métricas (`components/AnimatedNumber.tsx`), activados al entrar en pantalla.
- **Scroll-reveal** real vía `IntersectionObserver` (`components/Reveal.tsx`) en las secciones principales.
- **Formulario de contacto funcional** (`components/ContactForm.tsx` + `app/api/contact/route.ts`) — hoy registra el mensaje en los logs de Vercel; ver más abajo cómo conectarlo a email/CRM real.
- **Imagen optimizada** con `next/image` (`public/mike.jpg`).
- **Vercel Analytics** integrado (`@vercel/analytics`).

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Desplegar en Vercel

**Opción rápida (sin git):**

```bash
npm install -g vercel
vercel
```

Sigue las instrucciones — Vercel detecta Next.js automáticamente, no necesitas configurar nada.

**Opción recomendada (con git, para tener deploys automáticos):**

1. Sube esta carpeta a un repo de GitHub/GitLab.
2. Entra a [vercel.com/new](https://vercel.com/new) e importa el repo.
3. Vercel detecta Next.js solo — dale a "Deploy".
4. Cada `git push` a `main` despliega automáticamente.

## Conectar el formulario de contacto a algo real

`app/api/contact/route.ts` ahora mismo solo hace `console.log` del mensaje (lo ves en Vercel → tu proyecto → pestaña **Logs**). Para que llegue a un correo o a tu CRM, la opción más simple en Vercel es [Resend](https://resend.com):

```bash
npm install resend
```

```ts
// en app/api/contact/route.ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "portafolio@flamiagroup.com",
  to: "tu-correo@flamiagroup.com",
  subject: `Nuevo contacto (${path}) — ${name}`,
  text: message,
});
```

Y agregar `RESEND_API_KEY` en Vercel → Project Settings → Environment Variables.

Otra opción: reenviar el `POST` a un **webhook de n8n o GoHighLevel** para que el lead caiga directo en tu pipeline, ya que ese es tu stack habitual.

## Agregar un caso de estudio nuevo

Edita `lib/data.ts` → array `caseStudies`. El componente `CaseStudies.tsx` ya sabe renderizar cualquier entrada nueva sin cambios adicionales (elige `visual: "voice" | "chat" | "flow"` según cuál de los tres visuales quieres reutilizar).

## Estructura

```
app/
  layout.tsx          Fuentes (next/font), metadata, Analytics
  page.tsx            Ensambla las secciones
  globals.css         Todo el diseño (tokens, componentes)
  api/contact/route.ts
components/
  Hero.tsx, Metrics.tsx, CaseStudies.tsx, Stack.tsx, Closing.tsx, Footer.tsx, Nav.tsx
  visuals/            VoiceVisual, ChatVisual, FlowVisual
  Reveal.tsx          Scroll-reveal genérico
  AnimatedNumber.tsx  Contador animado
  OrreryDecor.tsx     Fondo de órbitas reutilizable
  HeroNetwork.tsx     Fondo de red del hero
lib/
  data.ts             Todo el contenido dinámico
public/
  mike.jpg
```
