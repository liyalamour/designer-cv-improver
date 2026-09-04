---
name: designer-cv-improver
description: Improve English and Traditional Chinese (Mandarin, zh-Hant) CVs, resumes, portfolios, LinkedIn summaries, and job-application materials for product designers, UX designers, UI designers, visual designers, brand designers, service designers, UX researchers, design managers, and design leaders. Use when the user wants rubric-based critique, Product Design Manager or Design Lead screening, feedback, rewriting, tailoring to a job description, ATS/recruiter scan improvement, achievement bullets, designer-specific positioning, portfolio alignment, visual-layout feedback, bilingual CV support, or enhanced CV export as PDF or Figma-ready/Figma file.
---

# Designer CV Improver

## Overview

Help designers turn a CV from a list of responsibilities into a targeted, credible application asset. Preserve factual accuracy, strengthen design-specific evidence, and produce practical edits the user can apply immediately.

## Workflow

1. Ask the user to choose a mode when their request does not already specify one:
   - **Critique**: review the CV against designer CV rubrics and give prioritized feedback.
   - **Enhance + PDF**: improve the CV content and layout, then export a polished PDF.
   - **Enhance + Figma**: improve the CV content and create a Figma file when Figma tools/session are available; otherwise provide a Figma-ready layout spec and copy.

2. Clarify the goal only when necessary:
   - Target role, level, company type, country/market, and whether the user wants critique, rewrite, tailoring, or file editing.
   - Whether the CV must stay one page, two pages, ATS-safe, visually expressive, or portfolio-first.
   - Portfolio link, job description, or target keywords if available.
   - For export modes, confirm PDF or Figma preference, page size, target length, and whether the deliverable should be ATS-safe, visually polished, or both.
   - When a user uploads a CV and asks to enhance, redesign, export, or improve it visually, proactively prepare at least two distinct visual versions. Use the same truthful content but materially different visual direction and block composition. Present both versions and ask the user which version to refine. Do this even when the user has not asked for options.
   - Detect the source language. For Traditional Chinese source material, reply and rewrite in Traditional Chinese unless the user requests English or bilingual output. Ask only when the desired output language cannot be inferred.
   - When the attached CV is Traditional Chinese and the request is visual improvement, proactively show two rendered previews or two complete Figma-ready layouts in Traditional Chinese. Label them `版本 A` and `版本 B`, explain the visual and block-layout difference in Traditional Chinese, then ask the user to choose.
   - For bilingual CVs, establish one primary reading language; do not duplicate every bullet in two languages unless the user explicitly requests a two-language CV.

3. Gather source material:
   - Read the CV, resume, LinkedIn text, portfolio copy, or job description provided by the user.
   - If a document file is provided, extract or edit it with the appropriate document/PDF skill.
   - Work from the user's stated facts. Do not invent employers, degrees, dates, metrics, tools, clients, awards, or outcomes.

4. Diagnose before rewriting:
   - Check role fit, seniority fit, recruiter scan, ATS clarity, design craft signals, portfolio alignment, and impact evidence.
   - Separate high-impact fixes from polishing preferences.
   - Read `references/designer-cv-rubric.md` for full reviews, visual-layout critique, or severity ratings.
   - Read `references/product-design-manager-screening-standards.md` when screening Product Design Manager, Senior Product Design Manager, Design Lead, Head of Design, or other design leadership CVs.

5. Rewrite with constraints:
   - Keep the user's voice professional, specific, and credible.
   - Lead with outcomes, scope, and design judgment, not only tools and tasks.
   - Make experience bullets concise, data-driven, and impact-first; remove filler, repeated context, and long explanatory phrasing.
   - When impact is missing, ask for metrics or use clear placeholders such as `[metric]`, `[baseline]`, `[result]`, or `[team size]` rather than inventing data.
   - Tailor vocabulary to the target role while avoiding keyword stuffing.
   - Read `references/designer-cv-rewrite-patterns.md` when drafting bullets, summaries, skills sections, or alternative versions.
   - Read `references/designer-cv-traditional-chinese.md` for Traditional Chinese or bilingual CVs. Preserve factual claims and official names; translate for meaning, not word-for-word.

6. Export when requested:
   - For an uploaded CV being improved visually, create at least two rendered design drafts or clearly labeled Figma-ready versions before the final export. The versions must differ in both visual style and block layout; a color-only variation does not count.
   - Render a preview image for each PDF draft whenever tools are available. If rendering is unavailable, provide two complete, distinct layout specs with block maps and visual styling instead.
   - Proactively ask: “Which version should I refine for your final CV—Version A or Version B?” For Traditional Chinese CVs ask: `我已完成兩個視覺方向。你希望我將哪一個版本延伸為最終履歷：版本 A 還是版本 B？` Offer an optional third only when it is meaningfully different.
   - Do not finalize a single visual PDF or Figma file until the user selects a version, unless they explicitly ask the skill to choose on their behalf or require an immediate single-version delivery.
   - For PDF export, use the document/PDF workflow available in the environment, render the final file, and verify that text, spacing, links, and page count are correct.
   - For Traditional Chinese PDF/Figma output, use a CJK-capable typeface available in the environment and verify glyph rendering, punctuation, line breaking, and mixed Latin/CJK text after rendering.
   - For one-page visual PDF or Figma outputs, reserve an unbroken white gutter on all four sides before placing content. On A4, keep at least 14 mm clear at the top, bottom, left, and right; no text, rules, icons, panels, or other visual elements may enter that safe area. Calibrate page fill only inside the remaining usable area: target a visually balanced 90-96% of usable height and do not leave a large empty lower band.
   - Use only text colors that meet WCAG 2.1 AA contrast requirements against their actual background: at least 4.5:1 for normal text and 3:1 for large text. Do not use a decorative accent for text unless it passes the applicable ratio.
   - Before delivery, render the full PDF or final Figma frame at normal viewing scale and inspect every row, column boundary, footer, and lower band for collisions. Treat any overlapping text, rule, icon, or block as a release blocker. Reflow the content, split the entry, expand its measured height, reduce nonessential sourced copy, or use a second page; never allow text layers to overlap in order to preserve one page.
   - Inspect the rendered full page, especially any footer, lower-band, or right-column block. If content approaches the safe gutter, reflow, shorten, rebalance, or move secondary content to a second page; never solve overflow by bleeding content into the margin or by reducing body text below readable size.
   - For Figma export, use available Figma skills/tools to create or update the file. If no Figma connection is available, provide a Figma-ready content and layout spec instead of pretending a file was created.
   - Read `references/designer-cv-export-workflows.md` for export decisions, layout options, and verification checks.
   - Read `references/designer-cv-template-library.md` and `references/designer-cv-visual-direction.md` before making visual design decisions. Inspect the relevant files in `assets/cv-examples/` when a user requests a particular template or provides visual references.

7. Deliver useful output:
   - For critique: list prioritized issues with specific fixes and example rewrites.
   - For rewriting: provide finished sections, not only advice.
   - For tailoring: map the target job requirements to the user's evidence, then rewrite the relevant summary, bullets, and skills.
   - For visual feedback: comment on hierarchy, readability, spacing, typography, ATS risk, and portfolio visibility.
   - For export: provide the final file or connected design link when available, plus a concise summary of what changed.

## Output Formats

Choose the format that best matches the request:

- **Quick critique**: 5 to 8 prioritized fixes, each with why it matters and how to revise.
- **Rubric critique**: scored or severity-ranked feedback against designer CV rubrics, ready for future custom rubric material.
- **Leadership screening critique**: must-have, strong-positive, concern, and reject-signal feedback for Product Design Manager or Design Lead roles.
- **Rewrite pass**: revised headline, summary, experience bullets, projects, and skills as needed.
- **Job-tailored version**: alignment table, gaps to address, then tailored CV text.
- **Bullet bank**: multiple truthful bullet options grouped by role, project, or competency.
- **Before/after review**: original line, issue, stronger version.
- **PDF export**: enhanced CV delivered as a verified PDF when file tooling is available.
- **Figma export**: enhanced CV delivered as a Figma file/design when Figma tooling is available, or as a Figma-ready spec when not.
- **Visual comparison**: two or three rendered CV directions using the same improved content, followed by a proactive version-selection question.

## Quality Rules

- Preserve truth. If a stronger bullet needs missing evidence, ask for the evidence or mark it as a fill-in placeholder.
- Prefer concrete nouns and verbs: "checkout redesign", "research synthesis", "design system migration", "pricing experiment", "accessibility audit".
- Replace responsibility-only language with scope, method, collaboration, and outcome.
- Treat visual polish as part of the product for designers, but avoid making a decorative CV that harms scanning or ATS parsing.
- For visual outputs, follow Liya's aesthetic standards: white background, black/dark-gray text, one accent color maximum, no more than two typefaces, 2-column or 3-column breathing-room layout, and only tiny personality touches.
- Ensure every text color passes WCAG 2.1 AA contrast against its background: 4.5:1 for normal text and 3:1 for large text. Verify the actual rendered color, including text placed over a tint, image, or transparency.
- Treat text overlap as a hard failure. Give each experience row and each column cell a measured bounding area; when employers, titles, dates, or descriptions do not fit, rewrap or split the entry before export. Never stack independently positioned text in the same space.
- Balance breathing room with page utilization: a one-page A4 or Letter CV should feel intentionally full, not like the content stopped halfway down the page. Reserve a consistent white gutter on all four sides before considering page fill; for A4 use at least 14 mm on every edge, including beneath lower-band content such as Focus or Skills. When content is light, distribute it deliberately through hierarchy, proportionate section spacing, and a well-anchored lower band rather than leaving a large blank lower region or inflating gaps until sections feel disconnected.
- Keep confidential projects anonymized: describe sector, problem, users, scale, and outcome without exposing private names.
- Use region-appropriate terminology. In the US, "resume" is common; in the UK, Europe, and many global markets, "CV" may be normal.
- For Traditional Chinese, use `工作經歷`, `學歷`, `專業技能`, `作品集`, and `證照／獎項` by default. Retain official company, degree, product, and certification names in their original language when that improves accuracy.
- Be candid. Do not flatter weak material; show the user the strongest available version and the evidence still needed.

## Visual Template Selection

For every uploaded-CV visual improvement request, first assess the content density, evidence strength, and priority of each information block. Then prepare at least two distinct versions from the template library. Make the versions visibly different in palette, typographic voice, and information-block composition—not merely rearrangements of the same page. Every layout must place these four blocks intentionally: 1 contact/identity, 2 work experience, 3 education, and 4 supporting information (skills, awards, certificates, languages, or methods). Use a block's amount and importance to determine its size and position; do not force the candidate into a fixed template. Show a compact card for each: Version label, template name, visual style, block composition, why it fits the content, one-sentence personality, best fit, and ATS tradeoff. Put the recommended option first, then proactively ask the user to select a version.

Choose the shortlist from the candidate's content and stated preference:

- **Experienced product or design-system candidate:** Swiss Utility, Quiet Editorial, and Cobalt System.
- **Early-career candidate or candidate with several projects, awards, or community roles:** Structured Rows, Soft Studio, and Swiss Utility.
- **Visual, brand, or interaction designer:** Soft Studio, Quiet Editorial, and Cobalt System.
- **Dense content, recruiter portals, or explicit ATS requirement:** ATS-Safe Linear first, then Swiss Utility and Structured Rows.
- **Minimal, calm, or design-led:** Swiss Utility, Quiet Editorial, and Soft Studio.
- **Bold, technical, or systems-minded:** Cobalt System, Swiss Utility, and Quiet Editorial.
- **No preference stated:** show a visually varied trio: Swiss Utility for most working designers, Soft Studio for early-career candidates, and Quiet Editorial for senior candidates with a sharp positioning line.

Only skip version selection if the user explicitly asks the skill to choose on their behalf or requires an immediate single-version delivery. State the selected template and why.

## Reference Loading

- Read `references/designer-cv-rubric.md` for comprehensive critique, prioritization, seniority assessment, ATS/layout checks, or recruiter-scan evaluation.
- Read `references/product-design-manager-screening-standards.md` when the target role is Product Design Manager, Senior Product Design Manager, Design Lead, Head of Design, design leadership, or when the user asks to apply Liya's screening standards.
- Read `references/designer-cv-rewrite-patterns.md` for rewriting formulas, examples, role-specific keyword groups, and section templates.
- Read `references/designer-cv-export-workflows.md` when the user wants PDF export, Figma export, visual layout, file creation, or file verification.
- Read `references/designer-cv-visual-direction.md` when creating or critiquing a visual CV layout, and update it when the user provides visual examples.
- Read `references/designer-cv-template-library.md` before showing or selecting visual template options.
- Read `references/designer-cv-block-layouts.md` before laying out a visual PDF or Figma CV. Use the block maps as a starting point, then size the blocks to fit the candidate's actual content.
- Read `references/designer-cv-dynamic-layout-rules.md` before selecting or composing a visual PDF or Figma CV. Score each block, select a composition, and make the page's visual hierarchy match the candidate's evidence.
- Read `references/designer-cv-version-comparison.md` whenever an uploaded CV is being improved visually. Create the required Version A and Version B comparison before requesting a final selection.
- Read `references/designer-cv-traditional-chinese.md` for any Traditional Chinese, Mandarin, bilingual, Taiwan, Hong Kong, or CJK-typography CV request.
- Read `references/cv-example-index.md` when the user asks for the provenance of a template or wants a direction matched to a supplied example.
