import { SIDE } from './constants';

export function capitalize(input) {
  return input[0].toUpperCase() + input.substring(1);
}

export function getUniqueId(prefix = 'pf') {
  const uid =
    new Date().getTime() +
    Math.random()
      .toString(36)
      .slice(2);
  return `${prefix}-${uid}`;
}

export function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

/** This function returns the side the element is out of view on (right, left or both)
 * @param {Object} container  The container to check if the element is in view of.
 * @param {Object} element    The element to check if it is view
 * @param {boolean} partial   true if partial view is allowed
 *
 * @return {type} True if the component is in View.
 */
export function isElementInView(container, element, partial) {
  const cLeft = container.scrollLeft;
  const cRight = cLeft + container.clientWidth;

  const eLeft = element.offsetLeft;
  const eRight = eLeft + element.clientWidth;

  // Check if in view
  const isTotal = eLeft >= cLeft && eRight <= cRight;
  const isPartial = partial && ((eLeft < cLeft && eRight > cLeft) || (eRight > cRight && eLeft < cRight));

  // Return outcome
  return isTotal || isPartial;
}

/** This function returns the side the element is out of view on (right, left or both)
 * @param {Objent} container    The container to check if the element is in view of.
 * @param {Object} element      The element to check if it is view
 *
 * @return {type} right if the element is of the right, left if element is off the left or both if it is off on both sides.
 */
export function sideElementIsOutOfView(container, element) {
  const cLeft = container.scrollLeft;
  const cRight = cLeft + container.clientWidth;

  const eLeft = element.offsetLeft;
  const eRight = eLeft + element.clientWidth;

  // Check if in view
  const isOffLeft = eLeft < cLeft;
  const isOffRight = eRight > cRight;

  let side = SIDE.NONE;

  if (isOffRight && isOffLeft) {
    side = SIDE.BOTH;
  } else if (isOffRight) {
    side = SIDE.RIGHT;
  } else if (isOffLeft) {
    side = SIDE.LEFT;
  }
  // Return outcome
  return side;
}
