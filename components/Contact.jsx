'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: '', error: '' });

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ loading: false, success: '', error: 'Please fill in all fields.' });
      return false;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailOk) {
      setStatus({ loading: false, success: '', error: 'Please enter a valid email address.' });
      return false;
    }
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: '', error: '' });

    if (!validate()) return;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setStatus({ loading: false, success: 'Message sent! I will get back to you soon.', error: '' });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ loading: false, success: '', error: err.message || 'Something went wrong.' });
    }
  };

  return (
    <section id="contact" className="py-20 border-t dark:border-neutral-800 border-neutral-300">
      <div className="max-w-4xl mx-auto px-5">
        <h3 className="section-title text-center">Contact</h3>
        <p className="dark:text-neutral-300 text-neutral-700 max-w-2xl mx-auto text-center">
          I’m open to collaborations, internships, and software roles. Send me a message directly here.
        </p>

        {/* Social icons row (keep your existing icons above or below as you prefer) */}

        <form onSubmit={onSubmit} className="mt-10 grid grid-cols-1 gap-4 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm dark:text-neutral-300 text-neutral-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                className="w-full px-3 py-2 rounded-md border dark:border-neutral-700 border-neutral-300
                           bg-white dark:bg-neutral-900 dark:text-neutral-200 text-neutral-800
                           focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm dark:text-neutral-300 text-neutral-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                className="w-full px-3 py-2 rounded-md border dark:border-neutral-700 border-neutral-300
                           bg-white dark:bg-neutral-900 dark:text-neutral-200 text-neutral-800
                           focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm dark:text-neutral-300 text-neutral-700 mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows={6}
              className="w-full px-3 py-2 rounded-md border dark:border-neutral-700 border-neutral-300
                         bg-white dark:bg-neutral-900 dark:text-neutral-200 text-neutral-800
                         focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Write your message..."
              required
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={status.loading}
              className="px-5 py-2 rounded-md bg-cyan-500 hover:bg-cyan-400 text-neutral-900 font-semibold shadow transition disabled:opacity-60"
            >
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>
            {status.success && (
              <span className="text-sm text-green-500">{status.success}</span>
            )}
            {status.error && (
              <span className="text-sm text-red-500">{status.error}</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
