import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

// ============================================================================
// CONFIGURACIÓN DE DESTINATARIOS
// ============================================================================
// Correo oficial corporativo para recepción de cotizaciones (producción):
const OFFICIAL_RECIPIENT = "cmendoza@tmsolution.com.mx";

// Destinatario activo (usa variable de entorno si existe, o el oficial por defecto):
const TARGET_EMAIL = process.env.QUOTE_RECIPIENT_EMAIL || OFFICIAL_RECIPIENT;

function sanitize(input: string): string {
  if (!input) return "";
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/[<>]/g, "")
    .trim();
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone: string): boolean {
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
  return /^[0-9]{10}$/.test(cleanPhone);
}

function generateEmailHtml(data: {
  fullName: string;
  phone: string;
  email: string;
  details: string;
  recordId: string;
  dateStr: string;
}): string {
  const whatsappUrl = `https://wa.me/52${data.phone}?text=${encodeURIComponent(
    `Hola ${data.fullName}, recibimos tu solicitud de cotización en TM SOLUTION (Folio: ${data.recordId}).`
  )}`;

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Solicitud de Cotización</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F4F6F9; margin: 0; padding: 24px 12px; color: #1F242E;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(15, 45, 89, 0.08); border: 1px solid #E2E8F0;">
    
    <!-- Encabezado Corporativo -->
    <tr>
      <td style="background-color: #0F2D59; padding: 28px 32px; text-align: left;">
        <h1 style="color: #FFFFFF; font-size: 22px; margin: 0; font-weight: 700; letter-spacing: 0.5px;">
          TM SOLUTION
        </h1>
        <p style="color: #94A3B8; font-size: 13px; margin: 6px 0 0 0;">
          Suministros Industriales y Soluciones Técnicas
        </p>
      </td>
    </tr>

    <!-- Franja de Notificación Oficial -->
    <tr>
      <td style="background-color: #EBF1F8; border-bottom: 1px solid #D1E0F0; padding: 12px 32px;">
        <span style="display: inline-block; font-size: 12px; font-weight: 700; color: #0F2D59; text-transform: uppercase; letter-spacing: 0.5px;">
          🔔 Solicitud de Cotización Empresarial (Portal Web)
        </span>
      </td>
    </tr>

    <!-- Cuerpo Principal -->
    <tr>
      <td style="padding: 32px;">
        <h2 style="color: #0F2D59; font-size: 18px; margin: 0 0 8px 0; font-weight: 700;">
          Nueva Solicitud de Cotización Web
        </h2>
        <p style="color: #5A6578; font-size: 14px; margin: 0 0 24px 0; line-height: 1.5;">
          Se ha recibido una nueva solicitud a través del formulario del portal. A continuación se presentan los datos capturados:
        </p>

        <!-- Tarjetas de Información -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 24px;">
          
          <!-- Campo 1: Nombre -->
          <tr>
            <td style="padding: 12px 16px; background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px 8px 0 0;">
              <span style="display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #0F2D59; letter-spacing: 0.5px;">
                Nombre Completo del Solicitante
              </span>
              <span style="display: block; font-size: 15px; font-weight: 600; color: #1F242E; margin-top: 4px;">
                ${data.fullName}
              </span>
            </td>
          </tr>

          <!-- Campo 2: Teléfono / WhatsApp -->
          <tr>
            <td style="padding: 12px 16px; background-color: #FFFFFF; border-left: 1px solid #E2E8F0; border-right: 1px solid #E2E8F0; border-bottom: 1px solid #E2E8F0;">
              <span style="display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #0F2D59; letter-spacing: 0.5px;">
                Teléfono / WhatsApp
              </span>
              <div style="margin-top: 6px;">
                <span style="font-size: 15px; font-weight: 600; color: #1F242E; font-family: monospace;">
                  ${data.phone}
                </span>
                &nbsp;&nbsp;
                <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-block; background-color: #25D366; color: #FFFFFF; font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 6px; text-decoration: none;">
                  Abrir WhatsApp →
                </a>
              </div>
            </td>
          </tr>

          <!-- Campo 3: Correo Electrónico -->
          <tr>
            <td style="padding: 12px 16px; background-color: #F8FAFC; border-left: 1px solid #E2E8F0; border-right: 1px solid #E2E8F0; border-bottom: 1px solid #E2E8F0;">
              <span style="display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #0F2D59; letter-spacing: 0.5px;">
                Correo Electrónico
              </span>
              <span style="display: block; margin-top: 4px;">
                <a href="mailto:${data.email}" style="font-size: 15px; font-weight: 600; color: #0F2D59; text-decoration: underline;">
                  ${data.email}
                </a>
              </span>
            </td>
          </tr>

          <!-- Campo 4: Detalle de la Solicitud -->
          <tr>
            <td style="padding: 14px 16px; background-color: #FFFFFF; border-left: 1px solid #E2E8F0; border-right: 1px solid #E2E8F0; border-bottom: 1px solid #E2E8F0; border-radius: 0 0 8px 8px;">
              <span style="display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #0F2D59; letter-spacing: 0.5px;">
                Detalle de la Solicitud o Número de Parte
              </span>
              <div style="margin-top: 8px; padding: 12px; background-color: #F1F5F9; border-radius: 6px; border: 1px dashed #CBD5E1; font-size: 14px; line-height: 1.6; color: #1E293B; white-space: pre-wrap;">
${data.details}
              </div>
            </td>
          </tr>
        </table>

        <!-- Metadatos de Auditoría -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font-size: 12px; color: #64748B; border-top: 1px solid #E2E8F0; padding-top: 16px;">
          <tr>
            <td>Folio Interno: <strong style="font-family: monospace; color: #0F2D59;">${data.recordId}</strong></td>
            <td align="right">Fecha: ${data.dateStr}</td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Pie de Página del Correo -->
    <tr>
      <td style="background-color: #F8FAFC; border-top: 1px solid #E2E8F0; padding: 20px 32px; text-align: center;">
        <p style="margin: 0; font-size: 12px; color: #64748B;">
          Mensaje generado automáticamente por el sitio web oficial de <strong>TM SOLUTION</strong>.
        </p>
        <p style="margin: 4px 0 0 0; font-size: 11px; color: #94A3B8;">
          Hermosillo, Sonora, México &bull; Tel. 6621-12-41-24
        </p>
      </td>
    </tr>

  </table>
</body>
</html>
  `.trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const fullName = sanitize(body.fullName);
    const company = sanitize(body.company) || "Empresa no especificada";
    const rawPhone = sanitize(body.phone);
    const phone = rawPhone.replace(/[\s\-\(\)]/g, "");
    const email = sanitize(body.email);
    const category = sanitize(body.category) || "general";
    const details = sanitize(body.details);

    // 1. Validaciones del lado del servidor (4 campos obligatorios)
    if (!fullName || fullName.length < 2) {
      return NextResponse.json(
        { success: false, message: "Por favor proporciona un nombre válido." },
        { status: 400 }
      );
    }

    if (!phone || !isValidPhone(phone)) {
      return NextResponse.json(
        { success: false, message: "El teléfono debe contener exactamente 10 dígitos numéricos." },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Por favor proporciona un correo electrónico válido." },
        { status: 400 }
      );
    }

    if (!details || details.length < 5) {
      return NextResponse.json(
        { success: false, message: "Por favor describe el detalle de tu requerimiento o número de parte." },
        { status: 400 }
      );
    }

    // 2. Persistencia en Supabase
    let recordId = `quote-${Date.now()}`;
    
    try {
      const isPlaceholder =
        !process.env.NEXT_PUBLIC_SUPABASE_URL ||
        process.env.NEXT_PUBLIC_SUPABASE_URL.includes("TU_PROYECTO") ||
        process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder");

      if (!isPlaceholder) {
        const { data, error } = await supabase
          .from("quotes")
          .insert([
            {
              full_name: fullName,
              company,
              phone,
              email,
              category,
              details,
              status: "pending",
            },
          ])
          .select("id")
          .single();

        if (error) {
          console.error("Supabase insert error:", error);
        } else if (data?.id) {
          recordId = data.id;
        }
      }
    } catch (dbErr) {
      console.warn("Base de datos operando en modo simulación:", dbErr);
    }

    // 3. Envío de Correo Electrónico Real (Resend API)
    const dateStr = new Date().toLocaleString("es-MX", {
      timeZone: "America/Hermosillo",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const emailHtml = generateEmailHtml({
      fullName,
      phone,
      email,
      details,
      recordId,
      dateStr,
    });

    let emailSent = false;
    let emailMessageId: string | null = null;
    let emailError: string | null = null;

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM || "TM SOLUTION <onboarding@resend.dev>";

    if (resendApiKey) {
      try {
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [TARGET_EMAIL],
            reply_to: email,
            subject: "[NUEVA COTIZACIÓN] Solicitud Web - TM SOLUTION",
            html: emailHtml,
          }),
        });

        const resendResult = await resendResponse.json();

        if (resendResponse.ok && resendResult?.id) {
          emailSent = true;
          emailMessageId = resendResult.id;
          console.log(`[CORREO ENVIADO] Despachado exitosamente a ${TARGET_EMAIL}. ID: ${resendResult.id}`);
        } else {
          emailError = resendResult?.message || "Error devuelto por la API de Resend";
          console.error(`[ERROR RESEND] Código: ${resendResponse.status}`, resendResult);
        }
      } catch (sendErr) {
        emailError = sendErr instanceof Error ? sendErr.message : "Fallo de conexión al enviar correo";
        console.error("[ERROR ENVÍO CORREO]:", sendErr);
      }
    } else {
      console.info(
        `[SISTEMA COTIZACIONES] RESEND_API_KEY no detectada en .env.local. Correo simulado para: ${TARGET_EMAIL}`
      );
    }

    // 4. Respuesta Exitosa al Cliente (Status 200)
    return NextResponse.json(
      {
        success: true,
        message: "¡Tu solicitud de cotización ha sido recibida con éxito! Un asesor técnico de TM SOLUTION se comunicará contigo a la brevedad.",
        data: {
          id: recordId,
          recipient: TARGET_EMAIL,
          emailSent,
          emailMessageId,
          emailError: emailError || undefined,
          createdAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en API /api/cotizar:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Ocurrió un error inesperado al procesar tu solicitud. Por favor intenta de nuevo o contáctanos por WhatsApp.",
      },
      { status: 500 }
    );
  }
}
