---
name: NammaSite
description: A scene-based live-proof website studio for Bangalore businesses
colors:
  canvas: "#F2F0EA"
  canvas-bright: "#FFFDF8"
  ink: "#171B20"
  quiet-ink: "#545D61"
  coral: "#F06455"
  apricot: "#F6A56D"
  teal: "#35AFAA"
  teal-deep: "#086C69"
  night: "#102728"
  line: "#CAC6BC"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Arial Rounded MT Bold, system-ui, sans-serif"
    fontSize: "clamp(3rem, 7.5vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  section:
    fontFamily: "Bricolage Grotesque, Arial Rounded MT Bold, system-ui, sans-serif"
    fontSize: "clamp(2.55rem, 5.8vw, 5rem)"
    fontWeight: 750
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  utility:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "0.7rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.08em"
  opticalRamp:
    micro: "0.48rem–0.76rem"
    control: "0.74rem–0.94rem"
    body: "0.85rem–1.28rem"
    subhead: "1.3rem–2.55rem"
    display: "2.6rem–8rem, fluid by composition"
rounded:
  hairline: "2px"
  xs: "6px"
  control: "8px"
  browser: "12px"
  image: "16px"
  panel: "18px"
  console: "22px"
  sheet: "24px"
  stage: "28px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "24px"
  lg: "44px"
  xl: "72px"
---

# Design System: NammaSite

## Creative North Star

**The Proof Theatre** stages NammaSite's buying journey as eight compact scenes instead of a long stack of marketing sections. A local business owner moves from the promise to a live demonstration, then through fit, launch toolkit, real work, price, trust and action. Each scene owns the viewport and changes how information moves, while a small chapter rail makes the whole page legible at a glance.

The system borrows its signature shape from the supplied folded coral-to-teal logo mark. It does not copy Creative Hustlers' dark agency styling or component composition; it extracts the reference's pacing, controlled reveals and scene-based navigation.

## Visual World

- Warm mineral canvas under natural daylight, with graphite type.
- Coral is human decision and action; teal is live proof and completion.
- Oversized folded planes, cropped website evidence and moving proof rails create depth.
- One dark teal chapter gives the sequence contrast and makes real work feel projected.
- User-controlled mineral-light and workshop-dark modes preserve the same coral/teal meaning and persist across visits.
- Large type is tightly composed; utility type appears only for URLs, prices, status and navigation.
- Surfaces are stage-like and architectural, not collections of rounded cards.

## Page Rhythm

Desktop chapters use `min-height: calc(100svh - header)` and native scroll-snap proximity. The page never intercepts wheel or touch input. Each chapter has a different composition and entrance:

1. **Offer:** kinetic headline plus interactive folded live-proof builder.
2. **Proof path:** a diagonal three-stop approval runway draws across the viewport.
3. **Business fit:** a conversational goal router returns a grounded content order and plan depth.
4. **Toolkit:** verified launch ingredients emerge from a folded live-site core and explain themselves on selection.
5. **Work:** a dark projection room with one real project on stage and direct next/previous controls.
6. **Pricing:** two offset plan sheets sit on a visual balance around the same no-advance promise.
7. **Trust:** founder note and an inline question console replace a long FAQ stack.
8. **Start:** one oversized business-name action closes the story.

Mobile removes viewport locking and side navigation. Chapters become natural-height compositions with the same visual identities. Controls remain reachable at 320px and screenshots receive mobile-specific crops.

## Components

### Navigation

A compact sticky header carries the logo, high-value anchors, theme control and the call action. A desktop chapter rail shows the current scene with a growing coral track and `aria-current`; it disappears on mobile in favor of the disclosure menu.

### Theme Control

The light/dark toggle changes the whole material system, updates its accessible name and pressed state, and persists the visitor's choice. The light scene is a daylight proof desk; the dark scene is the same desk under workshop light—not a different brand.

### Goal Router

Three business-owner situations replace category jargon. Each choice updates one stable recommendation panel and keeps both plans within reach.

### Launch Toolkit

Eight verified inclusions orbit a folded core. Selecting an inclusion updates its explanation and plan availability. Motion begins only while the scene is current and reduced-motion users receive the same information without travel.

### Buttons

Buttons use compact rectangles with a folded top-right corner. Primary actions are graphite or coral depending on surface. Pills are reserved for trade choices and compact status controls.

### Live Proof Builder

The hero form asks for the business name and trade, then changes the URL, copy, navigation and color field inside one live preview. The motion is a quick mask wipe and stamp, not a generic fade.

### Work Projector

Only one real project leads at a time. Arrow buttons and labelled project selectors update the screenshot, location, link and count. Motion follows film direction; the next project enters from the direction chosen.

### Question Console

FAQ buttons update one stable answer panel. Keyboard focus and expanded state remain explicit, keeping the chapter compact without hiding access.

## Motion Rules

- Each chapter gets one native motion vocabulary; do not apply one reveal class to everything.
- Content is visible by default. JavaScript-enhanced entrances use masks, rail growth, rotation and directional slide where appropriate.
- No scroll-jacking, autoplay sound, WebGL, particles or decorative cursor effects.
- `prefers-reduced-motion` disables smooth scroll, scene entrances, preview wipes and slider travel without removing content.

## Accessibility and Performance

- Semantic heading order and labelled regions.
- Visible two-color focus rings on every interactive element.
- Mobile menu, dialogs, form errors, FAQ console and sliders are keyboard accessible.
- Minimum body contrast is 4.5:1.
- Real images keep explicit dimensions and lazy loading below the fold.
- Native scroll and transform/opacity/clip-path motion only; no continuous animation loops.

## Do / Don't

- Do make the proof-before-payment mechanism visible in the first viewport.
- Do keep verified pricing, timing, inclusions, founders and real work.
- Do let each chapter change density and spatial behavior.
- Don't re-expand supporting detail into isolated sections.
- Don't reproduce the reference site's black/red world, serif headline, card stacks or claims.
- Don't invent testimonials, metrics, awards, clients or business outcomes.
