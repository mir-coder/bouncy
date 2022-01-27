const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()

        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
};


/* social */
let list = document.querySelectorAll('.footer__sci li');
let bg = document.querySelector('.footer');
list.forEach(elements => {
    elements.addEventListener('mouseenter', function(event){
        let color = event.target.getAttribute('data-color');
        bg.style.background = color;
    })
    elements.addEventListener('mouseleave', function(event){
        bg.style.background = '#f3f3f3';
    })
});

/*Effect */
VanillaTilt.init(document.querySelectorAll(".footer__sci li a"), {
    max: 20,
    speed: 100,
    glare: true,
    "max-glare": 1
});


$(function () {
   /* Боковое меню */
   $('.header__btn').on('click', function () {
    $('.rightside-menu').removeClass('rightside-menu--close');
    })
    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close');
    })

    /* Слайдер */
    $('.services__slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        arrows: false,
        fade: false,
        asNavFor: '.services__slider-nav'
      });
      $('.services__slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.services__slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
      });

      /*Галерея*/
      var Mixer = mixitup ('.portfolio__inner', {
        load: {
            filter: '.print'
        }
    });

    /*Team*/
    $('.team__slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });

    /*Отзывы*/
    $('.testimonials__slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });

    /*Blog*/
    $('.blog__slider').slick({
        dots: true,
        arrows: false,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    });
      
});



