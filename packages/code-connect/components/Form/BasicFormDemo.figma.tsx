import figma from '@figma/code-connect';
import { Form } from '@patternfly/react-core';

// Documentation for Form can be found at https://www.patternfly.org/components/form

figma.connect(Form, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=1577-2965', {
  props: {
    // topAlert: figma.boolean('Top alert'),
    children: figma.children('*')
  },
  example: (props) => <Form>{props.children}</Form>
});
