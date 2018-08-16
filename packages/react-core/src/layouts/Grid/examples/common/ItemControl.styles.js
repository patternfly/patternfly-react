import { StyleSheet } from '@patternfly/react-styles';
import {
  global_BorderColor as borderColor,
  global_BorderWidth_sm as borderWidth,
  global_spacer_xs as spacer,
  global_FontSize_xs as fontSize
} from '@patternfly/react-tokens';

export default StyleSheet.create({
  itemControl: {
    fontSize: fontSize.var,
    padding: spacer.var,
    border: `${borderWidth.var} solid ${borderColor.var}`,
    marginBottom: spacer.var
  },
  label: {
    fontSize: fontSize.var
  },
  value: {
    fontSize: fontSize.var,
    textAlign: 'center'
  },
  rangeInput: {
    width: '100%'
  }
});
