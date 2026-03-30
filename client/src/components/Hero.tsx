/**
 * Hero — "Obsidian Studio" design
 * Full-bleed hero with generated car image, hexagon overlay, animated text
 * Dark background, yellow accents, asymmetric layout
 */
import { motion } from "framer-motion";
import { ChevronDown, Star, Shield, Zap } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663494157350/Fcs8QZFDqCqsiKDKwphoih/hero-car-XwgWyJFBLFpLXaTpmPrFJV.webp";

const stats = [
  { value: "500+", label: "Zadowolonych klientów" },
  { value: "8 lat", label: "Doświadczenia" },
  { value: "100%", label: "Gwarancja jakości" },
];

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0f0f0f" }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMG}
          alt="Gabi Car Detailing – premium auto detailing studio"
          className="w-full h-full object-cover"
          style={{ opacity: 0.55 }}
        />
        {/* Gradient overlay – left dark, right transparent */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(15,15,15,0.97) 0%, rgba(15,15,15,0.75) 50%, rgba(15,15,15,0.3) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background: "linear-gradient(to bottom, transparent, #0f0f0f)",
          }}
        />
      </div>

      {/* Hexagon pattern overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='92' viewBox='0 0 80 92'%3E%3Cpolygon points='40,2 78,22 78,62 40,82 2,62 2,22' fill='none' stroke='rgba(255,208,0,0.05)' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 92px",
          opacity: 0.8,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-7xl pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="section-label">Premium Auto Detailing</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="#ffd000" color="#ffd000" />
              ))}
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            Twoje auto{" "}
            <span
              style={{
                color: "#ffd000",
                textShadow: "0 0 30px rgba(255,208,0,0.3)",
              }}
            >
              zasługuje
            </span>
            <br />
            na doskonałość
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
              marginTop: "1.5rem",
              maxWidth: "520px",
            }}
          >
            Profesjonalne usługi auto detailingu — od mycia po powłoki ceramiczne.
            Przywracamy blask i chronimy Twój pojazd na lata.
          </motion.p>

          {/* Feature badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-3 mt-6"
          >
            {[
              { icon: <Shield size={14} />, text: "Powłoki ceramiczne" },
              { icon: <Zap size={14} />, text: "Korekta lakieru" },
              { icon: <Star size={14} />, text: "Detailing wnętrza" },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 px-3 py-1.5 rounded"
                style={{
                  backgroundColor: "rgba(255,208,0,0.1)",
                  border: "1px solid rgba(255,208,0,0.25)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "#ffd000",
                }}
              >
                {badge.icon}
                {badge.text}
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <button
              className="btn-yellow"
              onClick={() => handleScroll("#contact")}
            >
              Umów wizytę
            </button>
            <button
              className="btn-outline-yellow"
              onClick={() => handleScroll("#calculator")}
            >
              Oblicz cenę
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-8 mt-14"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.75rem",
                    color: "#ffd000",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.5)",
                    marginTop: "0.25rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          Przewiń
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ color: "#ffd000" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
