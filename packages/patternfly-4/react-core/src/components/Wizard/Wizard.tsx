import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { canUseDOM } from 'exenv';
import { KEY_CODES } from '../../helpers/constants';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Wizard/wizard.css';
import { Backdrop } from '../Backdrop';
import { Bullseye } from '../../layouts/Bullseye';
import { Button } from '../Button';
import { WizardHeader } from './WizardHeader';
import { WizardToggle } from './WizardToggle';
import { WizardNav } from './WizardNav';
import { WizardNavItem } from './WizardNavItem';
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
  /** Can change the Next button text (for example to Finish or Close). If nextButtonText is also set for the Wizard, this step specific one overrides it. */
  nextButtonText?: string;
  /** Sub steps */
  steps?: any[];
}

interface ComputedStep extends WizardStep {
  /** The condition needed to be able to navigate to this step */
  canJumpTo?: boolean;
};

export type WizardStepFunctionType = (newStep: { id?: string | number; name: string; }, prevStep: { prevId?: string | number; prevName: string; }) => void;

export interface WizardProps {
  /** True to show the wizard */
  isOpen?: boolean;
  /** True to set full height wizard */
  isFullHeight?: boolean;
  /** True to set full width wizard */
  isFullWidth?: boolean;
  /** Custom width of the wizard */
  width?: number | string;
  /** Custom height of the wizard */
  height?: number | string;
  /** The wizard title */
  title: string;
  /** The wizard description */
  description?: string;
  /** Calback function to close the wizard */
  onClose?(): void;
  /** Calback function when a step in the nav is clicked */
  onGoToStep?: WizardStepFunctionType;
  /** Additional classes spread to the Wizard */
  className?: string;
  /** The wizard steps configuration object */
  steps: WizardStep[];
  /** The step to start the wizard at (1 or higher) */
  startAtStep?: number;
  /** aria-label for the Nav */
  ariaLabelNav?: string;
  /** Can remove the default padding around the main body content by setting this to false */
  hasBodyPadding?: boolean;
  /** Callback function to save at the end of the wizard, if not specified uses onClose */
  onSave?(): void;
  /** Callback function after Next button is clicked */
  onNext?: WizardStepFunctionType;
  /** Callback function after Back button is clicked */
  onBack?: WizardStepFunctionType;
  /** The Next button text */
  nextButtonText?: string;
  /** The Back button text */
  backButtonText?: string;
  /** The Cancel button text */
  cancelButtonText?: string;
  /** aria-label for the close button */
  ariaLabelCloseButton?: string;
}

export class Wizard extends React.Component<WizardProps> {
  static currentId = 0;
  static defaultProps = {
    isOpen: false,
    isFullHeight: false,
    isFullWidth: false,
    width: null,
    height: null,
    description: '',
    onBack: null,
    onNext: null,
    onGoToStep: null,
    className: '',
    startAtStep: 1,
    nextButtonText: 'Next',
    backButtonText: 'Back',
    cancelButtonText: 'Cancel',
    ariaLabelCloseButton: 'Close',
    ariaLabelNav: 'Steps',
    hasBodyPadding: true
  };

  public container?: HTMLDivElement = undefined;
  public titleId = `pf-wizard-title-0`;
  public descriptionId = `pf-wizard-description-0`;

  constructor(props: WizardProps) {
    super(props);
    const newId = Wizard.currentId++;
    this.titleId = `pf-wizard-title-${newId}`;
    this.descriptionId = `pf-wizard-description-${newId}`;
  }

  public state = {
    currentStep: this.props.startAtStep && Number.isInteger(this.props.startAtStep) ? this.props.startAtStep : 1,
    isNavOpen: false
  };

  handleKeyClicks = (event: KeyboardEvent): void => {
    if (event.keyCode === KEY_CODES.ESCAPE_KEY) {
      if (this.state.isNavOpen) {
        this.setState({ isNavOpen: !this.state.isNavOpen })
      } else if (this.props.isOpen) {
        this.props.onClose!();
      }
    }
  };

  toggleSiblingsFromScreenReaders = (hide: boolean): void => {
    const bodyChildren = document.body.children;
    for (const child of Array.from(bodyChildren)) {
      if (child !== this.container) {
        hide ? child.setAttribute('aria-hidden', '' + hide) : child.removeAttribute('aria-hidden');
      }
    }
  };

  onNext = (): void => {
    const { onNext, onClose, onSave } = this.props;
    const { currentStep } = this.state;
    const flattenedSteps = this.getFlattenedSteps();
    const maxSteps = flattenedSteps.length;
    if (currentStep >= maxSteps) {
      // Hit the save button at the end of the wizard
      if (onSave) {
        return onSave();
      }
      return onClose!();
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

  onBack = (): void => {
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

  goToStep = (step: number): void => {
    const { onGoToStep } = this.props;
    const { currentStep } = this.state;
    const flattenedSteps = this.getFlattenedSteps();
    const maxSteps = flattenedSteps.length;
    if (step < 1) {
      step = 1;
    } else if (step > maxSteps) {
      step = maxSteps;
    }
    this.setState({ currentStep: step });
    const { id: prevId, name: prevName } = flattenedSteps[currentStep - 1];
    const { id, name } = flattenedSteps[step - 1];
    return onGoToStep && onGoToStep({ id, name }, { prevId, prevName });
  };

  getFlattenedSteps = (): WizardStep[] => {
    const { steps } = this.props;
    const flattenedSteps: WizardStep[] = [];
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

  getFlattenedStepsIndex = (stepName: string): number => {
    const flattenedSteps = this.getFlattenedSteps();
    for (let i = 0; i < flattenedSteps.length; i++) {
      if (flattenedSteps[i].name === stepName) {
        return i + 1;
      }
    }

    return 0;
  }

  initSteps = (steps: WizardStep[], activeStep: WizardStep): ComputedStep[] => {
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
  }

  public componentDidMount() {
    if (this.container) {
      document.body.appendChild(this.container);
    }
    this.toggleSiblingsFromScreenReaders(true);
    document.addEventListener('keydown', this.handleKeyClicks, false);
  }

  public componentWillUnmount() {
    if (this.container) {
      document.body.removeChild(this.container);
    }
    this.toggleSiblingsFromScreenReaders(false);
    document.removeEventListener('keydown', this.handleKeyClicks, false);
  }

  public render() {
    if (!canUseDOM) {
      return null;
    }
    if (!this.container) {
      this.container = document.createElement('div');
    }
    const {
      isOpen,
      isFullHeight,
      isFullWidth,
      width,
      height,
      title,
      description,
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
    const isValid = activeStep.enableNext !== undefined ? activeStep.enableNext : true;
    const setFullWidth = isFullWidth || width
    const setFullHeight = isFullHeight || height

    const nav = (isWizardNavOpen: boolean) => (
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
              <div {...rest} style={{ width, height }} className={css(styles.wizard, setFullWidth && styles.modifiers.fullWidth, setFullHeight && styles.modifiers.fullHeight,className)} role="dialog" aria-modal="true" aria-labelledby={this.titleId} aria-describedby={description ? this.descriptionId : undefined}>
                <WizardHeader titleId={this.titleId} descriptionId={this.descriptionId} onClose={onClose} title={title} description={description as string} ariaLabel={ariaLabelCloseButton as string} />
                <WizardToggle isNavOpen={isNavOpen} onNavToggle={(isNavOpen) => this.setState({ isNavOpen })} nav={nav} steps={steps} activeStep={activeStep} hasBodyPadding={hasBodyPadding as boolean}>
                  <footer className={css(styles.wizardFooter)}>
                    <Button variant="primary" type="submit" onClick={this.onNext} isDisabled={!isValid}>
                      {nextButtonText}
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
        this.container!
      )
    );
  }
}
