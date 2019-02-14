import ReactDOM from 'react-dom';
import { SIDE } from './constants';

export function capitalize(input: string) {
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

export function debounce(func: (...args: any[]) => any, wait: number) {
  let timeout: number;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait) as any;
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
/** This function returns the side the element is out of view on (right, left or both)
 * @param {Object} templateString  The string passed by the consumer
 * @param {Object} templateVars The variables passed to the string
 *
 * @return {type} The template string literal result
 */
export function fillTemplate(templateString, templateVars) {
  const func = new Function(...Object.keys(templateVars), `return \`${templateString}\`;`);
  return func(...Object.values(templateVars));
}

/** This function allows for keyboard navigation through dropdowns. The custom argument is optional.
 * @param {number} index The index of the element you're on
 * @param {string} position The orientation of the dropdown
 * @param {string[]} refsCollection Array of refs to the items in the dropdown
 * @param {Object[]} kids Array of items in the dropdown
 * @param {boolean} [custom] Allows for handling of flexible content
 */
export function keyHandler (index, position, refsCollection, kids, custom = false) {
  if (!Array.isArray(kids)) {
    return;
  }
  let nextIndex;
  if (position === 'up') {
    if (index === 0) {
      // loop back to end
      nextIndex = kids.length - 1;
    } else {
      nextIndex = index - 1;
    }
  } else if (index === kids.length - 1) {
    // loop back to beginning
    nextIndex = 0;
  } else {
    nextIndex = index + 1;
  }
  if (refsCollection[nextIndex] === null) {
    keyHandler(nextIndex, position, refsCollection, kids, custom);
  } else {
      /* tslint:disable */
      custom
        ? (refsCollection[nextIndex].focus &&
            refsCollection[nextIndex].focus()) ||
          ReactDOM.findDOMNode(refsCollection[nextIndex]).focus()
        : refsCollection[nextIndex].focus();
      /* tslint:enable */
  }
}
