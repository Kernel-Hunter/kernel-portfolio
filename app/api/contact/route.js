import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const user = process.env.MAIL_USER; // e.g. 'karim.masmoudi.pro@gmail.com'
    const pass = process.env.MAIL_PASS; // Gmail App Password (16 chars)
    if (!user || !pass) {
      return NextResponse.json({ error: 'Server email not configured' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    });

    const subject = `New message from ${name}`;
    const text = `New Portfolio Message\nFrom: ${name} <${email}>\n\n${message}`;
    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto;">
        <h2>New Portfolio Message</h2>
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-line;">${message}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to: 'karim.masmoudi.pro@gmail.com',
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
