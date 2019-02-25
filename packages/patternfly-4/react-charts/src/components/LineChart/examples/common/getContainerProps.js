import { css, StyleSheet } from '@patternfly/react-styles';

const styles = StyleSheet.create({
  demoLayout: {
    '& > *': {
      '.chart-container': {
        height: '250px',
        width: '300px'
      },
      '.chart-margin': {
        marginBottom: '30px',
        marginLeft: '40px'
      },
      '.chart-inline': {
        display: 'inline-flex'
      },
      '.chart-legend': {
        marginTop: '30px'
      },
      '.chart-overflow': {
        '& svg': {
          overflow: 'visible'
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
