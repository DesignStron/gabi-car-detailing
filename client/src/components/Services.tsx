/**
 * Services — "Obsidian Studio" design
 * Grid of service cards with icons, prices, and hover effects
 * Dark background #1a1a1a cards, yellow accents
 */
import { motion } from "framer-motion";
import { Droplets, Sparkles, Star, Zap, Shield, Wind } from "lucide-react";

const services = [
  {
    icon: <Droplets size={28} />,
    number: "01",
    title: "Mycie zewnętrzne",
    desc: "Profesjonalne mycie karoserii, felg i szyb. Usuwamy wszelkie zanieczyszczenia bez ryzyka zarysowań.",
    price: "od 100 zł",
    tag: "Exterior",
  },
  {
    icon: <Sparkles size={28} />,
    number: "02",
    title: "Detailing wnętrza",
    desc: "Kompleksowe czyszczenie tapicerki, plastików, szyb i dywanów. Ozonowanie i impregnacja w opcji.",
    price: "od 250 zł",
    tag: "Interior",
  },
  {
    icon: <Star size={28} />,
    number: "03",
    title: "Full Detailing",
    desc: "Pełny pakiet — zewnętrze i wnętrze. Idealne przygotowanie auta do sprzedaży lub sezonu.",
    price: "od 400 zł",
    tag: "Full Package",
  },
  {
    icon: <Zap size={28} />,
    number: "04",
    title: "Korekta lakieru",
    desc: "Usuwanie rys, wiru i matowości. Maszynowe polerowanie przywraca głęboki połysk lakieru.",
    price: "od 800 zł",
    tag: "Paint Correction",
  },
  {
    icon: <Shield size={28} />,
    number: "05",
    title: "Powłoka ceramiczna",
    desc: "Najwyższa ochrona lakieru na lata. Hydrofobowość, odporność na zarysowania i promieniowanie UV.",
    price: "od 1500 zł",
    tag: "Ceramic Coating",
  },
  {
    icon: <Wind size={28} />,
    number: "06",
    title: "Ozonowanie",
    desc: "Eliminacja bakterii, wirusów i nieprzyjemnych zapachów. Bezpieczne i skuteczne czyszczenie powietrza.",
    price: "od 50 zł",
    tag: "Add-on",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 hex-bg"
      style={{ backgroundColor: "#0f0f0f" }}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Section header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            01 / Nasze usługi
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="yellow-rule mt-4" />
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#ffffff",
                lineHeight: 1.15,
                marginTop: "0.5rem",
              }}
            >
              Kompleksowy detailing
              <br />
              <span style={{ color: "#ffd000" }}>na najwyższym poziomie</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(255,255,255,0.55)",
              fontSize: "1rem",
              maxWidth: "480px",
              lineHeight: 1.7,
              marginTop: "1rem",
            }}
          >
            Od podstawowego mycia po zaawansowane powłoki ceramiczne — każda usługa
            wykonywana jest z najwyższą starannością i profesjonalnymi produktami.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.number}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              style={{
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "0.5rem",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              whileHover={{
                borderColor: "rgba(255,208,0,0.35)",
                backgroundColor: "#1e1e1e",
                y: -4,
              }}
            >
              {/* Number watermark */}
              <span
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1.5rem",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 900,
                  fontSize: "3.5rem",
                  color: "rgba(255,208,0,0.06)",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {svc.number}
              </span>

              {/* Icon */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  backgroundColor: "rgba(255,208,0,0.1)",
                  border: "1px solid rgba(255,208,0,0.25)",
                  borderRadius: "0.375rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffd000",
                  marginBottom: "1.25rem",
                }}
              >
                {svc.icon}
              </div>

              {/* Tag */}
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(255,208,0,0.6)",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                {svc.tag}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "#ffffff",
                  marginBottom: "0.75rem",
                }}
              >
                {svc.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.65,
                  marginBottom: "1.5rem",
                }}
              >
                {svc.desc}
              </p>

              {/* Price */}
              <div
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  paddingTop: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#ffd000",
                  }}
                >
                  {svc.price}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "0.05em",
                  }}
                >
                  Cena orientacyjna
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
