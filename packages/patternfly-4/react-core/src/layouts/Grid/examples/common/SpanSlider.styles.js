import { StyleSheet } from '@patternfly/react-styles';
import {
  global_FontSize_xs as fontSize,
  global_LineHeight_sm as lineHeight,
  global_spacer_xs as marginBottom
} from '@patternfly/react-tokens';

export default StyleSheet.create({
  spanSlider: {
    marginBottom: marginBottom.var
  },
  label: {
    fontSize: fontSize.var,
    lineHeight: lineHeight.var
  },
  value: {
    fontSize: fontSize.var,
    textAlign: 'center'
  },
  rangeInput: {
    width: '100%'
  }
});
