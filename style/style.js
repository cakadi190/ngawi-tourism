/**
 * Reusable Function - Do not remove it! Because this function will be used as a 
 * reusable function until the next block comment.
 * 
 * @param {Element | null} el the target element wanna get the offset
 * @returns {Array.<{ left: number; right: number; bottom: number; top: number }>}
 */
function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    right: rect.right + window.scrollX,
    bottom: rect.bottom + window.scrollX,
    top: rect.top + window.scrollY,
  };
}

/**
 * Scrolling action to target element or section
 * 
 * @param {string} target 
 * @returns {void}
 */
function scrollToTarget(target) {
  const element = document.querySelector(target);
  if (element) {
    const offsetYTarget = getOffset(element).top - 72;
    window.scrollTo({ top: offsetYTarget, behavior: "smooth" });
  }
}

/* ============================ Navbar Scroll Change ============================ */
(() => {
  const navbarElement = document.getElementById("main-navbar");

  function handleScroll() {
    if (window.scrollY > 20) {
      navbarElement?.classList.add("scrolled");
    } else {
      navbarElement?.classList.remove("scrolled");
    }
  }

  setTimeout(() => handleScroll(), 1000)

  window.addEventListener("scroll", handleScroll);
})();

/* ============================ Navbar Nav Item Click =========================== */
document.querySelectorAll("#main-navbar .nav-link").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    scrollToTarget(target);
  });
});
