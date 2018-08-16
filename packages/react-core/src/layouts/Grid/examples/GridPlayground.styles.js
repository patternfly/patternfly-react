import { StyleSheet } from '@patternfly/react-styles';
import {
  global_BorderColor as borderColor,
  global_BorderWidth_md as borderWidth,
  global_spacer_xs as padding
} from '@patternfly/react-tokens';

export default StyleSheet.create({
  item: {
    minHeight: 75,
    padding: padding.var,
    border: `${borderWidth.var} dashed ${borderColor.var}`
  },
  controlPanel: {
    position: 'relative',
    minHeight: 400
  },
  controlList: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: 'auto'
  }
});
