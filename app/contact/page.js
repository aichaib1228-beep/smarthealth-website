import Image from "next/image";

export default function Contact() {
  return (
    <main className="contact-page">
      <h1 className="contact-title">Kontakt SmartHealth by Dr. Aicha</h1>

      {/* Kontaktkort */}
      <section className="contact-card">
        <p className="contact-text">
          Du er hjertelig velkommen til å ta kontakt for timebestilling,
          spørsmål om tjenester eller generell veiledning.
        </p>

        <div className="contact-info">
          <p><strong>📍 Adresse:</strong> Stensgata 2, 0358 Oslo</p>
          <p>
            <strong>📞 Telefon:</strong>{" "}
            <a href="tel:+4797252042" className="contact-link">
              97 25 20 42
            </a>
          </p>
          <p>
            <strong>✉️ E-post:</strong>{" "}
            <a href="mailto:info@draicha.no" className="contact-link">
              info@draicha.no
            </a>
          </p>
        </div>

        <a
          href="https://smarthealthbydraicha.makeplans.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          Bestill time
        </a>
      </section>

      {/* Bilde */}
      <div className="contact-image-wrapper">
        <Image
          src="/hero_doctor_consult.jpg"
          alt="SmartHealth klinikk – konsultasjon"
          width={500}
          height={350}
          className="contact-image"
        />
      </div>
    </main>
  );
}
