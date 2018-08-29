import { StyleSheet } from '@patternfly/react-styles';
import {
  global_spacer_sm as spacerSm,
  global_spacer_xs as spacerXs,
  global_spacer_xl as spacerXl,
  global_Color_dark_100 as itemColor,
  global_BackgroundColor_300 as bgColorHover
} from '@patternfly/react-tokens';

export default StyleSheet.create({
  navigationItem: {
    padding: `${spacerSm.var} ${spacerXs.var} ${spacerSm.var} ${spacerXl.var}`,
    display: 'block',
    color: itemColor.var,
    textDecoration: 'none',
    ':hover,:focus': {
      backgroundColor: bgColorHover.var,
      textDecoration: 'none'
    }
  },
  active: {
    backgroundColor: bgColorHover.var
  }
});
