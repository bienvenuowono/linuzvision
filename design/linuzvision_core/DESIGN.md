---
name: LinuZvision Monolith
colors:
  surface: '#FAF9F9'
  surface-dim: '#d7dbda'
  surface-bright: '#f7fafa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f4'
  surface-container: '#ebeeee'
  surface-container-high: '#e5e9e8'
  surface-container-highest: '#e0e3e3'
  on-surface: '#1A1C1C'
  on-surface-variant: '#434747'
  inverse-surface: '#2d3131'
  inverse-on-surface: '#eef1f1'
  outline: '#747878'
  outline-variant: '#D4D4D4'
  surface-tint: '#5d5f5f'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1a1c1c'
  on-primary-container: '#828484'
  inverse-primary: '#c6c7c6'
  secondary: '#5d5f5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e2'
  on-secondary-container: '#636564'
  tertiary: '#010000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1f1b19'
  on-tertiary-container: '#8a8380'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e3e2'
  primary-fixed-dim: '#c6c7c6'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#eae1dd'
  tertiary-fixed-dim: '#cdc5c1'
  on-tertiary-fixed: '#1f1b19'
  on-tertiary-fixed-variant: '#4b4643'
  background: '#FAF9F9'
  on-background: '#181c1d'
  surface-variant: '#E3E2E2'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 120px
    fontWeight: '700'
    lineHeight: 110px
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 60px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  mono-data:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.05em
spacing:
  section-gap: 160px
  gutter: 24px
  unit: 8px
  margin-mobile: 24px
  margin-desktop: 64px
  container-max: 1440px
---

## Brand & Style
The LinuZvision visual identity is defined by "Void and Form"—a high-precision blend of **Minimalism** and **Architectural Brutalism**. The system is designed for an authoritative, corporate AI or infrastructure audience, evoking a sense of cold sophistication and technical mastery.

The style utilizes sharp geometry, hairline strokes, and an expansive use of white space to create a "gallery" feel. Interaction is indicated by subtle state changes rather than heavy visual cues, emphasizing a quiet but powerful user experience. Key characteristics include:
- **Hairline Precision:** Extensive use of 1px borders and dividers.
- **Grayscale Dominance:** A palette almost entirely devoid of hue to emphasize structure.
- **High Contrast Typography:** Dramatic shifts between massive display headers and tiny, monospaced data labels.

## Colors
The color strategy is "Achromatic Professionalism." It relies on a sophisticated range of off-whites and cool grays to define depth and hierarchy without the distraction of color.

- **Base:** The primary background is a clean, slightly warm off-white (`#FAF9F9`) to prevent the sterile feel of pure white while maintaining high-key lighting.
- **Ink:** All primary text and structural anchors use `#1A1C1C`, providing maximum legibility and a weighted presence.
- **Structure:** Hairlines and dividers use `#D4D4D4` or `#747878` depending on the required emphasis.
- **Interaction:** Hover states and secondary backgrounds utilize `#E3E2E2` to create a subtle shift in the perceived "depth" of the surface.

## Typography
The system exclusively uses **Inter** to maintain a neutral, utilitarian, and systematic appearance. The hierarchy is driven by extreme scale rather than font variety.

- **Display & Headlines:** Tight tracking (`-0.04em` to `-0.01em`) is mandatory for large type to ensure it feels like a solid architectural block.
- **Labeling:** Small labels must be uppercase with expanded tracking (`0.1em`) to maintain legibility and professional rigor.
- **Data:** Technical or metadata information should use the `mono-data` style, which mimics a monospaced aesthetic despite using the system sans-serif.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** grid system. Content is constrained to a `1440px` max-width container, centered on the screen with generous external margins.

- **Grid:** A 12-column desktop grid with `24px` gutters.
- **Rhythm:** Vertical spacing is intentionally aggressive. Sections are separated by a `160px` gap (`section-gap`) to allow the eye to rest and to emphasize the "monumental" scale of the brand.
- **Dividers:** Every major section must be preceded by a full-width hairline divider. These dividers act as a horizon line for the content.
- **Mobile:** Margins compress to `24px`, and the grid collapses to a single column while maintaining the vertical rhythm.

## Elevation & Depth
LinuZvision rejects traditional shadows in favor of **Layered Surfaces** and **Strict Outlines**. 

Visual depth is achieved through:
1.  **Z-Index Separation:** Fixed navigation bars use a semi-opaque background (`bg-surface/95`) with a border-bottom, creating a "glass" layer without the blur.
2.  **Stroke Hierarchy:** Objects are defined by `1px` borders. Thinner borders (`outline-variant`) represent background elements, while thicker or darker borders (`outline` or `on-background`) represent interactive or primary containers.
3.  **Tonal Shifts:** Interactive cards or list items do not lift; they change their background color to `surface-variant` on hover, maintaining a flat, architectural profile.

## Shapes
The shape language is strictly **Sharp**. 
- All buttons, containers, and cards must have a `0px` border-radius.
- The only exception to the sharp-edge rule is for specialized iconography or "pill" badges used for system status, though these should be used sparingly to avoid breaking the architectural aesthetic.

## Components
- **Buttons:** Rectangular with `0px` radius. Primary buttons use a `1px` border of `on-background` with no initial fill. On hover, the background fills with `on-background` and text flips to `surface`.
- **Navigation:** Links use a `label-caps` style with a custom animated underline (`1px`) that expands from the center or left on hover.
- **Cards/Containers:** Simple boxes defined by `#747878` 1px borders. Padding is standardized to `32px` for large containers.
- **Dividers:** Use the `section-line` component—a 1px horizontal rule using `#D4D4D4`.
- **Iconography:** Use "Material Symbols Outlined" with a weight of `300-400`. Icons should always be accompanied by labels where possible to maintain the system's focus on information density.
- **Status Nodes:** Small `12x12px` squares with a centered `4x4px` dot to represent "nodes" or "data points," reinforcing the AI/infrastructure theme.