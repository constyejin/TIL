const drawerMenuButtonList = $('.drawer-menu-button');
console.log(drawerMenuButtonList);

function toggleDrawerMenu() {
  const drawerMenu = $(this).parent();

  drawerMenu.toggleClass('is-open');
  drawerMenu.toggleClass('is-active');
}

drawerMenuButtonList.on('click', toggleDrawerMenu);
