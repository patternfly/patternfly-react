import { css, StyleSheet } from '@patternfly/react-styles';

const styles = StyleSheet.create({
  demoLayout: {
    '& > *': {
      '.chart-container': {
        height: '200px',
        width: '300px'
      },
      '.chart-margin': {
        marginBottom: '30px',
        marginLeft: '40px'
      },
      '.chart-overflow': {
        ':not(foo) svg': {
          overflow: 'visible'
        },
        ':not(foo) text': {
          fontSize: '12px',
          length: '12px'
        }
      },
      '.chart-title': {
        marginBottom: '25px',
        marginLeft: '10px'
      }
    }
  }
});

export default () => ({ className: css(styles.demoLayout) });
