// https://github.com/reactjs/react-modal/blob/master/src/helpers/safeHTMLElement.js
import { canUseDOM } from 'exenv';

export default canUseDOM ? window.HTMLElement : {};
