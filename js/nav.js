import { auth, onAuthStateChanged } from "./firebase.js";
import { getProfile, homeFor, logOut } from "./auth.js";

export let session = { user: null, profile: null };
const listeners = [];
export function onSession(cb) { listeners.push(cb); cb(session); }

// Mobile menu
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
toggle?.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

// Footer year
const yr = document.getElementById("year");
if (yr) yr.textContent = new Date().getFullYear();

// Use images/logo.png if it exists
const probe = new Image();
probe.onload = () =>
  document.querySelectorAll(".brand-mark").forEach((el) => el.classList.add("has-logo"));
probe.src = "images/logo.png";

function renderAuth() {
  const slot = document.getElementById("nav-auth");
  const { user, profile } = session;
  if (slot) {
    if (user && profile) {
      slot.innerHTML = `
        <a class="btn btn-gold btn-sm" href="${homeFor(profile.role)}">My Quest Log</a>
        <button class="btn btn-ghost btn-sm" id="navOut" type="button">Log out</button>`;
      document.getElementById("navOut").onclick = async () => {
        await logOut();
        location.href = "index.html";
      };
    } else {
      slot.innerHTML = `
        <a class="btn btn-ghost btn-sm" href="login.html">Log in</a>
        <a class="btn btn-gold btn-sm" href="signup.html">Sign up</a>`;
    }
  }
  document.body.classList.toggle("is-auth", !!user);
}

renderAuth(); // guest buttons straight away

onAuthStateChanged(auth, async (user) => {
  let profile = null;
  try { profile = user ? await getProfile(user.uid) : null; }
  catch (err) { console.warn(err); }
  session = { user, profile };
  renderAuth();
  listeners.forEach((cb) => cb(session));
});