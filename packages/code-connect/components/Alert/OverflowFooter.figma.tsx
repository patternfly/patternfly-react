import figma from '@figma/code-connect';
import { Alert, AlertActionCloseButton, AlertGroup } from '@patternfly/react-core';

// Documentation for Alert can be found at https://www.patternfly.org/components/alert

figma.connect(
  AlertGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2784',
  {
    props: {
      overflowMessage: figma.string('✏️ Title')
    },
    example: (props) => (
      <AlertGroup isLiveRegion hasAnimations onOverflowClick={() => {}} overflowMessage={props.overflowMessage}>
        <Alert
          variant="info"
          title="Alert one"
          actionClose={<AlertActionCloseButton title="Close alert" variantLabel="Alert one" onClose={() => {}} />}
          key={1}
        />
        <Alert
          variant="success"
          title="Alert two"
          actionClose={<AlertActionCloseButton title="Close alert" variantLabel="Alert two" onClose={() => {}} />}
          key={2}
        />
        <Alert
          variant="warning"
          title="Alert three"
          actionClose={<AlertActionCloseButton title="Close alert" variantLabel="Alert three" onClose={() => {}} />}
          key={3}
        />
        <Alert
          variant="danger"
          title="Alert four"
          actionClose={<AlertActionCloseButton title="Close alert" variantLabel="Alert four" onClose={() => {}} />}
          key={4}
        />
      </AlertGroup>
    )
  }
);
