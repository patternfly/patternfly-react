import React from 'react';
import { Button, Wizard, BackgroundImageSrc } from '@patternfly/react-core';

class SimpleWizard extends React.Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

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

export default SimpleWizard;
