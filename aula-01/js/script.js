const header = document.getElementById('header')

document.addEventListener("scroll", fillHeader)

function fillHeader (){
    header.setAttribute("class", "scroll")
}