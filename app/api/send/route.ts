import { NextResponse } from "next/server";

function esc(str: string) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function GET() {
  return NextResponse.json(
    { ok: true, message: "Contact mailer online" },
    { headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { success: false, error: "Invalid JSON" },
        { status: 400, headers: { "Cache-Control": "no-store" } },
      );
    }

    const { name, email, company, topic, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing name, email or message" },
        { status: 400, headers: { "Cache-Control": "no-store" } },
      );
    }
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: "RESEND_API_KEY not set" },
        { status: 500, headers: { "Cache-Control": "no-store" } },
      );
    }

    const subject = `New inquiry — ${topic || "General"} — ${name}`;
    const text = `Name: ${name}
Email: ${email}
Company: ${company || ""}
Topic: ${topic || "General"}

${message}`;

    const html = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;">
        <h2>New website inquiry</h2>
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        <p><strong>Company:</strong> ${esc(company || "")}</p>
        <p><strong>Topic:</strong> ${esc(topic || "General")}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;background:#0f172a;color:#e2e8f0;padding:12px;border-radius:8px;">${esc(
          message,
        )}</pre>
      </div>
    `;

    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Jami Global <noreply@jamiglobal.com>", // verified domain sender
        to: ["info@jamiglobal.com"], // recipient
        reply_to: email,
        subject,
        text,
        html,
      }),
    });

    const data = await resp.json().catch(() => ({}));
    const messageId = (data && (data.id || data.data?.id)) || null;

    if (!resp.ok) {
      return NextResponse.json(
        { success: false, error: data?.message || data?.error || `Mailer error (status ${resp.status})` },
        { status: 500, headers: { "Cache-Control": "no-store" } },
      );
    }

    return NextResponse.json(
      { success: true, id: messageId },
      { status: 200, headers: { "Cache-Control": "no-store" } },
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500, headers: { "Cache-Control": "no-store" } },
    );
  }
}