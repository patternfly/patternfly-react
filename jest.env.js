import 'raf/polyfill';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MutationObserver from 'mutation-observer';

configure({ adapter: new Adapter() });

// referenced from '@novnc/nvnc/core/util/events.js'
// The MutationObserver is available in supported browsers, this is workaround for "jest"
global.MutationObserver = MutationObserver;
