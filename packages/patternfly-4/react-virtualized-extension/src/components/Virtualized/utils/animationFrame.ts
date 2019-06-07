/**
 * animationFrame.js
 * https://github.com/bvaughn/react-virtualized/blob/9.21.0/source/utils/animationFrame.js
 * Brian Vaughn
 *
 * Forked from version 9.21.0
 * */

// Properly handle server-side rendering.
let win;
if (typeof window !== 'undefined') {
  win = window;
  // eslint-disable-next-line no-restricted-globals
} else if (typeof self !== 'undefined') {
  // eslint-disable-next-line no-restricted-globals
  win = self;
} else {
  win = {};
}

// requestAnimationFrame() shim by Paul Irish
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
export const raf =
  win.requestAnimationFrame ||
  win.webkitRequestAnimationFrame ||
  win.mozRequestAnimationFrame ||
  win.oRequestAnimationFrame ||
  win.msRequestAnimationFrame ||
  function raf(callback) {
    return win.setTimeout(callback, 1000 / 60);
  };

export const caf =
  win.cancelAnimationFrame ||
  win.webkitCancelAnimationFrame ||
  win.mozCancelAnimationFrame ||
  win.oCancelAnimationFrame ||
  win.msCancelAnimationFrame ||
  function cT(id) {
    win.clearTimeout(id);
  };
