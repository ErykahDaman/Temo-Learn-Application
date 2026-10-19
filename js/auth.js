import {
  auth, db, onAuthStateChanged, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut, updateProfile,
  doc, getDoc, setDoc, serverTimestamp
} from "./firebase.js";

export function homeFor(role) {
  return {
    admin: "/portal/admin.html",
    teacher: "/portal/teacher.html",
    student: "/portal/student.html"
  }[role] || "/portal/student.html";
}

export async function getProfile(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
}

export async function signUp(fullName, email, password) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(cred.user, { displayName: fullName });
  const profile = {
    fullName, email,
    role: "student",
    badges: [],
    language: "en",
    theme: "dark",
    photo: "",
    createdAt: serverTimestamp()
  };
  await setDoc(doc(db, "users", cred.user.uid), profile);
  return profile;
}

export async function logIn(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return getProfile(cred.user.uid);
}

export const logOut = () => signOut(auth);

// Put this at the top of any protected page
export function requireRole(allowed) {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) { location.href = "/login.html"; return; }
      const profile = await getProfile(user.uid);
      if (!profile || !allowed.includes(profile.role)) {
        location.href = profile ? homeFor(profile.role) : "/login.html";
        return;
      }
      resolve({ user, profile });
    });
  });
}

export function friendlyError(err) {
  const map = {
    "auth/invalid-credential": "Wrong email or password.",
    "auth/email-already-in-use": "That email already has an account.",
    "auth/weak-password": "Password must be at least 6 characters.",
    "auth/invalid-email": "That email doesn't look right.",
    "auth/too-many-requests": "Too many tries. Wait a bit and try again."
  };
  return map[err.code] || err.message;
}