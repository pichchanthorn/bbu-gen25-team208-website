/* ======================================================
   Team Social Links Controller
   BBU Gen25 – Team 208
   ====================================================== */

/**
 * Default social links
 * (Used as placeholder for all members)
 * Replace later when members send their own links
 */

const pichSocial = {
  github: "https://github.com/pichchanthorn",
  linkedin: "https://www.linkedin.com/in/pichchanthorn/",
  instagram: "https://www.instagram.com/chanthorn_pich/"
};

const maoSocial = {
    github: "https://github.com/maovibol41-glitch",
    linkedin: "#",
    instagram: "#"
};
const sanSocial = {
    github: "#",
    linkedin: "#",
    instagram: "#"
};

const khySocial = {
    github: "https://github.com/Samrith-Khy",
    linkedin: "#",
    instagram: "#"
};

const ratanaSocial = {
    github: "https://github.com/Ratana-Oudom",
    linkedin: "#",
    instagram: "#"
};

/**
 * Team members configuration
 * id MUST match data-member in HTML
 */

const teamMembers = [
  { id: "pich", social: pichSocial },
  { id: "mao", social:  maoSocial },
  { id: "san", social: sanSocial },
  { id: "khy", social: khySocial },
  { id: "ratana", social: ratanaSocial }
];

/**
 * Create social buttons HTML
 */
function createSocialButtons(social) {
  return `
    <a href="${social.github}" target="_blank" class="social-btn">
      <i class="fab fa-github"></i>
    </a>
    <a href="${social.linkedin}" target="_blank" class="social-btn">
      <i class="fab fa-linkedin-in"></i>
    </a>
    <a href="${social.instagram}" target="_blank" class="social-btn">
      <i class="fab fa-instagram"></i>
    </a>
  `;
}

/**
 * Inject social links into each member card
 */
document.addEventListener("DOMContentLoaded", () => {
  teamMembers.forEach(member => {
    const container = document.querySelector(
      `.social-group[data-member="${member.id}"]`
    );

    if (container) {
      container.innerHTML = createSocialButtons(member.social);
    }
  });
});
