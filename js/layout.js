/* Shared header + footer for every public page.
   To rename the app or change the menu, edit this one file. */
const SITE = {
  name: "Temo-Learn",
  blurb: "Sustainable farming for Botswana, learned by playing."
};
const LINKS = [
  ["index.html", "Home"],
  ["courses.html", "Courses"],
  ["about.html", "About Us"],
  ["contact.html", "Contact Us"]
];
const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();

const navLinks = LINKS
    .map(([file, label]) => `<a${here === file ? ' class="active"' : ""} href="${file}">${label}</a>`)
    .join("");
const footLinks = LINKS.map(([file, label]) => `<a href="${file}">${label}</a>`).join("");

const headerHTML = `
  <header class="nav">
    <div class="container nav-inner">
      <a class="brand" href="index.html" aria-label="${SITE.name} home">
        <img class="brand-logo" src="images/logo-mark.png" alt="" onerror="this.remove()">
        <span class="brand-name">${SITE.name}</span>
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="Menu" aria-expanded="false">☰</button>
      <nav class="nav-links" id="navLinks">
        ${navLinks}
        <div class="nav-auth" id="nav-auth">
          <a class="btn btn-gold btn-sm" href="signup.html">Sign Up</a>
          <a class="btn btn-ghost btn-sm" href="login.html">Login</a>
        </div>
      </nav>
    </div>
  </header>`;

const footerHTML = `
  <footer class="footer">
    <div class="container footer-inner">
      <div>
        <strong>${SITE.name}</strong>
        <p>${SITE.blurb}</p>
      </div>
      <nav class="footer-links">${footLinks}<a href="signup.html">Sign Up</a><a href="login.html">Login</a></nav>
    </div>
    <p class="footer-note">© ${new Date().getFullYear()} ${SITE.name} · Learn · Grow · Thrive</p>
  </footer>`;

function mount(id, html) {
  const slot = document.getElementById(id);
  if (!slot) {
    console.warn(`layout.js: no element with id="${id}" on this page.`);
    return;
  }
  const tpl = document.createElement("template");
  tpl.innerHTML = html.trim();
  slot.replaceWith(tpl.content);
}
mount("site-header", headerHTML);
mount("site-footer", footerHTML);

// Mobile menu
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
toggle?.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

// Browser tab icon
const icon = document.createElement("link");
icon.rel = "icon";
icon.href = "images/favicon.png";
document.head.appendChild(icon);