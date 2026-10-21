import { logOut } from "/js/auth.js";

const LINKS = [
    ["/portal/teacher.html", "Home"],
    ["/portal/teacher-courses.html", "My Courses"],
    ["/portal/teacher-games.html", "My Games"],
    ["/portal/teacher-students.html", "My Students"],
    ["/portal/teacher-profile.html", "Profile"]
];

const esc = (s = "") =>
    String(s).replace(/[&<>"']/g, (ch) => (
        { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]
    ));

/* Call after requireRole(). `active` can be a label like "My Courses";
   if omitted, the link matching the current page is highlighted. */
export function mountPortal({ profile, active } = {}) {
    const path = location.pathname.toLowerCase();
    const links = LINKS.map(([href, label]) => {
        const on = active ? active === label : path === href;
        return `<a${on ? ' class="active"' : ""} href="${href}">${label}</a>`;
    }).join("");

    const html = `
    <header class="nav">
      <div class="container nav-inner">
        <a class="brand" href="/index.html" aria-label="Temo-Learn home">
          <img class="brand-logo" src="/images/logo-mark.png" alt="" onerror="this.remove()">
          <span class="brand-name">Temo-Learn</span>
        </a>
        <button class="nav-toggle" id="navToggle" aria-label="Menu" aria-expanded="false">☰</button>
        <nav class="nav-links" id="navLinks">
          ${links}
          <div class="nav-auth">
            <span class="who">${esc(profile?.fullName || "")}</span>
            <button class="btn btn-ghost btn-sm" id="portalOut" type="button">Logout</button>
          </div>
        </nav>
      </div>
    </header>`;

    const slot = document.getElementById("portal-header");
    if (slot) {
        const tpl = document.createElement("template");
        tpl.innerHTML = html.trim();
        slot.replaceWith(tpl.content);
    }

    const toggle = document.getElementById("navToggle");
    const nav = document.getElementById("navLinks");
    toggle?.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
    });

    document.getElementById("portalOut")?.addEventListener("click", async () => {
        await logOut();
        location.href = "/index.html";
    });
}