/**
 * ContactForm — "Obsidian Studio" design
 * Contact form with: name, phone, email, date
 * On submit: show success message
 * Left: contact info | Right: form
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle, Send } from "lucide-react";
import { useCalculator } from "@/contexts/CalculatorContext";

interface FormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  message: string;
}

const contactInfo = [
  {
    icon: <Phone size={20} />,
    label: "Telefon",
    value: "+48 123 456 789",
    href: "tel:+48123456789",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "kontakt@gabicardetailing.pl",
    href: "mailto:kontakt@gabicardetailing.pl",
  },
  {
    icon: <MapPin size={20} />,
    label: "Adres",
    value: "ul. Detailingowa 12, Warszawa",
    href: "#",
  },
  {
    icon: <Clock size={20} />,
    label: "Godziny pracy",
    value: "Pon–Sob: 8:00–18:00",
    href: "#",
  },
];

export default function ContactForm() {
  const { calculatorData, clearCalculatorData } = useCalculator();
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Auto-fill message when calculator data is available
  useEffect(() => {
    if (calculatorData) {
      const serviceLabels = {
        exterior: "Mycie zewnętrzne",
        interior: "Detailing wnętrza", 
        full: "Full Detailing",
        correction: "Korekta lakieru",
        ceramic: "Powłoka ceramiczna",
      };

      const carSizeLabels = {
        small: "małe",
        medium: "średnie", 
        large: "duże",
      };

      const dirtLabels = {
        low: "lekkim",
        medium: "średnim",
        high: "mocnym",
      };

      const interiorLabels = {
        fabric: "tkaninowa",
        leather: "skórzana",
        alcantara: "z alcantary",
      };

      const extraLabels = {
        petHair: "usuwanie sierści",
        ozone: "ozonowanie",
        impregnation: "impregnacja",
        engine: "mycie silnika",
      };

      let autoMessage = `Dzień dobry,\n\n`;
      autoMessage += `Chciałbym/chciałabym umówić się na usługę: ${serviceLabels[calculatorData.service]}\n`;
      autoMessage += `Posiadam ${carSizeLabels[calculatorData.carSize]} pojazd z ${dirtLabels[calculatorData.dirtLevel]} poziomem zabrudzenia.\n`;
      
      if (["interior", "full", "ceramic"].includes(calculatorData.service)) {
        autoMessage += `Tapicerka w pojeździe jest ${interiorLabels[calculatorData.interiorType]}.\n`;
      }

      if (calculatorData.extras.length > 0) {
        autoMessage += `Dodatkowo jestem zainteresowany/a: ${calculatorData.extras.map(e => extraLabels[e]).join(", ")}.\n`;
      }

      autoMessage += `\nCzy mają Państwo wolne terminy w najbliższym czasie?\n`;
      autoMessage += `Z góry dziękuję za odpowiedź.`;

      setForm(prev => ({ ...prev, message: autoMessage }));
    }
  }, [calculatorData]);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Imię jest wymagane";
    if (!form.phone.trim()) newErrors.phone = "Telefon jest wymagany";
    if (!form.email.trim()) newErrors.email = "Email jest wymagany";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Nieprawidłowy adres email";
    if (!form.date) newErrors.date = "Data jest wymagana";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate async submit
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      clearCalculatorData(); // Clear calculator data after successful submission
    }, 1200);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputStyle = (hasError: boolean) => ({
    width: "100%",
    backgroundColor: "#1a1a1a",
    border: `1px solid ${hasError ? "#f87171" : "rgba(255,255,255,0.12)"}`,
    borderRadius: "0.375rem",
    padding: "0.75rem 1rem",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.9rem",
    color: "#ffffff",
    outline: "none",
    transition: "border-color 0.2s",
  });

  const labelStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.8rem",
    fontWeight: 500,
    letterSpacing: "0.05em",
    color: "rgba(255,255,255,0.6)",
    display: "block",
    marginBottom: "0.4rem",
  };

  const errorStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.75rem",
    color: "#f87171",
    marginTop: "0.3rem",
  };

  return (
    <section
      id="contact"
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
            05 / Kontakt
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
              Umów wizytę
              <br />
              <span style={{ color: "#ffd000" }}>już dziś</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.75,
              }}
            >
              Skontaktuj się z nami, aby umówić termin lub uzyskać szczegółową
              wycenę. Odpowiadamy w ciągu 24 godzin.
            </p>

            {/* Contact details */}
            <div className="space-y-4 mt-8">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="flex items-start gap-4 p-4 rounded-lg transition-all duration-200"
                    style={{
                      backgroundColor: "#1a1a1a",
                      border: "1px solid rgba(255,255,255,0.07)",
                      marginBottom: "0.75rem",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        "rgba(255,208,0,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        "rgba(255,255,255,0.07)";
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "rgba(255,208,0,0.1)",
                        border: "1px solid rgba(255,208,0,0.2)",
                        borderRadius: "0.375rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffd000",
                        flexShrink: 0,
                      }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.4)",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {info.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.9rem",
                          fontWeight: 500,
                          color: "#ffffff",
                        }}
                      >
                        {info.value}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
            style={{
              backgroundColor: "#1a1a1a",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "0.75rem",
              padding: "2rem",
            }}
          >
            {/* Calculator info */}
            {calculatorData && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-lg"
                style={{
                  backgroundColor: "rgba(255,208,0,0.1)",
                  border: "1px solid rgba(255,208,0,0.2)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#ffd000",
                    marginBottom: "0.5rem",
                  }}
                >
                  📋 Wypełniono na podstawie kalkulatora
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  Szacowana cena: <span style={{ color: "#ffd000", fontWeight: 600 }}>{calculatorData.totalPrice} zł</span>
                </div>
              </motion.div>
            )}

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,208,0,0.15)",
                      border: "2px solid #ffd000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.5rem",
                      color: "#ffd000",
                    }}
                  >
                    <CheckCircle size={36} />
                  </motion.div>
                  <h3
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.5rem",
                      color: "#ffffff",
                      marginBottom: "1rem",
                    }}
                  >
                    Dziękujemy!
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "1rem",
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.7,
                      maxWidth: "400px",
                    }}
                  >
                    Dziękujemy, skontaktujemy się w celu potwierdzenia terminu.
                    Zazwyczaj odpowiadamy w ciągu kilku godzin.
                  </p>
                  <button
                    className="btn-outline-yellow mt-8"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", phone: "", email: "", date: "", message: "" });
                    }}
                  >
                    Wyślij kolejne zapytanie
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label style={labelStyle}>Imię i nazwisko *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jan Kowalski"
                        style={inputStyle(!!errors.name)}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "rgba(255,208,0,0.5)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = errors.name
                            ? "#f87171"
                            : "rgba(255,255,255,0.12)")
                        }
                      />
                      {errors.name && <p style={errorStyle}>{errors.name}</p>}
                    </div>
                    <div>
                      <label style={labelStyle}>Telefon *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+48 123 456 789"
                        style={inputStyle(!!errors.phone)}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "rgba(255,208,0,0.5)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = errors.phone
                            ? "#f87171"
                            : "rgba(255,255,255,0.12)")
                        }
                      />
                      {errors.phone && <p style={errorStyle}>{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Email + Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label style={labelStyle}>Adres email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jan@example.com"
                        style={inputStyle(!!errors.email)}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "rgba(255,208,0,0.5)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = errors.email
                            ? "#f87171"
                            : "rgba(255,255,255,0.12)")
                        }
                      />
                      {errors.email && <p style={errorStyle}>{errors.email}</p>}
                    </div>
                    <div>
                      <label style={labelStyle}>Preferowana data *</label>
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        style={{
                          ...inputStyle(!!errors.date),
                          colorScheme: "dark",
                        }}
                        min={new Date().toISOString().split("T")[0]}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "rgba(255,208,0,0.5)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = errors.date
                            ? "#f87171"
                            : "rgba(255,255,255,0.12)")
                        }
                      />
                      {errors.date && <p style={errorStyle}>{errors.date}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>Wiadomość (opcjonalnie)</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Opisz swoje auto i czego potrzebujesz..."
                      rows={4}
                      style={{
                        ...inputStyle(false),
                        resize: "vertical",
                        minHeight: "100px",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "rgba(255,208,0,0.5)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(255,255,255,0.12)")
                      }
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-yellow w-full justify-center"
                    disabled={loading}
                    style={{
                      opacity: loading ? 0.7 : 1,
                      cursor: loading ? "not-allowed" : "pointer",
                    }}
                  >
                    {loading ? (
                      <>
                        <span
                          style={{
                            display: "inline-block",
                            width: "16px",
                            height: "16px",
                            border: "2px solid #0f0f0f",
                            borderTopColor: "transparent",
                            borderRadius: "50%",
                            animation: "spin 0.8s linear infinite",
                          }}
                        />
                        Wysyłanie...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Wyślij zapytanie
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
