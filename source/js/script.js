const navMain = document.querySelector('.menu')
const navToggle = document.querySelector('.menu__button')

navMain.classList.remove('menu--nojs')

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('menu--closed')) {
    navMain.classList.remove('menu--closed')
    navMain.classList.add('menu--opened')
  } else {
    navMain.classList.add('menu--closed')
    navMain.classList.remove('menu--opened')
  }
})
