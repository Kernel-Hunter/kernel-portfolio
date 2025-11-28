import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Create transporter using Gmail SMTP with app password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,       // e.g., 'karim.masmoudi.pro@gmail.com'
        pass: process.env.MAIL_PASS,       // Gmail App Password (not your normal password)
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
      to: 'karim.masmoudi.pro@gmail.com',
      replyTo: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto;">
          <h2>New Portfolio Message</h2>
          <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-line;">${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
