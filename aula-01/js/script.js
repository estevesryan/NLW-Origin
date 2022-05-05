addEventListener("scroll", fillHeader)

function fillHeader (){
    scrollY > 30 ? header.setAttribute("class", "scroll") : header.removeAttribute("class", "scroll")
}
