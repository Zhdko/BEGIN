let wriperMenu = document.querySelector('.header__wriper');
let menu = document.querySelector('.header__menu')
let header = document.querySelector('.header');

wriperMenu.addEventListener('click', function() {
  menu.classList.toggle('header__menu_opened');
});

let toggle = document.querySelector('.toggle');
let toggleThemeLight = document.querySelector('.toggle__icon_theme_light');
let toggleThemeDark = document.querySelector('.toggle__icon_theme_dark');
let handle = document.querySelector('.toggle__ball')
let page = document.querySelector('.page')

toggle.addEventListener('click', function() {
  toggleThemeLight.classList.toggle('toggle__icon_active');
  toggleThemeDark.classList.toggle('toggle__icon_active');
  handle.classList.toggle('toggle__ball_theme_light');

  if (handle.classList.contains('toggle__ball_theme_light')) {
    menu.classList.add('header__menu_theme_light');
    header.classList.add('header_theme_light');
    page.classList.add('page_theme_light');
  }
  else {
    menu.classList.remove('header__menu_theme_light');
    header.classList.remove('header_theme_light');
    page.classList.remove('page_theme_light');
  }
})


