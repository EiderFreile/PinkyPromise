# 💅 Pinky Promise Nail Club

Aplicación PWA para la gestión profesional de tu nail club.

---

## 📱 Instalar en iPhone

1. Abre **Safari** en tu iPhone
2. Ve a la URL donde hayas subido la app (GitHub Pages, etc.)
3. Pulsa el botón **Compartir** (📤)
4. Toca **"Añadir a pantalla de inicio"**
5. Dale el nombre *Pinky Promise* y pulsa **Añadir**

¡Aparecerá en tu pantalla de inicio como una app nativa!

---

## 📂 Archivos

```
pinky-promise/
├── index.html          ← Toda la app
├── manifest.json       ← Configuración PWA
├── service-worker.js   ← Cache offline
├── icon.svg            ← Icono fuente
├── icon-192.png        ← Icono pantalla de inicio iPhone
├── icon-512.png        ← Icono grande PWA
└── README.md           ← Este archivo
```

---

## 🔥 Firebase — Reglas de Realtime Database

```json
{
  "rules": {
    "services":    { ".read": true, ".write": true },
    "clients":     { ".read": true, ".write": true },
    "perfRecords": { ".read": true, ".write": true }
  }
}
```

---

## ✨ Funcionalidades

- **Carta de servicios** — Con subservicios, tiempos y precios. Exporta PDF folleto.
- **Servicio actual** — Calcula precio por nº de uñas. Guarda en ficha de clienta.
- **Clientas** — Historial, colores usados, tarjeta de fidelización (10 visitas = premio).
- **Performance** — Cronómetro por servicio y análisis de mejora de tiempos.
- **Análisis** — Tendencias, servicios populares y recomendaciones de precios.
