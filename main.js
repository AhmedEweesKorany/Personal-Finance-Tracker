let links = document.querySelectorAll(".link");
let sections = document.querySelectorAll("section");

function setactive() {
let top = window.scrollY;
sections.forEach(function(sec) {
let high = sec.offsetHeight;
let off = sec.offsetTop - 120;
let id = sec.getAttribute("id");
if (top >= off && top < off + high) {
links.forEach(function(link) {
link.classList.remove("active");
if (link.getAttribute("href") === "#" + id) {
link.classList.add("active");
}
});
}
});
}

window.addEventListener("scroll", setactive);
setactive();
