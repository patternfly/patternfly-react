import { StyleSheet } from '@patternfly/react-styles';
import {
  global_spacer_md as spacerMd,
  global_BorderWidth_sm as borderWidth,
  global_BorderColor_dark as borderColor
} from '@patternfly/react-tokens';

export default StyleSheet.create({
  code: {
    'max-height': '37.5rem',
    overflow: 'auto'
  },
  toolbar: {
    borderLeft: `${borderWidth.var} solid ${borderColor.var}`,
    borderRight: `${borderWidth.var} solid ${borderColor.var}`,
    borderBottom: `${borderWidth.var} solid ${borderColor.var}`
  }
});
