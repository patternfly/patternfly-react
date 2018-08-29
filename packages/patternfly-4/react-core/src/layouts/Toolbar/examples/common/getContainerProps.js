import { StyleSheet, css } from '@patternfly/react-styles';
import { global_BorderColor as borderColor, global_BorderWidth_md as borderWidth } from '@patternfly/react-tokens';

const toolbarClass = '.pf-l-toolbar';
const toolbarGroupClass = '.pf-l-toolbar__group';
const toolbarItemClass = '.pf-l-toolbar__item';

const GROUP_SELECTOR = `:not(foo) ${toolbarClass} ${toolbarGroupClass}`;
const ITEM_SELECTOR = `:not(foo) ${toolbarClass} ${toolbarItemClass}`;

const dashedWithPadding = {
  padding: '0.5rem',
  borderWidth: borderWidth.var,
  borderStyle: 'dashed',
  borderColor: borderColor.var
};

const styles = StyleSheet.create({
  demoLayout: {
    [GROUP_SELECTOR]: dashedWithPadding,
    [ITEM_SELECTOR]: dashedWithPadding
  }
});

export default () => ({ className: css(styles.demoLayout) });
