import { Wizard, WizardStep } from '@patternfly/react-core';
import React, { Component } from 'react';

class WizardTest extends Component {
  render() {
    const steps: WizardStep[] = [
      { name: 'A', component: <p>Step 1</p> },
      {
        name: 'B',
        steps: [
          {
            name: 'B-1',
            component: <p>Step 2</p>,
            enableNext: true
          },
          {
            name: 'B-2',
            component: <p>Step 3</p>,
            enableNext: false,
            canJumpTo: false
          }
        ]
      },
      { name: 'C', component: <p>Step 4</p> },
      { name: 'D', component: <p>Step 5</p> }
    ];
    return (
      <Wizard
        isOpen
        title="Wizard title"
        description="Description here"
        steps={steps}
        startAtStep={1}

      />
    );
  }
}

export default WizardTest;
