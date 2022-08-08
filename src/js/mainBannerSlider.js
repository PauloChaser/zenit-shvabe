import Swiper from 'swiper/bundle';

export function initMainBannerSlider() {
    const counter = document.querySelector('.js-banner-slider-counter')
    const moreLinks = document.querySelector('.js-banner-slider-more')
    const titles = document.querySelector('.js-banner-slider-title')
    const textTickers = document.querySelectorAll('.js-ticker-text')
    const bannerLink = document.querySelector('.js-banner-slider-link')


    const updateCounter = (swiper) => {
        if (!counter) {
            return;
        }

        const currentSlideIndex = swiper.realIndex

        const total = String(swiper.realIndex + 1).padStart(2, '0')
        const current = String(swiper.slides.length).padStart(2, '0')

        counter.innerHTML = `<span>${total}</span> – ${current}`

        if (!moreLinks || !titles) {
            return;
        }

        Array.from(moreLinks.children).forEach((link, i) => {
            link.classList.toggle('mainBanner__topName--active', currentSlideIndex === i)
        })

        Array.from(titles.children).forEach((title, i) => {
            title.classList.toggle('mainBanner__topCategory--active', currentSlideIndex === i)
        })

        const backgroundText = titles.children[currentSlideIndex].innerText
        textTickers.forEach((text) => {
            text.innerText = backgroundText
        })

        if (bannerLink) {
            bannerLink.setAttribute('href', titles.children[currentSlideIndex].dataset.href);
        }
    }

    new Swiper(".js-banner-slider", {
        slidesPerView: 1,
        effect: 'fade',

        fadeEffect: {
            crossFade: true
        },

        pagination: {
            el: '.js-banner-slider-progressbar',
            type: 'progressbar',
        },

        navigation: {
            nextEl: '.js-banner-slider-next',
            prevEl: '.js-banner-slider-prev',
        },

        on: {
            slideChange: updateCounter,
            init: updateCounter,
        },
    })


    const itemHover = document.querySelectorAll('.js-item-hover')
    const circleHovered = document.querySelector('.js-circle-hovered')
    const itemsImages = document.querySelectorAll('.js-img-hover')

    itemHover.forEach(function (item) {
        item.addEventListener('mouseenter', function () {
            circleHovered.classList.add('mainBanner__contentCircle--active')
            itemsImages.forEach(function (itemImg){
                itemImg.classList.add('mainBanner__contentItemImg--scale')
            })
            })


        item.addEventListener('mouseleave', function () {
            circleHovered.classList.remove('mainBanner__contentCircle--active')
            itemsImages.forEach(function (itemImg){
                itemImg.classList.remove('mainBanner__contentItemImg--scale')
            })        })

    })
}
