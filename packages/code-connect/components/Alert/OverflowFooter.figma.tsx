import figma from '@figma/code-connect';
import { AlertGroup } from '@patternfly/react-core';

figma.connect(
  AlertGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2784',
  {
    props: {
      // strings
      overflowMessage: figma.string('✏️ Title'),

      alertGroupOverflowContent: `{alerts.slice(0, maxDisplayed).map(({ key, variant, title }) => (
          <Alert
            variant={AlertVariant[variant]}
            title={title}
            actionClose={
              <AlertActionsCloseButton
                title={title as string}
                variantLabel={${variant} alert}
                onClose={() => removeAlert(key)}
              />
            }
            key={key}
          />
        ))}`
    },
    example: (props) => (
      // const alertGroupOverflowContent = {
      //   maxDisplayed: 4,
      //   alerts: [
      //     { key: '1', variant: 'info', title: 'Info alert' },
      //     { key: '2', variant: 'success', title: 'Success alert' },
      //     { key: '3', variant: 'warning', title: 'Warning alert' },
      //     { key: '4', variant: 'danger', title: 'Danger alert' }
      //   ]
      // };

      // Documentation for Alert can be found at https://www.patternfly.org/components/alert
      <AlertGroup>{props.alertGroupOverflowContent}</AlertGroup>
    )
  }
);
