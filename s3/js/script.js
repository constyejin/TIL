// _________________________________________________________________________________________
// _________________________________________________________________________________________
// <!-- Notice Swiper -->
document.addEventListener('DOMContentLoaded', function () {
  //withdraw swiper 
  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 7,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
    },
    loop: true,
  });
});