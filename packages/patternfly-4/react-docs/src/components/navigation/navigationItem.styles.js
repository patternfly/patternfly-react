import { StyleSheet } from '@patternfly/react-styles';
import {
  global_spacer_sm as spacerSm,
  global_spacer_xs as spacerXs,
  global_spacer_xl as spacerXl,
  global_spacer_3xl as spacer3Xl,
  global_Color_dark_100 as itemColor,
  global_BackgroundColor_300 as bgColorHover,
  global_BackgroundColor_200,
  global_FontSize_sm,
  global_FontSize_xs,
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
  navigationItemSecondary: {
    padding: `${spacerXs.var} ${spacerXs.var} ${spacerXs.var} ${spacer3Xl.var}`,
    display: 'block',
    color: itemColor.var,
    textDecoration: 'none',
    ':hover': {
      backgroundColor: global_BackgroundColor_200.var,
      textDecoration: 'none'
    },
    fontSize: global_FontSize_xs.var
  },
  active: {
    backgroundColor: bgColorHover.var
  },
  badge: {
    float: 'right',
    marginTop: '-30px !important',
    marginRight: '10px !important'
  }
});
