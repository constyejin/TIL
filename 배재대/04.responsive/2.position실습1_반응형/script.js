let moreBtn = document.querySelector('.main-btn');
let closeBtn = document.querySelector('.popup-close');
let popup = document.querySelector('.popup');

moreBtn.addEventListener('click', function() {
  popup.classList.add('active');
})

closeBtn.addEventListener('click', function() {
    popup.classList.remove('active');
})


let sidebar = document.querySelector('.sidebar');
let sidebarBtn = document.querySelector('.sidebar-btn');
let sidebarCloseBtn = document.querySelector('.sidebar-close-btn');


sidebarBtn.addEventListener('click', function() {
  sidebar.classList.add('active');
})

sidebarCloseBtn.addEventListener('click', function() {
  sidebar.classList.remove('active');
})
