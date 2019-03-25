---
title: "Wizard"
cssPrefix: "pf-c-wizard"
---
### Simple Wizard
```js
import React from 'react';
import { Button, Wizard, BackgroundImageSrc } from '@patternfly/react-core';

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

    const images = {
      [BackgroundImageSrc.xs]: '/assets/images/pfbg_576.jpg',
      [BackgroundImageSrc.xs2x]: '/assets/images/pfbg_576@2x.jpg',
      [BackgroundImageSrc.sm]: '/assets/images/pfbg_768.jpg',
      [BackgroundImageSrc.sm2x]: '/assets/images/pfbg_768@2x.jpg',
      [BackgroundImageSrc.lg]: '/assets/images/pfbg_1200.jpg',
      [BackgroundImageSrc.filter]: '/assets/images/background-filter.svg#image_overlay'
    };

    const steps = [
      { name: 'Step 1', component: <p>Step 1</p> },
      {
        name: 'Step 2',
        steps: [
          { name: 'Step 2 - A', component: <p>Step 2 - A</p> },
          { name: 'Step 2 - B', component: <p>Step 2 - B</p> }
        ]
      },
      { name: 'Step 3', component: <p>Step 3</p> },
      {
        name: 'Step 4',
        steps: [
          { name: 'Step 4 - A', component: <p>Step 4 - A</p> },
          { name: 'Step 4 - B', component: <p>Step 4 - B</p> }
        ]
      },
      { name: 'Final Step', component: <p>Final Step</p>, hideCancelButton: true, hideBackButton: true }
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
            backgroundImgSrc={images}
            lastStepButtonText="Close"
          />
        )}
      </React.Fragment>
    );
  }
}
```

### Validation Wizard
```js
import React from 'react';
import { Button, Wizard, BackgroundImageSrc } from '@patternfly/react-core';
import React from 'react';
import { Form, FormGroup, TextInput } from '@patternfly/react-core';
import { SampleFormOne, SampleFormTwo } from './examples';

class ValidationWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isFormValidA: false,
      formValueA: 'Five',
      isFormValidB: false,
      formValueB: 'Six',
      allStepsValid: false
    };
    this.toggleOpen = () => {
      this.setState(({ isOpen }) => ({
        isOpen: !isOpen
      }));
    };
    this.onFormChangeA = (isValid, value) => {
      this.setState(
        {
          isFormValidA: isValid,
          formValueA: value
        },
        this.areAllStepsValid
      );
    };
    this.onFormChangeB = (isValid, value) => {
      this.setState(
        {
          isFormValidB: isValid,
          formValueB: value
        },
        this.areAllStepsValid
      );
    };
    this.areAllStepsValid = () => {
      this.setState({
        allStepsValid: this.state.isFormValidA && this.state.isFormValidB
      });
    };
    this.onNext = ({ id, name }, { prevId, prevName }) => {
      console.log(`current id: ${id}, current name: ${name}, previous id: ${prevId}, previous name: ${prevName}`);
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
    const { isOpen, isFormValidA, isFormValidB, formValueA, formValueB, allStepsValid } = this.state;

    const images = {
      [BackgroundImageSrc.xs]: '/assets/images/pfbg_576.jpg',
      [BackgroundImageSrc.xs2x]: '/assets/images/pfbg_576@2x.jpg',
      [BackgroundImageSrc.sm]: '/assets/images/pfbg_768.jpg',
      [BackgroundImageSrc.sm2x]: '/assets/images/pfbg_768@2x.jpg',
      [BackgroundImageSrc.lg]: '/assets/images/pfbg_1200.jpg',
      [BackgroundImageSrc.filter]: '/assets/images/background-filter.svg#image_overlay'
    };

    const steps = [
      { id: 1, name: 'Information', component: <p>Step 1</p> },
      {
        name: 'Configuration',
        steps: [
          {
            id: 2,
            name: 'Substep A with validation',
            component: (
              <SampleFormOne formValue={formValueA} isFormValid={isFormValidA} onChange={this.onFormChangeA} />
            ),
            enableNext: isFormValidA
          },
          {
            id: 3,
            name: 'Substep B with validation',
            component: (
              <SampleFormTwo formValue={formValueB} isFormValid={isFormValidB} onChange={this.onFormChangeB} />
            ),
            enableNext: isFormValidB
          },
          { id: 4, name: 'Substep C', component: <p>Substep C</p> }
        ]
      },
      { id: 5, name: 'Additional', component: <p>Step 3</p>, enableNext: allStepsValid },
      { id: 6, name: 'Review', component: <p>Step 4</p> }
    ];

    return (
      <React.Fragment>
        <Button variant="primary" onClick={this.toggleOpen}>
          Show Wizard
        </Button>
        {isOpen && (
          <Wizard
            isOpen={isOpen}
            title="Validation Wizard"
            description="Validation Wizard Description"
            onClose={this.toggleOpen}
            onSave={this.onSave}
            steps={steps}
            onNext={this.onNext}
            onBack={this.onBack}
            onGoToStep={this.onGoToStep}
            footerRightAlign
            backgroundImgSrc={images}
          />
        )}
      </React.Fragment>
    );
  }
}
```