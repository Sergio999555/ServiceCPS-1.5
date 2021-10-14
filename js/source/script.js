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

window.addEventListener('resize', () => {
    mobileSlider();
});