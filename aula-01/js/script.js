addEventListener("scroll", fillHeader)
openMenu.addEventListener("click", showMenu)
closeMenu.addEventListener("click", exitMenu)

function fillHeader() {
    scrollY > 30 ? header.setAttribute("class", "scroll") : header.removeAttribute("class", "scroll")
}

function showMenu() {
    body.setAttribute("class", "menu-expended")
}

function exitMenu() {
    body.removeAttribute("class", "menu-expended")
}