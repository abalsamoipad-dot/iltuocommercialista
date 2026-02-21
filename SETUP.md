# Setup - Il Tuo Commercialista

## Configurazione Formspree

1. Vai su [formspree.io](https://formspree.io) e crea un account gratuito
2. Crea un nuovo form e copia l'endpoint (es. `https://formspree.io/f/xpznqkpw`)
3. Nel file `index.html`, cerca la riga:
   ```html
   <form action="https://formspree.io/f/xpznqkpw" method="POST"
   ```
4. Sostituisci `xpznqkpw` con il tuo ID form reale

## Struttura File

```
iltuocommercialista/
├── index.html          # Pagina principale
├── style.css           # Stili del sito
├── script.js           # Animazioni e interazioni
├── IMAGE_PROMPTS.md    # Prompt per generare immagini con AI
├── SETUP.md            # Questo file
└── images/             # (da creare) Cartella per le immagini
```

## Hosting

Il sito è statico (HTML/CSS/JS puro) e può essere ospitato su qualsiasi piattaforma:
- **Netlify** (consigliato, gratuito): drag & drop della cartella
- **Vercel**: collegamento a repository Git
- **GitHub Pages**: push su repository e attivare Pages
- **Hosting tradizionale**: upload via FTP

## Personalizzazioni da Fare

1. **Formspree**: Configurare l'endpoint del form (vedi sopra)
2. **Immagini**: Generare e inserire le immagini (vedi `IMAGE_PROMPTS.md`)
3. **P.IVA**: Inserire la P.IVA nel footer (cercare `[da inserire]`)
4. **Google Analytics**: Aggiungere il tag se necessario
5. **Dominio**: Collegare `iltuocommercialista.info` all'hosting
