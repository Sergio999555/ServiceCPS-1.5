
const slider = document.querySelector('.mySwiper');

let mySwiper;

function mobileSlider() {
    if (window.innerWidth <=768 && slider.dataset.mobile == 'false') {
      mySwiper = new Swiper(slider , {
        slidesPervView: 1,
        spaceBetween: 10, 
        loop: true,
        slideClass: 'swiper-slide',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      slider.dataset.mobile = 'true';
    }
  
    if (window.innerWidth > 768) {
      
      slider.dataset.mobile = 'false';

      if (slider.classList.contains('swiper-container-initialized')) {
        mySwiper.destroy ();
      }
    }
}

mobileSlider();

const repairBrandsButton = document.querySelector('.repair-brands__button-all');
const repairBrands = document.querySelector('.repair-brands__container');

function openBrandsList() {

    if (repairBrands.classList.contains('hidden_brands') ) {
      repairBrands.classList.toggle('hidden_brands');
      repairBrands.style.height = '200px';
      this.textContent = 'Показать всё';
        
    } else {

      repairBrands.classList.toggle('hidden_brands');
      repairBrands.style.height = 'auto';
      this.textContent = 'Скрыть';
    }
}

repairBrandsButton.addEventListener('click', openBrandsList);