import { StyleSheet } from '@patternfly/react-styles';
import {
  global_spacer_md as spacerMd,
  global_FontSize_sm as fontSizeSm,
  global_BackgroundColor_300 as bgColorHover
} from '@patternfly/react-tokens';

export default StyleSheet.create({
  title: {
    width: '100%',
    textAlign: 'left',
    backgroundColor: 'transparent',
    display: 'block',
    fontSize: fontSizeSm.var,
    border: 'none',
    cursor: 'pointer',
    padding: spacerMd.var,
    ':hover': {
      backgroundColor: bgColorHover.var
    },
    ':focus': {
      backgroundColor: bgColorHover.var
    }
  },
  items: {
    display: 'none'
  },
  itemsExpanded: {
    display: 'block'
  }
});
