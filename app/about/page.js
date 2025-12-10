import Image from "next/image";

export default function About() {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero-section">
        <div className="about-hero-content">
          <h1 className="about-hero-title">Om Dr. Aicha Ibrahim Aibo</h1>
          <p className="about-hero-subtitle">
            Din spesialist i allergisykdommer og helhetlig helsehjelp
          </p>
        </div>
      </section>

      {/* MAIN INTRO SECTION */}
      <section className="about-intro-section">
        <div className="about-intro-container">
          <div className="about-intro-image-wrapper">
            <Image
              src="/doctor-1.png"
              alt="Dr. Aicha Ibrahim Aibo"
              width={500}
              height={500}
              className="about-intro-image"
            />
          </div>
          <div className="about-intro-text">
            <h2 className="about-section-title">💡 Om Dr. Aicha</h2>
            <p className="about-paragraph-large">
              Dr. Aicha Ibrahim Aibo er en spesialist i allergisykdommer med omfattende nasjonal 
              og internasjonal erfaring. Hun er allmennlege med spisskompetanse innen kvinnehelse, 
              hormonelle plager, allergi og astma. Hennes filosofi, som er kjernen i SmartHealth by Dr. Aicha, 
              går utover tradisjonell medisin.
            </p>
            <p className="about-paragraph-large">
              Hun har utdannelse fra Cuba og fagkompetanse fra Spania, og har jobbet som lege både 
              i Norge og internasjonalt. Med en solid og bred klinisk bakgrunn fra både 
              primærhelsetjenesten (fastlege/BHT) vektlegger Dr. Aicha kontinuerlig oppdatering 
              innen medisinsk innovasjon.
            </p>
            <p className="about-paragraph-large">
              Dr. Aicha snakker <strong>norsk, engelsk, spansk, somali og arabisk</strong>, 
              noe som gjør henne til en tilgjengelig og inkluderende lege for pasienter 
              med ulik språklig og kulturell bakgrunn.
            </p>
            <p className="about-paragraph-large">
              Dr. Aicha er kjent for sin rolige væremåte, faglige trygghet og evne til å 
              forklare medisinske problemstillinger på en enkel og forståelig måte. Hun kombinerer 
              klassisk medisin med moderne, helhetlige vurderinger for å gi trygg, personlig og 
              oppdatert behandling – med god tid.
            </p>
          </div>
        </div>
      </section>

      {/* SMARTHEALTH PHILOSOPHY SECTION */}
      <section className="philosophy-section">
        <div className="philosophy-container">
          <h2 className="philosophy-title">🏥 Om SmartHealth Klinikken</h2>
          <p className="philosophy-text">
            SmartHealth er et hjerteprosjekt som ønsker å tilby profesjonell helsehjelp som utgjør 
            en forskjell, basert på at de beste resultatene oppnås når legen og pasienten er et team.
          </p>
          <p className="philosophy-text">
            Klinikken tilbyr lav terskel og komplett oppfølging skreddersydd for individuelle behov:
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

      {/* GOALS AND EXPERTISE SECTION */}
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

      {/* FOCUS AREAS SECTION */}
      <section className="focus-section">
        <div className="focus-container">
          <h2 className="focus-main-title">Helhetlig Helsefokus</h2>
          <p className="focus-subtitle">
            Hva fokuserer jeg som lege?
          </p>
          <p className="focus-description">
            Grundige helsehjelp som gir deg innsikt i din nåværende helsestatus.
          </p>

          <div className="focus-grid">
            <div className="focus-card">
              <div className="focus-icon">🩺</div>
              <h3>Helhetlig Helsesjekk</h3>
              <p>
                En grundig gjennomgang av helsestatus, risikofaktorer, og setter konkrete mål 
                for å optimalisere din velvære.
              </p>
            </div>

            <div className="focus-card">
              <div className="focus-icon">💊</div>
              <h3>Mestring av Kroniske Sykdommer</h3>
              <p>
                Et program for deg som lever med kroniske lidelser. Vi fokuserer på livsstilendringer 
                som gir deg kontroll og økt livskvalitet.
              </p>
            </div>

            <div className="focus-card">
              <div className="focus-icon">🫁</div>
              <h3>Allergi og Astma</h3>
              <p>
                Med spesialistkompetanse, grundig veiledning og behandling for å mestre 
                allergisykdommer, astma og andre vanlige luftveisplager.
              </p>
            </div>

            <div className="focus-card">
              <div className="focus-icon">👨‍👩‍👧‍👦</div>
              <h3>Råd og Veiledning for Barn og Familie</h3>
              <p>
                Støtte og veiledning til foreldre om barns helse, utvikling av sunne vaner, 
                og håndtering av ernæringsutfordringer i familien.
              </p>
            </div>

            <div className="focus-card">
              <div className="focus-icon">🎯</div>
              <h3>Din Helsepartner – Individuell Coaching</h3>
              <p>
                Få skreddersydd én-til-én coaching for å navigere helseutfordringer, håndtere stress, 
                forbedre søvn og styrke din mentale og fysiske helse.
              </p>
            </div>

            <div className="focus-card">
              <div className="focus-icon">⚖️</div>
              <h3>Vektreise & Varig Livsstilsendring</h3>
              <p>
                Et helhetlig program for varig vektnedgang. Vi kombinerer ernæring, aktivitetsplaner 
                og motivasjon for å hjelpe deg nå dine mål og opprettholde dem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COLLABORATION SECTION */}
      <section className="collaboration-section">
        <div className="collaboration-container">
          <div className="collaboration-content">
            <h2 className="collaboration-title">
              Fokus på Samarbeid og Personlig Tilnærming
            </h2>
            <p className="collaboration-subtitle">
              Medisin og livsstil samles for din helse.
            </p>
            <p className="collaboration-text">
              La oss jobbe sammen for din helse. Vi er din partner på veien mot varig velvære. 
              Med vår helhetlige tilnærming og spesialkompetanse er du i trygge hender.
            </p>
            <p className="collaboration-text-bold">
              Start din helsereise med oss.
            </p>
          </div>
          <div className="collaboration-image-wrapper">
            <Image
              src="/doctor-2.png"
              alt="Dr. Aicha - Din helsepartner"
              width={450}
              height={450}
              className="collaboration-image"
            />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="about-cta-section">
        <h2 className="about-cta-title">Klar til å starte din helsereise?</h2>
        <p className="about-cta-text">
          Bestill en konsultasjon i dag og opplev forskjellen med SmartHealth by Dr. Aicha.
        </p>
        <a href="/booking" className="about-cta-button">
          Bestill time nå
        </a>
      </section>
    </div>
  );
}
