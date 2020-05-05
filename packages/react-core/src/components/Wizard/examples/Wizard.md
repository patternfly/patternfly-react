---
title: 'Wizard'
section: components
cssPrefix: 'pf-c-wizard'
typescript: true
propComponents: ['Wizard', 'WizardNav', 'WizardNavItem', 'WizardHeader', 'WizardBody', 'WizardFooter', 'WizardToggle']
---

import { Button, Wizard, WizardFooter, WizardContextConsumer, ModalVariant, Alert } from '@patternfly/react-core';
import FinishedStep from './FinishedStep';
import SampleForm from './SampleForm';

## Examples
```js title=Basic
import React from 'react';
import { Button, Wizard } from '@patternfly/react-core';

class SimpleWizard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const steps = [
      { name: 'Step 1', component: <p>Step 1</p> },
      { name: 'Step 2', component: <p>Step 2</p> },
      { name: 'Step 3', component: <p>Step 3</p> },
      { name: 'Step 4', component: <p>Step 4</p> },
      { name: 'Review', component: <p>Review Step</p>, nextButtonText: 'Finish' }
    ];

    return (
      <Wizard
        steps={steps}
        height={400}
      />
    );
  }
}
```

```js title=Incrementally-enabled-steps
import React from 'react';
import { Button, Wizard } from '@patternfly/react-core';

class DisabledStepsWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepIdReached: 1
    };
    this.onNext = ({ id }) => {
      this.setState({
        stepIdReached: this.state.stepIdReached < id ? id : this.state.stepIdReached
      });
    };
    this.closeWizard = () => {
      console.log("close wizard");
    }
  }

  render() {
    const { stepIdReached } = this.state;

    const steps = [
      { id: 1, name: 'Step 1', component: <p>Step 1</p> },
      { id: 2, name: 'Step 2', component: <p>Step 2</p>, canJumpTo: stepIdReached >= 2 },
      { id: 3, name: 'Step 3', component: <p>Step 3</p>, canJumpTo: stepIdReached >= 3 },
      { id: 4, name: 'Step 4', component: <p>Step 4</p>, canJumpTo: stepIdReached >= 4 },
      { id: 5, name: 'Review', component: <p>Review Step</p>, nextButtonText: 'Finish', canJumpTo: stepIdReached >= 5 }
    ];

    return (
      <Wizard
        onClose={this.closeWizard}
        steps={steps}
        onNext={this.onNext}
        height={400}
      />
    );
  }
}
```

```js title=Finished
import React from 'react';
import { Button, Wizard } from '@patternfly/react-core';
import FinishedStep from './examples/FinishedStep';

class FinishedStepWizard extends React.Component {
  constructor(props) {
    super(props);
    
    this.closeWizard = () => {
      console.log("close wizard");
    }
  }

  render() {

    const steps = [
      { name: 'Step 1', component: <p>Step 1</p> },
      { name: 'Step 2', component: <p>Step 2</p> },
      { name: 'Step 3', component: <p>Step 3</p> },
      { name: 'Step 4', component: <p>Step 4</p> },
      { name: 'Review', component: <p>Review Step</p>, nextButtonText: 'Finish' },
      { name: 'Finish', component: <FinishedStep onClose={this.closeWizard} />, isFinishedStep: true }
    ];

    return (
      <Wizard
        onClose={this.closeWizard}
        steps={steps}
        height={400}
      />
    );
  }
}
```

```js title=Enabled-on-form-validation
import React from 'react';
import { Button, Wizard, Form, FormGroup, TextInput } from '@patternfly/react-core';
import SampleForm from './examples/SampleForm';

class ValidationWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormValid: false,
      formValue: 'Thirty',
      allStepsValid: false,
      stepIdReached: 1
    };
    
    this.closeWizard = () => {
      console.log("close wizard");
    }

    this.onFormChange = (isValid, value) => {
      this.setState(
        {
          isFormValid: isValid,
          formValue: value
        },
        this.areAllStepsValid
      );
    };

    this.areAllStepsValid = () => {
      this.setState({
        allStepsValid: this.state.isFormValid
      });
    };

    this.onNext = ({ id, name }, { prevId, prevName }) => {
      console.log(`current id: ${id}, current name: ${name}, previous id: ${prevId}, previous name: ${prevName}`);
      this.setState({
        stepIdReached: this.state.stepIdReached < id ? id : this.state.stepIdReached
      });
      this.areAllStepsValid();
    };

    this.onBack = ({ id, name }, { prevId, prevName }) => {
      console.log(`current id: ${id}, current name: ${name}, previous id: ${prevId}, previous name: ${prevName}`);
      this.areAllStepsValid();
    };

    this.onGoToStep = ({ id, name }, { prevId, prevName }) => {
      console.log(`current id: ${id}, current name: ${name}, previous id: ${prevId}, previous name: ${prevName}`);
    };

    this.onSave = () => {
      console.log('Saved and closed the wizard');
      this.setState({
        isOpen: false
      });
    };
  }

  render() {
    const { isFormValid, formValue, allStepsValid, stepIdReached } = this.state;

    const steps = [
      { id: 1, name: 'Information', component: <p>Step 1</p> },
      {
        name: 'Configuration',
        steps: [
          {
            id: 2,
            name: 'Substep A with validation',
            component: (
              <SampleForm formValue={formValue} isFormValid={isFormValid} onChange={this.onFormChange} />
            ),
            enableNext: isFormValid,
            canJumpTo: stepIdReached >= 2
          },
          { id: 3, name: 'Substep B', component: <p>Substep B</p>, canJumpTo: stepIdReached >= 3 }
        ]
      },
      { id: 4, name: 'Additional', component: <p>Step 3</p>, enableNext: allStepsValid, canJumpTo: stepIdReached >= 4 },
      { id: 5, name: 'Review', component: <p>Step 4</p>, nextButtonText: 'Close', canJumpTo: stepIdReached >= 5 }
    ];

    return (
      <Wizard
        onClose={this.closeWizard}
        onSave={this.onSave}
        steps={steps}
        onNext={this.onNext}
        onBack={this.onBack}
        onGoToStep={this.onGoToStep}
        height={400}
      />
    );
  }
}
```

```js title=Validate-on-button-press
import React from 'react';
import { Button, Wizard, WizardFooter, WizardContextConsumer, Alert } from '@patternfly/react-core';
import SampleForm from './examples/SampleForm';
import FinishedStep from './examples/FinishedStep';

class ValidateButtonPressWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepsValid: 0
    };
    
    this.closeWizard = () => {
      console.log("close wizard");
    }
    
    this.validateLastStep = onNext => {
      const { stepsValid } = this.state;
      if (stepsValid !== 1) {
        this.setState({
          stepsValid: 1
        });
      } else {
        onNext();
      }
    };
  }

  render() {
    const { stepsValid } = this.state;

    const steps = [
      { name: 'Step 1', component: <p>Step 1</p> },
      { name: 'Step 2', component: <p>Step 2</p> },
      {
        name: 'Final Step',
        component: (
          <>
            {stepsValid === 1 && <div style={{padding: '15px 0'}}><Alert variant="warning" title="Validation failed, please try again" /></div>}
            <SampleForm formValue="Validating on button press" isFormValid={stepsValid !== 1} />
          </>
        )
      },
      { name: 'Finish', component: <FinishedStep onClose={this.closeWizard} />, isFinishedStep: true }
    ];

    const CustomFooter = (
      <WizardFooter>
        <WizardContextConsumer>
          {({ activeStep, goToStepByName, goToStepById, onNext, onBack, onClose }) => {
            if (activeStep.name !== 'Final Step') {
              return (
                <>
                  <Button variant="primary" type="submit" onClick={onNext}>
                    Forward
                  </Button>
                  <Button variant="secondary" onClick={onBack} className={activeStep.name === 'Step 1' ? 'pf-m-disabled' : ''}>
                    Backward
                  </Button>
                  <Button variant="link" onClick={onClose}>
                    Cancel
                  </Button>
                </>
              )
            }
            // Final step buttons
            return (
              <>
                <Button onClick={() => this.validateLastStep(onNext)}>Validate</Button>
                <Button onClick={() => goToStepByName('Step 1')}>Go to Beginning</Button>
              </>
            )}}
        </WizardContextConsumer>
      </WizardFooter>
    );

    return (
      <Wizard
        onClose={this.closeWizard}
        footer={CustomFooter}
        steps={steps}
        height={400}
      />
    );
  }
}
```

```js title=Progressive-steps
import React from 'react';
import { Button, Radio, Wizard, WizardFooter, WizardContextConsumer, Alert } from '@patternfly/react-core';
import SampleForm from './examples/SampleForm';
import FinishedStep from './examples/FinishedStep';

class ProgressiveWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreateStep: false,
      showUpdateStep: false,
      showOptionsStep: false,
      showReviewStep: false,
      getStartedStepRadio: 'Create',
      createStepRadio: 'Quick',
      updateStepRadio: 'Quick'
    };
    this.closeWizard = () => {
      console.log("close wizard");
    }
    this.onGoToStep = ({ id, name }, { prevId, prevName }) => {
      // Remove steps after the currently clicked step
      if (name === 'Get Started') {
        this.setState({
          showReviewStep: false,
          showOptionsStep: false,
          showCreateStep: false,
          showUpdateStep: false
        });
      } else if (name === 'Create Options' || name === 'Update Options') {
        this.setState({
          showReviewStep: false,
          showOptionsStep: false
        });
      } else if (name.indexOf('Substep') > -1) {
        this.setState({
          showReviewStep: false
        });
      }
    };
    this.getNextStep = (activeStep, callback) => {
      if (activeStep.name === 'Get Started') {
        if (this.state.getStartedStepRadio === 'Create') {
          this.setState({
            showCreateStep: true,
            showUpdateStep: false,
            showOptionsStep: false,
            showReviewStep: false
          }, () => {
            callback();
          });
        } else {
          this.setState({
            showCreateStep: false,
            showUpdateStep: true,
            showOptionsStep: false,
            showReviewStep: false
          }, () => {
            callback();
          });
        }
      } else if (activeStep.name === 'Create Options' || activeStep.name === 'Update Options') {
        this.setState({
          showOptionsStep: true,
          showReviewStep: false
        }, () => {
          callback();
        });
      } else if (activeStep.name === 'Substep 3') {
        this.setState({
          showReviewStep: true
        }, () => {
          callback();
        });
      } else {
        callback();
      }
    };
    this.getPreviousStep = (activeStep, callback) => {
      if (activeStep.name === 'Review') {
        this.setState({
          showReviewStep: false
        }, () => {
          callback();
        });
      } else if (activeStep.name === 'Substep 1') {
        this.setState({
          showOptionsStep: false
        }, () => {
          callback();
        });
      } else if (activeStep.name === 'Create Options') {
        this.setState({
          showCreateStep: false
        }, () => {
          callback();
        });
      } else if (activeStep.name === 'Update Options') {
        this.setState({
          showUpdateStep: false
        }, () => {
          callback();
        });
      } else {
        callback();
      }
    };
  }

  render() {
    const {
      stepsValid,
      getStartedStepRadio,
      createStepRadio,
      updateStepRadio,
      showCreateStep,
      showUpdateStep,
      showOptionsStep,
      showReviewStep
    } = this.state;

    const getStartedStep = {
      name: 'Get Started',
      component: (
        <div>
          <Radio
            value="Create"
            isChecked={getStartedStepRadio === 'Create'}
            onChange={(_, event) => this.setState({ getStartedStepRadio: event.currentTarget.value })}
            label="Create a new thing"
            name="radio-step-start"
            id="radio-step-start-1"
          />{' '}
          <Radio
            value="Update"
            isChecked={getStartedStepRadio === 'Update'}
            onChange={(_, event) => this.setState({ getStartedStepRadio: event.currentTarget.value })}
            label="Update an existing thing"
            name="radio-step-start"
            id="radio-step-start-2"
          />
        </div>
      )
    };

    const createStep = {
      name: 'Create Options',
      component: (
        <div>
          <Radio
            value="Quick"
            isChecked={createStepRadio === 'Quick'}
            onChange={(_, event) => this.setState({ createStepRadio: event.currentTarget.value })}
            label="Quick Create"
            name="radio-step-create"
            id="radio-step-create-1"
          />{' '}
          <Radio
            value="Custom"
            isChecked={createStepRadio === 'Custom'}
            onChange={(_, event) => this.setState({ createStepRadio: event.currentTarget.value })}
            label="Custom Create"
            name="radio-step-create"
            id="radio-step-create-2"
          />
        </div>
      )
    };

    const updateStep = {
      name: 'Update Options',
      component: (
        <div>
          <Radio
            value="Quick"
            isChecked={updateStepRadio === 'Quick'}
            onChange={(_, event) => this.setState({ updateStepRadio: event.currentTarget.value })}
            label="Quick Update"
            name="radio-step-update"
            id="radio-step-update-1"
          />{' '}
          <Radio
            value="Custom"
            isChecked={updateStepRadio === 'Custom'}
            onChange={(_, event) => this.setState({ updateStepRadio: event.currentTarget.value })}
            label="Custom Update"
            name="radio-step-update"
            id="radio-step-update-2"
          />
        </div>
      )
    };

    const optionsStep = {
      name: showCreateStep ? `${createStepRadio} Options` : `${updateStepRadio} Options`,
      steps: [
        {
          name: 'Substep 1',
          component: 'Substep 1'
        },
        {
          name: 'Substep 2',
          component: 'Substep 2'
        },
        {
          name: 'Substep 3',
          component: 'Substep 3'
        }
      ]
    };

    const reviewStep = {
      name: 'Review',
      component: (
        <div>
          <div>First choice: {getStartedStepRadio}</div>
          <div>Second choice: {showCreateStep ? createStepRadio : updateStepRadio}</div>
        </div>
      )
    };

    const steps = [
      getStartedStep,
      ...(showCreateStep ? [createStep] : []),
      ...(showUpdateStep ? [updateStep] : []),
      ...(showOptionsStep ? [optionsStep] : []),
      ...(showReviewStep ? [reviewStep] : []),
    ];

    const CustomFooter = (
      <WizardFooter>
        <WizardContextConsumer>
          {({ activeStep, goToStepByName, goToStepById, onNext, onBack, onClose }) => {
            return (
              <>
                <Button variant="primary" type="submit" onClick={() => this.getNextStep(activeStep, onNext)}>
                  {activeStep.name === 'Review' ? 'Finish' : 'Next'}
                </Button>
                <Button variant="secondary" onClick={() => this.getPreviousStep(activeStep, onBack)} className={activeStep.name === 'Get Started' ? 'pf-m-disabled' : ''}>
                  Back
                </Button>
                <Button variant="link" onClick={onClose}>
                  Cancel
                </Button>
              </>
            )}}
        </WizardContextConsumer>
      </WizardFooter>
    );

    return (
      <Wizard
        onClose={this.closeWizard}
        footer={CustomFooter}
        onGoToStep={this.onGoToStep}
        steps={steps}
        height={400}
      />
    );
  }
}
```

```js title=Remember-last-step
import React from 'react';
import { Button, Wizard } from '@patternfly/react-core';

class SimpleWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
    this.closeWizard = () => {
      console.log("close wizard");
    }
    this.onMove = (curr, prev) => {
      this.setState({
        step: curr.id
      });
    }
    this.onSave = () => {
      this.setState({
        step: 1,
      })
    }
  }

  render() {
    const { step } = this.state;

    const steps = [
      { id: 1, name: 'Step 1', component: <p>Step 1</p> },
      { id: 2, name: 'Step 2', component: <p>Step 2</p> },
      { id: 3, name: 'Step 3', component: <p>Step 3</p> },
      { id: 4, name: 'Step 4', component: <p>Step 4</p> },
      { id: 5, name: 'Review', component: <p>Review Step</p>, nextButtonText: 'Finish' }
    ];

    return (
      <Wizard
        startAtStep={step}
        onNext={this.onMove}
        onBack={this.onMove}
        onSave={this.onSave}
        onClose={this.closeWizard}
        description="Simple Wizard Description"
        steps={steps}
        height={400}
      />
    );
  }
}
```
```js title=Wizard-in-modal
import React from 'react';
import { Button, Wizard } from '@patternfly/react-core';

class WizardInModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleModalToggle = () => {
      this.setState(({ isOpen }) => ({
        isOpen: !isOpen
      }));
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
        <Button variant="primary" onClick={this.handleModalToggle}>
          Show Modal
        </Button>
        <Wizard
          title="Simple Wizard"
          description="Simple Wizard Description"
          steps={steps}
          onClose={this.handleModalToggle}
          isOpen={isOpen}
        />
      </React.Fragment>
    );
  }
}
```

