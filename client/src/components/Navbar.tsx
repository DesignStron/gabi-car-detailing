/**
 * Navbar — "Obsidian Studio" design
 * Sticky, translucent blur, yellow accent on active/hover
 * Logo: Poppins 800, yellow accent on "CAR"
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Usługi", href: "#services" },
  { label: "Kalkulator", href: "#calculator" },
  { label: "Galeria", href: "#gallery" },
  { label: "Opinie", href: "#testimonials" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(15,15,15,0.95)" : "rgba(15,15,15,0.6)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(255,208,0,0.15)" : "1px solid transparent",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            {/* Hex icon */}
            <div
              className="w-8 h-8 flex items-center justify-center"
              style={{
                background: "#ffd000",
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 900,
                  fontSize: "0.75rem",
                  color: "#0f0f0f",
                  lineHeight: 1,
                }}
              >
                G
              </span>
            </div>
            <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "0.05em", lineHeight: 1 }}>
              <span style={{ color: "#ffffff" }}>GABI </span>
              <span style={{ color: "#ffd000" }}>CAR</span>
              <span style={{ color: "#ffffff" }}> DETAILING</span>
            </div>
          </button>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#aaa",
                    transition: "color 0.2s",
                    background: "none",
                    border: "none",
                    padding: "0.25rem 0",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffd000")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            className="hidden lg:flex btn-yellow"
            onClick={() => handleNavClick("#contact")}
            style={{ padding: "0.5rem 1.5rem", fontSize: "0.8rem" }}
          >
            Umów wizytę
          </button>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "#ffd000" }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: "rgba(15,15,15,0.98)",
            borderTop: "1px solid rgba(255,208,0,0.15)",
          }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#ccc",
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  padding: "0.75rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffd000")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#ccc")}
              >
                {link.label}
              </button>
            ))}
            <button
              className="btn-yellow mt-4"
              onClick={() => handleNavClick("#contact")}
            >
              Umów wizytę
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
