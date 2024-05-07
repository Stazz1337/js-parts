import { Swiper } from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

Swiper.use([Navigation, Autoplay]);

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

//dropdown
document.querySelector('.clients').addEventListener('click', function (event) {
    event.stopPropagation();

    let dropdownMenu = this.querySelector('.menu__dropdown-menu');
    let arrowIcon = this.querySelector('.menu__arrow-icon');

    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
        dropdownMenu.style.display = 'flex';
        arrowIcon.classList.add('rotate-left');
    } else {
        dropdownMenu.style.display = 'none';
        arrowIcon.classList.remove('rotate-left');
    }
});

//dropdown close by outside click
function closeDropdownAndResetArrow() {
    const dropdownMenu = document.querySelector('.menu__dropdown-menu');
    const arrowIcons = document.querySelectorAll('.menu__arrow-icon');

    if (dropdownMenu && dropdownMenu.style.display === 'flex') {
        dropdownMenu.style.display = 'none';
        arrowIcons.forEach((icon) => icon.classList.remove('rotate-left'));
    }
}

document.addEventListener('click', function (event) {
    const dropdownMenu = document.querySelector('.menu__dropdown-menu');
    if (dropdownMenu && dropdownMenu.contains(event.target)) {
        return;
    }
    closeDropdownAndResetArrow();
});

//slider
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1440: {
            slidesPerView: 4,
        },
        1920: {
            slidesPerView: 4,
        },
    },
});
