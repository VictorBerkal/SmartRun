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

    
      // class CreateCard {
    //   constructor(src, title, descr, old, now, parent,first, second, name ,...wishes){
    //     this.src = src;
    //     this.title = title;
    //     this.descr = descr;
    //     this.oldPrice = old;
    //     this.nowPrise = now;
    //     this.wishes = wishes;
    //     this.parent = document.querySelector(parent);
    //     this.name = name;
    //     this.first = first;
    //     this.second = second;
    //   }

    //   render(){
    //     const changeDiv = document.createElement('div');
    //     changeDiv.classList.add(this.first);
    //     changeDiv.classList.add(this.second);
    //     if(this.name == true){
    //       changeDiv.classList.add("catalog__content_active");
    //     }
    //     changeDiv.innerHTML = `
    //     <div class="catalog__wrapper">
    //     </div>
    //     `;
    //     document.querySelector('.catalog .container').append(changeDiv);



    //     const div = document.createElement('div');
    //     div.classList.add('catalog-item');
    //     div.innerHTML = `
    //     <div class="catalog-item__wrapper">
    //     <div class="catalog-item__front catalog-item__front_active">
    //         <img src=${this.src} alt="item" class="catalog-item__img">
    //         <div class="catalog-item__title">${this.title}</div>
    //         <div class="catalog-item__descr">${this.descr}</div>
    //         <a href="#" class="catalog-item__link">ПОДРОБНЕЕ</a>
    //         <hr>
    //         <div class="catalog-item__footer">
    //             <div class="catalog-item__price">
    //                 <div class="catalog-item__old">${this.oldPrice}</div>
    //                 <div class="catalog-item__new">${this.nowPrise}</div>
    //             </div>
    //             <button class="button button_catalog">КУПИТЬ</button>
    //         </div>
    //     </div>
    //     <div class="catalog-item__back catalog-item__back">
    //         <ul class="catalog-item__list">
                
    //         </ul>
    //         <a href="#" class="catalog-item__return">Назад</a>
    //         <div class="catalog-item__footer">
    //             <div class="catalog-item__price">
    //                 <div class="catalog-item__old">4 750 руб.</div>
    //                 <div class="catalog-item__new">4 500 руб.</div>
    //             </div>
    //             <button class="button button_catalog">КУПИТЬ</button>
    //         </div>
    //       </div>
    //   </div>
    //     `;

    //   if (this.wishes.length === 0){
    //         const li = document.createElement('div');
    //         li.classList.add('catalog-item__li');
    //         li.textContent = "Нет описания";
    //         this.parent.querySelector('.catalog-item__list').append(li);
    //   } else {
    //       this.wishes.forEach(elem => {
    //           const li = document.createElement('div');
    //           li.classList.add('catalog-item__li');
    //           li.textContent = elem;
    //           this.parent.querySelector('.catalog-item__list').append(li);
    //       });
    //   }
    //   changeDiv.append(div);
    
    //   }
    // }

    // const getCarg = async (url) => {
    //     const res = await fetch(url);

    //     if(!res.ok){
    //         throw new Error(`Vityan, Proeb. Status: ${res.status}`);
    //     }

    //     return await res.json();
    // };

    // getCarg('http://localhost:3000/fitnes')
    // .then(data =>{
    //     data.forEach(({img, title, descr, old, now, name, wishes}) => {
    //         new CreateCard(img, title, descr, old, now, wishes, name,
    //            'catalog__content', 'catalog__content_fitnes').render();
    //     });
    // });

});

