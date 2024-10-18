// Game List
const gameIcons = ['playson', 'playstar', 'habanero', 'netent', 'booongo', 'evoplay', 'gamomat', 'microgaming', 'redtiger', 'playngo', 'pragmaticplay', 'pg', 'bbin', 'evolution', 'gmw'];
const cardIcons = ['visa', 'master', 'maestro', 'paysafe', 'giropay', 'neteller', 'skrill', 'jcb', 'trustly', 'yandex'];

const gameList = document.querySelector('.game-list ul');
const cardList = document.querySelector('.card-list ul');


const footImgList = (title, list) => {
  list.map((item) => {
    const itemIcon = `
      <li>
        <img src="/r/theme/s3/images/footer/${title}/${item}.png" alt=${item}>
      </li>
    `

    if(title === 'games') {
      gameList.insertAdjacentHTML('beforeend', itemIcon);
    } else {
      cardList.insertAdjacentHTML('beforeend', itemIcon);
    }
  })
}

footImgList('games', gameIcons);
footImgList('cards', cardIcons);
