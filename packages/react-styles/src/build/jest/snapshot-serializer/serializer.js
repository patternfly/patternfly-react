import { getSelectors, getStyles } from './cssUtils';
import { getNodes } from './reactUtils';
import { getBufferedStyles } from '../../../inject';

export function createSerializer() {
  function test(val) {
    return (
      val && !val.withStyles && val.$$typeof === Symbol.for('react.test.json')
    );
  }

  function print(val, printer) {
    const nodes = getNodes(val);
    nodes.forEach(node => {
      node.withStyles = true;
    });

    const selectors = getSelectors(nodes);
    const styles = getStyles(selectors, getBufferedStyles);
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
