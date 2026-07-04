/* site.js — tiny progressive-enhancement helpers (no framework, no build).
   Handles: (1) the dark/light theme toggle, (2) generic copy-to-clipboard
   buttons (BibTeX, citation strings, …), (3) a click-to-enlarge lightbox for
   figure images.

   Theme note: the *initial* theme is applied by an inline script in head.html
   (it must run before first paint). Here we only handle the click that flips it
   and remember the choice in localStorage.

   Copy-to-clipboard markup contract (see publications.html):
     <button data-copy="some-id" data-copy-msg="Toast text">Label</button>
     <script type="text/plain" id="some-id">the text to copy</script>
   The <script type="..."> (any non-executable type, e.g. text/plain or
   application/x-bibtex) is never run by the browser — it's just an inert,
   un-rendered store for the text. One handler serves any number of these
   buttons (BibTeX, a formatted citation, etc.), each with its own toast
   message via data-copy-msg. */

(function () {
  "use strict";

  // --- Dark / light theme toggle -------------------------------------------
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".theme-toggle")) return;
    var root = document.documentElement;
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // --- Generic "copy this text" buttons ------------------------------------
  document.addEventListener("click", function (event) {
    var btn = event.target.closest("[data-copy]");
    if (!btn) return;

    var source = document.getElementById(btn.getAttribute("data-copy"));
    if (!source) return;

    var text = source.textContent.trim();
    var message = btn.getAttribute("data-copy-msg") || "Copied to your clipboard";

    copyText(text).then(
      function () { showToast(message); },
      function () { showToast("Couldn't copy automatically — select the text manually"); }
    );
  });

  // Prefer the async Clipboard API; fall back to a hidden textarea + execCommand
  // for older browsers / non-secure contexts.
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy") ? resolve() : reject();
      } catch (e) {
        reject(e);
      } finally {
        document.body.removeChild(ta);
      }
    });
  }

  // --- Image lightbox (figure.html images only) ----------------------------
  // One shared overlay <div class="lightbox"><img></div>, created on first
  // use and reused for whichever figure was clicked. Closes on click-anywhere
  // (backdrop or the image itself) or Escape.
  var lightbox, lightboxImg;

  function ensureLightbox() {
    if (lightbox) return;
    lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightboxImg = document.createElement("img");
    lightbox.appendChild(lightboxImg);
    document.body.appendChild(lightbox);
    lightbox.addEventListener("click", closeLightbox);
  }

  function openLightbox(img) {
    ensureLightbox();
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt || "";
    lightbox.classList.add("lightbox--open");
    document.addEventListener("keydown", onLightboxKeydown);
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("lightbox--open");
    document.removeEventListener("keydown", onLightboxKeydown);
  }

  function onLightboxKeydown(event) {
    if (event.key === "Escape") closeLightbox();
  }

  document.addEventListener("click", function (event) {
    var img = event.target.closest("figure.figure img");
    if (!img) return;
    openLightbox(img);
  });

  // Small transient toast, created once and reused.
  var toast, timer;
  function showToast(message) {
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    // Force reflow so re-adding the class re-triggers the transition.
    void toast.offsetWidth;
    toast.classList.add("toast--show");
    clearTimeout(timer);
    timer = setTimeout(function () { toast.classList.remove("toast--show"); }, 2400);
  }
})();
