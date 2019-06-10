require('raf/polyfill');
const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

const MutationObserverPolyfill = require('mutation-observer');
// referenced from '@novnc/nvnc/core/util/events.js'
// The MutationObserver is available in supported browsers, this is workaround for "jest"
global.MutationObserver = global.MutationObserver || MutationObserverPolyfill;

configure({ adapter: new Adapter() });
