/* ======================================================
   Team Social Links Controller
   BBU Gen25 – Team 208

   Populates the .social-group containers on github.html.

   TO ADD A LINK: fill in the matching field below with the full profile URL.
   Leave a field out (or set it to "") and no button is rendered for it — the
   page never shows a dead link. Members with no links at all get a short
   "Profiles coming soon" note instead.
   ====================================================== */

const teamSocials = {
  pich: {
    github: "https://github.com/pichchanthorn",
    linkedin: "https://www.linkedin.com/in/pichchanthorn/",
    instagram: "https://www.instagram.com/chanthorn_pich/",
  },
  mao: {
    github: "https://github.com/maovibol41-glitch",
    // TODO: add Mao Vibol's linkedin / instagram when provided
  },
  san: {
    // TODO: add San Kimhor's github / linkedin / instagram when provided
  },
  khy: {
    github: "https://github.com/Samrith-Khy",
    // TODO: add Khy Samrith's linkedin / instagram when provided
  },
  ratana: {
    github: "https://github.com/Ratana-Oudom",
    // TODO: add Ratana Oudom's linkedin / instagram when provided
  },
}

// Inline SVG paths so the page has no icon-font dependency.
const socialIcons = {
  github: {
    label: "GitHub",
    path: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
  },
  linkedin: {
    label: "LinkedIn",
    path:
      '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>' +
      '<rect x="2" y="9" width="4" height="12"></rect>' +
      '<circle cx="4" cy="4" r="2"></circle>',
  },
  instagram: {
    label: "Instagram",
    path:
      '<rect x="2" y="2" width="20" height="20" rx="5"></rect>' +
      '<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>' +
      '<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
  },
}

/**
 * Build the buttons for one member, skipping any platform without a real URL.
 */
function createSocialButtons(social, memberName) {
  const links = Object.keys(socialIcons)
    .filter((platform) => {
      const url = social[platform]
      // "#" was the old placeholder value — treat it as "no link".
      return typeof url === "string" && url.trim() !== "" && url.trim() !== "#"
    })
    .map((platform) => {
      const { label, path } = socialIcons[platform]
      const title = `${memberName} on ${label}`
      return `
        <a href="${social[platform]}" target="_blank" rel="noopener noreferrer"
           class="social-btn" aria-label="${title}" title="${title}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>
        </a>`
    })

  if (!links.length) {
    return '<p class="social-empty">Profiles coming soon</p>'
  }

  return links.join("")
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".social-group[data-member]").forEach((container) => {
    const social = teamSocials[container.dataset.member]
    if (!social) return

    const card = container.closest(".social-card")
    const nameEl = card ? card.querySelector(".social-name") : null
    const memberName = nameEl ? nameEl.textContent.trim() : "This member"

    container.innerHTML = createSocialButtons(social, memberName)
  })
})
