export function isTouch() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) { return false; }
}

export function isWindowSizeSmallerThen(size = 1020) {
  return document.body.offsetWidth < size;
}

export function debounce(func, wait, immediate) {
  let timeout;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};
