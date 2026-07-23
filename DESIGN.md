# DESIGN.md - Heqing Laser Official Website

## Brand & Visual Direction
- **Brand**: Heqing Laser / HQ Laser
- **Tone**: Dark industrial tech — precision engineering meets premium manufacturing
- **Anchor imagery**: A CNC-machined titanium panel under cold workshop spotlights, with amber warning stripes and cyan status LEDs glowing against matte black surfaces
- **Reference brands**: TRUMPF, Bodor, HSG, IPG Photonics

## Design Tokens

### Color Palette
- **Background Primary**: `#0a0a0a` (near-black, workshop floor)
- **Background Secondary**: `#111111` (elevated surfaces, cards)
- **Background Tertiary**: `#1a1a1a` (hover states, active elements)
- **Accent Yellow**: `#FFD60A` (primary CTA, warning stripes, energy)
- **Accent Orange**: `#FF9500` (secondary accent, gradients)
- **Accent Cyan**: `#00D4FF` (tech highlights, data visualization, precision)
- **Text Primary**: `#FFFFFF` (headings, key content)
- **Text Secondary**: `#A0A0A0` (body text, descriptions)
- **Text Muted**: `#666666` (captions, labels)
- **Border**: `#222222` (subtle dividers)
- **Border Light**: `#333333` (interactive borders)

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
- **Card Glow**: `0 0 40px rgba(255, 214, 10, 0.05)` (subtle warm glow on hover)
- **Cyan Glow**: `0 0 20px rgba(0, 212, 255, 0.15)` (tech accent)
- **Grid Pattern**: Subtle 1px grid lines at 5% opacity as background texture

## Interaction & Motion
- **Hover**: Cards lift 4px with glow increase, 200ms ease
- **CTA Buttons**: Yellow fill with black text, hover brightens to `#FFE44D`
- **Scroll**: Smooth, sections fade-in-up on scroll
- **Nav**: Fixed top, background transitions from transparent to solid on scroll
- **Transitions**: All 200-300ms ease-out, no bouncy animations

## Design Constraints (DO NOT)
- No rounded corners > 8px (too soft/consumer)
- No colorful gradients (keep monochrome + accent)
- No playful illustrations (use technical SVG icons only)
- No stock photos of people smiling at machines
- No light mode (dark only)
- No decorative elements without functional purpose
