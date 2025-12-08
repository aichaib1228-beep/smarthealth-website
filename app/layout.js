import "./globals.css";
// Importer Link fra Next.js for bedre ytelse og client-side navigasjon
import Link from 'next/link'; 

export const metadata = {
  title: "SmartHealth by Dr. Aicha – Privat allmennlege i Oslo Sentrum", // Forbedret tittel for SEO
  description: "Privat allmennlege i Oslo – kvinnehelse, hormoner, allergi og moderne helsetjenester.",
};

export default function RootLayout({ children }) {
  // VIKTIG FIKS: Legg navStyle inn som CSS-klasser
  return (
    <html lang="no">
      <body className="root-body">
        {/* HEADER */}
        <header className="main-header">
          <div className="container header-content">
            {/* Logo / Brand */}
            <Link href="/" className="logo-link">
              SmartHealth
            </Link>

            {/* Meny */}
            <nav className="main-nav">
              {/* Bruk Link for intern navigasjon */}
              <Link href="/" className="nav-link">Hjem</Link>
              <Link href="/about" className="nav-link">Om</Link>
              <Link href="/services" className="nav-link">Tjenester</Link>
              <Link href="/contact" className="nav-link">Kontakt</Link>

              {/* Ekstern lenke til Booking (CTA) */}
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

        {/* Sideinnhold */}
        <main className="content-area">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="main-footer">
          <div className="container footer-content">
            <h3 className="footer-title">
              SmartHealth by Dr. Aicha
            </h3>

            {/* Kontaktinformasjon i footer - Bra for SEO/lokalisering */}
            <p className="footer-details">
              Stensgata 2, 0358 Oslo <br />
              Telefon: <a href="tel:+4797252042" className="footer-link">97 25 20 42</a> <br />
              E-post: <a href="mailto:info@draicha.no" className="footer-link">info@draicha.no</a>
            </p>

            {/* Footer CTA */}
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
// navStyle-variabelen er ikke lenger nødvendig da den erstattes av CSS-klasser.
