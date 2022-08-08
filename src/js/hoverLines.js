export function initHoverLines() {
  const hoverElements = document.querySelectorAll('.js-hover-lines')

  hoverElements.forEach((element) => {
    createLines(element)
  })
}

function createLines(element) {
  const fontSizeStyle = window.getComputedStyle(element, null).getPropertyValue('font-size');
  const lineHeightStyle = window.getComputedStyle(element, null).getPropertyValue('line-height');
  const fontSize = parseFloat(fontSizeStyle);
  const lineHeight = parseFloat(lineHeightStyle);
  const lineHeightRatio = lineHeight / fontSize

  const elementWidth = element.offsetWidth

  const lines = element.innerText.replaceAll('\n', ' \n').split(' ');

  const lineSizes = getLineSizes(lines, elementWidth, fontSizeStyle, element)

  for (let i = 0; i < lineSizes.length; i++) {
    const lineElement = document.createElement('div')
    lineElement.classList.add('hoverLines__line')
    lineElement.style.top = `${(i + 1) * fontSize * lineHeightRatio}px`
    lineElement.style.maxWidth = `${lineSizes[i]}px`
    lineElement.style.transitionDelay = `${i * 50}ms`

    element.appendChild(lineElement)
  }
}

function getLineSizes(words, width, fontSize, element) {
  let result = ''
  const tempDiv = document.createElement('div')

  tempDiv.classList.add('hoverLines__temp')
  tempDiv.style.fontSize = fontSize
  element.appendChild(tempDiv)

  for (let word of words) {
    tempDiv.innerText += ' ' + word

    if (
      tempDiv.offsetWidth >= width ||
      word.includes('\n')
    ) {
      result += '|'
      tempDiv.innerText = word.replace('\n', '')
    }

    result += ' ' + word
  }

  const stringsArray = result.split('|').map((s) => s.trim()).filter(Boolean);


  const resultSizes = stringsArray.map((string) => {
    tempDiv.innerText = string
    return tempDiv.offsetWidth
  })

  tempDiv.remove()

  return resultSizes;
}
