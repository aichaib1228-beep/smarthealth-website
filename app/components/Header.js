"use client";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkStyle = {
    textDecoration: "none",
    color: "#0077B6",
    fontWeight: "bold",
    fontSize: "1rem",
  };

  return (
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

        {/* LOGO */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <img
            src="/logo.png"
            alt="SmartHealth Logo"
            style={{ width: "38px", height: "38px" }}
          />
          <span
            style={{
              fontSize: "1.4rem",
              fontWeight: "bold",
              color: "#0077B6",
            }}
          >
            SmartHealth by Dr. Aicha
          </span>
        </a>

        {/* DESKTOP MENU */}
        <nav className="desktop-menu" style={{ display: "flex", gap: "20px" }}>
          <a href="/" style={linkStyle}>Hjem</a>
          <a href="/services" style={linkStyle}>Tjenester</a>
          <a href="/about" style={linkStyle}>Om Dr. Aicha</a>
          <a href="/contact" style={linkStyle}>Kontakt</a>

          <a
            href="https://smarthealthbydraicha.makeplans.com"
            style={{
              backgroundColor: "#0077B6",
              padding: "8px 14px",
              color: "white",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Bestill time
          </a>
        </nav>

        {/* MOBILE BURGER ICON */}
        <div
          className="mobile-burger"
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            fontSize: "1.9rem",
            cursor: "pointer",
            color: "#0077B6",
          }}
        >
          ☰
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <nav
          className="mobile-menu"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            padding: "20px",
            backgroundColor: "#F9F4EF",
          }}
        >
          <a href="/" style={linkStyle} onClick={() => setOpen(false)}>Hjem</a>
          <a href="/services" style={linkStyle} onClick={() => setOpen(false)}>Tjenester</a>
          <a href="/about" style={linkStyle} onClick={() => setOpen(false)}>Om Dr. Aicha</a>
          <a href="/contact" style={linkStyle} onClick={() => setOpen(false)}>Kontakt</a>

          <a
            href="https://smarthealthbydraicha.makeplans.com"
            style={{
              backgroundColor: "#0077B6",
              padding: "10px 14px",
              color: "white",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Bestill time
          </a>
        </nav>
      )}

      {/* RESPONSIVE CSS */}
      <style>
        {`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }
          .mobile-burger {
            display: block;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu {
            display: none;
          }
        }
        `}
      </style>
    </header>
  );
}
