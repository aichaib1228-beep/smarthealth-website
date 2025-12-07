import "./globals.css";

export const metadata = {
  title: "SmartHealth by Dr. Aicha",
  description: "Privat allmennlege i Oslo – kvinnehelse, hormoner, allergi og moderne helsetjenester.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body
        style={{
          fontFamily: "Arial, sans-serif",
          margin: 0,
          padding: 0,
          backgroundColor: "#FFFFFF",
          color: "#333",
        }}
      >
        {/* HEADER */}
        <header
          style={{
            backgroundColor: "#FFFFFF",
            borderBottom: "3px solid #0077B6",
            padding: "15px 20px",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* LOGO / NAVN */}
            <a
              href="/"
              style={{
                fontSize: "1.6rem",
                fontWeight: "bold",
                color: "#0077B6",
                textDecoration: "none",
              }}
            >
              SmartHealth
            </a>

            {/* MENY */}
            <nav style={{ display: "flex", gap: "20px" }}>
              <a href="/" style={navStyle}>Hjem</a>
              <a href="/about" style={navStyle}>Om</a>
              <a href="/services" style={navStyle}>Tjenester</a>
              <a href="/contact" style={navStyle}>Kontakt</a>
              <a
                href="https://smarthealthbydraicha.makeplans.com"
                style={{
                  padding: "8px 14px",
                  backgroundColor: "#0077B6",
                  color: "#fff",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Bestill time
              </a>
            </nav>
          </div>
        </header>

        {/* SIDEINNHOLD */}
        <div style={{ minHeight: "70vh" }}>{children}</div>

        {/* FOOTER */}
        <footer
          style={{
            backgroundColor: "#F9F4EF",
            padding: "40px 20px",
            marginTop: "40px",
            borderTop: "3px solid #0077B6",
          }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <h3 style={{ color: "#0077B6", marginBottom: "10px" }}>
              SmartHealth by Dr. Aicha
            </h3>

            <p>
              Stensgata 2, 0358 Oslo <br />
              Telefon: 97 25 20 42 <br />
              E-post: info@draicha.no
            </p>

            <a
              href="https://smarthealthbydraicha.makeplans.com"
              style={{
                display: "inline-block",
                marginTop: "15px",
                backgroundColor: "#0077B6",
                color: "white",
                padding: "12px 20px",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Bestill time
            </a>

            <p style={{ marginTop: "20px", fontSize: "0.9rem", color: "#777" }}>
              © {new Date().getFullYear()} SmartHealth by Dr. Aicha – Alle rettigheter forbeholdt.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

const navStyle = {
  color: "#0077B6",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1rem",
};
