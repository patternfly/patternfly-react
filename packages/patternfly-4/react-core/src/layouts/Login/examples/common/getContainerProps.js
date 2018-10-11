import { StyleSheet, css } from '@patternfly/react-styles';
import { global_BorderColor as borderColor, global_BorderWidth_md as borderWidth } from '@patternfly/react-tokens';

const styles = StyleSheet.create({
  demoLayout: {
    '& .pf-l-login > *': {
      borderWidth: borderWidth.var,
      borderStyle: 'dashed',
      borderColor: borderColor.var
    },
    '& .pf-l-login__container > *': {
      borderWidth: borderWidth.var,
      borderStyle: 'dashed',
      borderColor: borderColor.var
    },
    '& .pf-l-login__footer > *': {
      borderWidth: borderWidth.var,
      borderStyle: 'dashed',
      borderColor: borderColor.var
    },
    '& .pf-l-login__header > *': {
      borderWidth: borderWidth.var,
      borderStyle: 'dashed',
      borderColor: borderColor.var
    },
    '& .pf-l-login__header-brand > *': {
      borderWidth: borderWidth.var,
      borderStyle: 'dashed',
      borderColor: borderColor.var
    },
    '& .pf-l-login__main > *': {
      borderWidth: borderWidth.var,
      borderStyle: 'dashed',
      borderColor: borderColor.var
    }
  }
});

export default () => ({ className: css(styles.demoLayout) });
