import { StyleSheet } from '@patternfly/react-styles';
import {
  global_FontSize_lg as fontSizeLg,
  global_spacer_md as spacerMd,
  global_BackgroundColor_100 as navBackgroundColor,
  c_nav_Width as sidebarWidth
} from '@patternfly/react-tokens';

export default StyleSheet.create({
  navigation: {
    width: sidebarWidth.value
  },
  navigationContent: {
    position: 'fixed',
    width: 'inherit',
    height: '100vh',
    overflowY: 'scroll',
    backgroundColor: navBackgroundColor.var
  },
  logo: {
    textAlign: 'center',
    margin: `${spacerMd.var} 0`,
    padding: `0 ${spacerMd.var}`
  },
  search: `
    &.pf-c-form {
      margin: ${spacerMd.var} 0;
      padding: 0 ${spacerMd.var};
    }
    .pf-c-form__label {
      --pf-c-form__label--FontSize: ${fontSizeLg.var};
    }
  `,
  collapseExpandButtons: `
    text-align: right;
  `,
  collapseExpandButton: `
    padding-right: 5px;
  `,
  collapseExpandIcon: `
    vertical-align: -3px;
  `
});
