let openMenu = document.getElementById("menuBtn")
let menuColum = document.getElementById("menu-colum")
openMenu.onclick = function(){
    menuColum.classList.toggle("active")
    document.body.classList.toggle("body-overflow")
}