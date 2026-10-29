(function () {
  var toggle = document.getElementById("mob-toggle");
  var drawer = document.getElementById("mob-drawer");
  var overlay = document.getElementById("mob-overlay");
  var closeBtn = document.getElementById("drawer-close");
  if (!toggle || !drawer || !overlay) { return; }
  function openMenu() {
    drawer.removeAttribute("hidden");
    overlay.classList.add("visible");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close navigation menu");
    document.documentElement.style.overflow = "hidden";
  }
  function closeMenu() {
    drawer.setAttribute("hidden", "");
    overlay.classList.remove("visible");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
    document.documentElement.style.overflow = "";
  }
  toggle.addEventListener("click", function () {
    if (toggle.getAttribute("aria-expanded") === "true") { closeMenu(); } else { openMenu(); }
  });
  if (closeBtn) { closeBtn.addEventListener("click", closeMenu); }
  overlay.addEventListener("click", closeMenu);
  var links = drawer.querySelectorAll("a");
  for (var i = 0; i < links.length; i++) { links[i].addEventListener("click", closeMenu); }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeMenu(); } });
  var mq = window.matchMedia("(min-width: 769px)");
  function onChange(e) { if (e.matches) { closeMenu(); } }
  if (mq.addEventListener) { mq.addEventListener("change", onChange); }
})();
