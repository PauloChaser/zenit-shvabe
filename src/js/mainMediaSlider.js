import Swiper from 'swiper/bundle';
import { isWindowSizeSmallerThen } from './utils/helpers';

let swiperBigPhoto, swiperSmallPhotos;
const breakpoint = window.matchMedia('(max-width: 1020px)');

export function initMainMediaSlider() {
  const bigPhotos = document.querySelector('.js-main-media-big-photos')
  const smallPhotos = document.querySelector('.js-main-media-small-photos')

  if (!bigPhotos && !smallPhotos) {
    return
  }

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
}

function initSwipers() {
  swiperBigPhoto = new Swiper('.js-main-media-big-photos', {
    slidesPerView: 'auto',
    spaceBetween: 40,

    loop: true,

    pagination: {
      el: '.js-media-slider-scrollbar',
      type: 'progressbar',
    },
  });

  swiperSmallPhotos = new Swiper('.js-main-media-small-photos', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,

    navigation: {
      nextEl: '.js-main-media-next',
      prevEl: '.js-main-media-prev',
    },
  });

  swiperSmallPhotos.controller.control = swiperBigPhoto;
  swiperBigPhoto.controller.control = swiperSmallPhotos;
}

const breakpointChecker = function() {
  if (breakpoint.matches === true) {
    swiperBigPhoto && swiperBigPhoto.destroy(true, true);
    swiperSmallPhotos && swiperSmallPhotos.destroy(true, true);
  } else {
    return initSwipers();
  }
};
