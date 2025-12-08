// Bruk <Link> hvis du ønsker å holde deg innenfor Next.js-navigasjonen
import Link from 'next/link'; 

export default function Booking() {
  return (
    <main className="booking-page-main">
      <h1 className="booking-title">
        Bestill time
      </h1>

      <p className="booking-intro-text">
        Du kan enkelt bestille time via vårt digitale bookingsystem.
        Velg tidspunktet som passer for deg, og få bekreftelse umiddelbart.
      </p>
      
      {/* Hvis du bruker en ekstern lenke til MakePlans: */}
      <a
        href="https://smarthealthbydraicha.makeplans.com"
        className="primary-button large-button" // Bruk CSS-klasser for stil
        target="_blank" // Anbefalt: Åpne ekstern booking i et nytt vindu
        rel="noopener noreferrer"
      >
        Gå til timebestilling
      </a>
      
      <p className="booking-contact-note">
        *Ring oss på [Ditt telefonnummer] ved akutte henvendelser.
      </p>
    </main>
  );
}
