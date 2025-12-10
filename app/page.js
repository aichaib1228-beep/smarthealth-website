import Link from "next/link";

export default function Home() {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero-section-home">
        <div className="hero-content-home">
          <h1 className="hero-title-home">
            Velkommen til SmartHealth  

            by Dr. Aicha
          </h1>
          <p className="hero-subtitle-home">
            Din Private allmennlege i Oslo Sentrum
          </p>
          <p className="hero-description-home">
            Vi tilbyr helsetjenester og er en autorisert lege i Oslo.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="main-content-section">
        <div className="content-grid">
          {/* LEFT COLUMN - BOOKING INFO */}
          <div className="content-column">
            <h2 className="column-title">Timebestilling</h2>
            
            <div className="info-box">
              <p className="info-text">
                <strong>Ved spørsmål eller timebestilling:</strong>
              </p>
                           <ul className="info-list">
                <li>Vi tilbyr Drop-in timer og time på dagen uten lange ventetider.</li>
                <li>Du kan kontakte oss via e-post: <a href="mailto:info@draicha.no" class="text-jeg redigerer noen steder for eks, her eposten var feil og jeg byttet men kan du se om det er riktig ?link">kontakt@smarthealthbydraicha.no</a></li>
                <li>SMS på <a href="sms:+4797252042" class="text-link">97 25 20 42</a></li>
                <li>Hvis det haster, ring <a href="tel:+4797252042" class="text-link">97 25 20 42</a></li>
              </ul>

              <p className="info-note">
                Jeg tilbyr flerspråklig kommunikasjon – på norsk, engelsk, spansk, somali og arabisk.
              </p>
            </div>

            <Link href="/booking" className="cta-button-home">
              Bestill time nå
            </Link>
          </div>

          {/* RIGHT COLUMN - ABOUT SMARTHEALTH */}
          <div className="content-column">
            <h2 className="column-title">Hos SmartHealth</h2>
            
            <div className="info-box">
              <p className="info-text">
                Hos SmartHealth får du trygg medisinsk oppfølging, personlig veiledning og 
                forebyggende helsehjelp for hele familien.
              </p>
              <ul className="feature-list">
                <li>Individualisert medisinsk oppfølging og kontinuitet for å hjelpe deg å leve friskere, lengre og med mer energi.</li>
                <li>En lege som lytter, bryr seg og følger deg opp både på klinikken og online.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SMARTHEALTH SECTION */}
      <section className="about-smarthealth-section">
        <div className="about-grid">
          <div className="about-text-column">
            <h2 className="section-title-home">Om SmartHealth</h2>
            <p className="about-paragraph">
              SmartHealthe er et helsevisjon er mer enn bare en klinikk – det er et hjerteprosjekt skapt ut fra et dypt ønske om å tilby profesjonell helsehjelp som virkelig utgjør en forskjell.
Vårt arbeid bygger på troen om at de beste helseresultatene oppnås når legen og pasienten er et team. Hos oss er din helse et samarbeidsprosjekt.
Vi går bokstavelig talt hånd i hånd med deg gjennom dine helseutfordringer, slik at du blir en aktiv deltaker i din egen bedring og varige mestring.
            </p>
            <p className="about-paragraph">
              Vårt arbeid bygger på troen om at god helse handler om mer enn bare rask 
              legging av pasienten og et team. Hos oss er din helse et samarbeidsprosjekt.
            </p>
            <p className="about-paragraph">
              Vi gir bedre helse, både fysisk og mental. Vi kombinerer evidensbasert medisin 
              med helsefremmende tillit, slik at du er en aktiv deltaker i din egen bedring 
              og velvære.
            </p>
          </div>

          <div className="services-column">
            <h3 className="services-title-home">Våre Tjenester</h3>
            
            <div className="service-item-home">
              <h4>Personlig helsehjelp</h4>
              <p>Ingen fastsatte tider, god pris og innstilling til deg.</p>
            </div>

            <div className="service-item-home">
              <h4>Tilgjengelighet og mer Tid</h4>
              <p>Eller tiden du bestemmer å få 15 minutter – 30 min eller 45 min for grundig samtale.</p>
            </div>

            <div className="service-item-home">
              <h4>Skreddersydde Planer</h4>
              <p>Ingen pasienter er like, derfor får du en individuell behandlingsplan og oppfølging.</p>
            </div>

            <div className="service-item-home">
              <h4>Sammenhengende Kontakt</h4>
              <p>Oppnå trygghet og stabilitet med en lege som kjenner deg og din historikk.</p>
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
