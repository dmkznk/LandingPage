let openMenu = document.getElementById("menuBtn")
let menuColum = document.getElementById("menu-colum")
openMenu.onclick = function(){
    menuColum.classList.toggle("active")
    document.body.classList.toggle("body-overflow")
}

const memberAbout = document.querySelectorAll('.about-members');
const avatars = document.querySelectorAll('.team-member-avatar');

avatars.forEach((item, index) => {
  item.addEventListener('click', () => {
    memberAbout.forEach(elem => elem.classList.remove('active')) 
    memberAbout[index].classList.add('active')
  })
})