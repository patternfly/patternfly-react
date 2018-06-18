import 'raf/polyfill';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { preventInjection } from './packages/react-styles';

preventInjection();
configure({ adapter: new Adapter() });
