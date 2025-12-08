// Gitt at du bruker Next.js, bruker vi <Link> for bedre ytelse
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          {/* H1-taggen er optimal for SEO med klinikkens navn */}
          <h1 className="hero-title">
            SmartHealth by Dr. Aicha
          </h1>

          <p className="hero-tagline">
            Kvinnehelse • allergi • hormoner • allmennmedisin
            <br />
            En moderne og varm privatklinikk i hjertet av Oslo.
          </p>
          
          {/* Bruk <Link> for intern navigasjon hvis booking er på en annen side i appen */}
          <Link href="/booking" className="primary-button">
            Bestill time
          </Link>
          
          {/* Hvis det er en ekstern lenke til MakePlans: */}
          {/* <a href="https://smarthealthbydraicha.makeplans.com" className="primary-button">
            Bestill time
          </a> */}
        </div>
      </section>

      {/* WARM WELCOME SECTION */}
      <section className="welcome-section">
        <div className="container">
          <h2 className="section-heading">Velkommen til SmartHealth</h2>
          <p className="welcome-text">
            Jeg tilbyr moderne, kunnskapsbasert og personlig legehjelp
            med god tid og fokus på trygghet og individuell behandling.
            <br />
            Her møter du en lege som lytter, forklarer og følger deg opp.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-heading primary-color">Tjenester</h2>

          <ul className="service-list">
            <li>Kvinnehelse & overgangsalder</li>
            <li>Stoffskifte & hormonelle plager</li>
            <li>Allergi & astma</li>
            <li>Allmennlegekonsultasjoner</li>
            <li>Kosthold, vekt & livsstil</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
