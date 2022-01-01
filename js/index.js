const $headerBurger = document.getElementById('header-burger')
const $headerList = document.querySelector('.header-list')
const $headerMenu = document.querySelector('.header-menu')

$headerBurger.addEventListener('click', () => {
   $headerBurger.classList.toggle('active')
   $headerList.classList.toggle('active')
   $headerMenu.classList.toggle('active')
})