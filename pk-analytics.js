/* Pickly — privacy-safe GA4 custom events. No personal data collected.
   Fires: tool_used, result_copied, share_clicked, related_click.
   Uses event delegation so it works on every tool page without per-page wiring. */
(function () {
  if (typeof window === "undefined") return;
  function ev(name, params) {
    try { if (typeof window.gtag === "function") window.gtag("event", name, params || {}); } catch (e) {}
  }
  var page = location.pathname;
  var usedFired = false;
  document.addEventListener("click", function (e) {
    var el = e.target && e.target.closest ? e.target.closest("a,button") : null;
    if (!el) return;
    var chrome = el.closest(".topbar,nav,footer,.back,.foot-col");
    // Related-tool navigation (explore/related links to other tools)
    if (el.tagName === "A") {
      var href = el.getAttribute("href") || "";
      if (/^\/[a-z0-9]+\/$/.test(href) && !chrome) ev("related_click", { page: page, to: href });
      return;
    }
    var txt = (el.textContent || "").toLowerCase();
    var cls = (el.className && el.className.toString ? el.className.toString().toLowerCase() : "");
    if (/copy/.test(txt) || /copy/.test(cls)) ev("result_copied", { page: page });
    else if (/share/.test(txt) || /share/.test(cls)) ev("share_clicked", { page: page });
    if (!usedFired && !chrome) { usedFired = true; ev("tool_used", { page: page }); }
  }, true);
})();
