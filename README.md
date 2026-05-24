# WildFit BMI Tracker

A modern responsive Progressive Web App built with React, Vite, Tailwind CSS, and `vite-plugin-pwa`.

## Features

- BMI calculator with name, age, gender, height, and weight inputs
- Required-field and positive-number validation
- Animal BMI mapping: Wolf, Tiger, Bull, Bear, and Lion
- Personalized result card with BMI value, category, image, and message
- BMI gauge/progress indicator
- AI-style health suggestions and fitness tips
- Dark/light mode support
- Local BMI history
- Share result button
- Download result as an image
- Installable PWA with offline support, manifest, icon, and splash-ready metadata
- Netlify and Vercel deployment configuration

## Project Structure

```text
wildfit-bmi-tracker/
  public/
    animals/
      bear.svg
      bull.svg
      lion.svg
      tiger.svg
      wolf.svg
    icons/
      app-icon.svg
  src/
    components/
      BmiForm.jsx
      BmiGauge.jsx
      FitnessTips.jsx
      HistoryList.jsx
      ResultCard.jsx
      StatCard.jsx
    hooks/
      useDarkMode.js
      useLocalStorage.js
    styles/
      index.css
    utils/
      bmi.js
      validation.js
    App.jsx
    main.jsx
  index.html
  package.json
  postcss.config.js
  tailwind.config.js
  vite.config.js
  netlify.toml
  vercel.json
```

## Setup

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually:

```bash
http://127.0.0.1:5173
```

## Production Build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Docker

Build the production container:

```bash
docker build -t wildfit-bmi-tracker .
```

Run it locally:

```bash
docker run --rm -p 8080:80 wildfit-bmi-tracker
```

Open:

```bash
http://localhost:8080
```

Or use Docker Compose:

```bash
docker compose up --build
```

The container uses a multi-stage build: Node builds the Vite app, then Nginx serves the static production files with SPA routing and PWA-friendly cache headers.

## Deployment

### Vercel

```bash
npm install
npm run build
```

Use these settings:

- Build command: `npm run build`
- Output directory: `dist`

The included `vercel.json` handles single-page app routing.

### Netlify

```bash
npm install
npm run build
```

Use these settings:

- Build command: `npm run build`
- Publish directory: `dist`

The included `netlify.toml` handles single-page app routing.

## BMI Formula

```text
BMI = weight / (heightInMeters * heightInMeters)
```

## BMI Animal Mapping

| BMI Range | Category | Animal | Message |
| --- | --- | --- | --- |
| Below 18.5 | Underweight | Wolf | Lean and agile like a wolf. Focus on healthy weight gain. |
| 18.5 to 24.9 | Healthy | Tiger | Strong and balanced like a tiger. Keep maintaining your fitness. |
| 25 to 29.9 | Overweight | Bull | Powerful like a bull. Focus on balanced diet and activity. |
| 30 to 34.9 | Obesity Class I | Bear | Strong but needs control. Start regular exercise and mindful eating. |
| 35 and above | Obesity Class II+ | Lion | Lead your health journey like a lion. Take action with discipline. |
