import Link from "next/link";

export default function Home() {
  return (
    <div className="home-page">
      
      {/* HERO SECTION */}
      <section className="hero-section-home">
        <div className="hero-content-home">
          <h1 className="hero-title-home">
            Velkommen til SmartHealth
            <br />
            by Dr. Aicha
          </h1>
          <p className="hero-subtitle-home">
            Din Private Allmennlege i Oslo Sentrum
          </p>
          <p className="hero-description-home">
            Vi tilbyr grundige og autoriserte helsetjenester. Hos oss får du den tiden du trenger.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="main-content-section">
        <div className="content-grid">
          
          {/* LEFT COLUMN - BOOKING INFO */}
          <div className="content-column">
            <h2 className="column-title">Timebestilling og Kontakt</h2>
            
            <div className="info-box">
              <p className="info-text">
                <strong>Enkelt og raskt: Vi tilbyr Drop-in timer og time på dagen.</strong>
              </p>
              <ul className="info-list">
                <li>Ring ved hast: <a href="tel:+4797252042" className="text-link">97 25 20 42</a></li>
                <li>SMS for rask kontakt: <a href="sms:+4797252042" className="text-link">97 25 20 42</a></li>
                <li>E-post for generelle spørsmål: <a href="mailto:info@draicha.no" className="text-link">info@draicha.no</a></li>
              </ul>
              <p className="info-note">
                **Flerspråklig kommunikasjon:** Jeg tilbyr veiledning på norsk, engelsk, spansk, somali og arabisk.
              </p>
            </div>

            <Link href="/booking" className="cta-button-home">
              Bestill time nå
            </Link>
          </div>

          {/* RIGHT COLUMN - ABOUT SMARTHEALTH (HVA VI GJØR) */}
          <div className="content-column">
            <h2 className="column-title">Hvorfor velge SmartHealth?</h2>
            
            <div className="info-box">
              <p className="info-text">
                Hos SmartHealth får du trygg medisinsk oppfølging, personlig veiledning og forebyggende helsehjelp for hele familien.
              </p>
              <ul className="feature-list">
                <li>**Individualisert Oppfølging:** Kontinuitet og dedikert helsehjelp som hjelper deg å leve friskere, lengre og med mer energi.</li>
                <li>**En Lege som Lytter:** Få en lege som bryr seg og følger deg opp både på klinikken og via digitale løsninger.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SMARTHEALTH SECTION (UTDYPNING) */}
      <section className="about-smarthealth-section">
        <div className="about-grid">
          <div className="about-text-column">
            <h2 className="section-title-home">Om SmartHealth: Din Helsepartner</h2>
            <p className="about-paragraph">
              SmartHealth er mer enn bare en klinikk – det er et hjerteprosjekt skapt ut fra et dypt ønske om å tilby profesjonell helsehjelp som virkelig utgjør en forskjell.
            </p>
            <p className="about-paragraph">
              Vårt arbeid bygger på troen om at de beste helseresultatene oppnås når **legen og pasienten er et team**. Hos oss er din helse et samarbeidsprosjekt.
            </p>
            <p className="about-paragraph">
              Vi kombinerer **evidensbasert medisin** med helsefremmende tillit. Vi går hånd i hånd med deg gjennom dine utfordringer, slik at du blir en aktiv deltaker i din egen bedring og varige mestring, både fysisk og mentalt.
            </p>
          </div>

          {/* SERVICES COLUMN - NÅ MED ALLE DETALJER IGJEN */}
          <div className="services-column">
            <h3 className="services-title-home">Våre Spesialiteter og Tjenester</h3>
            
            <div className="service-item-home">
              <h4>Personlig helsehjelp</h4>
              <p>Jeg tilbyr individuelle behandlingsplaner, god pris og et fokus på deg som person. Ingen pasienter er like.</p>
            </div>

            <div className="service-item-home">
              <h4>Tilgjengelighet og mer Tid</h4>
              <p>Du velger selv varighet (15 min – 45 min) for en grundig samtale og oppfølging.</p>
            </div>

            <div className="service-item-home">
              <h4>Sammenhengende Kontakt</h4>
              <p>Oppnå trygghet og stabilitet med en lege som kjenner deg og din historikk.</p>
            </div>

            <div className="service-item-home">
              <h4>Skreddersydde Planer</h4>
              <p>Hver pasient får en individuell behandlingsplan og oppfølging.</p>
            </div>
            
            <div className="service-item-home">
              <h4>Mestring av Kroniske Sykdommer</h4>
              <p>Verktøy og veiledning for å leve bedre med kroniske lidelser. Vi fokuserer på livsstilsendringer som gir deg kontroll og økt livskvalitet.</p>
            </div>
            
            <div className="service-item-home">
              <h4>Allergi og Astma</h4>
              <p>Grundig veiledning og behandling for å mestre allergisykdommer, astma og andre vanlige luftveisplager.</p>
            </div>

            <div className="service-item-home">
              <h4>Helse for Barn og Familie</h4>
              <p>Støtte og veiledning til foreldre om barns kosthold, utvikling av sunne vaner og håndtering av ernæringsutfordringer.</p>
            </div>

            <div className="service-item-home">
              <h4>Vektreise & Varig Livsstilsendring</h4>
              <p>Helhetlig program for vektregulering. Vi kombinerer ernæring, aktivitet og motivasjon for å hjelpe deg nå varige mål.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section-home">
        <h2 className="cta-title-home">Klar til å ta kontroll over din helse?</h2>
        <p className="cta-text-home">
          Bestill din time i dag og opplev forskjellen med SmartHealth by Dr. Aicha.
        </p>
        <Link href="/booking" className="cta-button-large">
          Bestill time nå
        </Link>
      </section>
    </div>
  );
}
