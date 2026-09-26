# Il Tuo Commercialista — note di manutenzione

Sito statico (HTML, CSS e JavaScript puri, senza framework né build) pubblicato con GitHub Pages
dal ramo `main` di questo repository.

## Struttura

```
index.html          pagina principale (unica pagina del sito)
note-legali.html    note legali, informativa privacy, cookie
404.html            pagina di errore servita da GitHub Pages
style.css           stili (inclusi i @font-face dei caratteri auto-ospitati)
script.js           interazioni: menu mobile, fisarmonica delle aree, ciclo dell'impresa (SVG animato), modulo di contatto
img/                ritratti dei professionisti (900×1125, JPEG)
fonts/              Instrument Serif, Geist, Geist Mono (WOFF2, licenza OFL in fonts/LICENSE.txt)
favicon.png, apple-touch-icon.png, og.jpg   icone e immagine di anteprima per le condivisioni
sitemap.xml         mappa del sito
area-clienti/       portale clienti, non collegato dal menu e con noindex (riservato a sviluppi futuri)
```

## Modifiche frequenti

- **Testi e recapiti**: si modificano direttamente in `index.html`. I recapiti compaiono in tre punti
  (sezione "Gli studi e le sedi", riquadro "Preferite scrivere direttamente?", pagina `note-legali.html`).
- **Fotografie**: sostituire `img/marotta.jpg` e `img/balsamo.jpg` mantenendo 900×1125 pixel, con gli
  occhi a circa il 37 % dell'altezza; il bianco e nero è applicato via CSS.
- **Modulo di contatto**: invia i dati a Formspree (endpoint nell'attributo `action` del `<form>` in
  `index.html`, oggi `https://formspree.io/f/xnnljgoa`). Il destinatario si imposta nel pannello Formspree.
  Senza JavaScript il modulo funziona comunque con l'invio classico.
- **Note legali e privacy**: aggiornare `note-legali.html` e la data "Ultimo aggiornamento".
- **Partita IVA e numeri di iscrizione**: da inserire nel piè di pagina di `index.html` e nella
  sezione "Iscrizioni professionali" di `note-legali.html` appena disponibili.

## Dominio

Oggi `www.iltuocommercialista.info` è configurato su Aruba come "inoltro con mascheramento" (frame)
verso `abalsamoipad-dot.github.io/iltuocommercialista/`. Per servire il sito direttamente sul dominio,
con HTTPS e indirizzi condivisibili:

1. Nel pannello DNS di Aruba: record `CNAME` per `www` → `abalsamoipad-dot.github.io` e record `A`
   per il dominio nudo verso `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
2. Disattivare l'inoltro con mascheramento.
3. Nelle impostazioni del repository (Settings → Pages) indicare `www.iltuocommercialista.info` come
   dominio personalizzato e attivare "Enforce HTTPS"; GitHub crea il file `CNAME` nel repository.
4. Verificare che `og.jpg`, `sitemap.xml` e i canonical in `index.html` puntino al dominio.

## Verifiche prima di pubblicare

- Aprire `index.html` e `note-legali.html` in un browser locale e controllare console e menu mobile.
- Validare l'HTML (ad esempio con `npx html-validate index.html note-legali.html`).
