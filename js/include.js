function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  elements.forEach(async (el) => {
    const file = el.getAttribute('data-include');
    const res = await fetch(file);
    if (res.ok) {
      el.innerHTML = await res.text();
    } else {
      el.innerHTML = "<!-- 加载失败 -->";
    }
  });
}
window.addEventListener("DOMContentLoaded", includeHTML);
