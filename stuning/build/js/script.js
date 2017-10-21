$('.responsive').slick({
  arrows: true,
  infinite: true,
  speed: 1500,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
  		arrows: true
      }
    }
  ]
});