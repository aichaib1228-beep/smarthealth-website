import "./globals.css";
// Viktig: Importer Link og Image fra Next.js for bedre ytelse
import Link from 'next/link'; 
import Image from 'next/image'; 

export const metadata = {
  // Optimalisert tittel for SEO
  title: "SmartHealth by Dr. Aicha – Privat allmennlege i Oslo Sentrum",
  description: "Privat allmennlege i Oslo – kvinnehelse, hormoner, allergi og moderne helsetjenester.",
  
  // LEGG TIL IKONER HER (Favicon)
  icons: {
    icon: '/favicon.ico', // Hovedfavicon (den blå SH-sirkelen)
    shortcut: '/favicon-32x32.png', // Alternativ størrelse
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body className="root-body">
        
        {/* HEADER */}
        <header className="main-header">
          <div className="container header-content">
            {/* Logo / Brand - erstatter tekst med bildekomponenten */}
            <Link href="/" className="logo-link">
              <Image 
                src="/logo.png" 
                alt="SmartHealth by Dr. Aicha logo" 
                width={180} // Justert bredde 
                height={40} // Justert høyde
                className="header-logo"
              />
            </Link>

            {/* Meny - Bruker Link for intern navigasjon */}
            <nav className="main-nav">
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

            <p className="footer-details">
              Stensgata 2, 0358 Oslo <br />
              Telefon: <a href="tel:+4797252042" className="footer-link">97 25 20 42</a> <br />
              E-post: <a href="mailto:info@draicha.no" className="footer-link">info@draicha.no</a>
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
