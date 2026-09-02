import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

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

const VALID_CATEGORIES = ["herramientas", "epp", "operativo", "especial", "general"];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const fullName = sanitize(body.fullName);
    const company = sanitize(body.company);
    const rawPhone = sanitize(body.phone);
    const phone = rawPhone.replace(/[\s\-\(\)]/g, "");
    const email = sanitize(body.email);
    const category = sanitize(body.category);
    const details = sanitize(body.details);

    // 1. Validaciones del lado del servidor
    if (!fullName || fullName.length < 2) {
      return NextResponse.json(
        { success: false, message: "Por favor proporciona un nombre válido." },
        { status: 400 }
      );
    }

    if (!company || company.length < 2) {
      return NextResponse.json(
        { success: false, message: "Por favor proporciona la empresa o razón social." },
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
        { success: false, message: "Por favor proporciona un correo electrónico corporativo válido." },
        { status: 400 }
      );
    }

    if (!category || !VALID_CATEGORIES.includes(category)) {
      return NextResponse.json(
        { success: false, message: "Por favor selecciona una categoría de suministro válida." },
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
    
    // Intentar inserción si las variables de entorno de Supabase están configuradas
    try {
      const isPlaceholder = !process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes("TU_PROYECTO") || process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder");

      if (!isPlaceholder) {
        const { data, error } = await supabase.from("quotes").insert([
          {
            full_name: fullName,
            company,
            phone,
            email,
            category,
            details,
            status: "pending",
          },
        ]).select("id").single();

        if (error) {
          console.error("Supabase insert error:", error);
        } else if (data?.id) {
          recordId = data.id;
        }
      }
    } catch (dbErr) {
      console.warn("Base de datos operando en modo simulación de desarrollo:", dbErr);
    }

    // 3. Respuesta Exitosa
    return NextResponse.json(
      {
        success: true,
        message: "¡Tu solicitud de cotización ha sido recibida con éxito! Un asesor técnico de TM SOLUTION se comunicará contigo a la brevedad.",
        data: {
          id: recordId,
          createdAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en API /api/cotizar:", error);
    return NextResponse.json(
      { success: false, message: "Ocurrió un error inesperado al procesar tu solicitud. Por favor intenta de nuevo o contáctanos por WhatsApp." },
      { status: 500 }
    );
  }
}
