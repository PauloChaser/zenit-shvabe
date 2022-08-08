import {SlideToggle} from './classes/SlideToggle';
import {Body} from './classes/Body';
import { isWindowSizeSmallerThen } from './utils/helpers';


export function initHeader() {
    const menuButton = document.querySelector('.js-menu-button')

    menuButton.addEventListener('click', function() {
        const headerMenu = document.querySelector('.js-header-menu')

        menuButton.innerHTML = menuButton.innerHTML === "Меню" ? "Закрыть" : "Меню";
        headerMenu.classList.toggle('header__menu--active')

        Body.toggleBody()
    })

    toggleMobileMenu()
}


function toggleMobileMenu() {
    const mainMenuToggles = document.querySelectorAll('.js-menu-slide');

    mainMenuToggles.forEach((spoiler) => {
        const SpoilerElement = new SlideToggle(spoiler.dataset.container, 'header__menuSubList--active')
        spoiler.addEventListener('click', function() {
            if (!isWindowSizeSmallerThen()) {
                return
            }

            spoiler.classList.toggle('header__menuLinkItem--active');
            SpoilerElement.toggle()
        });
    })
}


//header__menu--active
