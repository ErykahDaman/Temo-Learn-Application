export function mergeCourses(live = []) {
  const norm = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const starters = new Map(COURSES.map((c) => [norm(c.title), c]));
  const merged = live.map((c) => {
    const s = starters.get(norm(c.title));
    if (!s) return c;
    return {
      ...c,
      number: s.number,
      modules: c.modules || s.modules,
      level: c.level || s.level,
      hours: c.hours || s.hours,
      output: c.output || s.output,
      game: c.game || s.game,
      description: c.description || s.description
    };
  });
  const taken = new Set(live.map((c) => norm(c.title)));
  return [...merged, ...COURSES.filter((c) => !taken.has(norm(c.title)))];
}