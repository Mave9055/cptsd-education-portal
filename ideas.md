# CPTSD Education Portal - Design Philosophy

## Project Context
This website presents a comprehensive educational series on Complex PTSD (CPTSD), attachment trauma, and recovery through the lens of Daniel's story. The content is clinical, compassionate, and deeply human. It's designed for mental health professionals, educators, survivors, and anyone seeking to understand trauma through a lens of compassion rather than pathology.

---

## Design Approach Selected: Clinical Compassion with Grounded Accessibility

### Design Movement
**Therapeutic Modernism** — A design philosophy that combines clinical clarity with human warmth. It draws from healthcare design principles (trust, clarity, accessibility) while incorporating elements of trauma-informed design (safety, grounding, agency).

### Core Principles
1. **Clarity Through Simplicity** – Complex trauma deserves clear communication. Avoid overwhelming visual noise; let content breathe.
2. **Grounded Safety** – Design elements should evoke stability and presence. Use earthy, calming tones that support nervous system regulation.
3. **Accessibility as Foundation** – High contrast, readable typography, clear navigation. This is not optional—it's essential for a trauma-informed platform.
4. **Intentional Pacing** – Respect cognitive load. Lectures are broken into digestible sections with visual breathing room.

### Color Philosophy
- **Primary Palette**: Deep slate (trust, stability), warm cream (safety, comfort), sage green (growth, healing)
- **Accent**: Warm terracotta (human connection, vitality) used sparingly for CTAs and emphasis
- **Reasoning**: Avoid clinical whites (sterile) and pure blacks (harsh). Instead, use natural, grounding tones that support nervous system regulation while maintaining professional credibility.

### Layout Paradigm
**Asymmetric Reading-Focused Layout**
- Left column: Lecture content with generous margins and line-height for readability
- Right sidebar (desktop): Navigation, learning objectives, discussion prompts (collapsible on mobile)
- Generous whitespace and vertical rhythm to support cognitive processing
- Avoid centered, symmetrical layouts that feel corporate; instead, use a content-first, left-aligned approach

### Signature Elements
1. **Grounding Pause Callouts** – Styled as subtle, indented blocks with a left border accent. These are visual moments of respite within the content.
2. **Lecture Navigation Breadcrumbs** – Clear, hierarchical navigation showing "Lecture 1 of 16" with visual progress indicator
3. **Discussion Prompts** – Styled as expandable cards with soft shadows, inviting engagement without overwhelming

### Interaction Philosophy
- **Smooth, Intentional Transitions** – No jarring animations. Transitions should feel like turning a page, not a jolt.
- **Clear Visual Feedback** – Hover states, active states, and focus states are obvious but not aggressive.
- **Agency & Control** – Users can expand/collapse sections, adjust text size, and navigate at their own pace. No auto-playing content.

### Animation Guidelines
- Fade-in transitions for new content (300ms ease-out)
- Gentle slide-up for expandable sections (250ms ease-out)
- Subtle scale transforms on interactive elements (hover: 1.02 scale)
- No animations that trigger anxiety (flashing, rapid movement, unpredictable timing)

### Typography System
- **Display Font**: Crimson Text (serif, elegant, grounded) – for lecture titles and section headings
- **Body Font**: Inter (sans-serif, readable, modern) – for body text and UI
- **Hierarchy**:
  - H1: Crimson Text, 2.5rem, bold (lecture titles)
  - H2: Crimson Text, 1.75rem, semibold (section headings)
  - H3: Inter, 1.25rem, semibold (subsection headings)
  - Body: Inter, 1rem, regular (16px, line-height 1.7 for readability)
  - Small: Inter, 0.875rem, regular (UI labels, metadata)

---

## Implementation Notes
- All lecture content will be rendered with consistent typography and spacing
- Color palette will be applied through CSS variables for consistency
- Navigation will be sticky on desktop, collapsible on mobile
- Grounding pauses and discussion prompts will be visually distinct but not distracting
- The design should feel like a well-designed textbook, not a corporate website
