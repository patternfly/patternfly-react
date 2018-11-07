import { css, StyleSheet } from '@patternfly/react-styles';

const styles = StyleSheet.create({
  demoLayout: {
    '& > *': {
      '.chart-container': {
        height: '200px',
        width: '200px'
      },
      '.chart-inline': {
        display: 'inline-flex'
      },
      '.chart-label': {
        position: 'absolute'
      },
      '.chart-title': {
        marginBottom: '25px',
        marginLeft: '10px'
      }
    }
  }
});

export default () => ({ className: css(styles.demoLayout) });
