import * as React from 'react';
import styles from '@patternfly/patternfly/components/Wizard/wizard.css';
import { css } from '@patternfly/react-styles';
import { Backdrop } from '../Backdrop';
import { Bullseye } from '../../layouts/Bullseye';
import { BackgroundImage, BackgroundImageSrc } from '../BackgroundImage';
import { Button } from '../Button';
import WizardHeader from './WizardHeader';
import WizardToggle from './WizardToggle';
import WizardNav from './WizardNav';
import WizardNavItem from './WizardNavItem';
import * as ReactDOM from 'react-dom';
import { canUseDOM } from 'exenv';
import { KEY_CODES } from '../../helpers/constants';
import { BackgroundImageSrcMap } from '../BackgroundImage';
// because of the way this module is exported, cannot use regular import syntax
// tslint:disable-next-line
const FocusTrap: any = require('focus-trap-react');

export interface WizardStep {
  /** Optional identifier */
  id?: string | number;
  /** The name of the step */
  name: string;
  /** The component to render in the main body */
  component?: any;
  /** The condition needed to enable the Next button */
  enableNext?: boolean;
  /** True to hide the Cancel button */
  hideCancelButton?: boolean;
  /** True to hide the Back button */
  hideBackButton?: boolean;
  /** Sub steps */
  steps?: any[];
}

interface ComputedStep extends WizardStep {
  /** The condition needed to be able to navigate to this step */
  canJumpTo?: boolean;
};

export type WizardStepFunctionType = (newStep: { id?: string | number; name: string; }, prevStep: { prevId?: string | number; prevName: string; }) => void;

interface WizardProps {
  /** True to show the wizard */
  isOpen?: boolean;
  /** The wizard title */
  title: string;
  /** The wizard description */
  description?: string;
  /** Mapping of image sizes to image paths */
  backgroundImgSrc?: string | BackgroundImageSrcMap;
  /** Calback function to close the wizard */
  onClose?: () => any;
  /** Callback function to save at the end of the wizard, if not specified uses onClose */
  onSave?: () => any;
  /** Callback function after Next button is clicked */
  onNext?: WizardStepFunctionType;
  /** Callback function after Back button is clicked */
  onBack?: WizardStepFunctionType;
  /** Calback function when a step in the nav is clicked */
  onGoToStep?: WizardStepFunctionType;
  /** Additional classes spread to the Wizard */
  className?: string;
  /** The wizard steps configuration object */
  steps: WizardStep[];
  /** The step to start the wizard at (1 or higher) */
  startAtStep?: number;
  /** The Next button text */
  nextButtonText?: string;
  /** The Back button text */
  backButtonText?: string;
  /** The Cancel button text */
  cancelButtonText?: string;
  /** The text for the Next button on the last step */
  lastStepButtonText?: string;
  /** Alignment of the footer items */
  footerRightAlign?: boolean;
  /** aria-label for the close button */
  ariaLabelCloseButton?: string;
  /** aria-label for the Nav */
  ariaLabelNav?: string;
  /** Can remove the default padding around the main body content by setting this to false */
  hasBodyPadding?: boolean;
}

const images = {
  [BackgroundImageSrc.xs]: '/assets/images/pfbg_576.jpg',
  [BackgroundImageSrc.xs2x]: '/assets/images/pfbg_576@2x.jpg',
  [BackgroundImageSrc.sm]: '/assets/images/pfbg_768.jpg',
  [BackgroundImageSrc.sm2x]: '/assets/images/pfbg_768@2x.jpg',
  [BackgroundImageSrc.lg]: '/assets/images/pfbg_1200.jpg',
  [BackgroundImageSrc.filter]: '/assets/images/background-filter.svg#image_overlay'
};

let currentId = 0;

class Wizard extends React.Component<WizardProps> {
  public static defaultProps = {
    isOpen: false,
    description: '',
    backgroundImgSrc: images,
    onClose: null,
    onSave: null,
    onBack: null,
    onNext: null,
    onGoToStep: null,
    className: '',
    startAtStep: 1,
    nextButtonText: 'Next',
    backButtonText: 'Back',
    cancelButtonText: 'Cancel',
    lastStepButtonText: 'Save',
    footerRightAlign: false,
    ariaLabelCloseButton: 'Close',
    ariaLabelNav: 'Steps',
    hasBodyPadding: true
  };

  public container = null;
  public titleId = `pf-wizard-title-0`;
  public descriptionId = `pf-wizard-description-0`;

  constructor(props) {
    super(props);
    const newId = currentId++;
    this.titleId = `pf-wizard-title-${newId}`;
    this.descriptionId = `pf-wizard-description-${newId}`;
  }

  public state = {
    currentStep: Number.isInteger(this.props.startAtStep) ? this.props.startAtStep : 1,
    isNavOpen: false
  };

  private handleKeyClicks = event => {
    if (event.keyCode === KEY_CODES.ESCAPE_KEY) {
      if (this.state.isNavOpen) {
        this.setState({ isNavOpen: !this.state.isNavOpen })
      } else if (this.props.isOpen) {
        this.props.onClose();
      }
    }
  };

  private toggleSiblingsFromScreenReaders = hide => {
    const bodyChildren = document.body.children;
    for (const child of Array.from(bodyChildren)) {
      if (child !== this.container) {
        hide ? child.setAttribute('aria-hidden', hide) : child.removeAttribute('aria-hidden');
      }
    }
  };

  public componentDidMount() {
    document.body.appendChild(this.container);
    this.toggleSiblingsFromScreenReaders(true);
    document.addEventListener('keydown', this.handleKeyClicks, false);
  }

  public componentWillUnmount() {
    document.body.removeChild(this.container);
    this.toggleSiblingsFromScreenReaders(false);
    document.removeEventListener('keydown', this.handleKeyClicks, false);
  }

  private onNavToggle = isNavOpen => {
    this.setState({ isNavOpen })
  }

  private onNext = () => {
    const { onNext, onClose, onSave } = this.props;
    const { currentStep } = this.state;
    const flattenedSteps = this.getFlattenedSteps();
    const maxSteps = flattenedSteps.length;
    if (currentStep >= maxSteps) {
      // Hit the save button at the end of the wizard
      if (onSave) {
        return onSave();
      }
      return onClose();
    } else {
      const newStep = currentStep + 1;
      this.setState({
        currentStep: newStep
      });
      const { id: prevId, name: prevName } = flattenedSteps[currentStep - 1];
      const { id, name } = flattenedSteps[newStep - 1];
      return onNext && onNext({ id, name }, { prevId, prevName });
    }
  };

  private onBack = () => {
    const { onBack } = this.props;
    const { currentStep } = this.state;
    const flattenedSteps = this.getFlattenedSteps();
    const newStep = currentStep - 1 <= 0 ? 0 : currentStep - 1;
    this.setState({
      currentStep: newStep
    });
    const { id: prevId, name: prevName } = flattenedSteps[currentStep - 1];
    const { id, name } = flattenedSteps[newStep - 1];
    return onBack && onBack({ id, name }, { prevId, prevName });
  };

  private goToStep = step => {
    const { onGoToStep } = this.props;
    const { currentStep } = this.state;
    let newStep;
    const flattenedSteps = this.getFlattenedSteps();
    const maxSteps = flattenedSteps.length;
    if (step < 1) {
      newStep = 1;
    } else if (newStep > maxSteps) {
      newStep = maxSteps;
    } else {
      newStep = step;
    }
    this.setState({
      currentStep: newStep
    });
    const { id: prevId, name: prevName } = flattenedSteps[currentStep - 1];
    const { id, name } = flattenedSteps[newStep - 1];
    return onGoToStep && onGoToStep({ id, name }, { prevId, prevName });
  };

  private getFlattenedSteps = () => {
    const { steps } = this.props;
    const flattenedSteps = [];
    for (const step of steps) {
      if (step.steps) {
        for (const childStep of step.steps) {
          flattenedSteps.push(childStep);
        }
      } else {
        flattenedSteps.push(step);
      }
    }
    return flattenedSteps;
  };

  private getFlattenedStepsIndex = stepName => {
    const flattenedSteps = this.getFlattenedSteps();
    for (let i = 0; i < flattenedSteps.length; i++) {
      if (flattenedSteps[i].name === stepName) {
        return i + 1;
      }
    }
  }

  private initSteps = (steps, activeStep) => {
    // Set canJumpTo on all steps leading up to and including the active step
    const computedSteps: ComputedStep[] = steps;
    for (const step of computedSteps) {
      let found = false;
      if (step.steps) {
        for (const subStep of step.steps) {
          if (activeStep === subStep) {
            // one of the children matches
            subStep.canJumpTo = true;
            found = true;
            break;
          } else {
            subStep.canJumpTo = true;
          }
        }
      }
      if (found) {
        break;
      }
      if (activeStep === step) {
        step.canJumpTo = true;
        break;
      } else {
        step.canJumpTo = true;
      }
    }
    return computedSteps;
  };

  public render() {
    if (!canUseDOM) {
      return null;
    }
    if (!this.container) {
      this.container = document.createElement('div');
    }
    const {
      isOpen,
      title,
      description,
      backgroundImgSrc = images,
      onClose,
      onSave,
      onBack,
      onNext,
      onGoToStep,
      className,
      steps,
      startAtStep,
      nextButtonText,
      backButtonText,
      cancelButtonText,
      lastStepButtonText,
      footerRightAlign,
      ariaLabelCloseButton,
      ariaLabelNav,
      hasBodyPadding,
      ...rest
    } = this.props;
    const { currentStep, isNavOpen } = this.state;
    const flattenedSteps = this.getFlattenedSteps();
    const activeStep = flattenedSteps[currentStep - 1];
    const computedSteps: ComputedStep[] = this.initSteps(steps, activeStep);
    const firstStep = activeStep === flattenedSteps[0];
    const lastStep = activeStep === flattenedSteps[flattenedSteps.length - 1];
    const isValid = activeStep.enableNext !== undefined ? activeStep.enableNext : true;

    const nav = isWizardNavOpen => (
      <WizardNav isOpen={isWizardNavOpen} ariaLabel={ariaLabelNav}>
        {computedSteps.map((step, index) => {
          let enabled;
          let navItemStep;
          if (step.steps) {
            let hasActiveChild = false;
            let canJumpToParent = false;
            for (const subStep of step.steps) {
              if (activeStep === subStep) {
                // one of the children matches
                hasActiveChild = true;
              }
              if (subStep.canJumpTo) {
                canJumpToParent = true;
              }
            }
            navItemStep = this.getFlattenedStepsIndex(step.steps[0].name);
            return (
              <WizardNavItem hasChildren key={index} label={step.name} current={hasActiveChild} disabled={!canJumpToParent} step={navItemStep} onNavItemClick={this.goToStep}>
                <WizardNav returnList>
                  {step.steps.map((childStep, indexChild) => {
                    navItemStep = this.getFlattenedStepsIndex(childStep.name);
                    enabled = Boolean(childStep.canJumpTo);
                    return <WizardNavItem key={`child_${indexChild}`} label={childStep.name} current={activeStep === childStep} disabled={!enabled} step={navItemStep} onNavItemClick={this.goToStep} />
                  })}
                </WizardNav>
              </WizardNavItem>
            );
          }
          navItemStep = this.getFlattenedStepsIndex(step.name);
          enabled = Boolean(step.canJumpTo);
          return <WizardNavItem key={index} label={step.name} current={activeStep === step} disabled={!enabled} step={navItemStep} onNavItemClick={this.goToStep} />;
        })}
      </WizardNav>
    );

    return (
      isOpen && ReactDOM.createPortal(
        <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }}>
          <Backdrop>
            <Bullseye>
              <div {...rest} className={css(styles.wizard, className)} role="dialog" aria-modal="true" aria-labelledby={this.titleId} aria-describedby={description ? this.descriptionId : null}>
                <BackgroundImage src={backgroundImgSrc} />
                <WizardHeader titleId={this.titleId} descriptionId={this.descriptionId} onClose={onClose} title={title} description={description} ariaLabel={ariaLabelCloseButton} />
                <WizardToggle isNavOpen={isNavOpen} onNavToggle={this.onNavToggle} nav={nav} steps={steps} activeStep={activeStep} hasBodyPadding={hasBodyPadding}>
                  <footer className={css(styles.wizardFooter, footerRightAlign && 'pf-m-align-right')}>
                    <Button variant="primary" type="submit" onClick={this.onNext} isDisabled={!isValid}>
                      {lastStep ? lastStepButtonText : nextButtonText}
                    </Button>
                    {!firstStep && !activeStep.hideBackButton && <Button variant="secondary" onClick={this.onBack}>
                      {backButtonText}
                    </Button>}
                    {!activeStep.hideCancelButton && <Button variant="link" onClick={onClose}>
                      {cancelButtonText}
                    </Button>}
                  </footer>
                </WizardToggle>
              </div>
            </Bullseye>
          </Backdrop>
        </FocusTrap>,
        this.container
      )
    );
  }
}

export { Wizard };