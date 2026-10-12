import { Button } from '@rh-felt/react-core';
import { Wizard as WizardDeprecated } from '@rh-felt/react-core/deprecated';
import RhMicronsExternalLinkIcon from '@rh-felt/react-icons/dist/esm/icons/rh-microns-external-link-icon';
import SlackHashIcon from '@rh-felt/react-icons/dist/esm/icons/slack-hash-icon';

export const WizardWithNavAnchors: React.FunctionComponent = () => {
  const steps = [
    {
      name: (
        <div>
          <RhMicronsExternalLinkIcon /> PF3
        </div>
      ),
      component: <p>Step 1: Read about PF3</p>,
      stepNavItemProps: { navItemComponent: 'a', href: 'https://www.patternfly.org/v3/', target: '_blank' }
    },
    {
      name: (
        <div>
          <RhMicronsExternalLinkIcon /> PF4
        </div>
      ),
      component: <p>Step 2: Read about PF4</p>,
      stepNavItemProps: { navItemComponent: 'a', href: 'https://www.patternfly.org/v4/', target: '_blank' }
    },
    {
      name: (
        <div>
          <SlackHashIcon /> Join us on slack
        </div>
      ),
      component: (
        <Button variant="link" component="a" target="_blank" href="https://patternfly.slack.com/">
          Join the conversation
        </Button>
      ),
      stepNavItemProps: { navItemComponent: 'a', href: 'https://patternfly.slack.com/', target: '_blank' }
    }
  ];
  const title = 'Anchor link wizard example';
  return (
    <WizardDeprecated navAriaLabel={`${title} steps`} mainAriaLabel={`${title} content`} steps={steps} height={400} />
  );
};
