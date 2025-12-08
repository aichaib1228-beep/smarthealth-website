export default function About() {
  return (
    <main className="about-page-main">
      <h1 className="about-title">
        Om Dr. Aicha
      </h1>

      <p className="about-paragraph">
        Dr. Aicha Ibrahim Aibo er allmennlege med bred internasjonal erfaring og
        spisskompetanse innen kvinnehelse, hormonelle plager, allergi og astma.
        Hun kombinerer klassisk medisin med moderne, helhetlige vurderinger for å gi
        trygg, personlig og oppdatert behandling.
      </p>

      <p className="about-paragraph">
        Hun har utdannelse fra Cuba og spesialisert fagkompetanse fra Spania, og
        har jobbet som lege både i Norge og internasjonalt. Dr. Aicha snakker fem
        språk (norsk, engelsk, spansk, arabisk og somali).
      </p>

      {/* Bruk en mer beskrivende H2 for SEO */}
      <h2 className="about-section-heading">
        Spesialfelt og Faglige interesseområder
      </h2>

      <ul className="about-service-list">
        <li>Kvinnehelse og overgangsalder</li>
        <li>Hormonelle plager</li>
        <li>Allergi og astma</li>
        <li>Livsstilsmedisin og forebyggende helse</li>
        <li>Ernæring og stressmestring</li>
        <li>Allmennmedisinske konsultasjoner</li>
      </ul>

      <p className="about-paragraph-closing">
        Dr. Aicha er kjent for sin rolige væremåte, faglige trygghet og evne til å
        forklare medisinske problemstillinger på en enkel og forståelig måte.
      </p>
    </main>
  );
}
