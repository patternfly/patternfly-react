import * as ReactDOM from 'react-dom';
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

export function debounce(this: any, func: (...args: any[]) => any, wait: number) {
  let timeout: number;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait) as any;
  };
}

/** This function returns whether or not an element is within the viewable area of a container. If partial is true,
 * then this function will return true even if only part of the element is in view.
 * @param {HTMLElement} container  The container to check if the element is in view of.
 * @param {HTMLElement} element    The element to check if it is view
 * @param {boolean} partial   true if partial view is allowed
 *
 * @return {type} True if the component is in View.
 */
export function isElementInView(container: HTMLElement, element: HTMLElement, partial: boolean) {
  const containerBounds = container.getBoundingClientRect();
  const elementBounds = element.getBoundingClientRect();
  const containerBoundsLeft = Math.floor(containerBounds.left);
  const containerBoundsRight = Math.floor(containerBounds.right);
  const elementBoundsLeft = Math.floor(elementBounds.left);
  const elementBoundsRight = Math.floor(elementBounds.right);

  // Check if in view
  const isTotallyInView = elementBoundsLeft >= containerBoundsLeft && elementBoundsRight <= containerBoundsRight;
  const isPartiallyInView = partial && ((elementBoundsLeft < containerBoundsLeft && elementBoundsRight > containerBoundsLeft) || (elementBoundsRight > containerBoundsRight && elementBoundsLeft < containerBoundsRight));

  // Return outcome
  return isTotallyInView || isPartiallyInView;
}

/** This function returns the side the element is out of view on (right, left or both)
 * @param {HTMLElement} container    The container to check if the element is in view of.
 * @param {HTMLElement} element      The element to check if it is view
 *
 * @return {type} right if the element is of the right, left if element is off the left or both if it is off on both sides.
 */
export function sideElementIsOutOfView(container: HTMLElement, element: HTMLElement): string {
  const containerBounds = container.getBoundingClientRect();
  const elementBounds = element.getBoundingClientRect();
  const containerBoundsLeft = Math.floor(containerBounds.left);
  const containerBoundsRight = Math.floor(containerBounds.right);
  const elementBoundsLeft = Math.floor(elementBounds.left);
  const elementBoundsRight = Math.floor(elementBounds.right);

  // Check if in view
  const isOffLeft = elementBoundsLeft < containerBoundsLeft;
  const isOffRight = elementBoundsRight > containerBoundsRight;

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

/** Interpolates a parameterized templateString using values from a templateVars object.
 * The templateVars object should have keys and values which match the templateString's parameters.
 * Example:
 *    const templateString: 'My name is ${firstName} ${lastName}';
 *    const templateVars: {
 *      firstName: 'Jon'
 *      lastName: 'Dough'
 *    };
 *    const result = fillTemplate(templateString, templateVars);
 *    // "My name is Jon Dough"
 * @param {Object} templateString  The string passed by the consumer
 * @param {Object} templateVars The variables passed to the string
 *
 * @return {type} The template string literal result
 */
export function fillTemplate(templateString: Function | string, templateVars: any) {
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
export function keyHandler(index: number, position: string, refsCollection: any[], kids: any[], custom = false) {
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
  } else if (custom) {
    if (refsCollection[nextIndex].focus) {
      refsCollection[nextIndex].focus()
    }
    const element = ReactDOM.findDOMNode(refsCollection[nextIndex]) as HTMLElement;
    element.focus()
  }
  else {
    refsCollection[nextIndex].focus();
  }
}
