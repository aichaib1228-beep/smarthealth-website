import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "SmartHealth by Dr. Aicha – Privat allmennlege i Oslo Sentrum",
  description:
    "Privat allmennlege i Oslo – kvinnehelse, hormoner, allergi og moderne helsetjenester.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body className="root-body">
        
        {/* HEADER */}
        <header className="main-header">
          <div className="container header-content">
            
            {/* Logo */}
            <Link href="/" className="logo-link">
              <Image
                src="/logo.png"
                alt="SmartHealth by Dr. Aicha logo"
                width={180}
                height={40}
                className="header-logo"
                priority
              />
            </Link>

            {/* Navigation */}
            <nav className="main-nav">
              <Link href="/" className="nav-link">Hjem</Link>
              <Link href="/about" className="nav-link">Om</Link>
              <Link href="/services" className="nav-link">Tjenester</Link>
              <Link href="/contact" className="nav-link">Kontakt</Link>

              {/* Booking CTA */}
              <a
                href="https://smarthealthbydraicha.makeplans.com"
                className="primary-button nav-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bestill time
              </a>
            </nav>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="content-area">{children}</main>

        {/* FOOTER */}
        <footer className="main-footer">
          <div className="container footer-content">
            <h3 className="footer-title">SmartHealth by Dr. Aicha</h3>

            <p className="footer-details">
              Stensgata 2, 0358 Oslo <br />
              Telefon:{" "}
              <a href="tel:+4797252042" className="footer-link">
                97 25 20 42
              </a>
              <br />
              E-post:{" "}
              <a href="mailto:info@draicha.no" className="footer-link">
                info@draicha.no
              </a>
            </p>

            <a
              href="https://smarthealthbydraicha.makeplans.com"
              className="primary-button footer-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bestill time
            </a>

            <p className="copyright-text">
              © {new Date().getFullYear()} SmartHealth by Dr. Aicha – Alle rettigheter forbeholdt.
            </p>
          </div>
        </footer>

      </body>
    </html>
  );
}
