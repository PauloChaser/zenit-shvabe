import lightGallery from "lightgallery";
import {SlideToggle} from './classes/SlideToggle';
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import Video from "lightgallery/plugins/video";
import Swiper from 'swiper/bundle';
import {isWindowSizeSmallerThen} from "./utils/helpers";


export function initPhotoContest() {
    changePhotoCardsView()
    toggleLike()
    openPhoto()
    rewardItemsToggle()
    initPhotoContestGallery()
}

let swiperContest

const viewSelectors = document.querySelectorAll('.js-view-selector-photo')
const photoCards = document.querySelectorAll('.js-photo-cards')
const rewardItems = document.querySelector('.js-items-wrapper')
const loadMoreContest = document.querySelector('.js-photo-contest-load-more-form')

function changePhotoCardsView() {

    viewSelectors.forEach(function (item) {
        const columns = item.dataset.columns
        item.addEventListener('click', function () {
            removeClasses()
            if (loadMoreContest.classList.contains('photoContestVoting__form--hidden')) {
                loadMoreContest.classList.remove('photoContestVoting__form--hidden')
            }
            item.classList.add('photoContestVoting__viewSelector--active')
            photoCards[0].classList.add('photoContestVoting__cards--' + columns + 'photo')

        })
    })
}

function removeClasses() {
    viewSelectors.forEach(function (item) {
        const columns = item.dataset.columns
        item.classList.remove('photoContestVoting__viewSelector--active')
        photoCards.forEach((card) => {
            card.classList.remove('photoContestVoting__cards--' + columns + 'photo')
        })
    })
}

function toggleLike() {
    if (!photoCards) {
        return
    }

    photoCards.forEach((card) => {
        card.addEventListener('click', function (event) {
            let target = event.target.closest('.photoCard__panelLikeIcon')
            if (!card.contains(target)) {
                return
            }
            const item = event.target.closest('.photoCard')
            let countHtml = item.querySelector('.js-like-counter')
            if (target.classList.contains('photoCard__panelLikeIcon--active')) {
                countHtml.innerHTML--
            } else {
                countHtml.innerHTML++
            }
            target.classList.toggle('photoCard__panelLikeIcon--active')
        })
    })


}

const pageContestVoting = document.querySelector('.js-photo-contest-voting')
const pageContestVotingThirdStage = document.querySelector('.js-contest-third-stage')
const pageContestRewarding = document.querySelector('.js-photo-contest-rewarding')

function openPhoto() {
    if (!photoCards) {
        return
    }

    photoCards.forEach((card) => {
        card.addEventListener('click', function(event) {
            let target = (pageContestVoting || pageContestRewarding) ? event.target.closest('.photoCard__panelZoom') : event.target.closest('.photoContestVoting__card')
            if (!card.contains(target)) {
                return
            }

        })
    })
}


function initPhotoContestGallery() {
    const galleries = document.querySelectorAll('.js-open-photo-contest-gallery')

    if (!galleries) {
        return
    }

    let el = []

    if (galleries.length > 1) {
        el = [document.querySelector('.js-photo-contest-rewarding')] || galleries[0]
    } else {
        el = galleries
    }

    el.forEach(function (gallery) {
        lightGallery((gallery), {
            selector: (pageContestVoting || pageContestRewarding) ? '.photoCard__panelZoom' : '.photoContestVoting__card',
            plugins: [lgZoom, lgThumbnail, Video],
            speed: 500,
            // licenseKey: '0000-0000-000-0000'
            thumbnail: false,
            download: false,
            zoom: false,
            youtubePlayerParams: {
                modestbranding: 1,
                showinfo: 0,
                rel: 0,
                controls: 1,
                autoplay: 1,
            },

        })
    })
}


function initSwiper() {
    swiperContest = new Swiper(".js-swiper-contest", {
        // spaceBetween: 0,
        slidesPerView: 'auto',
        // loop: true,
        navigation: {
            nextEl: '.js-swiper-contest-next',
            prevEl: '.js-swiper-contest-prev',
        },

    })
}

function rewardItemsToggle() {
    if (!rewardItems) {
        return
    }
    rewardItems.addEventListener('click', function (e) {
        const target = event.target
        const item = target.closest('.rewarding__itemHeading')
        if (!item) {
            return
        }
        const SpoilerElement = new SlideToggle(item.dataset.container, 'rewarding__itemContent--active')
        item.classList.toggle('rewarding__itemHeading--active')
        SpoilerElement.toggle()

    })
}
