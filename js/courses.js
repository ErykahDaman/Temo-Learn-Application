import {
  db, collection, addDoc, getDocs, getDoc, setDoc, updateDoc, deleteDoc,
  doc, query, where, serverTimestamp, arrayUnion
} from "./firebase.js";

/* ---------- Public: guests can use these (teaser info only) ---------- */
export async function listPublishedCourses() {
  const q = query(collection(db, "courses"), where("status", "==", "published"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function getCourse(courseId) {
  const snap = await getDoc(doc(db, "courses", courseId));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

/* ---------- Logged-in: full content ---------- */
export async function listModules(courseId) {
  const snap = await getDocs(collection(db, "courses", courseId, "modules"));
  return snap.docs
    .map(d => ({ id: d.id, ...d.data() }))
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

/* ---------- Teacher / admin ---------- */
export async function createCourse(user, { title, summary, teaser, category, thumbnail }) {
  const ref = await addDoc(collection(db, "courses"), {
    title, summary, teaser, category,
    thumbnail: thumbnail || "",
    status: "draft",
    authorId: user.uid,
    authorName: user.displayName || "",
    createdAt: serverTimestamp()
  });
  return ref.id;
}

export async function listMyCourses(user) {
  const q = query(collection(db, "courses"), where("authorId", "==", user.uid));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// module = { id?, title, order, content, quiz: [{ question, options: [], answerIndex }] }
export async function saveModule(courseId, module) {
  const { id, ...data } = module;
  if (id) {
    await setDoc(doc(db, "courses", courseId, "modules", id), data, { merge: true });
    return id;
  }
  const ref = await addDoc(collection(db, "courses", courseId, "modules"), data);
  return ref.id;
}

export const deleteModule = (courseId, moduleId) =>
  deleteDoc(doc(db, "courses", courseId, "modules", moduleId));

export const setCourseStatus = (courseId, status) =>   // "draft" | "published"
  updateDoc(doc(db, "courses", courseId), { status });

/* ---------- Student progress ---------- */
export async function enroll(user, courseId) {
  const ref = doc(db, "enrollments", `${user.uid}_${courseId}`);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      uid: user.uid, courseId,
      completedModules: [], completed: false,
      startedAt: serverTimestamp()
    });
  }
}

export async function completeModule(user, courseId, moduleId, totalModules) {
  const ref = doc(db, "enrollments", `${user.uid}_${courseId}`);
  await updateDoc(ref, { completedModules: arrayUnion(moduleId) });
  const snap = await getDoc(ref);
  if (snap.data().completedModules.length >= totalModules) {
    await updateDoc(ref, { completed: true });
  }
}

export async function getMyEnrollments(user) {
  const q = query(collection(db, "enrollments"), where("uid", "==", user.uid));
  const snap = await getDocs(q);
  return snap.docs.map(d => d.data());
}