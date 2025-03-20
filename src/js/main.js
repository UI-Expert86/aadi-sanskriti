import '../scss/style.scss';
import 'bootstrap';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import AadiVishwavidyalaya from '../components/AadiVishwavidyalaya/AadiVishwavidyalaya.html';
import WelcomeSection from '../components/WelcomeSection/WelcomeSection.html';
import AadiSampada from '../components/AadiSampada/AadiSampada.html';
import AadiHaat from '../components/AadiHaat/AadiHaat.html';
import TreeLayout from '../components/TreeLayout/TreeLayout.html';
import Header from '../components/Header/Header.html';
import Banner from '../components/Banner/Banner.html';
import Footer from '../components/Footer/Footer.html';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    app.innerHTML = `
        ${Header}
        <main>
            ${Banner}
            ${WelcomeSection}
            ${AadiVishwavidyalaya}
             ${AadiSampada}
              ${AadiHaat}
              ${TreeLayout}
        </main>
        ${Footer}
    `;

    // Initialize banner slider
    const bannerSwiper = new Swiper('.banner-slider', {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.banner-slider .swiper-button-next',
            prevEl: '.banner-slider .swiper-button-prev',
        },
        pagination: {
            el: '.banner-slider .swiper-pagination',
            clickable: true,
        }
    });


        // Initialize thumbnail sliders
        const thumbSlidersConfig = {
            modules: [Autoplay],
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            }
        };
    
        const thumbSlider1 = new Swiper('.thumb-slider-1', thumbSlidersConfig);
        const thumbSlider2 = new Swiper('.thumb-slider-2', {
            ...thumbSlidersConfig,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            }
        });
        const thumbSlider3 = new Swiper('.thumb-slider-3', {
            ...thumbSlidersConfig,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            }
        });
        const thumbSlider4 = new Swiper('.thumb-slider-4', {
            ...thumbSlidersConfig,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            }
        });

        const mainArtSlider = new Swiper('.main-art-slider', {
    modules: [Navigation],
    loop: true,
    navigation: {
        nextEl: '.main-art-slider .swiper-button-next',
        prevEl: '.main-art-slider .swiper-button-prev',
    }
});

const thumbArtSlider = new Swiper('.thumb-art-slider', {
    modules: [Navigation],
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.thumb-art-slider .swiper-button-next',
        prevEl: '.thumb-art-slider .swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});

const haatSlider = new Swiper('.haat-slider', {
    modules: [Navigation],
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.haat-slider .swiper-button-next',
        prevEl: '.haat-slider .swiper-button-prev',
    }
});


});






