import React from 'react';
import { WizardNavItemProps, WizardNavProps } from '../../../components/Wizard';

/** Initially inferred from WizardStep components, these properties represent what is controllable from within WizardContext for a given step. */

export interface Step {
  /** Name of the step's nav item */
  name: React.ReactNode;
  /** Unique identifier */
  id: string | number;
  /** Flag to disable the step's nav item */
  isDisabled?: boolean;
  /** Flag to represent whether the step has been visited (navigated to) */
  visited?: boolean;
  /** Content shown when the step's nav item is selected. When treated as a parent step, only sub-step content will be shown. */
  component?: React.ReactElement;
  /** Nested step IDs */
  subStepIds?: string[];
  /** (Unused if nav is controlled) Custom WizardNavItem */
  navItem?: React.ReactElement<WizardNavItemProps>;
  /** (Unused if footer is controlled) Can change the Next button text. If nextButtonText is also set for the Wizard, this step specific one overrides it. */
  nextButtonText?: React.ReactNode;
  /** (Unused if footer is controlled) The condition needed to disable the Next button */
  disableNext?: boolean;
  /** (Unused if footer is controlled) True to hide the Cancel button */
  hideCancelButton?: boolean;
  /** (Unused if footer is controlled) True to hide the Back button */
  hideBackButton?: boolean;
}

/** With the same purpose as Step, SubStep inherits all properties of Step with the exception of subStepIds. */

export interface SubStep extends Omit<Step, 'subStepIds'> {
  /** Unique identifier of the parent step */
  parentId?: string | number;
}

export type WizardNavStepData = Pick<Step | SubStep, 'id' | 'name'>;
export type WizardNavStepFunction = (currentStep: WizardNavStepData, previousStep: WizardNavStepData) => void;

export interface DefaultWizardNavProps {
  /** Flag indicating nav items with sub steps are expandable */
  isExpandable?: boolean;
  /** Aria-label for the Nav */
  ariaLabel?: string;
  /** Sets aria-labelledby on nav element */
  ariaLabelledBy?: string;
  /** Disable step nav items until they are visited */
  forceStepVisit?: boolean;
}

export interface DefaultWizardFooterProps {
  /** The Next button text */
  nextButtonText?: React.ReactNode;
  /** The Back button text */
  backButtonText?: React.ReactNode;
  /** The Cancel button text */
  cancelButtonText?: React.ReactNode;
}

export type CustomWizardNavFunction = (
  isOpen: boolean,
  steps: (Step | SubStep)[],
  activeStep: Step | SubStep,
  goToStepByIndex: (index: number) => void
) => React.ReactElement<WizardNavProps>;

export function isCustomWizardNav(
  nav: DefaultWizardNavProps | CustomWizardNavFunction
): nav is CustomWizardNavFunction {
  return typeof nav === 'function';
}

export function isCustomWizardFooter(
  footer: DefaultWizardFooterProps | React.ReactElement
): footer is React.ReactElement {
  return React.isValidElement(footer);
}

export function isWizardBasicStep(step: Step | SubStep): step is Step {
  return (step as Step)?.subStepIds === undefined && !isWizardSubStep(step);
}

export function isWizardSubStep(step: Step | SubStep): step is SubStep {
  return (step as SubStep)?.parentId !== undefined;
}

export function isWizardParentStep(step: Step | SubStep): step is Step {
  return (step as Step)?.subStepIds !== undefined;
}
