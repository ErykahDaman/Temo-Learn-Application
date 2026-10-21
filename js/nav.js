import { auth, onAuthStateChanged } from "./firebase.js";
import { getProfile, homeFor, logOut } from "./auth.js";

export let session = { user: null, profile: null };
const listeners = [];
export function onSession(cb) { listeners.push(cb); cb(session); }

function renderAuth() {
  const slot = document.getElementById("nav-auth");
  const { user, profile } = session;
  if (slot) {
    if (user && profile) {
      slot.innerHTML = `
        <a class="btn btn-gold btn-sm" href="${homeFor(profile.role)}">My Quest Log</a>
        <button class="btn btn-ghost btn-sm" id="navOut" type="button">Logout</button>`;
      document.getElementById("navOut").onclick = async () => {
        await logOut();
        location.href = "index.html";
      };
    } else {
      slot.innerHTML = `
        <a class="btn btn-gold btn-sm" href="signup.html">Sign Up</a>
        <a class="btn btn-ghost btn-sm" href="login.html">Login</a>`;
    }
  }
  document.body.classList.toggle("is-auth", !!user);
}

onAuthStateChanged(auth, async (user) => {
  let profile = null;
  try { profile = user ? await getProfile(user.uid) : null; }
  catch (err) { console.warn(err); }
  session = { user, profile };
  renderAuth();
  listeners.forEach((cb) => cb(session));
});