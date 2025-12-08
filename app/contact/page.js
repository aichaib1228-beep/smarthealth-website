export default function Contact() {
  return (
    <main className="contact-page-main">
      <h1 className="contact-title">
        Kontakt & Adresse
      </h1>

      {/* ADRESSE */}
      <section className="contact-section">
        <h2 className="contact-section-title">Adresse</h2>
        <p className="contact-details">
          SmartHealth by Dr. Aicha <br />
          Stensgata 2 <br />
          0358 Oslo <br />
          (Nær Majorstuen)
        </p>
      </section>

      {/* ÅPNINGSTIDER */}
      <section className="contact-section">
        <h2 className="contact-section-title">Åpningstider</h2>
        {/* Utvidede åpningstider er et konkurransefortrinn, bra å fremheve */}
        <p className="contact-details">
          Mandag–Fredag: 08.00 – 20.00 <br />
          Lørdag: 11.00 – 20.00 <br />
          Søndag: Stengt
        </p>
      </section>

      {/* KONTAKT */}
      <section className="contact-section">
        <h2 className="contact-section-title">Kontakt</h2>
        <p className="contact-details">
          {/* Sørg for at du bruker riktig landskode (+47) i tel:-lenken */}
          Telefon: <a href="tel:+4797252042" className="contact-link">97 25 20 42</a> <br />
          SMS: 97 25 20 42 <br />
          E-post: <a href="mailto:info@draicha.no" className="contact-link">info@draicha.no</a>
        </p>
      </section>

      {/* BESTILL TIME (CTA) */}
      <section className="contact-section">
        <h2 className="contact-section-title">Bestill time</h2>
        <a
          href="https://smarthealthbydraicha.makeplans.com"
          className="primary-button"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Bestill time nå
        </a>
      </section>

      {/* KART */}
      <section className="map-section">
        <h2 className="contact-section-title">Kart og Veibeskrivelse</h2>
        <div className="map-container">
          {/* !!! VIKTIG FIKS: Erstatt kilde med et faktisk Google Maps Iframe-embed: */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.6480584733732!2d10.72580715104439!3d59.93299748174542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e771c080001%3A0x1d5f2f5c7e099824!2sStensgata%202%2C%200358%20Oslo!5e0!3m2!1sno!2sno!4v1701890123456" 
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
