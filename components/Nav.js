export default () => `
<nav>
<i class="fa-bars"></i>
<ul class="hidden--mobile nav-links">
  ${links.map(
    (el) => 
    `<li><a href="/${el.title}" title="${el.title}" data-navigo>${el.title} </a></li>`
  ).join("")}
</ul>
</nav>`;