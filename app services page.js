export default function Services() {
  const sectionStyle = {
    marginBottom: "30px",
    lineHeight: "1.7",
    fontSize: "1.1rem",
  };

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>
      <h1
        style={{
          fontSize: "2.4rem",
          color: "#0077B6",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        Tjenester
      </h1>

      <section style={sectionStyle}>
        <h2 style={{ fontSize: "1.6rem", color: "#0077B6" }}>
          Kvinnehelse & hormoner
        </h2>
        <p>
          Individuell og kunnskapsbasert vurdering av symptomer knyttet til
          menstruasjon, PMS, fertilitet, overgangsalder, hormonubalanser og
          stoffskifte. Målet er trygg, helhetlig og målrettet behandling.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ fontSize: "1.6rem", color: "#0077B6" }}>
          Allergi & astma
        </h2>
        <p>
          Utredning og behandling av allergiplager, astma, atopiske symptomer,
          hudreaksjoner, matallergi, inhalasjonsallergi og sesongplager. Du får
          faglig vurdering og en tydelig behandlingsplan.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ fontSize: "1.6rem", color: "#0077B6" }}>
          Allmennmedisin
        </h2>
        <p>
          Konsultasjoner for akutte og kroniske plager. Fokuset er trygg
          vurdering, god tid og individuell oppfølging.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ fontSize: "1.6rem", color: "#0077B6" }}>
          Ernæring & vektnedgang
        </h2>
        <p>
          Evidensbasert veiledning for vektregulering, metabolsk helse,
          blodsukker, stress og livsstil. Vi lager en personlig og realistisk
          plan.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ fontSize: "1.6rem", color: "#0077B6" }}>
          Stress & søvn
        </h2>
        <p>
          Kartlegging av stressbelastning, søvnkvalitet og symptomer som
          påvirker hverdagen. Verktøy og råd for bedre helse og overskudd.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ fontSize: "1.6rem", color: "#0077B6" }}>
          Konsultasjoner på flere språk
        </h2>
        <p>Norsk, engelsk, spansk, arabisk og somali.</p>
      </section>

      <a
        href="https://smarthealthbydraicha.makeplans.com"
        style={{
          display: "inline-block",
          backgroundColor: "#0077B6",
          color: "white",
          padding: "12px 20px",
          borderRadius: "8px",
          textDecoration: "none",
          marginTop: "20px",
          fontWeight: "bold",
        }}
      >
        Bestill time
      </a>
    </main>
  );
}
