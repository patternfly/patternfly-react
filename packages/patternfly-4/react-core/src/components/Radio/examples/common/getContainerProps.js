import { css, StyleSheet } from '@patternfly/react-styles';

const styles = StyleSheet.create({
  demoLayout: {
    backgroundColor: '#fff'
  }
});

export default () => ({ className: css(styles.demoLayout) });
