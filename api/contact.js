import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    // Basic input limits to avoid abuse
    if (name.length > 80 || email.length > 120 || message.length > 4000) {
      return res.status(400).json({ error: "Input too long" });
    }

    const now = new Date().toISOString().replace("T", " ").substring(0, 19);

    const result = await resend.emails.send({
      // Best: replace this with a sender on a domain you verified in Resend
      // Example: "Portfolio <contact@yourdomain.com>"
      from: "Portfolio <onboarding@resend.dev>",
      to: ["horladimeji10@gmail.com"],
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Date: ${now}\nFrom: ${name} <${email}>\n\n${message}`,
    });

    return res.status(200).json({ ok: true, id: result?.data?.id || null });
  } catch (err) {
    console.error("Resend error:", err);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
