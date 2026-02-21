# Prompt per Generazione Immagini - Il Tuo Commercialista

Utilizza questi prompt con **Nono Banana**, **ChatGPT DALL-E** o **Midjourney** per generare le immagini del sito.

---

## 1. HERO BACKGROUND (opzionale - il sito ha già un design a gradiente)

**Prompt (ChatGPT / DALL-E):**
> A dark, luxurious abstract background with subtle golden light particles floating in space. Deep navy black (#0a0a0a) base with elegant warm gold (#c9a96e) light streaks and bokeh effects. Minimal, sophisticated, premium feel. Ultra-wide cinematic ratio. No text, no people. 8K resolution, photography style.

**Prompt (Midjourney):**
> dark luxury abstract background, floating golden light particles, deep black base, warm gold light streaks, bokeh effects, minimal sophisticated premium feel, ultra-wide cinematic, no text, no people --ar 21:9 --v 6 --q 2

---

## 2. FOTO DELLO STUDIO (About Section)

**Prompt (ChatGPT / DALL-E):**
> Interior of an elegant Italian professional office. Modern minimalist design with dark wood furniture, marble accents, and warm golden lighting. Large windows overlooking a Mediterranean cityscape. Bookshelves with legal and tax books. Clean desk with a laptop and documents. Professional yet warm atmosphere. High-end architectural photography. No people visible.

**Prompt (Midjourney):**
> elegant Italian professional office interior, modern minimalist design, dark wood furniture, marble accents, warm golden lighting, large windows Mediterranean cityscape, bookshelves legal tax books, clean desk laptop documents, professional warm atmosphere, architectural photography --ar 4:5 --v 6 --q 2

---

## 3. FOTO PROFESSIONISTA - DOTT. MAROTTA

**Prompt (ChatGPT / DALL-E):**
> Professional headshot portrait of an Italian male business executive in his 50s. Wearing a tailored dark navy suit with a subtle gold tie. Confident, approachable smile. Clean background with soft warm lighting. Shot in a modern office setting. High-end corporate portrait photography style. Sharp focus, shallow depth of field.

**Prompt (Midjourney):**
> professional headshot portrait, Italian male business executive 50s, tailored dark navy suit, subtle gold tie, confident approachable smile, clean background soft warm lighting, modern office setting, high-end corporate portrait photography, sharp focus shallow depth of field --ar 16:10 --v 6 --q 2

**NOTA:** Meglio usare foto reali dei professionisti. Se non disponibili, usare questi prompt come riferimento per lo stile fotografico da richiedere a un fotografo professionista.

---

## 4. FOTO PROFESSIONISTA - DOTT. BALSAMO

**Prompt (ChatGPT / DALL-E):**
> Professional headshot portrait of an Italian male business executive in his 40s-50s. Wearing a charcoal gray suit with white shirt. Confident expression with warm smile. Clean modern background with subtle bokeh. Professional studio lighting. High-end corporate portrait. Sharp focus, cinematic color grading.

**Prompt (Midjourney):**
> professional headshot portrait, Italian male business executive 40s-50s, charcoal gray suit white shirt, confident expression warm smile, clean modern background subtle bokeh, professional studio lighting, high-end corporate portrait, sharp focus cinematic color grading --ar 16:10 --v 6 --q 2

---

## 5. IMMAGINI PER LE CARD DEI SERVIZI (opzionali, il design usa icone)

### 5a. Consulenza Fiscale
> Minimalist abstract image representing tax consulting. Golden calculator icon floating over dark geometric shapes. Dark luxury background with gold and amber tones. No text. Premium, sophisticated mood. Clean lines and modern design.

### 5b. Operazioni Straordinarie
> Abstract merger and acquisition concept. Two geometric golden shapes merging together on a dark background. Elegant, minimal corporate art style. Premium feel, warm gold (#c9a96e) accents on black. No text.

### 5c. Fiscalità Internazionale
> Abstract representation of international taxation. Elegant golden globe with connected lines and nodes on dark background. Sophisticated financial concept art. Dark navy to black gradient, gold accents. Minimal, premium. No text.

### 5d. Consulenza Aziendale
> Abstract business consulting concept. Rising golden bar chart with flowing lines, dark luxurious background. Premium corporate art style. Gold tones on deep black. Minimal and sophisticated. No text.

---

## 6. IMMAGINE CTA SECTION (sfondo)

**Prompt (ChatGPT / DALL-E):**
> Subtle abstract golden texture on dark background. Soft gradient from dark black to warm gold tones. Premium luxury feel, like a high-end financial institution. Minimal, elegant, no objects, no text. Suitable as a website background overlay. 8K resolution.

**Prompt (Midjourney):**
> subtle abstract golden texture, dark background, soft gradient dark black to warm gold tones, premium luxury feel, high-end financial institution, minimal elegant, no objects no text, website background overlay --ar 21:9 --v 6 --q 2

---

## 7. PATTERN / TEXTURE DI SFONDO

**Prompt (ChatGPT / DALL-E):**
> Seamless tileable pattern of very subtle thin golden lines forming a geometric grid on a pure black (#0a0a0a) background. Extremely minimal, barely visible, sophisticated. Suitable for website background overlay. High resolution seamless tile.

---

## 8. FAVICON / LOGO

**Prompt (ChatGPT / DALL-E):**
> Minimalist monogram logo design. Letters "ITC" in elegant serif and sans-serif combination. Gold (#c9a96e) on transparent/dark background. Premium, luxury brand feel. Clean lines, professional typography. Suitable for favicon and website logo. Vector style, high contrast.

**Prompt (Midjourney):**
> minimalist monogram logo ITC, elegant serif sans-serif combination, gold on dark background, premium luxury brand, clean lines professional typography, vector style --v 6 --q 2

---

## Specifiche Tecniche per le Immagini

| Immagine | Dimensione Consigliata | Formato | Note |
|---|---|---|---|
| Hero Background | 2560x1440px | WebP/JPG | Comprimere a < 300KB |
| Foto Studio | 800x1000px | WebP/JPG | Aspect ratio 4:5 |
| Foto Professionista | 800x500px | WebP/JPG | Aspect ratio 16:10 |
| Card Servizi | 600x400px | WebP/PNG | Se usate |
| CTA Background | 1920x600px | WebP/JPG | Comprimere a < 200KB |
| Favicon | 512x512px | PNG | + versioni 32x32, 16x16 |

---

## Come Inserire le Immagini nel Sito

1. **Foto Studio (About section):** Sostituire il `<div class="about-image-placeholder">` con un tag `<img>`:
   ```html
   <img src="images/studio.webp" alt="Studio Il Tuo Commercialista" loading="lazy">
   ```

2. **Foto Professionisti:** Sostituire il `<div class="placeholder-content">` dentro `.professional-image` con:
   ```html
   <img src="images/dott-marotta.webp" alt="Dott. Giuseppe Antonio Marotta" loading="lazy">
   ```

3. **Favicon:** Aggiungere nell'`<head>` del file HTML:
   ```html
   <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
   <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
   <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
   ```

---

## Palette Colori di Riferimento per le Immagini

- **Sfondo principale:** #0a0a0a (quasi nero)
- **Oro/Accento:** #c9a96e
- **Oro chiaro:** #dfc08a
- **Grigio scuro:** #161616
- **Grigio testo:** #a0a0a0

Tutte le immagini devono avere tonalità scure con accenti dorati per integrarsi perfettamente con il design del sito.
