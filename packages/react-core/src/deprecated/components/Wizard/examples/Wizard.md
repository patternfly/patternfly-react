---
id: Wizard
section: components
cssPrefix: pf-c-wizard
propComponents:
  ['Wizard', 'WizardNav', 'WizardNavItem', 'WizardHeader', 'WizardBody', 'WizardFooter', 'WizardToggle', 'WizardStep']
ouia: true
source: react-deprecated
---

import { Button, Drawer, DrawerActions, DrawerCloseButton, DrawerColorVariant,
DrawerContent, DrawerContentBody, DrawerHead, DrawerPanelContent, DrawerSection, ModalVariant, Alert, EmptyState, EmptyStateHeader, EmptyStateFooter, EmptyStateBody, EmptyStateActions, Title, Progress, Form, FormGroup, TextInput } from '@patternfly/react-core';
import { Wizard as WizardDeprecated, WizardFooter as WizardFooterDeprecated, WizardContextConsumer as WizardContextConsumerDeprecated } from '@patternfly/react-core/deprecated';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import SlackHashIcon from '@patternfly/react-icons/dist/esm/icons/slack-hash-icon';
import CogsIcon from '@patternfly/react-icons/dist/esm/icons/cogs-icon';


If you seek a wizard solution that allows for more composition, see the [React](/components/wizard) tab.

## Examples

### Basic

```js file="./WizardBasic.tsx"
```

### Basic with disabled steps

```js file="./WizardBasicWithDisabledSteps.tsx"
```

### Anchors for nav items

```js file="./WizardAnchorsForNavItems.tsx"
```

### Incrementally enabled steps

```js file="./WizardIncrementallyEnabledSteps.tsx"
```

### Expandable steps

```js file="./WizardExpandableSteps.tsx"
```

### Finished

```js file="./WizardFinished.tsx"
```

### Enabled on form validation

```js file="./WizardEnabledOnFormValidation.tsx"
```

### Validate on button press

This example demonstrates how to use the `WizardContextConsumer` to consume the `WizardContext`. `WizardContext` can be used to imperatively move to a specific wizard step.

The definition of the `WizardContext` is as follows:

```
interface WizardContext {
  goToStepById: (stepId: number | string) => void;
  goToStepByName: (stepName: string) => void;
  onNext: () => void;
  onBack: () => void;
  onClose: () => void;
  activeStep: WizardStep;
}
```

```js file="./WizardValidateOnButtonPress.tsx"
```

### Progressive steps

```js
import React from 'react';
import { Button, Radio, Alert } from '@patternfly/react-core';
import { Wizard as WizardDeprecated, WizardFooter as WizardFooterDeprecated, WizardContextConsumer as WizardContextConsumerDeprecated } from '@patternfly/react-core/deprecated'

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
      console.log('close wizard');
    };
    this.onGoToStep = ({ id, name }, { prevId, prevName }) => {
      // Remove steps after the currently clicked step
      if (name === 'Get started') {
        this.setState({
          showReviewStep: false,
          showOptionsStep: false,
          showCreateStep: false,
          showUpdateStep: false
        });
      } else if (name === 'Create options' || name === 'Update options') {
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
      if (activeStep.name === 'Get started') {
        if (this.state.getStartedStepRadio === 'Create') {
          this.setState(
            {
              showCreateStep: true,
              showUpdateStep: false,
              showOptionsStep: false,
              showReviewStep: false
            },
            () => {
              callback();
            }
          );
        } else {
          this.setState(
            {
              showCreateStep: false,
              showUpdateStep: true,
              showOptionsStep: false,
              showReviewStep: false
            },
            () => {
              callback();
            }
          );
        }
      } else if (activeStep.name === 'Create options' || activeStep.name === 'Update options') {
        this.setState(
          {
            showOptionsStep: true,
            showReviewStep: false
          },
          () => {
            callback();
          }
        );
      } else if (activeStep.name === 'Substep 3') {
        this.setState(
          {
            showReviewStep: true
          },
          () => {
            callback();
          }
        );
      } else {
        callback();
      }
    };
    this.getPreviousStep = (activeStep, callback) => {
      if (activeStep.name === 'Review') {
        this.setState(
          {
            showReviewStep: false
          },
          () => {
            callback();
          }
        );
      } else if (activeStep.name === 'Substep 1') {
        this.setState(
          {
            showOptionsStep: false
          },
          () => {
            callback();
          }
        );
      } else if (activeStep.name === 'Create options') {
        this.setState(
          {
            showCreateStep: false
          },
          () => {
            callback();
          }
        );
      } else if (activeStep.name === 'Update options') {
        this.setState(
          {
            showUpdateStep: false
          },
          () => {
            callback();
          }
        );
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
      name: 'Get started',
      component: (
        <div>
          <Radio
            value="Create"
            isChecked={getStartedStepRadio === 'Create'}
            onChange={(event) => this.setState({ getStartedStepRadio: event.currentTarget.value })}
            label="Create a new thing"
            name="radio-step-start"
            id="radio-step-start-1"
          />{' '}
          <Radio
            value="Update"
            isChecked={getStartedStepRadio === 'Update'}
            onChange={(event) => this.setState({ getStartedStepRadio: event.currentTarget.value })}
            label="Update an existing thing"
            name="radio-step-start"
            id="radio-step-start-2"
          />
        </div>
      )
    };
    const createStep = {
      name: 'Create options',
      component: (
        <div>
          <Radio
            value="Quick"
            isChecked={createStepRadio === 'Quick'}
            onChange={(event) => this.setState({ createStepRadio: event.currentTarget.value })}
            label="Quick create"
            name="radio-step-create"
            id="radio-step-create-1"
          />{' '}
          <Radio
            value="Custom"
            isChecked={createStepRadio === 'Custom'}
            onChange={(event) => this.setState({ createStepRadio: event.currentTarget.value })}
            label="Custom create"
            name="radio-step-create"
            id="radio-step-create-2"
          />
        </div>
      )
    };
    const updateStep = {
      name: 'Update options',
      component: (
        <div>
          <Radio
            value="Quick"
            isChecked={updateStepRadio === 'Quick'}
            onChange={(event) => this.setState({ updateStepRadio: event.currentTarget.value })}
            label="Quick update"
            name="radio-step-update"
            id="radio-step-update-1"
          />{' '}
          <Radio
            value="Custom"
            isChecked={updateStepRadio === 'Custom'}
            onChange={(event) => this.setState({ updateStepRadio: event.currentTarget.value })}
            label="Custom update"
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
      ...(showReviewStep ? [reviewStep] : [])
    ];
    const CustomFooter = (
      <WizardFooterDeprecated>
        <WizardContextConsumerDeprecated>
          {({ activeStep, goToStepByName, goToStepById, onNext, onBack, onClose }) => {
            return (
              <>
                <Button
                  variant="secondary"
                  onClick={() => this.getPreviousStep(activeStep, onBack)}
                  className={activeStep.name === 'Get started' ? 'pf-m-disabled' : ''}
                >
                  Back
                </Button>
                <Button variant="primary" type="submit" onClick={() => this.getNextStep(activeStep, onNext)}>
                  {activeStep.name === 'Review' ? 'Finish' : 'Next'}
                </Button>
                <Button variant="link" onClick={onClose}>
                  Cancel
                </Button>
              </>
            );
          }}
        </WizardContextConsumerDeprecated>
      </WizardFooterDeprecated>
    );
    const title = 'Progressive wizard';
    return (
      <WizardDeprecated
        navAriaLabel={`${title} steps`}
        mainAriaLabel={`${title} content`}
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

### Get current step

```js file="./WizardGetCurrentStep.tsx"
```

### Wizard in modal

```js file="./WizardInModal.tsx"
```

### Wizard with drawer

```js file="./WizardWithDrawer.tsx"
```
