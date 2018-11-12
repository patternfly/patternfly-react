import { StyleSheet } from '@patternfly/react-styles';
import {
  global_spacer_lg as spacerLg,
  global_spacer_md as spacerMd,
  global_spacer_sm as spacerSm
} from '@patternfly/react-tokens';

export default StyleSheet.create({
  section: {
    marginBottom: spacerLg.var
  },
  header: {
    marginBottom: spacerMd.var
  },
  preface: {
    marginTop: spacerSm.var,
    marginBottom: spacerSm.var
  }
});
