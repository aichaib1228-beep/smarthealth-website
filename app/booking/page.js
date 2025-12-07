export default function Booking() {
  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.3rem",
          color: "#0077B6",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Bestill time
      </h1>

      <p style={{ fontSize: "1.2rem", lineHeight: "1.7", marginBottom: "30px" }}>
        Du kan enkelt bestille time via vårt digitale bookingsystem.  
        Velg tidspunktet som passer for deg, og få bekreftelse umiddelbart.
      </p>

      <a
        href="https://smarthealthbydraicha.makeplans.com"
        style={{
          display: "inline-block",
          backgroundColor: "#0077B6",
          color: "white",
          padding: "14px 28px",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
      >
        Gå til timebestilling
      </a>
    </main>
  );
}
