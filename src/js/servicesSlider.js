import Swiper  from 'swiper/bundle';

export function initServicesSlider() {
    const total = document.querySelector('.js-services-slider-total');
    const current = document.querySelector('.js-services-slider-current')

    const updateCounter = (swiper) => {
        if (!total || !current) {
            return;
        }

        total.innerText = swiper.slides.length
        current.innerText = swiper.realIndex + 1
    }

    new Swiper(".js-services-slider", {
        spaceBetween: 40,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.js-services-slider-next',
            prevEl: '.js-services-slider-prev',
        },
        pagination: {
            el: '.js-services-slider-scrollbar',
            type: 'progressbar',
        },
        on: {
            slideChange: updateCounter,
            init: updateCounter,
        },
    });
}
