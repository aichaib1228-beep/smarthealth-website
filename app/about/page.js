import Image from "next/image";

export default function About() {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero-section">
        <div className="about-hero-content">
          <h1 className="about-hero-title">Om Dr. Aicha Ibrahim Aibo</h1>
          <p className="about-hero-subtitle">
            Spesialist i allergisykdommer • Helhetlig helsehjelp
          </p>
        </div>
      </section>

      {/* INTRO WITH IMAGE */}
      <section className="about-intro-section">
        <div className="about-intro-container">
          <div className="about-intro-image-wrapper">
            <Image
              src="/doctor-1.png"
              alt="Dr. Aicha Ibrahim Aibo"
              width={400}
              height={400}
              className="about-intro-image"
            />
          </div>
          <div className="about-intro-text">
            <h2 className="about-section-title">Velkommen til SmartHealth</h2>
            <p className="about-paragraph-large">
              Dr. Aicha Ibrahim Aibo er spesialist i allergisykdommer med omfattende nasjonal 
              og internasjonal erfaring. Hun er allmennlege med spisskompetanse innen kvinnehelse, 
              hormonelle plager, allergi og astma.
            </p>
            <p className="about-paragraph-large">
              Med utdannelse fra Cuba og fagkompetanse fra Spania, kombinerer Dr. Aicha klassisk 
              medisin med moderne, helhetlige vurderinger for å gi trygg, personlig og oppdatert 
              behandling – med god tid.
            </p>
            <p className="about-paragraph-large">
              Dr. Aicha snakker <strong>norsk, engelsk, spansk, somali og arabisk</strong>, 
              noe som gjør henne til en tilgjengelig og inkluderende lege for pasienter med ulik 
              språklig og kulturell bakgrunn.
            </p>
          </div>
        </div>
      </section>

      {/* SMARTHEALTH PHILOSOPHY */}
      <section className="philosophy-section">
        <div className="philosophy-container">
          <h2 className="philosophy-title">🏥 Om SmartHealth Klinikken</h2>
          <p className="philosophy-text">
            SmartHealth er et hjerteprosjekt som ønsker å tilby profesjonell helsehjelp som utgjør 
            en forskjell, basert på at de beste resultatene oppnås når legen og pasienten er et team.
          </p>
          <div className="philosophy-features">
            <div className="philosophy-feature">
              <h3>⚡ Rask Digital Veiledning</h3>
              <p>For raske svar og veiledning når du trenger det.</p>
            </div>
            <div className="philosophy-feature">
              <h3>🔍 Omfattende Utredning og Kontakt</h3>
              <p>For dypere innsikt og personlig oppfølging over tid.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="expertise-section">
        <div className="expertise-container">
          <h2 className="expertise-title">⭐ Mål og Ekspertise</h2>
          <p className="expertise-text">
            Målet er å gi pasienten kunnskap og verktøy for å ta kontroll over egen helse gjennom 
            små, bærekraftige endringer som skaper varige resultater.
          </p>
          
          <h3 className="expertise-subtitle">Spesialfelt og faglige interesseområder</h3>
          <ul className="expertise-list">
            <li>Kvinnehelse og overgangsalder</li>
            <li>Hormonelle plager</li>
            <li>Allergi og astma</li>
            <li>Livsstilsmedisin og forebyggende helse</li>
            <li>Ernæring og stressmestring</li>
            <li>Allmennmedisinske konsultasjoner</li>
          </ul>
        </div>
      </section>

      {/* FOCUS AREAS - SIMPLIFIED */}
      <section className="focus-section">
        <div className="focus-container">
          <h2 className="focus-main-title">Hva fokuserer jeg som lege?</h2>
          <p className="focus-description">
            Helhetlig helsefokus - Grundig helsehjelp som gir deg innsikt i din nåværende helsestatus.
          </p>

          <div className="focus-grid">
            <div className="focus-card">
              <div className="focus-icon">🩺</div>
              <h3>Helhetlig Helsesjekk</h3>
              <p>
                Grundig gjennomgang av helsestatus og risikofaktorer.
              </p>
            </div>

            <div className="focus-card">
              <div className="focus-icon">💊</div>
              <h3>Mestring av Kroniske Sykdommer</h3>
              <p>
                Livsstilendringer som gir deg kontroll og økt livskvalitet.
              </p>
            </div>

            <div className="focus-card">
              <div className="focus-icon">🫁</div>
              <h3>Allergi og Astma</h3>
              <p>
                Spesialistkompetanse og behandling for allergisykdommer.
              </p>
            </div>

            <div className="focus-card">
              <div className="focus-icon">👨‍👩‍👧‍👦</div>
              <h3>Barn og Familie</h3>
              <p>
                Veiledning om barns helse og sunne vaner i familien.
              </p>
            </div>

            <div className="focus-card">
              <div className="focus-icon">🎯</div>
              <h3>Individuell Coaching</h3>
              <p>
                Skreddersydd coaching for helseutfordringer og stress.
              </p>
            </div>

            <div className="focus-card">
              <div className="focus-icon">⚖️</div>
              <h3>Vektreise & Livsstilsendring</h3>
              <p>
                Helhetlig program for varig vektnedgang og helse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COLLABORATION WITH IMAGE */}
      <section className="collaboration-section">
        <div className="collaboration-container">
          <div className="collaboration-content">
            <h2 className="collaboration-title">
              Din partner på veien mot varig velvære
            </h2>
            <p className="collaboration-text">
              Medisin og livsstil samles for din helse. La oss jobbe sammen for din helse. 
              Med vår helhetlige tilnærming og spesialkompetanse er du i trygge hender.
            </p>
            <p className="collaboration-text-bold">
              Start din helsereise med oss.
            </p>
            <a href="/booking" className="collaboration-cta-button">
              Bestill time nå
            </a>
          </div>
          <div className="collaboration-image-wrapper">
            <Image
              src="/doctor-2.png"
              alt="Dr. Aicha - Din helsepartner"
              width={400}
              height={400}
              className="collaboration-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
