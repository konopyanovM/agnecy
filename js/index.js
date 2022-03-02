

window.onload = () => {
   const $headerBurger = document.getElementById('header-burger');
   const $headerList = document.querySelector('.header-list');
   const $headerMenu = document.querySelector('.header-menu');

   const $featureProductsList = document.querySelector('.feature-products-list');

   const $featureProductsImages = document.querySelector('.feature-products-images')

   const $teamBody = document.querySelector('.team__body')
   const $teamList = document.querySelector('.team-list')

   const $body = document.querySelector('.body')

   $headerBurger.addEventListener('click', () => {
      $headerBurger.classList.toggle('active');
      $headerList.classList.toggle('active');
      $headerMenu.classList.toggle('active');
      $body.classList.toggle('active')

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


   $teamList.addEventListener('click', (event) => {
      const $listItem = event.target.closest('.team-list__item')
      const $listImg = event.target.closest('.team-list__img')

      const $teamImg = $teamBody.querySelector('.team__img')
      const $teamName = $teamBody.querySelector('.team__name')
      const $teamDescription = $teamBody.querySelector('.team__description')

      let tempName;
      let tempImg;

      tempName = $teamName.innerHTML;
      $teamName.innerHTML = $listItem.querySelector('p').innerHTML
      $listItem.querySelector('p').innerHTML = tempName

      tempImg = $teamImg.getAttribute('src')
      $teamImg.setAttribute('src', $listImg.getAttribute('src'))
      $listImg.setAttribute('src', tempImg)


      // if ($listItem == event.currentTarget) {
      //    console.log('ok');
      // }
   })
}
