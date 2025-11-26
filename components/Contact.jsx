'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t dark:border-neutral-800 border-neutral-300">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <h3 className="section-title">Contact</h3>
        <p className="dark:text-neutral-300 text-neutral-700 max-w-2xl mx-auto">
          I’m open to collaborations, internships, and software roles. Reach out for projects in systems programming,
          IoT, embedded, or full‑stack. I’ll get back to you quickly.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {/* Email */}
          <a
            href="mailto:karim.masmoudi.dev@gmail.com"
            className="icon-btn"
            aria-label="Send email"
            title="Send email"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" className="fill-current" aria-hidden="true">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2-8 5L4 6h16Zm0 12H4V8l8 5 8-5v10Z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Kernel-Hunter"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="GitHub profile"
            title="GitHub profile"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" className="fill-current" aria-hidden="true">
              <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.38 7.86 10.89.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.41-5.25 5.7.43.37.81 1.11.81 2.25 0 1.63-.02 2.95-.02 3.35 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/karim-masmoudi"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="LinkedIn profile"
            title="LinkedIn profile"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" className="fill-current" aria-hidden="true">
              <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5Zm.02 6H2v12h3V9.5Zm5 0H7v12h3v-6.66c0-1.78 2.07-1.92 2.07 0V21.5H15v-7.52c0-4.2-4.55-4.04-5 1.12V9.5Z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/kimou.mas"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="Facebook profile (@kimou.mas)"
            title="Facebook: kimou.mas"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" className="fill-current" aria-hidden="true">
              <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.9h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v7.03C18.34 21.2 22 17.06 22 12.06Z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/karim._.masmoudi"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="Instagram profile (@karim._.masmoudi)"
            title="Instagram: @karim._.masmoudi"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" className="fill-current" aria-hidden="true">
              <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.06 1.8.25 2.22.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.36 1.05.42 2.22.07 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.06 1.17-.25 1.8-.42 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.05.36-2.22.42-1.25.07-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.06-1.8-.25-2.22-.42a4.34 4.34 0 0 1-1.38-.9 4.34 4.34 0 0 1-.9-1.38c-.17-.42-.36-1.05-.42-2.22C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.06-1.17.25-1.8.42-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.05-.36 2.22-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52 0-4.76.07-.97.05-1.5.21-1.85.35-.46.18-.8.4-1.15.75-.35.35-.57.69-.75 1.15-.14.35-.3.88-.35 1.85-.07 1.24-.07 1.61-.07 4.76s0 3.52.07 4.76c.05 1.97.42 2.47.75 3 .35.35.69.57 1.15.75.35.14.88.3 1.85.35 1.24.07 1.61.07 4.76.07s3.52 0 4.76-.07c.97-.05 1.5-.21 1.85-.35.46-.18.8-.4 1.15-.75.35-.35.57-.69.75-1.15.14-.35.3-.88.35-1.85.07-1.24.07-1.61.07-4.76s0-3.52-.07-4.76c-.05-.97-.21-1.5-.35-1.85-.18-.46-.4-.8-.75-1.15-.35-.35-.69-.57-1.15-.75-.35-.14-.88-.3-1.85-.35-1.24-.07-1.61-.07-4.76-.07Zm0 3.6a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Zm0 1.8a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Zm5.6-2.2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/>
            </svg>
          </a>

          {/* Twitter/X */}
          <a
            href="https://twitter.com/karim0masmoudi"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="Twitter profile (@karim0masmoudi)"
            title="Twitter: @karim0masmoudi"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" className="fill-current" aria-hidden="true">
              <path d="M18.244 2H21l-6.56 7.49L22 22h-6.222l-4.86-6.34L5.2 22H2l7.12-8.12L2 2h6.35l4.49 5.91L18.244 2Zm-2.18 18h2.04L8.04 4H6.1l9.964 16Z"/>
            </svg>
          </a>

          {/* Linktree */}
          <a
            href="https://linktr.ee/karim.masmoudi"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="Linktree"
            title="Linktree: linktr.ee/karim.masmoudi"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" className="fill-current" aria-hidden="true">
              <path d="M10.9 2.6a1.5 1.5 0 0 1 2.2 0l3.2 3.3a1.5 1.5 0 1 1-2.2 2.1l-.9-.9V9h3.6a1.5 1.5 0 0 1 0 3H13v8.5a1.5 1.5 0 0 1-3 0V12H6.5a1.5 1.5 0 0 1 0-3H10V7.1l-.9.9a1.5 1.5 0 1 1-2.2-2.1l3.2-3.3Z"/>
            </svg>
          </a>
        </div>

        {/* Optional labels beneath icons */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-xs dark:text-neutral-400 text-neutral-600">
          <span>@karim0masmoudi</span>
          <span>@karim._.masmoudi</span>
          <span>kimou.mas</span>
          <span>linktr.ee/karim.masmoudi</span>
        </div>
      </div>
    </section>
  );
}
