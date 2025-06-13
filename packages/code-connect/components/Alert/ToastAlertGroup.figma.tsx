import figma from '@figma/code-connect';
import { AlertGroup } from '@patternfly/react-core';

figma.connect(
  AlertGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2821',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for Alert can be found at https://www.patternfly.org/components/alert
      <AlertGroup hasAnimations isToast isLiveRegion>
        {props.children}
      </AlertGroup>
    )
  }
);
