---
name: LinuZvision — Void and Form
description: Infrastructure-grade intelligence expressed through an achromatic architectural system.
colors:
  paper: "#faf9f9"
  ink: "#111313"
  muted: "#626767"
  line: "#d4d4d4"
  panel: "#e7e8e8"
  void: "#060707"
  void-text: "#f6f6f4"
  void-muted: "#b9bcbc"
typography:
  display:
    fontFamily: "Inter Variable, Inter, sans-serif"
    fontSize: "clamp(64px, 7vw, 96px)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Inter Variable, Inter, sans-serif"
    fontSize: "clamp(42px, 5vw, 76px)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Inter Variable, Inter, sans-serif"
    fontSize: "clamp(20px, 2vw, 28px)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Inter Variable, Inter, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Inter Variable, Inter, sans-serif"
    fontSize: "9px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.11em"
rounded:
  none: "0px"
spacing:
  unit: "8px"
  control-x: "22px"
  card: "28px"
  mobile-edge: "24px"
  section-min: "110px"
  section-max: "185px"
components:
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "42px"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "42px"
  button-light:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "42px"
  service-card:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "28px"
---

# Design System: LinuZvision — Void and Form

## Workflow Governance

Ce système visuel est maintenu avec le protocole Impeccable. Toute nouvelle surface ou modification matérielle doit être comparée à son autorité Stitch, inspectée aux formats desktop et mobile, soumise à une revue indépendante et documentée ici uniquement après le verdict `ship`.

L'agent constructeur ne s'auto-certifie pas. Un reviewer Impeccable frais juge la fidélité, le responsive, le craft floor et le plafond de qualité ; un documenter Impeccable frais enregistre ensuite les vérités réutilisables dans ce fichier et `.impeccable/design.json`. En l'absence technique de ces sous-agents, les deux responsabilités doivent être reproduites dans des passes séparées et explicitement signalées.

L'état d'avancement fonctionnel n'est pas dérivé de ce fichier : il se lit dans `PRODUCT.md` et `AGENTS.md`. Ce fichier reste la vérité visuelle. Toutes les surfaces planifiées sont désormais construites ; la suite concerne l'intégration fonctionnelle des canaux officiels et les dettes connues, pas une nouvelle surface.

## Overview

**Creative North Star: "Void and Form"**

LinuZvision presents infrastructure-grade intelligence as a calm, engineered environment. Near-white gallery fields alternate with black system chambers; hairline geometry, grayscale industrial imagery, and dense typographic planes make the product feel architectural and credible rather than promotional.

The system is premium through restraint. Monumental statements establish authority, while compact labels, system diagrams, and precise rules supply technical evidence. Motion behaves like a signal moving through infrastructure: linear, sparse, and subordinate to comprehension. The interface remains complete and understandable when motion is reduced.

TASHA extends this established world into a technical operating chamber rather than a separate identity. A governed intelligence core, network material, orthogonal axes, ruled capability modules, and an Africa-to-America corridor make autonomy legible as bounded execution while preserving the Home system's typography, palette, geometry, and conversion patterns.

The AI Solutions surface translates the same world into an operational transformation narrative. Its sequence moves from manual friction to flow, applied capabilities, a signal-to-action journey, TASHA as the intelligence layer, human control, and a concrete conversation prompt. This surface is intentionally code-led because no autonomous approved composition exists for it; the exception is limited to AI Solutions and does not change the comp-first rule for surfaces with dedicated visual references.

The Cloud surface is comp-led by its dedicated Google Stitch composition. It develops the world through a deliberate infrastructure sequence: monumental promise, restrained explanatory rail, isometric topology, hybrid bridge, near-black hardware chamber, paired security and AI systems, technical specifications, then a terminal scale invitation. Its topology drawing is a new reusable material language: fine monochrome axonometric infrastructure, explicit connections, and component-level pictograms make complex systems inspectable without turning the page into a dashboard.

The Cybersecurity surface is likewise comp-led by its pinned Google Stitch composition. It turns the system into an architectural defense narrative: a quiet monumental promise, zero-trust evidence, a distinct near-black autonomous-defense chamber, physical resilience, an orbital Africa-to-America corridor, numbered response protocols, governed specifications, and a final resilience invitation. Security is made legible through material infrastructure, strict label/content splits, spare line pictograms, and protocol-like sequences rather than generic shield graphics or dashboard chrome.

The IT Support & Training surface is comp-led by its dedicated Google Stitch composition. It frames adoption as an architectural progression: a centered people-first promise, asymmetric support evidence, a ruled three-by-two services ecosystem, a near-black human-machine chamber, an Africa-to-America bridge, a disciplined program list, supplied technical benchmarks, and a terminal progression toward Intelligence. Editorial team photography and the technical synergy drawing distinguish human capability from machine augmentation without separating them into competing worlds.

The About / Our Story surface is comp-led by its dedicated Google Stitch composition. It frames heritage and vision as an architectural timeline and global infrastructure narrative: a dark full-screen hero promise ("WE BUILD TECHNOLOGY FOR WHAT COMES NEXT."), a centered manifesto proposition with a 3-card hairline matrix, a 25+ years timeline grid tracing adaptation from 1999 hardware/networks through data centers and cloud to present/future agentic AI & automation, a global operational footprint, a dark Africa ↔ America core axis chamber, a TASHA technology feature, and a monumental dark closing statement.

The Insights surface is comp-led by its dedicated Google Stitch composition. It treats the knowledge hub as a calm editorial threshold rather than a crowded article grid: a near-full-height luminous hero rotates one monumental word after “FROM,” faint infrastructure material sits behind the typography, and one featured report pairs structured editorial metadata with a restrained technical evidence plate. The page establishes a reusable Read-mode grammar while remaining inside the same paper, ink, hairline, grayscale, and square-corner system.

The Contact surface is comp-led by its dedicated Google Stitch composition and operates in Persuade mode. It turns conversion into an architectural intake sequence: a centered monumental invitation, restrained infrastructure evidence, a verified Africa-to-America corridor, a ruled three-sector matrix, two explicit connection states, and a pale full-width engagement chamber. The form prepares a structured brief locally and states plainly that no message is transmitted until an official endpoint exists.

**Key Characteristics:**

- Achromatic light and dark fields with no decorative brand color.
- Square controls, sharp containers, and one-pixel structural rules.
- Extreme typographic scale contrast: monumental headlines against compact tracked labels.
- Grayscale infrastructure imagery used as material proof, not decoration.
- Flat surfaces whose state changes come from inversion, tonal shift, or translation.
- Technical chambers use centered cores, axes, nodes, and explicit operating sequences to explain autonomous intelligence without personification.
- AI Solutions uses horizontal ruled systems and alternating paper, pale-system, and ink fields to make operational change legible as a continuous story.
- Cloud uses isometric topology drawings, physical-layer pictograms, and specification grids to turn infrastructure into visible architectural evidence.
- Cybersecurity uses authored label/content splits, materially distinct defense chambers, superposed evidence plates, orbital corridor diagrams, numbered protocols, and specification grids to make protection inspectable.
- Training uses centered declarations, asymmetric editorial evidence, ruled service and program systems, a distinct human-machine chamber, geographic bridge language, and benchmark matrices to make adoption feel operational rather than instructional.
- Insights uses a sparse kinetic word window, compact reading metadata, and a single asymmetric featured-report composition to make knowledge feel curated and operational rather than volumetric.
- Contact uses centered monumental type, ruled sector and connection systems, a binary corridor diagram, and an underlined full-width form to make conversion precise without inventing contact channels.

## Colors

The palette is achromatic and materially precise: warm paper, near-black ink, cool grays, and deep void fields carry every hierarchy.

### Primary

- **Structural Ink:** The principal text, border, filled-control, and dark-section color; it gives the system its weighted architectural presence.

### Secondary

- **System Void:** The deepest chamber surface, reserved for TASHA and other immersive technical moments.
- **Quiet Panel:** A cool-gray field for featured cards and restrained dimensional contrast.

### Neutral

- **Gallery Paper:** The default canvas and inverse text color.
- **Operational Gray:** Secondary copy and subdued metadata on light surfaces.
- **Hairline Gray:** Dividers, grids, and low-emphasis container edges.
- **Void Text:** Primary copy on the deepest technical chamber.
- **Void Muted:** Supporting copy on dark fields.

### Named Rules

**The Achromatic Authority Rule.** Preserve the monochrome world; hierarchy comes from contrast, scale, imagery, and structure rather than accent color.

**The Inversion Rule.** Interactive emphasis uses a paper/ink inversion or a restrained gray shift, never a colorful highlight.

## Typography

**Display Font:** Inter Variable (with Inter and sans-serif fallbacks)  
**Body Font:** Inter Variable (with Inter and sans-serif fallbacks)  
**Label Font:** Inter Variable (with Inter and sans-serif fallbacks)

**Character:** One utilitarian family carries the full system. Authority comes from compressed display rhythm, extreme scale, and disciplined casing rather than font mixing.

### Hierarchy

- **Display:** Bold, tightly tracked, and monumental; reserved for the hero and terminal calls to action. Mobile scales deliberately to a compact but still dominant block.
- **Headline:** Semibold architectural section statements with tight line height and tracking.
- **Title:** Medium-weight service and editorial titles; compact, direct, and structurally aligned.
- **Body:** Regular-weight explanatory copy with generous line height, generally constrained to roughly 420–520px for readable measure.
- **Label:** Very small uppercase interface and metadata text with expanded tracking; use for navigation, buttons, system states, and reading metadata.

### Named Rules

**The One-Family Rule.** Use Inter throughout; distinguish roles with scale, weight, case, tracking, and spatial placement.

**The Scale-Contrast Rule.** Pair very large, tightly composed statements with small, widely tracked labels; avoid middling editorial typography that weakens the architecture.

## Layout

The system uses a fixed-fluid canvas capped at 1440px, with responsive horizontal padding that grows from 24px to 72px. Desktop compositions behave like a 12-column architectural grid, expressed through asymmetric two-column statements, three-column service matrices, and paired image/copy planes.

TASHA uses this grid as a sequence of technical plates: a wide network hero beneath an asymmetric statement, paired paradigm and corridor planes, three-node architecture rows, a four-module operating chamber, and two deployment columns. The choreography is spatially varied on desktop but semantically linear in the document order.

Sections use generous vertical breathing room, typically scaling from 110px to 185px, and major transitions often begin with a full-width hairline. The fixed header is 76px on desktop and 66px on mobile. At 1050px, primary navigation becomes a menu; at 760px, all multi-column compositions collapse into a deliberate single-column narrative, calls to action become full width, and imagery adopts taller mobile crops.

At the mobile breakpoint, TASHA's hero statement, architecture nodes, operating modes, deployments, corridor, and governance principles all linearize to one column. Cross-column borders become horizontal separators, the network field shortens to 520px, the intelligence core contracts from 180px to 130px, and the scan resolves to a static centered signal under reduced motion.

AI Solutions follows a fixed narrative order: problem exposure, friction-to-flow transformation, six applied capabilities, a five-step automation journey, the TASHA bridge, governance safeguards, and the final conversion chamber. On desktop, the opening statement uses an asymmetric 1.55/.65 split above a full-width signal image; capability rows use title, explanation, and action columns; the automation journey is a five-node horizontal line. At 760px, every Solutions split becomes one column, the problem matrix becomes a vertical list, capability actions occupy a persistent right rail, and the journey rotates into an explicit top-to-bottom sequence. The hero action becomes full width and the media uses a 520px crop.

Cloud follows the approved Stitch narrative without reordering: infrastructure promise, topology map, hybrid bridge, hardware chamber, zero-trust and AI pair, technical specifications, and scale CTA. The hero title spans the composition first; its explanatory copy and action sit in a ruled rail beneath it, aligned to the right-hand column rather than competing beside the headline. The topology is a full-width architectural plate, the hybrid section uses a 1/.8 bridge composition, the hardware chamber forms a three-column physical-layer inventory, security and AI occupy a matched two-panel system, and specifications resolve into four equal cells.

At 760px, Cloud becomes a single authored sequence. The hero rail stacks below the title and its action fills the width; the topology header stacks and the plate crops to 470px; the hybrid bridge and security/AI pair become one column; hardware cells become vertically ruled rows; and the four specifications become a two-by-two grid. Vertical dividers must become horizontal separators while the order and labels remain intact.

Cybersecurity preserves the pinned Stitch order without reordering: security promise, zero-trust framework, autonomous defense, architectural resilience, transatlantic flow, response protocols, system specifications, and resilience CTA. The first viewport is a quiet paper field with one monumental three-line promise, concise supporting copy, and two compact actions. Subsequent sections use a recurring narrow label/wide content split (`.42fr 1fr`) so the left rail names the protocol while the right plane carries its proposition, evidence, and system detail.

At 760px, every Cybersecurity split becomes one column while retaining that authored sequence. Zero-trust and resilience media crop to 400px; principle and defense grids become single-column ruled inventories; the resilience evidence plate stays superposed but expands between 18px side insets; the orbital corridor contracts to 330px; response rows retain their number/content relationship with a narrower 48px index rail; and the four specifications become a two-by-two matrix. The hero actions become full width and vertical separators become horizontal rules.

Training preserves the pinned Stitch order without reordering: centered people-first promise, asymmetric support story, six-service ecosystem, human-machine synergy, Africa-to-America bridge, training programs, technical benchmarks, and the terminal Intelligence invitation. The hero remains centered and deliberately sparse. Support uses a `.55fr 1fr` split so the proposition sits apart from editorial team evidence; services form a three-by-two ruled matrix; the synergy chamber pairs the technical image and TASHA proposition; programs use a `.65fr 1fr` title/list split; benchmarks resolve into three equal cells.

At 760px, Training becomes one authored column. The support story, synergy chamber, and program split stack in semantic order; editorial and synergy images use intentional 400px crops; the three-by-two service matrix becomes six ruled rows; benchmarks become a vertical three-cell sequence; and hero and terminal actions fill the available width. The centered hero and bridge remain centered, while all vertical grid separators become horizontal rules.

Insights preserves a deliberately short Read-mode sequence: kinetic editorial threshold, proposition, one featured report, then the global footer. The hero centers “FROM” beside a clipped word window and occupies nearly the full viewport below the shared header; the featured report uses a five-to-seven copy/media split with generous separation. At 760px, the title stacks, the word window centers, the report media moves before the copy, the image crops to 400px, and the editorial action fills the available width.

Contact preserves its comp-led Persuade sequence: monumental invitation and wide film still, two-column geographic vision, three-column sector matrix, paired connection choices, then a centered engagement form. At 760px, the geographic split, sector matrix, connection choices, and field pair linearize in semantic order; the map compresses without reordering its Africa—LZV—America axis, and the primary form action remains full width.

**The Horizon Rule.** Use one-pixel horizontal rules to announce major changes of scene and to align content to a shared visual horizon.

## Elevation & Depth

The system is flat by default and uses no conventional card shadows. Depth comes from tonal layering, high-contrast field changes, image overlays, border hierarchy, and fixed-position overlap. The hero scan signal alone uses a restrained light bloom to remain legible over the architectural image.

Cloud introduces one deliberate exception: the topology plate carries a soft structural lift above its pale field, making it read as a large technical drawing laid on an architectural table. The drawing itself remains monochrome and low-contrast; its isometric depth comes from linework and axonometric construction, not gradients or photorealistic effects.

Cybersecurity keeps its infrastructure images flat and full-bleed. Its resilience image gains depth through one deliberate superposition: a near-opaque paper evidence plate overlaps the lower-left of the server architecture while the specification strip remains attached beneath it. The autonomous-defense chamber is materially distinct through a charcoal field, quiet light rules, and pale typography—not through shadow.

On TASHA, grayscale network imagery is deliberately subdued beneath a translucent paper wash so the centered core and its horizontal/vertical axes remain the primary evidence. The seven-second axis scan is the only ambient movement in that chamber; it travels on a single straight path and becomes a static, low-opacity center line when reduced motion is requested.

### Shadow Vocabulary

- **Signal Bloom** (`0 0 20px rgba(255,255,255,.5)`): Used only around the one-pixel scanning signal over media.
- **Topology Plate Lift** (`0 18px 45px rgba(17,19,19,.12)`): Used only for the large Cloud topology drawing to separate the technical sheet from its pale support field.

### Named Rules

**The Flat-by-Default Rule.** Surfaces do not float; state is expressed through inversion, tonal shift, border contrast, or small translation.

## Shapes

The form language is strictly rectilinear. Buttons, cards, diagrams, navigation controls, status markers, and media frames use square corners. One-pixel borders establish containers; clipping is reserved for media and moving signals. Small square nodes are the recurring system motif.

**The Zero-Radius Rule.** All visible interface surfaces and controls use square corners; do not introduce pills or soft cards.

## Components

### Buttons

- **Shape:** Compact rectangular controls with square corners, a one-pixel border, and a minimum height of 42px.
- **Primary:** Structural Ink fill with Gallery Paper text; horizontal padding follows the control spacing token.
- **Hover / Focus:** Primary buttons reverse to transparent paper; outline buttons fill with ink. Arrow icons translate 4px. Keyboard focus uses a two-pixel ink outline offset by 4px.
- **Light:** Transparent on dark fields with a Gallery Paper border and text; hover fills with paper and flips to ink.

### Cards / Containers

- **Corner Style:** Square with no radius.
- **Background:** Transparent Gallery Paper by default; featured service cards use Quiet Panel.
- **Shadow Strategy:** None; reference the flat-by-default rule.
- **Border:** Shared one-pixel Hairline Gray grid edges.
- **Internal Padding:** 28px for service cards and 42px for the large TASHA system chamber.
- **State:** Service cards invert to ink on hover, with supporting copy shifting to a lighter gray.

### Navigation

- **Desktop:** Centered compact uppercase links with expanded tracking. Hover and active states grow a one-pixel underline outward from the center.
- **Header:** Fixed, three-part grid with a near-opaque paper field and a bottom hairline.
- **Mobile:** A square two-line menu control opens a full-width paper panel below the header. Links become larger sentence-scale entries for touch scanning.

### TASHA System Diagram

TASHA is represented as a technical sequence, not a character. A light nameplate leads into stacked outlined capability nodes connected by one-pixel vertical lines inside a large bordered void chamber.

### TASHA Network Hero

A wide grayscale human-machine network field carries a centered square intelligence core over orthogonal one-pixel axes. A luminous vertical scan crosses the field on a linear path; the underlying image stays secondary through reduced opacity and a paper-toned overlay. The core names TASHA and its active state without imitating a dashboard, face, or conversational avatar.

### Operating Modules

Architecture capabilities appear as three equal ruled cells with square node markers, operational titles, concise explanations, and indexed metadata. The dark signal-to-action chamber follows with four equal modules—Understand, Adapt, Engage, Act—separated by hairlines. Deployment contexts use two broad columns and outlined evidence tags; tags are metadata, not pill controls.

### Solutions Transformation Field

The friction-to-flow passage is a full-width ink chamber pairing a monumental proposition with four ruled before/after rows. Muted compact labels name the existing condition; larger medium-weight terms name the improved state. The contrast communicates transformation without diagrams, decoration, or unsupported metrics.

### Solutions Capability Rows

Applied capabilities form one ruled list rather than a card grid. Each 150px desktop row aligns a medium-weight capability title, concise operational explanation, and square arrow action. Hover uses a restrained pale tonal shift and 10px horizontal translation. On mobile, title and explanation stack while the 42px action remains aligned in a narrow right column.

### Automation Journey

The operational sequence is a five-node horizontal signal line on a pale-system field: customer signal, AI understanding, workflow action, system update, and human escalation. Each node is a small outlined square connected by a one-pixel rule. Mobile rotates the same authored sequence vertically; it must not collapse into generic cards or lose the human-escalation endpoint.

### Solutions TASHA Bridge and Governance

TASHA appears as a square ink core beside explanatory copy, linking the general capability story to the proprietary agent without personification. A later pale governance field pairs the statement “Autonomous does not mean uncontrolled” with a ruled safeguard list. Defined permissions, human oversight, security and privacy, and transparent escalation remain visible evidence, not decorative tags.

### Cloud Topology Plate

A large bordered paper plate holds a monochrome isometric topology: cloud nodes, firewalls, switches, server racks, storage arrays, endpoints, edge sites, and physical infrastructure are connected through fine solid and dashed routes. Compact COMPUTE, STORAGE, and NETWORK labels sit on the plate as a legend. Use this material when system architecture needs visible evidence; preserve its spacious drawing-board character and do not replace it with dashboard chrome.

### Hybrid Infrastructure Bridge

The hybrid passage pairs a large proposition and two compact specifications with a pale technical diagram. Two square nodes—on-premises Africa and cloud America—are joined by a single diagonal rule. The diagram explains continuity across environments with the minimum geometry required; it is a bridge, not a network-map duplicate.

### Hardware Chamber

The physical infrastructure inventory is a near-black chamber divided into three equal ruled cells: servers, storage, and network. Each cell begins with a quiet 30px line pictogram, then a substantial title and compact explanatory copy. The restrained icons provide layer recognition while the chamber's scale and contrast communicate raw physical capacity.

### Security and AI Pair

Zero-trust security and AI-optimized infrastructure are authored as two matched panels, not unrelated cards. The security panel uses paper and a ruled protocol list; the AI panel uses a pale system field and a square monitoring indicator. Their pairing makes governance and optimization read as equal infrastructure responsibilities.

### Technical Specification Grid

Cloud evidence resolves into four equal, bordered cells with monumental values and compact tracked labels. Treat the values as specifications supplied by the surface, never as permission to invent broader commercial proof. On mobile the row becomes a two-by-two matrix with continuous one-pixel dividers.

### Cybersecurity Hero and Split Sections

The Cybersecurity hero is a quiet paper field dominated by a tightly set three-line security promise, followed by restrained context and paired compact actions. After the hero, a persistent split grammar places the uppercase section label in a narrow left rail and the proposition, explanation, evidence, and protocols in a wide right plane. Preserve this label/content hierarchy; it is the page's editorial backbone.

### Zero-Trust Material

Zero Trust uses its own grayscale data-center aisle as physical evidence, followed immediately by three ruled principles: identity-based access, microsegmentation, and continuous verification. Keep this material distinct from the autonomous-defense matrix and the resilience server architecture; each image proves a different security layer and must not be treated as interchangeable atmosphere.

### Autonomous-Defense Chamber

Autonomous defense is an autonomous near-black chamber spanning the page rather than a card nested in the light flow. A grayscale AI security matrix leads into two equal ruled capability cells. Each cell opens with a spare 28px line pictogram before its tracked label and compact explanation; pictograms identify behavioral analytics and governed remediation without becoming decorative badges.

### Resilience Evidence Plate

Architectural resilience pairs a full-width server-architecture image with a paper evidence plate superposed near its lower-left edge. The plate names hardware-rooted security and explains its role; a three-cell statistic rail remains structurally attached below the image. Preserve the overlap and attached rail so resilience reads as physical proof, not a detached metrics block.

### Transatlantic Security Corridor

The Africa-to-America security corridor is a pale, bordered orbital diagram built from concentric circles, orthogonal axes, curved routes, endpoint nodes, and a square LZV core. Geographic labels occupy opposing corners and the encrypted-corridor label anchors the lower edge. It explains governed movement and data sovereignty; it is distinct from TASHA's photographic geographic corridor and must not imply offices, partners, or unsupported coverage.

### Response Protocols

Incident response is a numbered ruled sequence—Detect & Isolate, Analyze & Contain, Eradicate & Recover—not a collection of cards. Each row keeps a quiet two-digit index in its own rail beside a direct operational title and concise recovery explanation. The ordering is part of the meaning and must remain explicit on mobile.

### Cybersecurity Specification Grid

Cybersecurity specifications occupy a near-black governed telemetry chamber. Four equal ruled cells pair compact labels with supplied values; on mobile they become a two-by-two matrix. Treat these values as surface-specific evidence only and never extrapolate them into broader certifications, guarantees, or commercial claims.

### Training Narrative System

Training opens with a centered monumental promise and a single direct action. The next scene deliberately breaks symmetry: a narrow architectural proposition faces a wider editorial support image and explanation. Preserve this shift from centered authority to asymmetric proof; it establishes that support is an operating foundation rather than a helpdesk feature.

The core services ecosystem is a three-by-two ruled matrix of six equal cells. Each cell uses one small square system node, then allows its title and explanation to settle at the base. The training-program inventory uses a separate ruled list grammar with a persistent plus marker; do not collapse either system into generic feature cards.

The human-machine scene is a materially distinct charcoal chamber pairing the dedicated technical synergy image with TASHA copy and a light outline action. Follow it with the centered Africa-to-America bridge, expressed through text and one connecting rule rather than a decorative map. This sequence binds machine augmentation, human expertise, and the established geographic vision without implying unsupported offices or coverage.

Technical benchmarks use three equal bordered cells with large values and compact tracked labels. They are supplied surface evidence, not reusable promises or permission to invent guarantees. The terminal chamber stages IT Systems, Infrastructure, and People in muted lines before giving Intelligence the strongest contrast; retain that visual progression and its centered scale.

### Geographic Corridor

The Africa-to-America material is a grayscale network map with a compact dark overlay reading AFRICA — TASHA — AMERICA. TASHA is the bridge inside the corridor, not a decorative map pin. The adjacent copy explains contextual differences and explicitly pairs adaptation with permissions and human oversight.

### Media Status

A compact paper status plate sits over grayscale infrastructure imagery. It pairs a small square node with widely tracked operational text; ambient motion is limited to the scanning line across the media.

### Floating Conversation Control

The desktop control is a compact fixed ink bar that reveals its label by horizontal expansion. On mobile it resolves to a 46px square icon control so it does not obstruct the narrative.

### Insights Editorial Threshold

The Insights hero is a luminous, near-full-height paper chamber with faint grayscale infrastructure material masked toward the side edges. “FROM” remains fixed while a clipped, underlined word window cycles through Insights, Ideas, Knowledge, Experience, Intelligence, and Action. The motion is a single 600ms vertical entry every two seconds; reduced-motion users receive a stable “INSIGHTS” reading. The featured report uses a narrow label, substantial title, bordered summary, date and reading-time metadata, and one square technical evidence node over subdued imagery.

### Contact Intake System

The Contact conversion sequence uses ruled, square-corner systems rather than floating cards. A three-cell sector matrix establishes fit, paired connection plates distinguish the active project path from the visibly pending WhatsApp channel, and the pale engagement chamber uses explicit labels with underline-only fields. Submission prepares a local project brief and returns visible status messaging; it never implies delivery before an official endpoint is configured.

## Do's and Don'ts

### Do:

- **Do** build hierarchy with black-and-paper inversion, typographic scale, grayscale imagery, and one-pixel structure.
- **Do** keep major statements short, uppercase, tightly tracked, and compositionally dominant.
- **Do** use real infrastructure imagery in grayscale when physical or technical credibility needs proof.
- **Do** preserve semantic content, keyboard focus, readable mobile order, and a complete reduced-motion experience.
- **Do** treat TASHA as an operational system expressed through sequences, nodes, and capability language.
- **Do** build TASHA-specific chambers from network material, orthogonal axes, governed cores, ruled modules, and explicit signal-to-action sequences while retaining the Home tokens.
- **Do** linearize technical rows into the authored reading order on mobile and convert vertical division into horizontal separation.
- **Do** preserve the Solutions narrative order from manual friction through governed automation to a concrete conversation.
- **Do** keep the Solutions journey and capability inventory as ruled systems; their continuity is the page's reusable signature.
- **Do** preserve the Cloud sequence from promise through topology, hybrid continuity, physical infrastructure, security and AI, specifications, and scale CTA.
- **Do** use isometric monochrome topology as architectural evidence, with explicit routes and recognizable infrastructure pictograms.
- **Do** keep the Cloud hero title dominant and place its explanatory/action rail beneath it rather than beside it.
- **Do** keep security and AI as a matched pair and preserve the specification grid's scanable value-label rhythm.
- **Do** preserve the Cybersecurity sequence from promise through zero trust, autonomous defense, resilience, transatlantic flow, response, specifications, and the terminal resilience CTA.
- **Do** keep Cybersecurity's narrow label rail and wide evidence plane intact on desktop, then linearize them in semantic order on mobile.
- **Do** keep zero-trust, autonomous-defense, and resilience imagery materially distinct; each visual proves a different layer of the security architecture.
- **Do** preserve the resilience evidence plate overlap, the orbital transatlantic diagram, the numbered response sequence, and the governed specification matrix.
- **Do** treat the pinned Google Stitch Cybersecurity composition as the authority for sequence, proportions, and finish.
- **Do** preserve Training's sequence from centered promise through support, services, synergy, geographic bridge, programs, benchmarks, and the terminal Intelligence progression.
- **Do** keep the Training service ecosystem as a three-by-two ruled matrix and the programs as an indexed-looking ruled list with persistent plus markers.
- **Do** preserve the material distinction between editorial team photography and the technical human-machine synergy chamber.
- **Do** treat the pinned Google Stitch Training composition as the authority for sequence, proportions, and finish.
- **Do** preserve Insights as a sparse editorial threshold with one kinetic word window and one featured report before expanding it into a future content system.
- **Do** keep Insights metadata structured and compact, and provide a stable reduced-motion word without removing semantic meaning.
- **Do** preserve Contact's sequence from invitation through geographic vision, sectors, connection choice, and structured engagement.
- **Do** expose the verified WhatsApp number and email as direct, accessible channels in the global footer, Contact surface, and floating conversation control.
- **Do** use the supplied LinuZvision image mark in the global header, footer, and administration shell; preserve its aspect ratio and monochrome presentation.
- **Do** organize navigation by Intelligence, Infrastructure, and Company themes, with the same information architecture on desktop and mobile.
- **Do** present database-backed Insights as one featured publication followed by a ruled editorial list; preserve the calm threshold when content volume grows.
- **Do** use the supplied muted looping Home hero video as technical evidence inside the existing grayscale frame; keep playback inline and retain the static layout without relying on sound.
- **Do** populate the Home editorial preview from the three most recent published Insights and route every reading action to its canonical article slug.

### Don't:

- **Don't** introduce accent colors, gradients as decoration, soft shadows, rounded cards, or pill controls.
- **Don't** replace the fixed-fluid grid with generic centered stacks on desktop.
- **Don't** over-animate; reserve motion for signals, understated translations, and state transitions.
- **Don't** use decorative imagery or anthropomorphize TASHA.
- **Don't** turn TASHA into a generic chatbot dashboard, glowing orb, robot, face, or unbounded automation fantasy.
- **Don't** let geographic material imply invented offices, partners, coverage, or regulatory claims; use the corridor only to express the established Africa ↔ America operating vision.
- **Don't** invent commercial proof, partners, client marks, certifications, or contact details to fill a composition.
- **Don't** convert the Solutions capability list or automation journey into a generic card grid.
- **Don't** generalize the Solutions code-led exception: dedicated approved compositions remain the authority wherever they exist.
- **Don't** reinterpret the Cloud surface as code-led; its dedicated Google Stitch composition is the approved composition and finish reference.
- **Don't** replace the topology plate with a generic dashboard, abstract cloud illustration, decorative gradient, or disconnected icon cloud.
- **Don't** turn hardware pictograms, protocol items, monitoring state, or specifications into rounded feature cards.
- **Don't** reinterpret Cybersecurity as code-led, reorder its narrative, or flatten its autonomous-defense chamber into the surrounding paper field.
- **Don't** replace the orbital corridor with a generic map, the response protocol with cards, or the resilience overlap with detached copy and metrics.
- **Don't** reuse one security image as generic atmosphere across zero trust, autonomous defense, and resilience.
- **Don't** reinterpret Training as code-led, reorder its narrative, or replace its service matrix and program list with generic cards.
- **Don't** treat Training benchmark values as broad commercial guarantees, certifications, or reusable company-wide claims.
- **Don't** turn Insights into a generic article-card grid or add publication volume, readership, contributors, or outcomes that are not supplied by product truth.
- **Don't** invent additional email addresses, phone numbers, WhatsApp destinations, offices, coverage, clients, or delivery claims beyond the verified channels supplied by the owner.
