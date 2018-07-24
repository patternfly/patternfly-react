import { css, StyleSheet } from '@patternfly/react-styles';

const styles = StyleSheet.create({
  demoLayout: {
    backgroundColor: '#fff',
    ':not(foobar) > span': {
      margin: '0.5rem'
    }
  }
});

export default () => ({ className: css(styles.demoLayout) });
