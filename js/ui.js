
export function openModal(innerHTML, { wide = false } = {}) {
    const wrap = document.createElement("div");
    wrap.className = "modal-backdrop";
    wrap.innerHTML = `
    <div class="modal panel${wide ? " wide" : ""}" role="dialog" aria-modal="true">
      <button class="modal-close" data-x type="button" aria-label="Close">✕</button>
      ${innerHTML}
    </div>`;
    document.body.appendChild(wrap);

    const onKey = (e) => { if (e.key === "Escape") close(); };
    const close = () => { wrap.remove(); document.removeEventListener("keydown", onKey); };
    document.addEventListener("keydown", onKey);
    wrap.addEventListener("click", (e) => {
        if (e.target === wrap || e.target.closest("[data-x]")) close();
    });
    return { el: wrap, close, $: (sel) => wrap.querySelector(sel) };
}

export function toast(message, isError = false) {
    const el = document.createElement("div");
    el.className = "toast" + (isError ? " error" : "");
    el.textContent = message;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3200);
}