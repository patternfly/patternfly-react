import React from 'react';

import { Button } from '@patternfly/react-core';
import { Wizard, WizardStep } from '@patternfly/react-core/next';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import SlackHashIcon from '@patternfly/react-icons/dist/esm/icons/slack-hash-icon';

export const WizardWithNavAnchors: React.FunctionComponent = () => (
  <Wizard height={400} title="Anchor link wizard">
    <WizardStep
      name={
        <>
          <ExternalLinkAltIcon /> PF3
        </>
      }
      id="navanchors-pf3-step"
      navItem={{ component: 'a', href: 'https://www.patternfly.org/v3', target: '_blank' }}
    >
      Step 1: Read about PF3
    </WizardStep>
    <WizardStep
      name={
        <>
          <ExternalLinkAltIcon /> PF4
        </>
      }
      id="navanchors-pf4-step"
      navItem={{ component: 'a', href: 'https://www.patternfly.org/v4', target: '_blank' }}
    >
      Step 2: Read about PF4
    </WizardStep>
    <WizardStep
      name={
        <>
          <SlackHashIcon /> Join us on slack
        </>
      }
      id="navanchors-slack-step"
      navItem={{ component: 'a', href: 'https://patternfly.slack.com', target: '_blank' }}
    >
      <Button variant="link" component="a" target="_blank" href="https://patternfly.slack.com">
        Join the conversation
      </Button>
    </WizardStep>
  </Wizard>
);
