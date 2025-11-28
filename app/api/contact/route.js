import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.MAIL_TO;
    const from = process.env.MAIL_FROM || 'no-reply@resend.dev';

    if (!apiKey || !to) {
      return NextResponse.json({ error: 'Server not configured' }, { status: 500 });
    }

    const subject = `New message from ${name}`;
    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto;">
        <h2>New Portfolio Message</h2>
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-line;">${message}</p>
      </div>
    `;

    // Send via Resend HTTP API
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      let errMsg = 'Failed to send';
      try {
        const err = await res.json();
        errMsg = err?.message || errMsg;
      } catch (_) {}
      return NextResponse.json({ error: errMsg }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}
