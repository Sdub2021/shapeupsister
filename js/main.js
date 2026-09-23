const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
}

document.querySelectorAll("[data-filter]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const key = btn.dataset.filter;
    document.querySelectorAll("[data-ep]").forEach((row) => {
      row.style.display = key === "all" || row.dataset.ep.includes(key) ? "" : "none";
    });
  });
});

const playBtn = document.getElementById("play-btn");
if (playBtn) {
  let on = false;
  playBtn.addEventListener("click", () => {
    on = !on;
    playBtn.textContent = on ? "▮▮" : "▶";
    const note = document.getElementById("player-note");
    if (note) note.textContent = on
      ? "Demo player — connect your RSS or embed when the show is live."
      : "Press play for the latest episode.";
  });
}

document.querySelectorAll("form[data-toast]").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let note = form.querySelector(".form-note");
    if (!note) {
      note = document.createElement("p");
      note.className = "note form-note";
      form.appendChild(note);
    }
    note.textContent = "Got it. On a live site this would send to your email list or inbox. Nothing is stored on this demo.";
  });
});
