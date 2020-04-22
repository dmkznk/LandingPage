let openMenu = document.getElementById("menuBtn")
let menuColum = document.getElementById("menu-colum")
openMenu.onclick = function(){
    menuColum.classList.toggle("active")
    document.body.classList.toggle("body-overflow")
}

const memberAbout = document.querySelectorAll('.about-members');
const avatars = document.querySelectorAll('.cards_section-5');
const radioBtn = document.querySelectorAll('input[type="radio"]')
const rewierInfo = document.querySelectorAll('.testimonials')


const addActiveClaas = (trigger, target) => {
  trigger.forEach((item, index) => {
    item.addEventListener('click', () => {
      target.forEach(elem => elem.classList.remove('active')) 
      target[index].classList.add('active')
    })
  })
}

addActiveClaas(avatars,memberAbout)
addActiveClaas(radioBtn,rewierInfo)
