let wriperMenu = document.querySelector('.header__wriper');
let menu = document.querySelector('.header__menu')
let header = document.querySelector('.header');

wriperMenu.addEventListener('click', function() {
  menu.classList.toggle('header__menu_opened');
});

let toggle = document.querySelector('.toggle');
let toggleThemeLight = document.querySelector('.toggle__icon_theme_light');
let toggleThemeDark = document.querySelector('.toggle__icon_theme_dark');
let handle = document.querySelector('.toggle__ball');
let page = document.querySelector('.page');
let enhance = document.querySelector('.enhance');
let useful = document.querySelector('.useful');
let icon = document.querySelectorAll('.advantages__icon');
let btnLink = document.querySelector('.btn-link');




toggle.addEventListener('click', function() {
  toggleThemeLight.classList.toggle('toggle__icon_active');
  toggleThemeDark.classList.toggle('toggle__icon_active');
  handle.classList.toggle('toggle__ball_theme_light');
  for (let i = 0; i < icon.length; i++)

  if (handle.classList.contains('toggle__ball_theme_light')) {
    menu.classList.add('header__menu_theme_light');
    header.classList.add('header_theme_light');
    page.classList.add('page_theme_light');
    btnLink.classList.add('btn-link_theme_light');
    enhance.classList.add('enhance_theme_light');
    useful.classList.add('useful_theme_light');
    icon[i].classList.add('advantages__icon_theme_light');
  }
  else {
    menu.classList.remove('header__menu_theme_light');
    header.classList.remove('header_theme_light');
    page.classList.remove('page_theme_light');
    btnLink.classList.remove('btn-link_theme_light');
    enhance.classList.remove('enhance_theme_light');
    useful.classList.remove('useful_theme_light');
    icon[i].classList.remove('advantages__icon_theme_light');
  }
})

function Slideshow( element ) {
	this.el = document.querySelector( element );
	this.init();
}

Slideshow.prototype = {
	init: function() {
	    this.wrapper = this.el.querySelector( ".slider__wrapper" );
		this.slides = this.el.querySelectorAll( ".slider__item" );
		this.previous = this.el.querySelector( ".slider__previous" );
		this.next = this.el.querySelector( ".slider__next" );
		this.index = 0;
		this.total = this.slides.length;

		this.actions();
	},
	_slideTo: function( pointer ) {
		var currentSlide = this.slides[pointer];
		this.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
	},
	actions: function() {
		var self = this;
		self.next.addEventListener( "click", function() {
			self.index++;
			self.previous.style.display = "block";

			if( self.index == self.total - 1 ) {
				self.index = self.total - 1;
				self.next.style.display = "none";
			}

			self._slideTo( self.index );

		}, false);

		self.previous.addEventListener( "click", function() {
			self.index--;
			self.next.style.display = "block";

			if( self.index == 0 ) {
				self.index = 0;
				self.previous.style.display = "none";
			}

			self._slideTo( self.index );

		}, false);
	}

};
