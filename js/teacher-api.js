import {
    db, collection, addDoc, getDocs, getDoc, setDoc, updateDoc, deleteDoc,
    doc, serverTimestamp
} from "./firebase.js";

const byOrder = (a, b) => (a.order ?? 0) - (b.order ?? 0);
const modulesCol = (courseId) => collection(db, "courses", courseId, "modules");
const itemsCol = (courseId, moduleId) => collection(db, "courses", courseId, "modules", moduleId, "items");
const moduleRef = (courseId, moduleId) => doc(db, "courses", courseId, "modules", moduleId);
const itemRef = (courseId, moduleId, itemId) => doc(db, "courses", courseId, "modules", moduleId, "items", itemId);

/* ---------- Courses ---------- */
export async function createCourseDoc(user, data) {
    const ref = await addDoc(collection(db, "courses"), {
        title: data.title,
        summary: data.summary || "",
        teaser: data.summary || "",
        description: data.description || "",
        category: data.category || "Growing Systems",
        icon: data.icon || "📜",
        level: data.level || "",
        hours: data.hours || "",
        output: data.output || "",
        game: data.game || "",
        thumbnail: data.thumbnail || "",
        status: "draft",
        authorId: user.uid,
        authorName: user.displayName || "",
        createdAt: serverTimestamp()
    });
    return ref.id;
}

export async function getCourseDoc(id) {
    const snap = await getDoc(doc(db, "courses", id));
    return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function updateCourseDoc(id, data) {
    const patch = { ...data };
    if ("summary" in patch) patch.teaser = patch.summary;
    await updateDoc(doc(db, "courses", id), patch);
}

/* ---------- Sections (modules) + activities (items) ---------- */
export async function loadOutline(courseId) {
    const snap = await getDocs(modulesCol(courseId));
    const mods = snap.docs.map((d) => ({ id: d.id, ...d.data() })).sort(byOrder);
    await Promise.all(mods.map(async (m) => {
        const s = await getDocs(itemsCol(courseId, m.id));
        m.items = s.docs.map((d) => ({ id: d.id, ...d.data() })).sort(byOrder);
    }));
    return mods;
}

export async function addModule(courseId, title, order) {
    const ref = await addDoc(modulesCol(courseId), { title, order, locked: false, createdAt: serverTimestamp() });
    return ref.id;
}
export const updateModule = (courseId, moduleId, data) => updateDoc(moduleRef(courseId, moduleId), data);

export async function addItem(courseId, moduleId, data) {
    const ref = await addDoc(itemsCol(courseId, moduleId), { ...data, createdAt: serverTimestamp() });
    return ref.id;
}
export const replaceItem = (courseId, moduleId, itemId, data) => setDoc(itemRef(courseId, moduleId, itemId), data);
export const updateItem = (courseId, moduleId, itemId, data) => updateDoc(itemRef(courseId, moduleId, itemId), data);
export const removeItem = (courseId, moduleId, itemId) => deleteDoc(itemRef(courseId, moduleId, itemId));

export async function removeModule(courseId, moduleId) {
    const items = await getDocs(itemsCol(courseId, moduleId));
    await Promise.all(items.docs.map((d) => deleteDoc(d.ref)));
    await deleteDoc(moduleRef(courseId, moduleId));
}

export async function removeCourse(courseId) {
    const mods = await getDocs(modulesCol(courseId));
    for (const m of mods.docs) await removeModule(courseId, m.id);
    await deleteDoc(doc(db, "courses", courseId));   // course last, so the rules can still check it
}

/* ---------- Start from the built-in syllabus ---------- */
export async function createFromSyllabus(user, s) {
    const courseId = await createCourseDoc(user, {
        title: s.title, summary: s.summary, description: s.description, category: s.category,
        icon: s.icon, level: s.level, hours: s.hours, output: s.output, game: s.game
    });
    for (let i = 0; i < s.modules.length; i++) {
        const m = s.modules[i];
        const moduleId = await addModule(courseId, m.title, i);
        await addItem(courseId, moduleId, {
            type: "page",
            title: `${m.title}: overview`,
            order: 0,
            required: true,
            content: "What you'll cover in this module:\n\n" + m.points.map((p) => `- ${p}`).join("\n")
        });
    }
    return courseId;
}