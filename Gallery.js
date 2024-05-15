


// ------gallery---------
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    1023:{
      slidesPerView:3,
      spaceBetween:10
    }
  }
});
