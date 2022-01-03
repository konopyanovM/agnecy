const $headerBurger = document.getElementById('header-burger');
const $headerList = document.querySelector('.header-list');
const $headerMenu = document.querySelector('.header-menu');

const $featureProductsList = document.querySelector('.feature-products-list');

const $featureProductsImages = document.querySelector('.feature-products-images')

$headerBurger.addEventListener('click', () => {
   $headerBurger.classList.toggle('active');
   $headerList.classList.toggle('active');
   $headerMenu.classList.toggle('active');
})

$featureProductsList.addEventListener('click', (event) => {

   const $buttons = $featureProductsList.querySelectorAll('li')
   const $content = $featureProductsImages.querySelectorAll('ul')

   let index;

   if (event.target.classList.contains('active')) {
      return 0;
   } else {
      $buttons.forEach((element) => {
         element.classList.remove('active')
      });
      $content.forEach((element) => {
         element.classList.remove('active')
      });

      event.target.classList.add('active')
      $buttons.forEach((element, i) => {
         if (element.classList.contains('active')) {
            index = i;
         }
      });
      $content[index].classList.add('active')
   }

})