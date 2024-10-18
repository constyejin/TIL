document.addEventListener('DOMContentLoaded', function () {
  new Swiper(".type-a", {
    direction: "vertical",
    effect: 'slide',
    slidesPerView: 7,
    loop: true,
    autoplay: {
      delay: 3000,
    }
  });

  new Swiper(".type-b", {
    direction: "vertical",
    effect: 'slide',
    slidesPerView: 3,
    loop: true,
    autoplay: {
      delay: 3000,
    }
  });
});



