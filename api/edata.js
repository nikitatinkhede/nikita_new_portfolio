import { Resend } from 'resend';

// Vercel safely grabs this secret key from your dashboard settings
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Block anything that isn't a form submission
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide name, email, and message.' });
    }

    // Trigger the email transmission via Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Free tier default sender
      to: ['nikitatinkhede80@gmail.com'],           // Your verified inbox
      reply_to: email,                              // Visitor's email so you can hit 'reply'
      subject: subject ? `✨ [Portfolio] ${subject} - from ${name}` : `✨ New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 24px; color: #1e293b; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
          <h2 style="color: #4f46e5; margin-top: 0; font-size: 20px; font-weight: 700;">New Message from Portfolio</h2>
          <p style="margin: 8px 0; font-size: 14px;"><strong>From:</strong> ${name} &lt;<a href="mailto:${email}">${email}</a>&gt;</p>
          <p style="margin: 8px 0; font-size: 14px;"><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <div style="padding: 16px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #4f46e5;">
            <p style="white-space: pre-wrap; margin: 0; font-size: 14px; line-height: 1.6; color: #334155;">${message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">Sent via Nikita Tinkhede Portfolio Contact Form</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
