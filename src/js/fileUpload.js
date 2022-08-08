export function initFileUpload() {
    const fileInput = document.querySelector('.js-input-file')
    const photosWrapper = document.querySelector('.js-photos-wrapper')
    if (!fileInput) {
        return
    }
    fileInput.addEventListener('change', handleChangeFileInput)

    function handleChangeFileInput(e) {
        const files = [...e.target.files];

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = (e) => {

                const newImage = renderLoadedImg(e.target.result, file.name)
                photosWrapper.innerHTML += newImage
            };

            reader.readAsDataURL(file);
        })
    }

    function renderLoadedImg(url, name) {
        return `<div class="fileUpload__photoItem">
                    <img alt="Your image" src="${url}"/>
                    <div class="fileUpload__photoItemName">${name}</div>
                    <div class="fileUpload__photoItemProgress">100%</div>
                </div>`
    }
}
