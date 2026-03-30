/**
 * PricingCalculator — "Obsidian Studio" design
 * Full interactive pricing calculator with live price update
 * State: carSize, service, dirtLevel, interiorType, extras[]
 * Formula: servicePrice + carSizePrice + dirtPrice + interiorPrice + extrasTotal
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Calculator, ChevronRight } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────
type CarSize = "small" | "medium" | "large";
type Service = "exterior" | "interior" | "full" | "correction" | "ceramic";
type DirtLevel = "low" | "medium" | "high";
type InteriorType = "fabric" | "leather" | "alcantara";
type Extra = "petHair" | "ozone" | "impregnation" | "engine";

// ── Pricing tables ─────────────────────────────────────────────────────────
const CAR_SIZE_PRICES: Record<CarSize, number> = {
  small: 0,
  medium: 50,
  large: 100,
};

const SERVICE_PRICES: Record<Service, number> = {
  exterior: 100,
  interior: 250,
  full: 400,
  correction: 800,
  ceramic: 1500,
};

const DIRT_PRICES: Record<DirtLevel, number> = {
  low: 0,
  medium: 100,
  high: 200,
};

const INTERIOR_PRICES: Record<InteriorType, number> = {
  fabric: 0,
  leather: 100,
  alcantara: 150,
};

const EXTRA_PRICES: Record<Extra, number> = {
  petHair: 100,
  ozone: 50,
  impregnation: 150,
  engine: 100,
};

// ── Option data ────────────────────────────────────────────────────────────
const carSizeOptions: { value: CarSize; label: string; desc: string; emoji: string }[] = [
  { value: "small", label: "Małe", desc: "Hatchback, Mini", emoji: "🚗", },
  { value: "medium", label: "Średnie", desc: "Sedan, Kombi", emoji: "🚙", },
  { value: "large", label: "Duże", desc: "SUV, Van, Pickup", emoji: "🚐", },
];

const serviceOptions: { value: Service; label: string; desc: string; price: number }[] = [
  { value: "exterior", label: "Mycie zewnętrzne", desc: "Karoseria, felgi, szyby", price: 100 },
  { value: "interior", label: "Detailing wnętrza", desc: "Tapicerka, plastiki, dywany", price: 250 },
  { value: "full", label: "Full Detailing", desc: "Zewnętrze + wnętrze", price: 400 },
  { value: "correction", label: "Korekta lakieru", desc: "Polerowanie maszynowe", price: 800 },
  { value: "ceramic", label: "Powłoka ceramiczna", desc: "Ochrona na lata", price: 1500 },
];

const dirtOptions: { value: DirtLevel; label: string; desc: string; color: string }[] = [
  { value: "low", label: "Lekkie", desc: "Normalne użytkowanie", color: "#4ade80" },
  { value: "medium", label: "Średnie", desc: "Widoczne zabrudzenia", color: "#fbbf24" },
  { value: "high", label: "Mocne", desc: "Intensywne zabrudzenia", color: "#f87171" },
];

const interiorOptions: { value: InteriorType; label: string; desc: string }[] = [
  { value: "fabric", label: "Tkanina", desc: "Standardowa tapicerka" },
  { value: "leather", label: "Skóra", desc: "Naturalna lub ekoskóra" },
  { value: "alcantara", label: "Alcantara", desc: "Premium mikrofibra" },
];

const extraOptions: { value: Extra; label: string; price: number; desc: string }[] = [
  { value: "petHair", label: "Sierść zwierząt", price: 100, desc: "Usuwanie sierści" },
  { value: "ozone", label: "Ozonowanie", price: 50, desc: "Eliminacja zapachów" },
  { value: "impregnation", label: "Impregnacja", price: 150, desc: "Ochrona tapicerki" },
  { value: "engine", label: "Silnik", price: 100, desc: "Mycie komory silnika" },
];

// ── Step header ────────────────────────────────────────────────────────────
function StepHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div
        style={{
          width: "32px",
          height: "32px",
          backgroundColor: "#ffd000",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          fontSize: "0.8rem",
          color: "#0f0f0f",
          flexShrink: 0,
        }}
      >
        {number}
      </div>
      <h3
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: "1rem",
          color: "#ffffff",
          letterSpacing: "0.02em",
        }}
      >
        {title}
      </h3>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export default function PricingCalculator() {
  const [carSize, setCarSize] = useState<CarSize>("medium");
  const [service, setService] = useState<Service>("full");
  const [dirtLevel, setDirtLevel] = useState<DirtLevel>("low");
  const [interiorType, setInteriorType] = useState<InteriorType>("fabric");
  const [extras, setExtras] = useState<Extra[]>([]);

  // Live price calculation
  const servicePrice = SERVICE_PRICES[service];
  const carSizePrice = CAR_SIZE_PRICES[carSize];
  const dirtPrice = DIRT_PRICES[dirtLevel];
  const interiorPrice = ["interior", "full", "ceramic"].includes(service)
    ? INTERIOR_PRICES[interiorType]
    : 0;
  const extrasTotal = extras.reduce((sum, e) => sum + EXTRA_PRICES[e], 0);
  const total = servicePrice + carSizePrice + dirtPrice + interiorPrice + extrasTotal;

  const toggleExtra = (extra: Extra) => {
    setExtras((prev) =>
      prev.includes(extra) ? prev.filter((e) => e !== extra) : [...prev, extra]
    );
  };

  const showInterior = ["interior", "full", "ceramic"].includes(service);

  return (
    <section
      id="calculator"
      className="py-24"
      style={{ backgroundColor: "#0f0f0f" }}
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
            02 / Kalkulator wyceny
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
              Oblicz cenę swojego
              <br />
              <span style={{ color: "#ffd000" }}>detailingu</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.95rem",
              maxWidth: "480px",
              lineHeight: 1.7,
              marginTop: "0.75rem",
            }}
          >
            Wybierz opcje, a cena zaktualizuje się automatycznie. Ostateczna wycena
            zostanie potwierdzona po oględzinach pojazdu.
          </motion.p>
        </div>

        {/* Calculator layout */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left: Options */}
          <div className="xl:col-span-2 space-y-8">
            {/* Step 1: Car size */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "0.75rem",
                padding: "1.75rem",
              }}
            >
              <StepHeader number="1" title="Rozmiar pojazdu" />
              <div className="grid grid-cols-3 gap-3">
                {carSizeOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setCarSize(opt.value)}
                    className={`option-card ${carSize === opt.value ? "selected" : ""}`}
                  >
                    <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>
                      {opt.emoji}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: carSize === opt.value ? "#ffd000" : "#ffffff",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {opt.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.45)",
                      }}
                    >
                      {opt.desc}
                    </div>
                    {CAR_SIZE_PRICES[opt.value] > 0 && (
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.75rem",
                          color: "#ffd000",
                          marginTop: "0.4rem",
                          fontWeight: 600,
                        }}
                      >
                        +{CAR_SIZE_PRICES[opt.value]} zł
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 2: Service */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              style={{
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "0.75rem",
                padding: "1.75rem",
              }}
            >
              <StepHeader number="2" title="Rodzaj usługi" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {serviceOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setService(opt.value)}
                    className={`option-card ${service === opt.value ? "selected" : ""}`}
                    style={{ textAlign: "left" }}
                  >
                    <div
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        color: service === opt.value ? "#ffd000" : "#ffffff",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {opt.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.45)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {opt.desc}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 800,
                        fontSize: "1rem",
                        color: "#ffd000",
                      }}
                    >
                      {opt.price} zł
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 3: Dirt level */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "0.75rem",
                padding: "1.75rem",
              }}
            >
              <StepHeader number="3" title="Stopień zabrudzenia" />
              <div className="grid grid-cols-3 gap-3">
                {dirtOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setDirtLevel(opt.value)}
                    className={`option-card ${dirtLevel === opt.value ? "selected" : ""}`}
                  >
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        backgroundColor: opt.color,
                        margin: "0 auto 0.5rem",
                        boxShadow: dirtLevel === opt.value
                          ? `0 0 8px ${opt.color}`
                          : "none",
                      }}
                    />
                    <div
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        color: dirtLevel === opt.value ? "#ffd000" : "#ffffff",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {opt.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.45)",
                      }}
                    >
                      {opt.desc}
                    </div>
                    {DIRT_PRICES[opt.value] > 0 && (
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.75rem",
                          color: "#ffd000",
                          marginTop: "0.4rem",
                          fontWeight: 600,
                        }}
                      >
                        +{DIRT_PRICES[opt.value]} zł
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 4: Interior type (conditional) */}
            <AnimatePresence>
              {showInterior && (
                <motion.div
                  key="interior"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundColor: "#1a1a1a",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "0.75rem",
                    padding: "1.75rem",
                    overflow: "hidden",
                  }}
                >
                  <StepHeader number="4" title="Rodzaj tapicerki" />
                  <div className="grid grid-cols-3 gap-3">
                    {interiorOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setInteriorType(opt.value)}
                        className={`option-card ${interiorType === opt.value ? "selected" : ""}`}
                      >
                        <div
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 700,
                            fontSize: "0.9rem",
                            color: interiorType === opt.value ? "#ffd000" : "#ffffff",
                            marginBottom: "0.25rem",
                          }}
                        >
                          {opt.label}
                        </div>
                        <div
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.75rem",
                            color: "rgba(255,255,255,0.45)",
                          }}
                        >
                          {opt.desc}
                        </div>
                        {INTERIOR_PRICES[opt.value] > 0 && (
                          <div
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "0.75rem",
                              color: "#ffd000",
                              marginTop: "0.4rem",
                              fontWeight: 600,
                            }}
                          >
                            +{INTERIOR_PRICES[opt.value]} zł
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step 5: Extras */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              style={{
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "0.75rem",
                padding: "1.75rem",
              }}
            >
              <StepHeader number={showInterior ? "5" : "4"} title="Dodatki" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {extraOptions.map((opt) => {
                  const isSelected = extras.includes(opt.value);
                  return (
                    <button
                      key={opt.value}
                      onClick={() => toggleExtra(opt.value)}
                      className={`extra-card ${isSelected ? "selected" : ""}`}
                    >
                      {/* Checkbox */}
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "4px",
                          border: isSelected
                            ? "2px solid #ffd000"
                            : "2px solid rgba(255,255,255,0.2)",
                          backgroundColor: isSelected
                            ? "#ffd000"
                            : "transparent",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          transition: "all 0.2s",
                        }}
                      >
                        {isSelected && <Check size={12} color="#0f0f0f" strokeWidth={3} />}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 600,
                            fontSize: "0.875rem",
                            color: isSelected ? "#ffd000" : "#ffffff",
                            marginBottom: "0.15rem",
                          }}
                        >
                          {opt.label}
                        </div>
                        <div
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.75rem",
                            color: "rgba(255,255,255,0.4)",
                          }}
                        >
                          {opt.desc}
                        </div>
                      </div>
                      <span
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.875rem",
                          color: "#ffd000",
                          flexShrink: 0,
                        }}
                      >
                        +{opt.price} zł
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right: Price summary */}
          <div className="xl:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-24"
              style={{
                backgroundColor: "#1a1a1a",
                border: "2px solid rgba(255,208,0,0.2)",
                borderRadius: "0.75rem",
                padding: "2rem",
                boxShadow: "0 0 40px rgba(255,208,0,0.05)",
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-6">
                <Calculator size={20} color="#ffd000" />
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#ffffff",
                  }}
                >
                  Podsumowanie
                </span>
              </div>

              {/* Breakdown */}
              <div className="space-y-3 mb-6">
                <PriceLine
                  label="Usługa"
                  value={`${servicePrice} zł`}
                  sub={serviceOptions.find((s) => s.value === service)?.label}
                />
                {carSizePrice > 0 && (
                  <PriceLine label="Dopłata za rozmiar" value={`+${carSizePrice} zł`} />
                )}
                {dirtPrice > 0 && (
                  <PriceLine label="Dopłata za zabrudzenie" value={`+${dirtPrice} zł`} />
                )}
                {interiorPrice > 0 && (
                  <PriceLine label="Dopłata za tapicerkę" value={`+${interiorPrice} zł`} />
                )}
                {extras.map((e) => (
                  <PriceLine
                    key={e}
                    label={extraOptions.find((o) => o.value === e)?.label ?? e}
                    value={`+${EXTRA_PRICES[e]} zł`}
                  />
                ))}
              </div>

              {/* Divider */}
              <div style={{ borderTop: "1px solid rgba(255,208,0,0.2)", marginBottom: "1.5rem" }} />

              {/* Total */}
              <div className="text-center">
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Szacunkowa cena
                </div>
                <motion.div
                  key={total}
                  initial={{ scale: 1.1, color: "#ffffff" }}
                  animate={{ scale: 1, color: "#ffd000" }}
                  transition={{ duration: 0.3 }}
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 900,
                    fontSize: "3rem",
                    lineHeight: 1,
                    textShadow: "0 0 20px rgba(255,208,0,0.3)",
                  }}
                >
                  {total} zł
                </motion.div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.3)",
                    marginTop: "0.5rem",
                  }}
                >
                  Cena orientacyjna brutto
                </div>
              </div>

              {/* CTA */}
              <button
                className="btn-yellow w-full mt-6 justify-center"
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Umów wizytę
                <ChevronRight size={16} />
              </button>

              {/* Note */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.3)",
                  textAlign: "center",
                  marginTop: "1rem",
                  lineHeight: 1.5,
                }}
              >
                Ostateczna cena zostanie ustalona po oględzinach pojazdu.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Helper: price line ─────────────────────────────────────────────────────
function PriceLine({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-2">
      <div>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          {label}
        </div>
        {sub && (
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            {sub}
          </div>
        )}
      </div>
      <span
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          fontSize: "0.875rem",
          color: "#ffd000",
          flexShrink: 0,
        }}
      >
        {value}
      </span>
    </div>
  );
}
