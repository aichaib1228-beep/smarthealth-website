export default function Contact() {
  const section = { marginBottom: "25px", lineHeight: "1.7" };
  const titleStyle = { fontSize: "1.6rem", color: "#0077B6", marginBottom: "8px" };

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>
      <h1
        style={{
          fontSize: "2.3rem",
          color: "#0077B6",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        Kontakt & Adresse
      </h1>

      <section style={section}>
        <h2 style={titleStyle}>Adresse</h2>
        <p>
          SmartHealth by Dr. Aicha <br />
          Stensgata 2 <br />
          0358 Oslo <br />
          (Nær Majorstuen)
        </p>
      </section>

      <section style={section}>
        <h2 style={titleStyle}>Åpningstider</h2>
        <p>
          Mandag–Fredag: 08.00 – 20.00 <br />
          Lørdag: 11.00 - 20.00 <br />
          Søndag: Stengt
        </p>
      </section>

      <section style={section}>
        <h2 style={titleStyle}>Kontakt</h2>
        <p>
          Telefon: <a href="tel:+4797252042">97 25 20 42</a> <br />
          SMS: 97 25 20 42 <br />
          E-post: <a href="mailto:info@draicha.no">info@draicha.no</a>
        </p>
      </section>

      <section style={section}>
        <h2 style={titleStyle}>Bestill time</h2>
        <a
          href="https://smarthealthbydraicha.makeplans.com"
          style={{
            display: "inline-block",
            backgroundColor: "#0077B6",
            color: "white",
            padding: "12px 20px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Bestill time
        </a>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2 style={titleStyle}>Kart</h2>
        <div style={{ borderRadius: "10px", overflow: "hidden" }}>
          <iframe
            src="https://www.google.com/maps?q=Stensgata+2,+Oslo&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
