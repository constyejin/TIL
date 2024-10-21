const gnbTopiconList = document.querySelector('.gnb-top-icon-list');
const gnbBottomiconList = document.querySelector('.gnb-bottom-icon-list');
const topNoticeIconList = document.querySelector('.top-notice-icon-list');
const footerIconList = document.querySelector('.footer-icon-list');

const gnbTopicons = [
  "ic-home",
  "ic-ball",
  "ic-sub",
  "ic-holdem",
  "ic-slot",
  "ic-powerball",
  "ic-minigame-1",
  "ic-sport",
  "ic-minigame-2"
]

const gnbBottomIcons = [
  "ic-deposit",
  "ic-withdraw",
  "ic-list-check",
  "ic-friend",
  "ic-helpdesk",
  "ic-book",
  "ic-event"
]

const topNoticeIcons = [
  "ic-bell",
  "ic-user"
]

const footerIcons = [
  "ic-face",
  "ic-twitter",
  "ic-instagram",
  "ic-country"
]

const icons = (list, ul) => {
  list.map((item) => {
    const li = `
      <li>
        <i class="${item}"></i>
        <span>${item}</span>
      </li>
    `;

    ul.insertAdjacentHTML('beforeend', li);
  });
}

icons(gnbTopicons, gnbTopiconList);
icons(gnbBottomIcons, gnbBottomiconList);
icons(topNoticeIcons, topNoticeIconList);
icons(footerIcons, footerIconList);