import {isWindowSizeSmallerThen} from "./utils/helpers";

export function initMainMuseumHistory() {
    const museumWrapper = document.querySelectorAll('.js-museum-wrapper')

   if (isWindowSizeSmallerThen()) {
       return
   }
    museumWrapper.forEach((wrapper) => {
        bindMouseMove(wrapper)
    })
}

function bindMouseMove(museumWrapper) {
    const museumButton = museumWrapper.querySelector('.js-museum-button')

    const halfWrapperWidth = museumWrapper.offsetWidth / 2
    const halfWrapperHeight = museumWrapper.offsetHeight / 2
    const museumButtonSize = museumButton.offsetWidth
    museumButton.style.transform = 'translateX(-110px)'
    museumWrapper.addEventListener('mousemove', function (e) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.round(e.clientX - rect.left);
        const y = Math.round(e.clientY - rect.top);

        if (
          x > halfWrapperWidth * 2 - museumButtonSize / 2 ||
          y > halfWrapperHeight * 2 - museumButtonSize / 2 ||
          x < museumButtonSize / 2 ||
          y < museumButtonSize / 2
        ) {
            return
        }
        museumButton.style.transform = `translate(${x - halfWrapperWidth}px ,${y - halfWrapperHeight}px)`
    })
    museumWrapper.addEventListener('mouseleave', function (e) {
        museumButton.style.transform = 'translateX(-110px)'
    })
}
