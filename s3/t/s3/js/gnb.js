const gnbItem = document.querySelectorAll('.gnb li');

gnbItem.forEach(item => {
  item.addEventListener('click', () => {
    gnbItem.forEach(item => item.classList.remove('is-active'));
    item.classList.add('is-active');
  })
})

