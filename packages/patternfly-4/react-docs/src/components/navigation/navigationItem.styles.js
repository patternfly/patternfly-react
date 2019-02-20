import { StyleSheet } from '@patternfly/react-styles';
import {
  global_spacer_xs as spacerXs,
  global_spacer_sm as spacerSm,
  global_spacer_xl as spacerXl,
  global_spacer_3xl as spacer3Xl,
  global_Color_dark_100 as itemColor,
  global_BackgroundColor_300 as bgColorHover,
  global_BackgroundColor_200 as bgColorHover2,
  global_FontSize_xs as fontSizeXs,
  global_BorderRadius_lg as borderRadiusLg
} from '@patternfly/react-tokens';

export default StyleSheet.create({
  navigationItem: {
    padding: `${spacerXs.var} ${spacerXs.var} ${spacerXs.var} ${spacerXl.var}`,
    display: 'block',
    color: itemColor.var,
    textDecoration: 'none',
    ':hover,:focus': {
      backgroundColor: bgColorHover.var,
      textDecoration: 'none'
    }
  },
  secondaryList: {
    paddingBottom: spacerXs.var
  },
  navigationItemSecondary: {
    padding: `${spacerXs.var} ${spacerXs.var} ${spacerXs.var} ${spacer3Xl.var}`,
    display: 'block',
    color: itemColor.var,
    textDecoration: 'none',
    ':hover': {
      backgroundColor: bgColorHover2.var,
      textDecoration: 'none'
    },
    fontSize: fontSizeXs.var
  },
  active: {
    backgroundColor: bgColorHover.var
  },
  pkgLabel: `
    background-color: ${bgColorHover.var};
    float: right;
    margin-top: -25px;
    margin-right: 10px;
    font-size: ${fontSizeXs.var};
    padding: 0 ${spacerSm.var};
    border-radius: ${borderRadiusLg.var};
  `
});
