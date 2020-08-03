import { Button, Wizard, WizardStep } from '@patternfly/react-core';
import React from 'react';

interface WizardDemoState {
  isOpen: boolean;
}

export class WizardDemo extends React.Component<React.HTMLProps<HTMLDivElement>, WizardDemoState> {
  static displayName = 'WizardDemo';
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
    const stepsWithAnchorLinks: WizardStep[] = [
      {
        name: 'Read about PF3',
        component: <p>Step 1</p>,
        stepNavItemProps: { navItemComponent: 'a', href: 'https://www.patternfly.org/v3/', target: '_blank' }
      },
      {
        name: 'Read about PF4',
        component: <p>Step 2</p>,
        stepNavItemProps: { navItemComponent: 'a', href: 'https://www.patternfly.org/v4/', target: '_blank' }
      },
      {
        name: 'Review',
        component: <p>Step 3</p>,
        stepNavItemProps: { navItemComponent: 'button', href: 'hhttps://www.patternfly.org/v4/' }
      }
    ];
    return (
      <React.Fragment>
        <Button id="launchWiz" variant="primary" onClick={this.handleModalToggle}>
          Show Modal
        </Button>
        <Wizard
          title="Simple Wizard"
          description="Simple Wizard Description"
          steps={steps}
          startAtStep={1}
          id="modalWizId"
          onClose={this.handleModalToggle}
          isOpen={this.state.isOpen}
        />
        <Wizard
          title="Wizard title"
          description="Description here"
          id="inPageWizId"
          hideClose
          steps={steps}
          startAtStep={1}
          height={500}
        />
        <Wizard
          title="Wizard with anchor"
          description="This wizard uses anchor tags for the nav item elements"
          id="inPageWizWithAnchorsId"
          hideClose
          steps={stepsWithAnchorLinks}
          startAtStep={1}
          height={500}
        />
      </React.Fragment>
    );
  }
}
