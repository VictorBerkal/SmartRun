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


    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content')
          .removeClass('catalog__content_active').eq($(this).index())
          .addClass('catalog__content_active');
    });

    

    function toggleCard(item){
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__front').eq(i).toggleClass('catalog-item__front_active');
                $('.catalog-item__back').eq(i).toggleClass('catalog-item__back_active');
            });
        });
    }

    toggleCard('.catalog-item__link');
    toggleCard('.catalog-item__return');


    const tab = document.querySelector('.catalog');
    console.log(tab);


});

