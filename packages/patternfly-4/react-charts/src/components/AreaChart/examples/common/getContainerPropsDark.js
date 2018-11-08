/* eslint-disable camelcase */
import {
  global_BackgroundColor_dark_100,
  global_Color_light_100
} from '@patternfly/react-tokens';
import { css, StyleSheet } from '@patternfly/react-styles';

const styles = StyleSheet.create({
  demoLayout: {
    backgroundColor: global_BackgroundColor_dark_100.value,
    backgroundImage: 'url("/assets/images/pfbg_1200.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    '& > *': {
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
        color: global_Color_light_100.value,
        marginBottom: '25px',
        marginLeft: '10px'
      }
    }
  }
});

export default () => ({ className: css(styles.demoLayout) });
