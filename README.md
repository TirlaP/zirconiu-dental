# 🦷 Cabinet Stomatologic - Template Modern

Un template modern și complet pentru cabinete stomatologice din România, dezvoltat cu Next.js, TypeScript și Chakra UI.

## ✨ Caracteristici Principale

- **Design Modern**: Interface elegant și profesional adaptat pentru cabinete dentare
- **SEO Optimizat**: Meta tags, schema markup și structură optimizată pentru motoarele de căutare
- **Responsive Design**: Funcționează perfect pe desktop, tablet și mobile
- **Română Nativă**: Conținut complet în limba română, adaptat pieței locale
- **Performanță Ridicată**: Construit cu Next.js pentru încărcare rapidă
- **Animații Fluide**: Experiență utilizator îmbunătățită cu Framer Motion

## 🏥 Secțiuni Incluse

### Pagina Principală
- Hero section cu call-to-action pentru programări
- Prezentarea serviciilor principale
- Testimoniale de la pacienți
- Statistici și realizări
- Formularul de contact rapid

### Servicii Stomatologice
- **Urgențe Stomatologice** - Intervenții rapide 24/7
- **Implantologie** - Implanturi dentare cu garanție pe viață
- **Estetica Dentară** - Albire, fațete ceramice, bonding
- **Ortodonție** - Aparate dentare și Invisalign
- **Paradontologie** - Tratarea afecțiunilor gingivale
- **Endodonție** - Tratamente de canal moderne

### Despre Cabinet
- Prezentarea echipei medicale
- Experiența și specializările medicilor
- Valorile și principiile cabinetului
- Certificări și autorizații

### Cazuri Clinice
- Galerie cu transformări spectaculoase
- Before/After pentru fiecare tip de tratament
- Detalii despre proceduri și durata tratamentului
- Categorii: Implantologie, Estetica, Ortodonție

### Contact și Programări
- Formularul de programare online
- Informații de contact complete
- Programul cabinetului
- Hartă cu locația

## 🚀 Instalare și Configurare

### Cerințe Sistem
- Node.js 18+ 
- npm sau yarn

### Pași de Instalare

1. **Clonează repository-ul**
```bash
cd /Users/petruinstagram/Desktop/web-apps/dental-template
```

2. **Instalează dependențele**
```bash
npm install
# sau
yarn install
```

3. **Pornește serverul de dezvoltare**
```bash
npm run dev
# sau
yarn dev
```

4. **Accesează aplicația**
Deschide [http://localhost:3000](http://localhost:3000) în browser

## ⚙️ Personalizare

### Informații Cabinet
Modifică fișierul `/app/page.tsx` și actualizează obiectul `demoBusinessInfo`:

```typescript
export const demoBusinessInfo = {
  name: "Numele Cabinetului Tău",
  phone: "0722 234 567",
  email: "contact@cabinetultau.ro",
  address: "Adresa ta",
  city: "București",
  // ... alte detalii
}
```
### SEO Customization
Editează fișierul `/app/layout.tsx` pentru:
- Meta title și description
- Schema markup pentru Google
- Open Graph tags pentru social media

### Conținut în Română
Textele pot fi modificate în:
- `/public/locales/ro/common.json` - traduceri
- Componentele individuale pentru conținut specific

### Stilizare
Template-ul folosește Chakra UI. Modifică tema în `/app/providers.tsx`:

```typescript
const theme = extendTheme({
  colors: {
    brand: {
      // Culorile tale personalizate
    }
  }
})
```

## 📱 Tehnologii Folosite

- **Next.js 15** - Framework React pentru producție
- **TypeScript** - Type safety și developer experience îmbunătățit
- **Chakra UI** - Sistem de componente moderne și accesibile
- **Framer Motion** - Animații fluide și interactive
- **React Icons** - Iconuri vectoriale optimizate
- **i18next** - Suport pentru internaționalização

## 🔧 Scripts Disponibile

```bash
# Dezvoltare
npm run dev

# Build pentru producție
npm run build

# Start server producție
npm run start

# Linting
npm run lint
```

## 📊 SEO și Performance

Template-ul include:
- ✅ Meta tags optimizate pentru căutări locale
- ✅ Schema markup pentru cabinete medicale
- ✅ Sitemap.xml și robots.txt
- ✅ Open Graph și Twitter Cards
- ✅ Imagini optimizate și lazy loading
- ✅ Core Web Vitals optimizate

## 🚀 Deploy

### Vercel (Recomandat)
1. Conectează repository-ul la Vercel
2. Deploy automat la fiecare push

### Alte platformuri
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📞 Suport

Pentru întrebări sau personalizări:
- Email: support@template-dental.ro
- Documentație: [Link către documentație]

## 📄 Licență

Template-ul este oferit sub licența MIT. Vezi fișierul LICENSE pentru detalii.

---

**Dezvoltat special pentru cabinete stomatologice din România** 🇷🇴