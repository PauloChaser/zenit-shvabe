import lightGallery from "lightgallery";

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import Video from "lightgallery/plugins/video";


export function initGallery() {
    const galleries = document.querySelectorAll('.js-open-gallery')


    galleries.forEach(function (gallery) {
        lightGallery((gallery), {
            plugins: [lgZoom, lgThumbnail, Video],
            speed: 500,
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


