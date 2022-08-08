import 'swiper/css/bundle';
import 'lightgallery/css/lightgallery-bundle.css'
import './css/style.css';
import '../node_modules/js-datepicker/dist/datepicker.min.css';

import {initServicesSlider} from "./js/servicesSlider";

import {initFooter} from "./js/footer";
import {initHeader} from "./js/header";
import {initMainMediaSlider} from "./js/mainMediaSlider";
import {initMainBannerSlider} from "./js/mainBannerSlider";
import {initForms} from "./js/forms";
import {initPhotoContest} from "./js/photoContest";
import {initModals} from "./js/modals";
import {initFileUpload} from "./js/fileUpload";
import {initMainMuseumHistory} from "./js/mainMuseumHistory";
import {initHoverLines} from './js/hoverLines';
import {initGallery} from "./js/mediaGallery";


document.addEventListener('DOMContentLoaded', function () {
    initServicesSlider()
    initFooter()
    initHeader()
    initMainMediaSlider()

    initMainBannerSlider()
    initForms()
    initPhotoContest()
    initModals()
    initFileUpload()
    initMainMuseumHistory()

    initHoverLines()
    initGallery()
    setTimeout(initHoverLines, 1000)
});

