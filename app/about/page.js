import Image from 'next/image'; // Viktig: Importer Image fra Next.js

export default function About() {
  return (
    <main className="about-page-main">
      <h1 className="about-title">Om Dr. Aicha – Din Privatlege i Oslo</h1>
      
      {/* BILDE AV LEGEN LAGT TIL HER */}
      <div className="doctor-image-container">
        <Image 
          src="/dr_aicha_profile.jpg" 
          alt="Portrett av Dr. Aicha Ibrahim Aibo, Allmennlege" 
          width={300} 
          height={400} 
          className="doctor-profile-image"
        />
      </div>

      <p className="about-paragraph">
        Dr. Aicha Ibrahim Aibo er allmennlege med bred internasjonal erfaring og
        spisskompetanse innen kvinnehelse, hormonelle plager, allergi og astma.
        Hun kombinerer klassisk medisin med moderne, helhetlige vurderinger for å gi
        trygg, personlig og oppdatert behandling, **med god tid**.
      </p>

      <p className="about-paragraph">
        Hun har utdannelse fra Cuba og spesialisert fagkompetanse fra Spania, og
        har jobbet som lege både i Norge og internasjonalt. Dr. Aicha snakker fem
        språk (norsk, engelsk, spansk, arabisk og somali).
      </p>

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
