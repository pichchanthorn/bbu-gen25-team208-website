
# BBU Gen25 — Team 208 | Web Programming Website

## Project Snapshot

![Homepage Preview](assets/images/screenshots/home_preview.webp)

**Live site:** <https://team208.pichchanthorn.me>

This repository contains the academic group website developed by **Build Bright University (BBU), Generation 25, Team 208** for the **Web Programming** course.

The project demonstrates collaborative front-end development through a structured, multi-page static website that combines semantic HTML, modern CSS architecture, and JavaScript interactivity.

## Academic Context

- **Course:** Web Programming
- **Institution:** Build Bright University (BBU)
- **Generation:** 25
- **Team:** 208
- **Project Type:** Academic Group Assignment
- **Website Type:** Static Multi-Page Website
- **Development Scope:** Front-End Only (no backend, no database, no admin panel)

## Key Features

- Multi-page portfolio website for team presentation and project showcasing
- Responsive interface across desktop, tablet, and mobile breakpoints
- Modern UI with reusable design system and modular CSS structure
- Theme-aware styling and polished interaction patterns
- Team profile section with role-focused presentation
- Contact page with client-side validation and real email delivery via Formspree
- Optimised WebP imagery, favicon, and Open Graph tags for social link previews

## Setup — Contact Form

The contact form validates in the browser and then POSTs to [Formspree](https://formspree.io).
It ships **unconfigured**: until the step below is done, submitting shows a notice pointing at
the team's email address instead of silently pretending the message was sent.

1. Sign up at <https://formspree.io> using `pich_chanthorn@pp.bbu.edu.kh`.
2. Create a new form. Formspree issues an endpoint like `https://formspree.io/f/abcdwxyz`.
3. In `contact.html`, replace the placeholder in `data-formspree-id="YOUR_FORMSPREE_ID"`
   with just the ID (`abcdwxyz`).
4. Submit the live form once and confirm via the email Formspree sends, or messages are held.

No other file needs changing — `js/script.js` reads the ID from that one attribute.

## Live Demo

- **Team Website:** [https://team208.pichchanthorn.me](https://team208.pichchanthorn.me)
- **Hosting:** GitHub Pages, served over the custom domain configured in `CNAME`

## Website Pages

- `index.html` — Home page (overview and introduction)
- `about.html` — Team background and academic context
- `team.html` — Team member profiles and roles
- `projects.html` — Individual and team project showcase
- `contact.html` — Contact information and inquiry form
- `github.html` — Repository and member social profiles

## Featured Projects

### 1) Personal Portfolio Website

- **Owner:** Pich Chanthorn
- **Role:** Frontend Developer / Team Lead
- **Impact Summary:** Built a clean, responsive portfolio interface to present profile, technical skills, projects, and experience in a professional format.
- **Technologies:** HTML, CSS, JavaScript
- **Live Demo:** [https://pichchanthorn.me](https://pichchanthorn.me)
- **Repository:** [https://github.com/pichchanthorn/pich-chanthorn-portfolio](https://github.com/pichchanthorn/pich-chanthorn-portfolio)

### 2) Educational Platform Landing Page

- **Owner:** Pich Chanthorn
- **Role:** Frontend Developer
- **Impact Summary:** Delivered a conversion-oriented landing page with structured content sections, responsive layout, and clear call-to-action flow.
- **Technologies:** HTML, CSS, Bootstrap, JavaScript

> Each showcased project includes ownership and role attribution to clearly represent individual contribution within the group assignment.

## Contribution Breakdown

| No. | Member | Role | Primary Contribution Scope |
| --- | --- | --- | --- |
| 1 | **Pich Chanthorn** | Frontend Developer / Team Lead | Architecture decisions, core UI implementation, project integration |
| 2 | Mao Vibol | UI/UX Designer | Layout planning, visual consistency, user experience refinement |
| 3 | San Kimhor | JavaScript Developer | Interactive behaviors, scripting logic, dynamic UI features |
| 4 | Khy Samrith | Frontend Developer | Page implementation, responsive styling, component-level support |
| 5 | Ratana Oudom | Content & Testing | Content preparation, proofreading, quality checks and validation |

## Technologies & Tools

- **HTML5** — Semantic page structure
- **CSS3** — Styling, layout, and responsive design
- **JavaScript (Vanilla)** — Interactivity and front-end logic
- **Bootstrap** — Responsive component and layout utilities
- **Tailwind CSS** — Utility-first styling (used in `github.html`)
- **Git & GitHub** — Version control and project collaboration

## Folder Structure

```text
BBU-GEN25-TEAM-208/
├── .vscode/
├── assets/
│   └── images/
│       ├── projects/
│       ├── screenshots/
│       └── team/
├── css/
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   ├── pages.css
│   └── style.css
├── js/
│   ├── script.js
│   ├── snow.js
│   └── github.js
├── index.html
├── about.html
├── team.html
├── projects.html
├── contact.html
├── github.html
└── README.md
```

## Project Objectives

- Apply theoretical and practical knowledge from the Web Programming course
- Practice scalable front-end structure and maintainable code organization
- Strengthen teamwork through role-based contribution and delivery
- Produce an academic portfolio artifact suitable for GitHub presentation

## License

This project is developed **for educational purposes only** as part of the Web Programming course at **Build Bright University**.

 