export const matches =
  Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

if (!Element.prototype.matches) {
  Element.prototype.matches = matches;
}

export function closest(selector) {
  let el = this;
  if (document.documentElement.contains(el)) {
    while (el && el.nodeType === 1) {
      if (el.matches(selector)) return el;
      el = el.parentElement || el.parentNode;
    }
  }
  return null;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = closest;
}

export default closest;
