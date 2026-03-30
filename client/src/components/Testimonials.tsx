/**
 * Testimonials — "Obsidian Studio" design
 * 3 client review cards with star ratings and quote styling
 * Dark cards with yellow accent stars
 */
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marek Kowalski",
    role: "Właściciel BMW M3",
    rating: 5,
    text: "Absolutnie niesamowita robota! Moje BMW wygląda jak nowe po korekcie lakieru. Gabi to prawdziwy profesjonalista — widać pasję do detailingu w każdym szczególe. Polecam z całego serca każdemu, kto ceni jakość.",
    service: "Korekta lakieru",
  },
  {
    id: 2,
    name: "Anna Wiśniewska",
    role: "Właścicielka Audi Q5",
    rating: 5,
    text: "Skorzystałam z pełnego detailingu przed sprzedażą auta i efekt przeszedł moje oczekiwania. Auto sprzedało się w tydzień za cenę, o której marzyłam. Obsługa na najwyższym poziomie, terminowość i uczciwa wycena.",
    service: "Full Detailing",
  },
  {
    id: 3,
    name: "Piotr Nowak",
    role: "Właściciel Porsche 911",
    rating: 5,
    text: "Powłoka ceramiczna nałożona przez Gabi to inwestycja na lata. Po roku auto nadal wygląda jak po wyjściu z salonu. Profesjonalne podejście, świetna komunikacja i efekty, które mówią same za siebie.",
    service: "Powłoka ceramiczna",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 hex-bg"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Section header */}
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            04 / Opinie klientów
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
              Co mówią
              <br />
              <span style={{ color: "#ffd000" }}>nasi klienci</span>
            </h2>
          </motion.div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "0.75rem",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
              whileHover={{
                borderColor: "rgba(255,208,0,0.3)",
                y: -4,
              }}
            >
              {/* Quote icon */}
              <div
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  color: "rgba(255,208,0,0.12)",
                }}
              >
                <Quote size={48} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, si) => (
                  <Star key={si} size={16} fill="#ffd000" color="#ffd000" />
                ))}
              </div>

              {/* Service tag */}
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(255,208,0,0.6)",
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                {t.service}
              </span>

              {/* Review text */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.75,
                  marginBottom: "1.5rem",
                  fontStyle: "italic",
                }}
              >
                "{t.text}"
              </p>

              {/* Author */}
              <div
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  paddingTop: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,208,0,0.15)",
                    border: "2px solid rgba(255,208,0,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 800,
                    fontSize: "1rem",
                    color: "#ffd000",
                    flexShrink: 0,
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: "#ffffff",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <div className="text-center">
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 900,
                fontSize: "4rem",
                color: "#ffd000",
                lineHeight: 1,
              }}
            >
              5.0
            </div>
            <div className="flex gap-1 justify-center mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#ffd000" color="#ffd000" />
              ))}
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.4)",
                marginTop: "0.5rem",
                letterSpacing: "0.05em",
              }}
            >
              Średnia ocena
            </div>
          </div>

          <div
            style={{
              width: "1px",
              height: "60px",
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
            className="hidden sm:block"
          />

          <div className="text-center">
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 900,
                fontSize: "4rem",
                color: "#ffd000",
                lineHeight: 1,
              }}
            >
              500+
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.4)",
                marginTop: "0.5rem",
                letterSpacing: "0.05em",
              }}
            >
              Zadowolonych klientów
            </div>
          </div>

          <div
            style={{
              width: "1px",
              height: "60px",
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
            className="hidden sm:block"
          />

          <div className="text-center">
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 900,
                fontSize: "4rem",
                color: "#ffd000",
                lineHeight: 1,
              }}
            >
              8 lat
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.4)",
                marginTop: "0.5rem",
                letterSpacing: "0.05em",
              }}
            >
              Doświadczenia
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
