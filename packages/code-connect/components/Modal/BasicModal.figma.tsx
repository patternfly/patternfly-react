import figma from '@figma/code-connect';
import { Modal } from '@patternfly/react-core';

figma.connect(
  Modal,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2937-158&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      size: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large'
      }),
      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for Modal can be found at https://www.patternfly.org/components/modal
      <Modal variant={props.size}>{props.children}</Modal>
    )
  }
);
