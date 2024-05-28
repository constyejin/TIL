let moreBtn = document.querySelector('.main-btn');
let closeBtn = document.querySelector('.popup-close');
let popup = document.querySelector('.popup');

moreBtn.addEventListener('click', function() {
  popup.classList.add('active');
})

closeBtn.addEventListener('click', function() {
    popup.classList.remove('active');
})
