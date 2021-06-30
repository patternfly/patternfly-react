import * as React from 'react';
import { canUseDOM } from './util';

export interface KeyboardHandlerProps {
  /** Reference of the container keyboard interaction is limited to */
  containerRef: React.RefObject<any>;
  /** Navigable elements */
  navigableElements: Element[];
  /** Additional custom key handling */
  additionalKeyHandler?: (event: KeyboardEvent) => void;
  noVerticalArrowHandling?: boolean;
  noHorizontalArrowHandling?: boolean;
  noEnterHandling?: boolean;
  noSpaceHandling?: boolean;
  /** Flag indicating tabIndex should be updated on arrow move */
  updateTabIndex?: boolean;
  /** Selector indicating tabIndex under containerRef should be removed */
  removeTabIndexSelector?: string;
  isActiveElement?: (element: Element) => boolean;
  /** Returns the focusable element from the given navigable elements array item. By default, the navigableElement will be returned. */
  getFocusableElement?: (navigableElement: Element) => Element;
  /** Valid sibling tags horizontal arrow handling will focus */
  validSiblingTags?: string[];
  isEventFromContainer?: (event: KeyboardEvent) => boolean;
  createNavigableElements?: () => Element[];
}

export const setTabIndex = (options: HTMLElement[]) => {
  if (options && options.length > 0) {
    options.forEach((option: HTMLElement) => {
      option.tabIndex = -1;
    });
    options[0].tabIndex = 0;
  }
};

export class KeyboardHandler extends React.Component<KeyboardHandlerProps> {
  static displayName = 'KeyboardHandler';
  static defaultProps: KeyboardHandlerProps = {
    containerRef: null,
    navigableElements: [],
    noHorizontalArrowHandling: false,
    noVerticalArrowHandling: false,
    noEnterHandling: false,
    noSpaceHandling: false,
    updateTabIndex: true,
    removeTabIndexSelector: 'ul button,a',
    validSiblingTags: ['BUTTON', 'A']
  };

  componentDidMount() {
    if (canUseDOM) {
      window.addEventListener('keydown', this.keyHandler);
    }
  }

  componentWillUnmount() {
    if (canUseDOM) {
      window.removeEventListener('keydown', this.keyHandler);
    }
  }

  keyHandler = (event: KeyboardEvent) => {
    const { isEventFromContainer } = this.props;
    if (isEventFromContainer ? !isEventFromContainer(event) : !this._isEventFromContainer(event)) {
      return;
    }
    event.stopImmediatePropagation();

    const {
      isActiveElement,
      getFocusableElement,
      noVerticalArrowHandling,
      noHorizontalArrowHandling,
      noEnterHandling,
      noSpaceHandling,
      updateTabIndex,
      validSiblingTags,
      additionalKeyHandler,
      createNavigableElements
    } = this.props;

    additionalKeyHandler && additionalKeyHandler(event);

    const activeElement = document.activeElement;
    const navigableElements = createNavigableElements();
    const key = event.key;
    let moveTarget = null;

    if (!noEnterHandling) {
      if (key === 'Enter') {
        event.preventDefault();
        (document.activeElement as HTMLElement).click();
      }
    }

    if (!noSpaceHandling) {
      if (key === ' ') {
        event.preventDefault();
        (document.activeElement as HTMLElement).click();
      }
    }

    if (!noVerticalArrowHandling) {
      if (['ArrowUp', 'ArrowDown'].includes(key)) {
        event.preventDefault();
        let currentIndex = -1;
        navigableElements.forEach((element, index) => {
          if (isActiveElement(element)) {
            const increment = key === 'ArrowUp' ? -1 : 1;
            currentIndex = index + increment;

            if (currentIndex >= navigableElements.length) {
              currentIndex = 0;
            }
            if (currentIndex < 0) {
              currentIndex = navigableElements.length - 1;
            }

            moveTarget = getFocusableElement
              ? getFocusableElement(navigableElements[currentIndex])
              : this._getFocusableElement(navigableElements[currentIndex]);
          }
        });
      }
    }

    if (!noHorizontalArrowHandling) {
      if (['ArrowLeft', 'ArrowRight'].includes(key)) {
        event.preventDefault();
        let nextSibling = activeElement;
        if (key === 'ArrowLeft') {
          while (nextSibling) {
            nextSibling = activeElement.previousElementSibling;
            if (nextSibling) {
              if (validSiblingTags.includes(nextSibling.tagName)) {
                moveTarget = nextSibling;
                break;
              }
            }
          }
        } else {
          while (nextSibling) {
            nextSibling = activeElement.nextElementSibling;
            if (nextSibling) {
              if (validSiblingTags.includes(nextSibling.tagName)) {
                moveTarget = nextSibling;
                break;
              }
            }
          }
        }
      }
    }

    if (moveTarget) {
      if (updateTabIndex) {
        (activeElement as HTMLElement).tabIndex = -1;
        (moveTarget as HTMLElement).tabIndex = 0;
      }
      (moveTarget as HTMLElement).focus();
    }
  };

  _isEventFromContainer = (event: KeyboardEvent) => {
    const { containerRef } = this.props;
    return containerRef.current && containerRef.current.contains(event.target as HTMLElement);
  };

  _getFocusableElement = (navigableElement: Element) => navigableElement;

  render() {
    return null as React.ReactNode;
  }
}
