export default function Home() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "2.4rem",
          color: "#0077B6",
          marginBottom: "10px",
        }}
      >
        SmartHealth by Dr. Aicha
      </h1>

      <h2
        style={{
          fontSize: "1.4rem",
          fontWeight: "400",
          marginBottom: "30px",
        }}
      >
        Kvinnehelse, allergi, hormoner og allmennmedisin — i hjertet av Oslo
      </h2>

      <p
        style={{
          lineHeight: "1.7",
          fontSize: "1.1rem",
          marginBottom: "30px",
        }}
      >
        Velkommen til en moderne og personlig allmennlegepraksis med fokus på
        fagkunnskap, trygghet og evidensbasert behandling. Her får du god tid,
        individuelle vurderinger og helhetlig oppfølging.
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
    </main>
  );
}
