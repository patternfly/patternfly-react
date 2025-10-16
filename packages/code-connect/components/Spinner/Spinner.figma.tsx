import figma from '@figma/code-connect';
import { Spinner } from '@patternfly/react-core';

// Documentation for Spinner can be found at https://www.patternfly.org/components/spinner

figma.connect(Spinner, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=790-332', {
  props: {
    // enum
    size: figma.enum('Size', {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
      xl: 'xl'
    })
  },
  example: (props) => <Spinner aria-label="Loading..." size={props.size} />
});
