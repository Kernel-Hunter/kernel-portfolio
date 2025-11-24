import React from 'react';

const Contact = () => (
  <section id="contact" className="py-20 border-t border-neutral-800">
    <h3 className="section-title">Contact</h3>
    <div className="text-neutral-300 space-y-4 max-w-3xl">
      <p>
        Feel free to reach out for collaboration, systems programming discussions, IoT innovation,
        or sustainable engineering concepts.
      </p>
      <ul className="space-y-2 text-sm">
        <li>Email: <a className="hover:text-cyan-400 underline" href="mailto:karim.masmoudi.pro@gmail.com">karim.masmoudi.pro@gmail.com</a></li>
        <li>Twitter: <a className="hover:text-cyan-400 underline" href="https://twitter.com/karim0masmoudi">@karim0masmoudi</a></li>
        <li>Instagram: <a className="hover:text-cyan-400 underline" href="https://www.instagram.com/karim._.masmoudi">@karim._.masmoudi</a></li>
        <li>Facebook: <a className="hover:text-cyan-400 underline" href="https://www.facebook.com/kimou.mas">kimou.mas</a></li>
        <li>Link Hub: <a className="hover:text-cyan-400 underline" href="https://linktr.ee/karim.masmoudi">linktr.ee/karim.masmoudi</a></li>
        <li>Phone (public): <span className="text-neutral-400">+216 94262521</span></li>
      </ul>
      <p className="text-xs text-neutral-500">
        Note: Publishing a phone number can increase spam; a business number or email-first workflow is safer.
      </p>
    </div>
  </section>
);

export default Contact;