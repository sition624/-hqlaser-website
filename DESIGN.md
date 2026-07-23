# DESIGN.md - Heqing Laser Official Website

## Brand & Visual Direction
- **Brand**: Heqing Laser / HQ Laser
- **Logo Colors**: Navy Blue (#0A2463) + White (#FFFFFF)
- **Tone**: Navy industrial tech —沉稳、专业、高端、国际化
- **Anchor imagery**: A precision-engineered navy blue control panel with illuminated blue LED indicators, brushed steel surfaces, and subtle geometric patterns under cool workshop lighting
- **Reference brands**: TRUMPF, IPG Photonics, Bodor, HSG

## Design Tokens

### Color Palette
- **Background Primary**: `#0A1628` (deep navy, workshop atmosphere)
- **Background Secondary**: `#0F1B2D` (elevated sections)
- **Background Tertiary**: `#162032` (cards, elevated surfaces)
- **Background Card**: `#1A2740` (hover states, active elements)
- **Accent Navy**: `#0A2463` (primary brand color, main CTA buttons)
- **Accent Blue**: `#3B82F6` (highlights, hover states, interactive elements)
- **Accent Bright Blue**: `#0066FF` (links, active indicators)
- **Accent Cyan**: `#00D4FF` (tech accents, data visualization, subtle highlights)
- **Text Primary**: `#FFFFFF` (headings, key content)
- **Text Secondary**: `#CBD5E1` (body text, descriptions)
- **Text Muted**: `#94A3B8` (captions, labels)
- **Border**: `#1E3A5F` (subtle dividers, navy-toned)
- **Border Light**: `#2A4A6B` (interactive borders)

### Typography
- **Headings**: Inter (700/800/900 weight) — bold, industrial, uppercase for hero
- **Body**: Inter (400/500) — clean readability
- **Mono/Data**: JetBrains Mono — for specs and technical data
- **Scale**: Hero 56-72px → H2 36-48px → H3 24-32px → Body 16px → Caption 14px

### Spacing & Layout
- **Max Width**: 1280px content, 1440px grid
- **Section Padding**: 120px vertical (desktop), 60px (mobile)
- **Card Padding**: 32px
- **Grid Gap**: 24px

### Border Radius
- **Cards**: 4px (sharp, industrial)
- **Buttons**: 2px (minimal)
- **Images**: 2px

### Shadows & Effects
- **Card Glow**: `0 0 40px rgba(59, 130, 246, 0.06)` (subtle blue glow on hover)
- **Blue Glow**: `0 0 20px rgba(59, 130, 246, 0.15)` (tech accent)
- **Grid Pattern**: Subtle 1px grid lines at 5% opacity as background texture
- **Nav**: Frosted glass effect with navy backdrop blur

## Interaction & Motion
- **Hover**: Cards lift 4px with blue glow increase, 200ms ease
- **CTA Buttons**: Blue fill with white text, hover brightens
- **Scroll**: Smooth, sections fade-in-up on scroll
- **Nav**: Fixed top, background transitions from transparent to navy glass on scroll
- **Transitions**: All 200-300ms ease-out, no bouncy animations

## Design Constraints (DO NOT)
- No rounded corners > 8px (too soft/consumer)
- No warm gradients (keep cool blue tones)
- No playful illustrations (use technical SVG icons only)
- No stock photos of people smiling at machines
- No light mode (dark navy only)
- No decorative elements without functional purpose
- No yellow/orange accents (conflicts with brand identity)
