// app.js — safe on every page

// Pills highlight
document.querySelectorAll(".pill").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".pill").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
  });
});

// Toggle highlight
document.querySelectorAll(".toggle__btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".toggle__btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
  });
});

// Week range label (Mon–Sun)
(() => {
  const el = document.getElementById("weekRange");
  if (!el) return;

  const fmt = (d) => d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
  const now = new Date();
  const day = (now.getDay() + 6) % 7; // Mon=0 ... Sun=6
  const monday = new Date(now);
  monday.setDate(now.getDate() - day);
  monday.setHours(0, 0, 0, 0);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  el.textContent = `${fmt(monday)} – ${fmt(sunday)}`;
})();

// RSVP (privacy-first) — safe + no crashes
(() => {
  const getStore = () => {
    try { return JSON.parse(localStorage.getItem("bmr_rsvp") || "{}"); }
    catch { return {}; }
  };
  const setStore = (obj) => localStorage.setItem("bmr_rsvp", JSON.stringify(obj));

  // Close any open panel when clicking outside
  document.addEventListener("click", () => {
    document.querySelectorAll(".rsvp__panel").forEach((p) => (p.hidden = true));
  });

  document.querySelectorAll(".rsvp").forEach((block) => {
    const id = block.getAttribute("data-event-id");
    const btn = block.querySelector(".rsvp__btn");
    const privacyBtn = block.querySelector(".rsvp__privacy");
    const panel = block.querySelector(".rsvp__panel");
    const showMe = block.querySelector(".rsvp__showme");
    const countStrong = block.querySelector(".rsvp__count strong");

    if (!id || !btn || !countStrong) return;

    const initialCount = parseInt(countStrong.textContent, 10) || 0;
    const store = getStore();
    store[id] = store[id] || { rsvp: false, show: false, count: initialCount };
    setStore(store);

    // hydrate
    if (store[id].rsvp) {
      btn.classList.add("is-on");
      btn.textContent = "RSVP'd";
    }
    if (showMe) showMe.checked = !!store[id].show;

    // RSVP click
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const s = getStore();
      s[id] = s[id] || { rsvp: false, show: false, count: initialCount };

      if (s[id].rsvp) {
        s[id].rsvp = false;
        s[id].show = false;
        s[id].count = Math.max(0, (s[id].count || 0) - 1);
        btn.classList.remove("is-on");
        btn.textContent = "RSVP";
        if (showMe) showMe.checked = false;
      } else {
        s[id].rsvp = true;
        s[id].count = (s[id].count || 0) + 1;
        btn.classList.add("is-on");
        btn.textContent = "RSVP'd";
      }

      countStrong.textContent = s[id].count;
      setStore(s);
    });

    // Privacy dropdown
    if (privacyBtn && panel) {
      privacyBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        panel.hidden = !panel.hidden;
      });

      panel.addEventListener("click", (e) => e.stopPropagation());
    }

    // Show-me toggle
    if (showMe) {
      showMe.addEventListener("change", (e) => {
        e.stopPropagation();
        const s = getStore();
        s[id] = s[id] || { rsvp: false, show: false, count: initialCount };

        if (!s[id].rsvp) {
          showMe.checked = false;
          s[id].show = false;
          setStore(s);
          return;
        }

        s[id].show = showMe.checked;
        setStore(s);
      });
    }
  });
})();
