$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight : true,
        prevArrow : '<button type="button" class="slick-prev"><img src = "img/slider/chevron-left-solid.png"></button>',
        nextArrow : '<button type="button" class="slick-next"><img src = "img/slider/chevron-right-solid.png"></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                // centerMode: true,
                centerPadding: '40px',
                dots: true,
                autoplay: true,
                focusOnSelect: true,
                autoplaySpeed: 2000,
                adaptiveHeight : false,
              }
            },
            {
              breakpoint: 576,
              settings: {
                arrows: false,
                slidesToShow: 1,
                dots: true,
                autoplay: true,
                focusOnSelect: true,
                autoplaySpeed: 2000,
                adaptiveHeight : false,
              }
            }
          ]
      });
  });

  