/**
 * Gallery — "Obsidian Studio" design
 * Before/after grid with hover zoom and overlay effects
 * Uses generated images + Unsplash for variety
 */
import { motion } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const BEFORE_AFTER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663494157350/Fcs8QZFDqCqsiKDKwphoih/before-after-iBsjSt7jTvDZBnGADfAYXS.webp";
const DETAILING_WORK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663494157350/Fcs8QZFDqCqsiKDKwphoih/detailing-work-G5BUdUkPb4UfCHpg3Bx4nv.webp";
const STUDIO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663494157350/Fcs8QZFDqCqsiKDKwphoih/studio-interior-Lc4vJKktFkEF9zFcmmZRZC.webp";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663494157350/Fcs8QZFDqCqsiKDKwphoih/hero-car-XwgWyJFBLFpLXaTpmPrFJV.webp";

const galleryItems = [
  {
    id: 1,
    src: BEFORE_AFTER_IMG,
    title: "Korekta lakieru BMW",
    tag: "Before / After",
    span: "col-span-2",
  },
  {
    id: 2,
    src: DETAILING_WORK_IMG,
    title: "Aplikacja powłoki ceramicznej",
    tag: "Ceramic Coating",
    span: "col-span-1",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80",
    title: "Detailing wnętrza",
    tag: "Interior",
    span: "col-span-1",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[0] | null>(null);

  return (
    <section
      id="gallery"
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
            03 / Galeria
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
              Nasze realizacje
              <br />
              <span style={{ color: "#ffd000" }}>mówią same za siebie</span>
            </h2>
          </motion.div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                item.span === "col-span-2" ? "sm:col-span-2" : ""
              }`}
              style={{
                aspectRatio: item.span === "col-span-2" ? "16/7" : "4/3",
                backgroundColor: "#1a1a1a",
              }}
              onClick={() => setLightbox(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,15,15,0.9) 0%, rgba(15,15,15,0.2) 50%, transparent 100%)",
                  opacity: 0.7,
                }}
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "rgba(255,208,0,0.08)" }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,208,0,0.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ZoomIn size={20} color="#0f0f0f" />
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#ffd000",
                    display: "block",
                    marginBottom: "0.25rem",
                  }}
                >
                  {item.tag}
                </span>
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "#ffffff",
                  }}
                >
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full"
            style={{ backgroundColor: "rgba(255,208,0,0.15)", color: "#ffd000" }}
            onClick={() => setLightbox(null)}
          >
            <X size={24} />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="w-full rounded-lg"
              style={{ maxHeight: "80vh", objectFit: "contain" }}
            />
            <div className="mt-3 text-center">
              <span className="section-label">{lightbox.tag}</span>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "#ffffff",
                  marginTop: "0.25rem",
                }}
              >
                {lightbox.title}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
