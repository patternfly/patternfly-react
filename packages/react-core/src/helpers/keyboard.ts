/**
 * This function is a helper for handling basic arrow keyboard interactions
 *
 * @param {event} event event triggered by the keyboard
 * @param {element[]} navigableElements valid traversable elements of the container
 * @param {function} isElementContained check to verify whether a given element matches the active element
 * @param {function} navigableElementSelector returns the traversable element if not part of the navigableElements
 * @param {string[]} validSiblingTags valid tags for navigable sibling elements
 * @param {boolean} voidVerticalArrows remove vertical arrow handling
 * @param {boolean} voidHorizontalArrows remove horizontal arrow handling
 * @param {boolean} updateTabIndex update the tabIndex of current element and next focused element
 */
export const handleArrows = (
  event: KeyboardEvent,
  navigableElements: Element[],
  isElementContained: (element: Element) => boolean,
  navigableElementSelector: (element: Element) => Element,
  validSiblingTags: string[] = ['A', 'BUTTON'],
  voidVerticalArrows: boolean = false,
  voidHorizontalArrows: boolean = false,
  updateTabIndex: boolean = true
) => {
  const activeElement = document.activeElement;
  const key = event.key;
  let moveTarget = null;

  // console.log('key: ', key);
  // console.log('navigable elements: ', navigableElements);
  // console.log('active element: ', activeElement);
  if (['ArrowUp', 'ArrowDown'].includes(key)) {
    if (voidVerticalArrows) {
      return;
    }
    event.preventDefault();
    let currentIndex = -1;
    navigableElements.forEach((element, index) => {
      if (isElementContained(element)) {
        const increment = key === 'ArrowUp' ? -1 : 1;
        currentIndex = index + increment;

        if (currentIndex >= navigableElements.length) {
          currentIndex = 0;
        }
        if (currentIndex < 0) {
          currentIndex = navigableElements.length - 1;
        }

        moveTarget = navigableElementSelector(navigableElements[currentIndex]);
      }
    });
  }

  if (['ArrowLeft', 'ArrowRight'].includes(key)) {
    if (voidHorizontalArrows) {
      return;
    }
    event.preventDefault();
    let nextSibling;
    if (key === 'ArrowLeft') {
      nextSibling = activeElement.previousElementSibling;
    } else {
      nextSibling = activeElement.nextElementSibling;
    }
    if (nextSibling) {
      if (validSiblingTags.includes(nextSibling.tagName)) {
        moveTarget = nextSibling;
      }
    }
  }

  if (moveTarget) {
    if (updateTabIndex) {
      (activeElement as HTMLElement).tabIndex = -1;
      (moveTarget as HTMLElement).tabIndex = 0;
    }
    // console.log('next focus: ', moveTarget);
    (moveTarget as HTMLElement).focus();
  }
};
