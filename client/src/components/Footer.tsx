/**
 * Footer — "Obsidian Studio" design
 * Dark footer with logo, links, and copyright
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "#080808",
        borderTop: "1px solid rgba(255,208,0,0.12)",
        padding: "3rem 0 2rem",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  background: "#ffd000",
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 900,
                    fontSize: "0.75rem",
                    color: "#0f0f0f",
                  }}
                >
                  G
                </span>
              </div>
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: "1rem",
                  color: "#ffffff",
                }}
              >
                GABI <span style={{ color: "#ffd000" }}>CAR</span> DETAILING
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.7,
                maxWidth: "260px",
              }}
            >
              Premium auto detailing w Warszawie. Przywracamy blask Twojemu pojazdowi.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#ffd000",
                marginBottom: "1rem",
              }}
            >
              Nawigacja
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Usługi", href: "#services" },
                { label: "Kalkulator", href: "#calculator" },
                { label: "Galeria", href: "#gallery" },
                { label: "Opinie", href: "#testimonials" },
                { label: "Kontakt", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleScroll(link.href)}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.45)",
                      background: "none",
                      border: "none",
                      padding: 0,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#ffd000")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                    }
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#ffd000",
                marginBottom: "1rem",
              }}
            >
              Kontakt
            </h4>
            <div className="space-y-2">
              {[
                "+48 123 456 789",
                "kontakt@gabicardetailing.pl",
                "ul. Detailingowa 12, Warszawa",
                "Pon–Sob: 8:00–18:00",
              ].map((item) => (
                <p
                  key={item}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.25)",
              textAlign: "center",
            }}
          >
            © {currentYear} Gabi Car Detailing. Wszelkie prawa zastrzeżone.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.15)",
              textAlign: "center",
            }}
          >
            Premium Auto Detailing · Warszawa
          </p>
        </div>
      </div>
    </footer>
  );
}
