/**
 * onScroll.js
 * https://github.com/bvaughn/react-virtualized/blob/9.21.0/source/WindowScroller/utils/onScroll.js
 * Brian Vaughn
 *
 * Forked from version 9.21.0
 * */

import { requestAnimationTimeout, cancelAnimationTimeout } from './requestAnimationTimeout';

let mountedInstances = [];
let originalBodyPointerEvents = null;
let disablePointerEventsTimeoutId = null;

function enablePointerEventsIfDisabled() {
  if (disablePointerEventsTimeoutId) {
    disablePointerEventsTimeoutId = null;

    if (document.body && originalBodyPointerEvents != null) {
      document.body.style.pointerEvents = originalBodyPointerEvents;
    }

    originalBodyPointerEvents = null;
  }
}

function enablePointerEventsAfterDelayCallback() {
  enablePointerEventsIfDisabled();
  mountedInstances.forEach(instance => instance.__resetIsScrolling());
}

function enablePointerEventsAfterDelay() {
  if (disablePointerEventsTimeoutId) {
    cancelAnimationTimeout(disablePointerEventsTimeoutId);
  }

  let maximumTimeout = 0;
  mountedInstances.forEach(instance => {
    maximumTimeout = Math.max(maximumTimeout, instance.props.scrollingResetTimeInterval);
  });

  disablePointerEventsTimeoutId = requestAnimationTimeout(enablePointerEventsAfterDelayCallback, maximumTimeout);
}

function onScrollWindow(event) {
  if (event.currentTarget === window && originalBodyPointerEvents == null && document.body) {
    originalBodyPointerEvents = document.body.style.pointerEvents;

    document.body.style.pointerEvents = 'none';
  }
  enablePointerEventsAfterDelay();
  mountedInstances.forEach(instance => {
    if (instance.props.scrollElement === event.currentTarget) {
      instance.__handleWindowScrollEvent();
    }
  });
}

export function registerScrollListener(component, element) {
  if (!mountedInstances.some(instance => instance.props.scrollElement === element)) {
    element.addEventListener('scroll', onScrollWindow);
  }
  mountedInstances.push(component);
}

export function unregisterScrollListener(component, element) {
  mountedInstances = mountedInstances.filter(instance => instance !== component);
  if (!mountedInstances.length) {
    element.removeEventListener('scroll', onScrollWindow);
    if (disablePointerEventsTimeoutId) {
      cancelAnimationTimeout(disablePointerEventsTimeoutId);
      enablePointerEventsIfDisabled();
    }
  }
}
