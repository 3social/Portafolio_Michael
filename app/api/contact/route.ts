import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { path, name, email, message } = body as {
      path?: string;
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 });
    }

    // TODO: conecta aquí un servicio real de envío de correo, por ejemplo:
    //   - Resend (https://resend.com) — recomendado para proyectos en Vercel
    //   - SendGrid / Postmark
    //   - O reenviar a un webhook de GoHighLevel / n8n para caer directo en tu CRM
    //
    // Por ahora solo lo registramos en los logs de la función (visibles en
    // el dashboard de Vercel > Logs) para que puedas verificar que llega.
    console.log("Nuevo contacto FLAMIA:", { path, name, email, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }
}
