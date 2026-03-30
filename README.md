# Gabi Car Detailing - Demo

Strona demo dla potencjalnego klienta - premium auto detailing w Warszawie.

## 🚀 Wdrożenie na Vercel

1. Podłącz repozytorium do Vercel
2. Vercel automatycznie wykryje konfigurację z `vercel.json`
3. Strona zostanie zbudowana i wdrożona

## 🛠️ Lokalny development

```bash
# Instalacja zależności
pnpm install

# Development server
pnpm run dev

# Build dla produkcji
pnpm run build
```

## 📋 Funkcjonalności demo

- ✅ Pełnie działający kalkulator wyceny
- ✅ Automatyczne uzupełnianie formularza kontaktowego
- ✅ Responsive design (mobile/desktop)
- ✅ Animacje i interakcje
- ✅ Oznaczenia "DEMO" w strategicznych miejscach

## 🎨 Design

- **Styl**: "Obsidian Studio" - dark luxury minimalism
- **Kolory**: #0f0f0f (base), #ffd000 (accent)
- **Typografia**: Poppins (headings), Inter (body)

## 📁 Struktura

```
client/src/
├── components/     # Komponenty React
├── contexts/      # React Context (CalculatorContext)
├── pages/         # Strony
└── App.tsx        # Główna aplikacja
```

## 🔧 Technologia

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: TailwindCSS
- **Routing**: Wouter
- **UI**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **Deployment**: Vercel (static)
