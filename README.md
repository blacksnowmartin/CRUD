# 4DKenya - Higher-Dimensional Visualization Engine

A web-based higher-dimensional visualization and prototyping engine built with Next.js, Three.js, and TypeScript.

## Features

- **4D Math Engine**: Custom Vector4 class with rotation matrices for all 6 rotation planes (XY, XZ, YZ, XW, YW, ZW)
- **Stereographic Projection**: Maps 4D coordinates to 3D space for visualization
- **Tesseract Visualization**: Interactive 4D hypercube with real-time rotation
- **Glowing Shader Material**: Sci-Fi aesthetic with neon green/teal accents
- **Interactive Controls**: HUD panel with sliders for rotation speeds and view mode toggles

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Visualization**: Three.js via React Three Fiber
- **State Management**: Zustand
- **Math/Physics**: Custom TypeScript classes for 4D geometry

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── scene/
│   │   ├── Scene.tsx       # React Three Fiber canvas
│   │   └── Tesseract.tsx   # 4D hypercube component
│   └── ui/
│       └── ControlHUD.tsx  # Control panel overlay
├── lib/
│   ├── math/
│   │   ├── Vector4.ts      # 4D vector class
│   │   ├── rotation4D.ts   # Rotation matrices
│   │   └── projection.ts   # 4D to 3D projection
│   └── store/
│       └── use4DStore.ts   # Zustand state management
└── package.json
```

## Design Aesthetic

- Dark mode only
- Kenyan-inspired futuristic palette:
  - Deep black backgrounds
  - Neon green/teal accents (Silicon Savannah)
  - Gold highlights for active states
- Clean, scientific typography with monospace fonts

## License

MIT

