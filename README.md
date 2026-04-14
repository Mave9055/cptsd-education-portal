# The Silence & The Truth: A CPTSD Education Portal

<p align="center">
  <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663251514784/peyAAcfVglzoCzKU.png" alt="Capitol Contracts LLC Logo" width="300">
</p>


A professional, trauma-informed educational website presenting a comprehensive series of lectures on Complex PTSD (CPTSD), attachment trauma, nervous system dysregulation, and recovery.

## Overview

This portal combines clinical knowledge with compassionate storytelling through the lens of Daniel's journey with CPTSD. It's designed for mental health professionals, educators, survivors, and anyone seeking to understand trauma through a trauma-informed perspective.

**Features:**
- 11 comprehensive lectures covering CPTSD, trauma bonds, healing, and recovery
- Clean, accessible interface with trauma-informed design principles
- Learning objectives, discussion questions, and facilitator notes for each lecture
- Responsive design optimized for desktop and mobile
- Professional typography and color palette supporting nervous system regulation

## Design Philosophy

**Clinical Compassion with Grounded Accessibility** — The design combines therapeutic modernism with trauma-informed principles:

- **Color Palette**: Deep slate (trust, stability), warm cream (safety), sage green (growth)
- **Typography**: Crimson Text for headings (elegant, grounded) + Inter for body (readable, modern)
- **Layout**: Asymmetric, content-first design with generous whitespace
- **Interactions**: Smooth, intentional transitions without jarring animations

## Technology Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui components
- **Routing**: Wouter (lightweight client-side router)
- **Content**: Markdown-based lectures with Streamdown rendering
- **Build**: Vite

## Project Structure

```
client/
  public/           # Static configuration files
  src/
    pages/          # Page components (Home, LectureDetail)
    components/     # Reusable UI components
    data/           # Lecture data (lectures.json)
    contexts/       # React contexts (ThemeContext)
    lib/            # Utility functions
    index.css       # Global styles with design tokens
    App.tsx         # Router and main layout
    main.tsx        # React entry point
```

## Getting Started

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

The dev server will start at `http://localhost:3000`

### Build

```bash
pnpm build
```

### Preview

```bash
pnpm preview
```

## Lectures

The portal includes 11 lectures covering:

1. **The Truth Behind the Silence** — Attachment trauma and the blueprint of survival
2. **The Masks We Wear** — Fawning, perfectionism, and the competence trap
3. **When Love Hurts** — Trauma bonds, love bombing, and emotional repetition
4. **The War on Reality** — Gaslighting, blame shifting, and reality distortion
5. **Relapse Isn't a Betrayal** — Understanding addiction as a trauma response
6. **What Healing Actually Looks Like** — From surviving to thriving
7. **The Breaking Point** — Grief, guilt, and processing loss
8. **Rewriting the Legacy** — Fathers, family patterns, and generational trauma
9. **Shame vs. Responsibility** — The fine line between accountability and self-blame
10. **The Lectures They Never Gave Us** — Trauma literacy in education
11. **Decoding the Damage, Rewriting the Truth** — Science-based recovery

## Customization

### Colors

Edit the CSS variables in `client/src/index.css` under `:root`:

```css
--primary: oklch(0.35 0.12 250);  /* Deep slate blue */
--secondary: oklch(0.55 0.08 160);  /* Sage green */
--accent: oklch(0.65 0.18 30);     /* Warm terracotta */
```

### Typography

Fonts are imported from Google Fonts in `client/index.html`:
- **Crimson Text** (serif) for headings
- **Inter** (sans-serif) for body text

### Content

Lectures are stored in `client/src/data/lectures.json`. To update:

1. Modify the markdown files
2. Run the parsing script: `python3 parse_lectures_full.py`
3. The JSON will be regenerated automatically

## Deployment

This is a static frontend application. Deploy to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Manus (built-in hosting)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- High contrast text (WCAG AA compliant)
- Semantic HTML structure
- Keyboard navigation support
- Focus indicators on interactive elements
- Readable font sizes and line heights

## License

© 2026 The Silence & The Truth: A CPTSD Education Portal. All rights reserved.

## Support

For issues, questions, or contributions, please contact the development team.

---

**Note**: This educational portal is designed to complement professional mental health treatment, not replace it. If you or someone you know is struggling with CPTSD or trauma, please seek support from a qualified mental health professional.
