document.addEventListener('DOMContentLoaded', function () {
  var myCarousel1 = document.querySelector('#carousel-caption');
  var carousel1 = new bootstrap.Carousel(myCarousel1, {
    interval: 3000,
    wrap: true
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var myCarousel2 = document.querySelector('#carouselBotas');
  var carousel2 = new bootstrap.Carousel(myCarousel2, {
    interval: 3000,
    wrap: true
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var myCarousel3 = document.querySelector('#carouselRuedas');
  var carousel3 = new bootstrap.Carousel(myCarousel3, {
    interval: 5000,
    wrap: true
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var myCarousel4 = document.querySelector('#carouselAccRep');
  var carousel4 = new bootstrap.Carousel(myCarousel4, {
    interval: 7000,
    wrap: true
  });
});