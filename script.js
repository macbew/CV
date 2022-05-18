const headerBurger = document.querySelector(`.header__burger`),
      headerMenu = document.querySelector(`.header__menu`),
      body = document.querySelector(`.body`),
      link = document.querySelectorAll(`.header__link`);

headerBurger.addEventListener('click', hideShowMenu);

function hideShowMenu () {
  headerBurger.classList.toggle('active');
  headerMenu.classList.toggle('active');
  body.classList.toggle('lock');
}

link.forEach(item => item.addEventListener('click', closeMenu))

function closeMenu (){
    headerBurger.classList.remove('active');
    headerMenu.classList.remove('active');
}