/* site.js — tiny progressive-enhancement helpers (no framework, no build).
   Currently: copy-to-clipboard for BibTeX citations.

   Markup contract (see publications.html):
     <button data-cite="cite-xyz">BibTeX</button>
     <script type="application/x-bibtex" id="cite-xyz">@article{...}</script>
   The <script type="application/x-bibtex"> is not executed by the browser;
   it is just an inert, un-rendered store for the citation text. */

(function () {
  "use strict";

  document.addEventListener("click", function (event) {
    var btn = event.target.closest("[data-cite]");
    if (!btn) return;

    var source = document.getElementById(btn.getAttribute("data-cite"));
    if (!source) return;

    var text = source.textContent.trim();

    copyText(text).then(
      function () { showToast("BibTeX citation copied to your clipboard"); },
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
