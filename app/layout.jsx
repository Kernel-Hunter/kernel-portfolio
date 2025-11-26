import './globals.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export const metadata = {
  title: 'Karim | Software Engineer – Imagination. Precision. Purpose.',
  description: 'Karim portfolio featuring systems programming, IoT innovation, and sustainable engineering concepts.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-6xl mx-auto px-5">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}