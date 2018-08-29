import { css, StyleSheet } from '@patternfly/react-styles';

const styles = StyleSheet.create({
  demoLayout: {
    '& > *': {
      margin: '0.5rem'
    }
  }
});

export default () => ({ className: css(styles.demoLayout) });
