import { Button, Wizard, WizardStep } from '@patternfly/react-core';
import React from 'react';

interface WizardDemoState {
  isOpen: boolean;
}

export class WizardDemo extends React.Component<React.HTMLProps<HTMLDivElement>, WizardDemoState> {
  state = {
    isOpen: false
  };

  handleModalToggle = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
      <React.Fragment>
        <Button variant="primary" onClick={this.handleModalToggle}>
          Show Modal
        </Button>
        <Wizard
          title="Simple Wizard"
          description="Simple Wizard Description"
          steps={steps}
          startAtStep={1}
          onClose={this.handleModalToggle}
          isOpen={this.state.isOpen}
        />
        <Wizard
          title="Wizard title"
          description="Description here"
          hideClose
          steps={steps}
          startAtStep={1}
          height={500}
        />
      </React.Fragment>
    );
  }
}
