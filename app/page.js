export default function Home() {
  return (
    <main>

      {/* HERO SECTION */}
      <section
        style={{
          padding: "60px 20px",
          backgroundColor: "#FFFFFF",
          borderBottom: "4px solid #0077B6",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.4rem", color: "#0077B6" }}>
            SmartHealth by Dr. Aicha
          </h1>

          <p
            style={{
              fontSize: "1.3rem",
              marginTop: "10px",
              marginBottom: "25px",
              color: "#333",
              lineHeight: "1.6",
            }}
          >
            Kvinnehelse • allergi • hormoner • allmennmedisin  
            <br />
            En moderne og varm privatklinikk i hjertet av Oslo.
          </p>

          <a
            href="https://smarthealthbydraicha.makeplans.com"
            style={{
              backgroundColor: "#0077B6",
              color: "white",
              padding: "14px 26px",
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "1.1rem",
              fontWeight: "bold",
            }}
          >
            Bestill time
          </a>
        </div>
      </section>

      {/* WARM WELCOME SECTION */}
      <section
        style={{
          padding: "50px 20px",
          backgroundColor: "#F9F4EF",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ color: "#444" }}>Velkommen til SmartHealth</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginTop: "12px" }}>
            Jeg tilbyr moderne, kunnskapsbasert og personlig legehjelp
            med god tid og fokus på trygghet og individuell behandling.
            <br />
            Her møter du en lege som lytter, forklarer og følger deg opp.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        style={{
          padding: "50px 20px",
          backgroundColor: "white",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ color: "#0077B6" }}>Tjenester</h2>

          <ul style={{ fontSize: "1.1rem", lineHeight: "2", marginTop: "10px" }}>
            <li>Kvinnehelse & overgangsalder</li>
            <li>Stoffskifte & hormonelle plager</li>
            <li>Allergi & astma</li>
            <li>Allmennlegekonsultasjoner</li>
            <li>Kosthold, vekt & livsstil</li>
          </ul>
        </div>
      </section>

    </main>
  );
}
