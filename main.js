let links = document.querySelectorAll(".landing-menu__link");
let sections = document.querySelectorAll("main section[id]");

function setactive() {
    if (!links.length || !sections.length) return;
    let top = window.scrollY;
    sections.forEach(function (sec) {
        let high = sec.offsetHeight;
        let off = sec.offsetTop - 120;
        let id = sec.getAttribute("id");
        if (top >= off && top < off + high) {
            links.forEach(function (link) {
                link.classList.remove("landing-menu__link--active");
                if (link.getAttribute("href") === "#" + id) {
                    link.classList.add("landing-menu__link--active");
                }
            });
        }
    });
}

window.addEventListener("scroll", setactive);

setactive();
