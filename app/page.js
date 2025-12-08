import Link from "next/link";
// Image-komponenten må brukes for bedre ytelse
import Image from "next/image"; 

export default function Home() {
  const primaryColor = "#0077B6"; // SmartHealth blå

  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" }}>
      
      {/* 1. HOVEDSEKSJON (Hero) */}
      <section style={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between", 
        marginBottom: "60px",
        gap: "40px",
      }}>
        <div style={{ maxWidth: "550px" }}>
          <h1 
            style={{ 
              fontSize: "3rem", 
              fontWeight: "bold", 
              color: primaryColor, 
              marginBottom: "20px" 
            }}
          >
            Din Privatlege i Oslo – Med God Tid
          </h1>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.6", marginBottom: "30px", color: "#444" }}>
            SmartHealth by Dr. Aicha tilbyr helhetlige allmennlegetjenester. Få rask
            tilgang til utvidet konsultasjon og spesialisert kompetanse innen
            kvinnehelse, hormoner og allergi.
          </p>
          
          <Link 
            href="https://smarthealthbydraicha.makeplans.com"
            style={{
              display: "inline-block",
              backgroundColor: primaryColor,
              color: "white",
              padding: "15px 30px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.1rem",
              boxShadow: "0 4px 10px rgba(0, 119, 182, 0.4)",
              transition: "background-color 0.3s",
            }}
          >
            Bestill time nå (Rask Tilgang)
          </Link>
        </div>

        {/* Bilde plassert til høyre for en profesjonell hero-seksjon */}
        <div style={{ flexShrink: 0 }}>
          <Image 
            src="/hero_doctor_consult.jpg" // Bytt til det beste konsultasjonsbildet ditt 
            alt="Dr. Aicha i konsultasjon med pasient"
            width={450} 
            height={450}
            style={{ borderRadius: "15px", objectFit: "cover", boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
          />
        </div>
      </section>

      {/* 2. TJENESTER OG KOMPETANSE */}
      <section style={{ padding: "40px 0", borderTop: "1px solid #eee", marginTop: "40px" }}>
        <h2 style={{ fontSize: "2rem", color: primaryColor, marginBottom: "20px", textAlign: "center" }}>
          Våre Spesialfelt
        </h2>
        <div style={{ 
          display: "flex", 
          justifyContent: "space-around", 
          gap: "20px",
          textAlign: "center"
        }}>
          {/* Kort 1 */}
          <div style={{ flex: 1, padding: "20px", backgroundColor: "#F4F7F9", borderRadius: "10px" }}>
            <h3 style={{ fontSize: "1.3rem", color: primaryColor, marginBottom: "10px" }}>Kvinnehelse & Hormoner</h3>
            <p style={{ color: "#555" }}>Fokus på overgangsalder, PCOS og hormonell ubalanse.</p>
          </div>
          {/* Kort 2 */}
          <div style={{ flex: 1, padding: "20px", backgroundColor: "#F4F7F9", borderRadius: "10px" }}>
            <h3 style={{ fontSize: "1.3rem", color: primaryColor, marginBottom: "10px" }}>Allergi & Astma</h3>
            <p style={{ color: "#555" }}>Diagnostikk, behandling og oppfølging av allergiske plager.</p>
          </div>
          {/* Kort 3 */}
          <div style={{ flex: 1, padding: "20px", backgroundColor: "#F4F7F9", borderRadius: "10px" }}>
            <h3 style={{ fontSize: "1.3rem", color: primaryColor, marginBottom: "10px" }}>Utvidet Legetime</h3>
            <p style={{ color: "#555" }}>30-60 minutter uten stress for grundig utredning og samtale.</p>
          </div>
        </div>
      </section>

      {/* 3. LENKE TIL HELE TJENESTEOVERSIKTEN */}
       <section style={{ textAlign: "center", marginTop: "40px" }}>
        <Link 
          href="/services"
          style={{
            color: primaryColor,
            textDecoration: "underline",
            fontSize: "1.1rem",
            fontWeight: "bold",
          }}
        >
          Se full oversikt over alle tjenester →
        </Link>
      </section>

    </main>
  );
}
