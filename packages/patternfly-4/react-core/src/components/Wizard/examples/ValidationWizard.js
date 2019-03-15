import React from 'react';
import { Button, Wizard, BackgroundImageSrc } from '@patternfly/react-core';
import SampleFormOne from './Steps/SampleFormOne';
import SampleFormTwo from './Steps/SampleFormTwo';

class ValidationWizard extends React.Component {
  state = {
    isOpen: false,
    isFormValidA: false,
    formValueA: 'Five',
    isFormValidB: false,
    formValueB: 'Six',
    allStepsValid: false
  };

  toggleOpen = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  onFormChangeA = (isValid, value) => {
    this.setState(
      {
        isFormValidA: isValid,
        formValueA: value
      },
      this.areAllStepsValid
    );
  };

  onFormChangeB = (isValid, value) => {
    this.setState(
      {
        isFormValidB: isValid,
        formValueB: value
      },
      this.areAllStepsValid
    );
  };

  areAllStepsValid = () => {
    this.setState({
      allStepsValid: this.state.isFormValidA && this.state.isFormValidB
    });
  };

  onNext = ({ id, name }, { prevId, prevName }) => {
    console.log(`current id: ${id}, current name: ${name}, previous id: ${prevId}, previous name: ${prevName}`);
    this.areAllStepsValid();
  };

  onBack = ({ id, name }, { prevId, prevName }) => {
    console.log(`current id: ${id}, current name: ${name}, previous id: ${prevId}, previous name: ${prevName}`);
    this.areAllStepsValid();
  };

  onGoToStep = ({ id, name }, { prevId, prevName }) => {
    console.log(`current id: ${id}, current name: ${name}, previous id: ${prevId}, previous name: ${prevName}`);
  };

  onSave = () => {
    console.log('Saved and closed the wizard');
    this.setState({
      isOpen: false
    });
  };

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

export default ValidationWizard;
