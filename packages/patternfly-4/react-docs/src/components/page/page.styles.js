import { StyleSheet } from '@patternfly/react-styles';

export default StyleSheet.create({
  page: {
    display: 'flex',
    minHeight: '100%',
    width: '100%'
  },
  nav: {
    position: 'relative',
    flexShrink: 0
  },
  main: {
    position: 'relative',
    flex: '1 1 auto',
    overflowX: 'hidden'
  }
});
