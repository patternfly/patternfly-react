import 'raf/polyfill';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';

const MutationObserverPolyfill = require('mutation-observer');
// referenced from '@novnc/nvnc/core/util/events.js'
// The MutationObserver is available in supported browsers, this is workaround for "jest"
global.MutationObserver = global.MutationObserver || MutationObserverPolyfill;

configure({ adapter: new Adapter() });
