import { StyleSheet, css } from '@patternfly/react-styles';
import { global_BorderColor as borderColor, global_BorderWidth_md as borderWidth } from '@patternfly/react-tokens';

const styles = StyleSheet.create({
  demoLayout: {
    '& .pf-l-level > div': {
      borderWidth: borderWidth.var,
      borderStyle: 'dashed',
      borderColor: borderColor.var
    }
  }
});

export default () => ({ className: css(styles.demoLayout) });
