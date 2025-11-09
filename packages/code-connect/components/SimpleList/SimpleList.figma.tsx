import figma from '@figma/code-connect';
import { SimpleList } from '@patternfly/react-core';

// Documentation for SimpleList can be found at https://www.patternfly.org/components/simple-list

figma.connect(
  SimpleList,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=4410-20691',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <SimpleList aria-label="Simple list example">{props.children}</SimpleList>
  }
);
