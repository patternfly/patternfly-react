/**
 * Mutation Observer Helper function
 * //developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe
 *
 * @param {string} selector The DOM selector to watch
 * @param {object} opt MutationObserver options
 * @param {function} cb Pass Mutation object to a callback function
 * @private
 */
export const observe = (selector: any, opt: any, cb: any) => {
  let unobserve: any;

  if (selector) {
    const Obs = new MutationObserver((m) => [...m].forEach(cb));
    document.querySelectorAll(selector).forEach((el) => Obs.observe(el, opt));
    unobserve = () => Obs.disconnect();
  }
  return () => {
    if (unobserve) {
      unobserve();
    }
  };
};

// See https://stackoverflow.com/questions/17134823/detect-element-style-changes-with-javascript
export const getMutationObserver = (nodeSelector: string, cb: any) =>
  observe(
    nodeSelector,
    {
      attributesList: ['style'], // Only the "style" attribute
      attributeOldValue: true // Report also the oldValue
    },
    (m: any) => {
      if (cb) {
        cb(m);
      }
    }
  );
