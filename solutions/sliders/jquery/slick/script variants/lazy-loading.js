// To use lazy loading, set a data-lazy attribute
// on your img tags and leave off the src

<img data-lazy="img/lazyfonz1.png"/>

$('.lazy').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1
});