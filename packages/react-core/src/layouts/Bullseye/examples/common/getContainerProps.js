import { StyleSheet, css } from '@patternfly/react-styles';
import { global_BorderColor as borderColor, global_BorderWidth_md as borderWidth } from '@patternfly/react-tokens';

const bullseyeClass = '.pf-l-bullseye';

const styles = StyleSheet.create({
  demoLayout: {
    [`:not(foo) ${bullseyeClass}`]: {
      height: 250,
      borderWidth: borderWidth.var,
      borderStyle: 'dashed',
      borderColor: borderColor.var
    },
    [`:not(foo) ${bullseyeClass} > div`]: {
      borderWidth: borderWidth.var,
      borderStyle: 'dashed',
      borderColor: borderColor.var
    }
  }
});

export default () => ({ className: css(styles.demoLayout) });
