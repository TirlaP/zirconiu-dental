# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# ZirconiuDental Website Adaptation

## Project Overview
Adapting the existing dental template for **ZirconiuDental**, a dental clinic in Alba Iulia, Romania, with both general dentistry and pediatric services.

## Technical Stack & Commands

### Development Commands
```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting (note: ESLint may have parent directory config issues)
npm run lint

# Type checking
npm run typecheck  # if available

# Clean install (if dependency issues)
rm -rf node_modules package-lock.json && npm install
```

### Technology Stack
- **Next.js 15.2.4** - React framework with App Router
- **TypeScript 5.7.3** - Type safety
- **Chakra UI 2.10.7** - Component library
- **Framer Motion 11.18.2** - Animations
- **i18next/react-i18next** - Internationalization
- **Lucide React** - Icon library

### Project Structure
```
/
├── app/                 # Next.js App Router
│   ├── page.tsx        # Main entry with navigation logic
│   ├── layout.tsx      # Root layout with metadata
│   ├── providers.tsx   # Chakra UI theme provider
│   └── globals.css     # Global styles
├── components/
│   ├── components/     # Reusable components
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── ScrollingNavbar.tsx
│   └── pages/          # Page components
│       ├── HomePage.tsx
│       ├── ServicesPage.tsx
│       ├── AboutPage.tsx
│       ├── ProjectsPage.tsx
│       └── ContactPage.tsx
└── public/
    ├── locales/ro/     # Romanian translations
    └── logo.jpg        # ZirconiuDental logo

## Business Information

### ZirconiuDental Main Practice
- **Name**: ZirconiuDental
- **Tagline**: "Pasiune, Eficienta, Inovatie in Medicina Dentara moderna"
- **Location**: Vasile Goldis nr.22A, Alba Iulia, Romania
- **Phone**: 0752 438 156
- **Email**: zirconiudental@gmail.com
- **Website**: zirconiudental.ro
- **Rating**: 94% recommend (29 Reviews)
- **Services**: General Dentist, Modern Dental Medicine

### ZirconiuDental Kids
- **Services**: Stomatologie Pediatrica si Ortodontie (Pediatric Dentistry & Orthodontics)
- **Same location and contact information**
- **Rating**: 92% recommend (10 Reviews)

### Key Personnel
- **Dr. Paul Achim** - Main dentist (mentioned frequently in reviews)

### Social Media
- Facebook (Kids): https://www.facebook.com/LaserDentalKids/?locale=ro_RO
- Facebook (Main): https://www.facebook.com/EstheticAndLaserCenter/
- Instagram: https://www.instagram.com/zirconiudental/

### Unique Selling Points from Reviews
1. **Advanced Technology**: Modern equipment, laser treatments, microscope work
2. **Inhalo-sedation**: Special sedation for anxious patients (especially children)
3. **Professional Team**: Young, experienced staff
4. **Modern Facilities**: Ultra-modern equipment, excellent hygiene
5. **Dual Focus**: Both adult and pediatric dentistry

### Services to Highlight
1. **Laser Dentistry** - Advanced laser treatments
2. **Pediatric Dentistry** - Specialized children's care with sedation
3. **Orthodontics** - Both traditional and modern treatments
4. **Inhalo-sedation** - For anxious patients
5. **General Dentistry** - Comprehensive dental care
6. **Emergency Services** - Urgent dental care

## Architecture Patterns

### Navigation System
- **Client-side routing** via state management in `app/page.tsx`
- **Dynamic imports** for code splitting with `next/dynamic`
- **Scrolling navbar** with transparency effect on homepage
- **Mobile drawer** navigation for responsive design
- **Scroll state** passed between ScrollingNavbar and Navigation components
- **Responsive breakpoints**: 
  - Mobile menu: `md` (768px)
  - Button stacking: `md` (768px)
  - Grid layouts: `md` for 2 columns, `lg` for 4 columns

### State Management
- React useState for page navigation
- Chakra UI's useDisclosure for drawer state
- Window scroll event listeners for navbar effects
- Scroll state coordination between parent and child components

### Theme Configuration
- Chakra UI extended theme in `app/providers.tsx`
- Brand colors defined (blue scale #029FFF primary)
- Custom fonts: Inter for headings and body
- Color mode values extracted at component level to avoid hooks issues

### SEO Implementation
- **Metadata** configured in `app/layout.tsx`
- **Schema.org** structured data for DentalClinic
- **Open Graph** and Twitter Card support
- **Sitemap.xml** and robots.txt in public folder

### Component Architecture
- **BusinessInfo prop** passed to all page components
- **onNavigate callback** for internal routing
- **Responsive design** with Chakra UI breakpoints
- **Dynamic loading** for performance optimization
- **Framer Motion** integration via MotionBox/MotionVStack wrappers

## Customizations Required

### 1. Branding & Content
- Replace "DentistExpert" with "ZirconiuDental"
- Update tagline to Romanian: "Pasiune, Eficienta, Inovatie in Medicina Dentara moderna"
- Change location from București to Alba Iulia
- Update contact information

### 2. Services Section
- **Stomatologie Generala** (General Dentistry)
- **Stomatologie Pediatrica** (Pediatric Dentistry)
- **Ortodontie** (Orthodontics) 
- **Tratamente Laser** (Laser Treatments)
- **Inhalosedare** (Inhalo-sedation)
- **Urgente Stomatologice** (Dental Emergencies)

### 3. About Section
- Feature Dr. Paul Achim as main dentist
- Highlight modern equipment and technology
- Mention dual focus on adults and children
- Emphasize comfortable, anxiety-free treatments

### 4. Testimonials
- Create realistic testimonials based on Facebook review patterns:
  - Parents praising children's experience with sedation
  - Adults appreciating modern technology and painless treatments
  - Patients highlighting professional staff and modern facilities

### 5. Visual Elements
- Replace placeholder images with dental-themed content
- Update color scheme to match ZirconiuDental branding
- Ensure mobile responsiveness for local patients

### 6. Romanian Language
- Convert all text to Romanian
- Maintain professional medical terminology
- Keep cultural context for Romanian patients

## Review Analysis Summary

### Positive Feedback Patterns:
- Professional team with modern equipment
- Painless treatments with advanced technology
- Excellent experience for children with sedation
- Clean, modern facilities
- Patient, understanding staff

### Areas to Address:
- Some communication issues with difficult pediatric cases
- Mixed experiences with certain procedures
- Need to emphasize professional approach to patient care

## Implementation Checklist

### Phase 1: Core Updates ✓
- [x] Business information in `app/page.tsx` (already updated)
- [ ] Update metadata in `app/layout.tsx` for Alba Iulia
- [ ] Update schema.org structured data
- [ ] Configure proper social media links

### Phase 2: Content Localization
- [ ] Update all page content to Romanian
- [ ] Implement proper Romanian translations in `/public/locales/ro/`
- [ ] Add Dr. Paul Achim profile in AboutPage
- [ ] Create ZirconiuDental-specific service descriptions

### Phase 3: Visual & UX Updates
- [ ] Logo already in place at `/public/logo.jpg`
- [ ] Update theme colors if needed (current blue works well)
- [ ] Add actual clinic photos when available
- [ ] Optimize mobile experience for local users

### Phase 4: SEO & Performance
- [ ] Update sitemap.xml with Alba Iulia location
- [ ] Configure local SEO for "stomatolog alba iulia"
- [ ] Add Google My Business integration
- [ ] Implement proper meta descriptions

### Phase 5: Advanced Features
- [ ] Online appointment booking system
- [ ] WhatsApp integration (0752 438 156)
- [ ] Google Reviews integration
- [ ] Emergency contact prominently displayed

## Development Best Practices

### Code Style
- Use TypeScript strict mode (already enabled)
- Follow React best practices with hooks
- Maintain component modularity
- Use Chakra UI components consistently

### Performance Optimization
- Dynamic imports for code splitting
- Image optimization with Next.js Image
- Minimize bundle size
- Enable ISR for static pages

### Testing Considerations
- Test on mobile devices (primary user base)
- Verify Romanian text rendering
- Check form validations
- Test emergency contact visibility

## Known Issues & Solutions

### Current Limitations
1. **i18next not fully configured** - translations exist but not implemented
2. **Single page navigation** - consider adding URL routing
3. **No analytics** - add Google Analytics/Tag Manager
4. **No appointment system** - integrate booking solution
5. **ESLint parent directory issue** - May show error about `.eslintrc.js` in parent directory

### Common Development Issues
1. **React Hooks errors**: Always call hooks at top level, not inside conditions or loops
   - Extract `useColorModeValue` calls to component level
   - Avoid hooks inside map functions
2. **TypeScript errors with Framer Motion**: Use `as any` for complex transition props
3. **Mobile menu visibility**: Ensure scroll state is properly passed to child components
4. **Responsive breakpoints**: Use `md` (768px) instead of `sm` (480px) for better mobile UX

### Quick Fixes Needed
- Update all instances of "DentistExpert" to "ZirconiuDental"
- Change București references to Alba Iulia
- Update coordinates for Google Maps integration
- Add emergency hours to business info

## Deployment Notes

### Environment Variables Needed
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=
```

### Build Optimization
- Use `npm run build` for production
- Enable Next.js compression
- Configure proper caching headers
- Use CDN for static assets

### Hosting Recommendations
- Vercel (optimal for Next.js)
- Configure custom domain: zirconiudental.ro
- Set up SSL certificate
- Enable HTTP/2 for performance

This comprehensive guide ensures consistent development and successful deployment of the ZirconiuDental website adaptation.
