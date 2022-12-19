import React from 'react';
import { Button, Wizard } from '@patternfly/react-core';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import SlackHashIcon from '@patternfly/react-icons/dist/esm/icons/slack-hash-icon';

export const WizardWithNavAnchors: React.FunctionComponent = () => {
  const steps = [
    {
      name: (
        <div>
          <ExternalLinkAltIcon /> PF3
        </div>
      ),
      component: <p>Step 1: Read about PF3</p>,
      stepNavItemProps: { navItemComponent: 'a', href: 'https://www.patternfly.org/v3/', target: '_blank' }
    },
    {
      name: (
        <div>
          <ExternalLinkAltIcon /> PF4
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
  return <Wizard navAriaLabel={`${title} steps`} mainAriaLabel={`${title} content`} steps={steps} height={400} />;
};
