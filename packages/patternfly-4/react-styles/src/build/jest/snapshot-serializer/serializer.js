import { getSelectors, getStyles } from './cssUtils';
import { getNodes } from './reactUtils';
import { getInsertedStyles } from '../../../utils';
import { addOverrides } from './cssPropertyOverrides';

export function createSerializer({ globalCSS = '' } = {}) {
  addOverrides();
  function test(val) {
    return val && !val.withStyles && val.$$typeof === Symbol.for('react.test.json');
  }

  function print(val, printer) {
    const nodes = getNodes(val);
    nodes.forEach(node => {
      node.withStyles = true;
    });

    const selectors = getSelectors(nodes);
    const styles = getStyles(selectors, getInsertedStyles().join(''), globalCSS);
    const code = printer(val);
    if (styles) {
      return `${styles}\n\n${code}`;
    }
    return code;
  }

  return {
    test,
    print
  };
}

export default createSerializer();
