'use strict';

/* сворачивание/разворачивание главного меню при клике на бургер */
var list = document.querySelector('.nav__list_mob');
var btn = document.querySelector('.nav__btn');
      
btn.addEventListener('click', showHideMenu);

function showHideMenu() {
  if (list.classList.contains('nav__list_closed')) {
    list.classList.remove('nav__list_closed');
    list.classList.add('nav__list_opened');
    btn.classList.add('nav__btn_opened');
  } else {
    list.classList.add('nav__list_closed');
    list.classList.remove('nav__list_opened');
    btn.classList.remove('nav__btn_opened');
  }
}


/* подключение 3D-слайдера */
new Vue({
  el: '.screenshots__slider',
  data: {
    slides: 7
  },
  components: {
    'carousel-3d': Carousel3d.Carousel3d,
    'slide': Carousel3d.Slide
  }
})


/* корректировка 3D-слайдера */
var myNextArrow = document.querySelector('.next');
var myPrevArrow = document.querySelector('.prev');

var myNextSpan = document.querySelector('.next span');
var myPrevSpan = document.querySelector('.prev span');

var mySlider = document.querySelectorAll('.carousel-3d-slide');

var videoPlayer = document.querySelector('.video-content video');
var btnPlay = document.querySelector('.video-content__play');

myNextArrow.removeChild(myNextSpan);
myPrevArrow.removeChild(myPrevSpan);
myNextArrow.innerHTML = '&rarr;';
myPrevArrow.innerHTML = '&larr;';

myNextArrow.classList.add('arrowStyle');
myPrevArrow.classList.add('arrowStyle');


btnPlay.addEventListener('click', function() {
  videoPlayer.play();
})


/* Slick-slider */
function findElement() {
  var mySlickNext = document.querySelector('.slick-next');
  var mySlickPrev = document.querySelector('.slick-prev');
  mySlickNext.innerHTML = '&rarr;';
  mySlickPrev.innerHTML = '&larr;';
}

setTimeout(function() {
  findElement();
}, 10);


$('.responsive').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false
      }
    }
  ]
});