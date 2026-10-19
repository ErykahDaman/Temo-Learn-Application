/* Loads teacher-published courses from Firestore.
   Never throws and never waits forever: on any problem it returns []. */
export async function fetchLiveCourses(timeoutMs = 4000) {
  try {
    const { listPublishedCourses } = await import("./courses.js");
    const live = await Promise.race([
      listPublishedCourses(),
      new Promise((_, reject) => setTimeout(() => reject(new Error("timed out")), timeoutMs))
    ]);
    return live.map((c) => ({
      id: c.id,
      title: c.title || "Untitled course",
      summary: c.teaser || c.summary || "",
      description: c.summary || c.teaser || "",
      category: c.category || "General",
      icon: c.icon || "📜",
      thumbnail: c.thumbnail || "",
      level: c.level || "",
      hours: c.hours || ""
    }));
  } catch (err) {
    console.warn("Live courses unavailable, showing the built-in syllabus.", err);
    return [];
  }
}