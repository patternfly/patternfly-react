import { StyleSheet } from '@patternfly/react-styles';
import {
  global_FontSize_xs as fontSizeXs,
  global_spacer_sm as spacerSm,
  global_spacer_xs as spacerXs,
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
    overflowY: 'auto',
    backgroundColor: navBackgroundColor.var
  },
  logo: {
    textAlign: 'center',
    margin: `${spacerMd.var} 0`,
    padding: `0 ${spacerMd.var}`
  },
  search: {
    margin: spacerMd.var
  },
  input: {
    padding: `${spacerSm.var} ${spacerXs.var}`,
    width: '100%',
    border: 'none',
    fontSize: fontSizeXs.var
  }
});
