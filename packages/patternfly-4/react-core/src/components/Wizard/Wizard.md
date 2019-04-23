---
title: 'Wizard'
cssPrefix: 'pf-c-wizard'
---

import { Alert, Button, Wizard, WizardFooter, WizardContextConsumer } from '@patternfly/react-core';
import FinishedStep from './examples/FinishedStep';
import SampleForm from './examples/SampleForm';

### Simple Wizard
```js
import React from 'react';
import { Button, Wizard } from '@patternfly/react-core';

class SimpleWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleOpen = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { isOpen } = this.state;

    const steps = [
      { name: 'Step 1', component: <p>Step 1</p> },
      { name: 'Step 2', component: <p>Step 2</p> },
      { name: 'Step 3', component: <p>Step 3</p> },
      { name: 'Step 4', component: <p>Step 4</p> },
      { name: 'Review', component: <p>Review Step</p>, nextButtonText: 'Finish' }
    ];

    return (
      <React.Fragment>
        <Button variant="primary" onClick={this.toggleOpen}>
          Show Wizard
        </Button>
        {isOpen && (
          <Wizard
            isOpen={isOpen}
            onClose={this.toggleOpen}
            title="Simple Wizard"
            description="Simple Wizard Description"
            steps={steps}
          />
        )}
      </React.Fragment>
    );
  }
}
```