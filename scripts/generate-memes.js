const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const outDir = path.join(root, "memes");
fs.mkdirSync(outDir, { recursive: true });

const logoB64 = fs.readFileSync(path.join(root, "logo.jpg")).toString("base64");
const logoUri = `data:image/jpeg;base64,${logoB64}`;

const LIME = "#C8FF00";
const DARK = "#0A140C";
const MID = "#132018";
const GREEN = "#1B3D28";
const WHITE = "#F4FFE8";

function svg(w, h, body) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${DARK}"/>
      <stop offset="100%" stop-color="${GREEN}"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="4" result="b"/>
      <feMerge>
        <feMergeNode in="b"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  ${body}
</svg>`;
}

const memes = [
  {
    file: "meme-aim.svg",
    build: () =>
      svg(
        800,
        800,
        `
      <rect width="800" height="800" fill="url(#bg)"/>
      <rect x="28" y="28" width="744" height="744" fill="none" stroke="${LIME}" stroke-width="6" rx="28"/>
      <image href="${logoUri}" x="260" y="140" width="280" height="280"/>
      <text x="400" y="500" text-anchor="middle" fill="${LIME}" font-family="Arial Black, Impact, sans-serif" font-size="72" font-weight="900">AIM FOR</text>
      <text x="400" y="580" text-anchor="middle" fill="${WHITE}" font-family="Arial Black, Impact, sans-serif" font-size="72" font-weight="900">EVERY STOCK</text>
      <text x="400" y="660" text-anchor="middle" fill="${LIME}" font-family="Arial, sans-serif" font-size="28" letter-spacing="6">$STOCKHOOD</text>
    `
      ),
  },
  {
    file: "meme-crosschain.svg",
    build: () =>
      svg(
        800,
        800,
        `
      <rect width="800" height="800" fill="${DARK}"/>
      <circle cx="400" cy="320" r="200" fill="none" stroke="${LIME}" stroke-width="3" opacity="0.35"/>
      <circle cx="400" cy="320" r="140" fill="none" stroke="${LIME}" stroke-width="2" opacity="0.55"/>
      <image href="${logoUri}" x="280" y="200" width="240" height="240"/>
      <rect x="60" y="560" width="680" height="160" rx="20" fill="${MID}" stroke="${LIME}" stroke-width="3"/>
      <text x="400" y="620" text-anchor="middle" fill="${LIME}" font-family="Arial Black, Impact, sans-serif" font-size="42">CROSS-CHAIN.</text>
      <text x="400" y="675" text-anchor="middle" fill="${WHITE}" font-family="Arial, sans-serif" font-size="28" font-weight="700">Maximum liquidity. Minimum friction.</text>
    `
      ),
  },
  {
    file: "meme-trust.svg",
    build: () =>
      svg(
        800,
        800,
        `
      <rect width="800" height="800" fill="${MID}"/>
      <polygon points="400,80 720,220 720,480 400,620 80,480 80,220" fill="${DARK}" stroke="${LIME}" stroke-width="5"/>
      <image href="${logoUri}" x="290" y="240" width="220" height="220"/>
      <text x="400" y="700" text-anchor="middle" fill="${LIME}" font-family="Arial Black, Impact, sans-serif" font-size="40">TRUST LAYER</text>
      <text x="400" y="750" text-anchor="middle" fill="${WHITE}" font-family="Arial, sans-serif" font-size="24">Tokenized stocks. On-chain.</text>
    `
      ),
  },
  {
    file: "meme-price.svg",
    build: () =>
      svg(
        800,
        800,
        `
      <rect width="800" height="800" fill="${DARK}"/>
      <text x="400" y="90" text-anchor="middle" fill="${LIME}" font-family="Arial Black, Impact, sans-serif" font-size="36" letter-spacing="4">LIVE PRICE FEED</text>
      <image href="${logoUri}" x="300" y="120" width="200" height="200"/>
      <g transform="translate(120,380)">
        <rect x="0" y="160" width="60" height="80" fill="${LIME}" opacity="0.5"/>
        <rect x="90" y="120" width="60" height="120" fill="${LIME}" opacity="0.65"/>
        <rect x="180" y="90" width="60" height="150" fill="${LIME}" opacity="0.8"/>
        <rect x="270" y="40" width="60" height="200" fill="${LIME}"/>
        <rect x="360" y="70" width="60" height="170" fill="${LIME}" opacity="0.85"/>
        <rect x="450" y="20" width="60" height="220" fill="${LIME}"/>
        <polyline points="30,180 120,140 210,110 300,50 390,80 480,30" fill="none" stroke="#fff" stroke-width="5"/>
        <polygon points="480,30 455,45 475,55" fill="#fff"/>
      </g>
      <text x="400" y="700" text-anchor="middle" fill="${WHITE}" font-family="Arial Black, Impact, sans-serif" font-size="32">ON-CHAIN vs REAL</text>
      <text x="400" y="750" text-anchor="middle" fill="${LIME}" font-family="Arial, sans-serif" font-size="26">Market price. Live.</text>
    `
      ),
  },
  {
    file: "meme-unlock.svg",
    build: () =>
      svg(
        800,
        800,
        `
      <rect width="800" height="800" fill="url(#bg)"/>
      <rect x="100" y="160" width="600" height="480" rx="32" fill="${DARK}" stroke="${LIME}" stroke-width="4"/>
      <image href="${logoUri}" x="290" y="200" width="220" height="220"/>
      <text x="400" y="480" text-anchor="middle" fill="${LIME}" font-family="Arial Black, Impact, sans-serif" font-size="44">UNLOCKING</text>
      <text x="400" y="540" text-anchor="middle" fill="${WHITE}" font-family="Arial Black, Impact, sans-serif" font-size="36">TOKENIZED EQUITIES</text>
      <text x="400" y="600" text-anchor="middle" fill="${LIME}" font-family="Arial, sans-serif" font-size="22" letter-spacing="3">ON ROBINHOOD</text>
    `
      ),
  },
  {
    file: "meme-liquidity.svg",
    build: () =>
      svg(
        800,
        800,
        `
      <rect width="800" height="800" fill="${DARK}"/>
      <text x="400" y="100" text-anchor="middle" fill="${WHITE}" font-family="Arial Black, Impact, sans-serif" font-size="48">MAX LIQUIDITY</text>
      <text x="400" y="155" text-anchor="middle" fill="${LIME}" font-family="Arial Black, Impact, sans-serif" font-size="48">MIN FRICTION</text>
      <image href="${logoUri}" x="250" y="220" width="300" height="300"/>
      <rect x="140" y="580" width="520" height="100" rx="50" fill="${LIME}"/>
      <text x="400" y="645" text-anchor="middle" fill="${DARK}" font-family="Arial Black, Impact, sans-serif" font-size="40">$STOCKHOOD</text>
    `
      ),
  },
  {
    file: "meme-hood.svg",
    build: () =>
      svg(
        800,
        800,
        `
      <rect width="800" height="800" fill="${LIME}"/>
      <rect x="40" y="40" width="720" height="720" fill="none" stroke="${DARK}" stroke-width="10"/>
      <image href="${logoUri}" x="200" y="120" width="400" height="400"/>
      <text x="400" y="600" text-anchor="middle" fill="${DARK}" font-family="Arial Black, Impact, sans-serif" font-size="64">STOCKHOOD</text>
      <text x="400" y="670" text-anchor="middle" fill="${DARK}" font-family="Arial, sans-serif" font-size="26" font-weight="700" letter-spacing="4">THE MULTI-CHAIN TRUST LAYER</text>
    `
      ),
  },
  {
    file: "meme-arrow.svg",
    build: () =>
      svg(
        800,
        800,
        `
      <rect width="800" height="800" fill="${GREEN}"/>
      <path d="M120 560 L280 420 L400 480 L560 240 L680 180" fill="none" stroke="${LIME}" stroke-width="28" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/>
      <polygon points="680,180 620,190 640,240" fill="${LIME}"/>
      <image href="${logoUri}" x="300" y="40" width="200" height="200"/>
      <text x="400" y="680" text-anchor="middle" fill="${LIME}" font-family="Arial Black, Impact, sans-serif" font-size="56">TO THE CHAIN</text>
      <text x="400" y="740" text-anchor="middle" fill="${WHITE}" font-family="Arial, sans-serif" font-size="28">Robinhood equities. Tokenized.</text>
    `
      ),
  },
];

for (const m of memes) {
  fs.writeFileSync(path.join(outDir, m.file), m.build());
  console.log("wrote", m.file);
}
console.log("done", memes.length);
