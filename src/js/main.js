import 'purecss/build/grids-min.css';
import 'purecss/build/grids-responsive-min.css';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '/src/sass/style.scss'

const burger = document.querySelector('.burger'),
    close = document.querySelector('.header__menu-close'),
    menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
    menu.classList.add('header__menu_active');
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', () => {
    menu.classList.remove('header__menu_active');
    document.body.style.overflow = '';
});



try {
    new Swiper('.works__slider', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".icon-right-open",
            prevEl: ".icon-left-open",
        },

        breakpoints: {
            // when window width is >= 1200px
            1200: {
                slidesPerView: 3,
                spaceBetween: 5,
            },
            1920: {
                slidesPerView: 3,
                spaceBetween: 35,
            },

        },
        modules: [Navigation, Pagination],

    });

} catch (e) { }

try {
    const tabs = document.querySelectorAll('.catalog__tab'),
        contents = document.querySelectorAll('.catalog__content-item');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach((t) => t.classList.remove('catalog__tab_active'));
            contents.forEach((c) => (c.style.display = 'none'));;

            tab.classList.add('catalog__tab_active');
            contents[index].style.display = 'flex';
        });
    });

    contents.forEach((c, i) => (c.style.display = i === 0 ? 'flex' : 'none'));
} catch (e) { };

