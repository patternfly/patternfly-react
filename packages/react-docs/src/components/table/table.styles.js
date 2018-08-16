import { StyleSheet } from '@patternfly/react-styles';
import {
  global_FontSize_sm as fontSizeSm,
  global_spacer_sm as spacerSm,
  global_spacer_md as spacerMd,
  global_BorderWidth_sm as borderWidth,
  global_BorderColor_light as borderColor
} from '@patternfly/react-tokens';

export default StyleSheet.create({
  table: {
    width: '100%',
    fontSize: fontSizeSm.var
  },
  row: {
    borderBottom: `${borderWidth.var} solid ${borderColor.var}`
  },
  cell: {
    padding: `${spacerSm.var} ${spacerMd.var}`
  },
  enumValues: {
    whiteSpace: 'pre'
  },
  leftAlign: {
    textAlign: 'left'
  },
  centerAlign: {
    textAlign: 'center'
  },
  rightAlign: {
    textAlign: 'right'
  }
});
