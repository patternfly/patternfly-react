import React from 'react';
import { WizardNavProps, WizardNavItemProps, WizardFooterProps } from '../Wizard';

/** Type used to define 'basic' steps, or in other words, steps that are neither parents or children of parents. */
export interface WizardBasicStep {
  /** Name of the step's navigation item */
  name: React.ReactNode;
  /** Unique identifier */
  id: string | number;
  /** Order index of step (starts at 1) */
  index: number;
  /** Flag to disable the step's navigation item */
  isDisabled?: boolean;
  /** Flag to represent whether the step has been visited (navigated to) */
  isVisited?: boolean;
  /** Flag to determine whether the step is hidden */
  isHidden?: boolean;
  /** Content shown when the step's navigation item is selected. When treated as a parent step, only sub-step content will be shown. */
  component?: React.ReactElement;
  /** Replaces the step's navigation item or its properties. */
  navItem?: WizardNavItemType;
  /** Replaces the step's footer. The step's footer takes precedance over the wizard's footer. */
  footer?: React.ReactElement | Partial<WizardFooterProps>;
  /** Used to determine icon next to the step's navItem */
  status?: 'default' | 'error';
}

export enum WizardNavItemStatus {
  Default = 'default',
  Error = 'error'
}

/** Type used to define parent steps. */
export interface WizardParentStep extends WizardBasicStep {
  /** Nested step IDs */
  subStepIds: (string | number)[];
  /** Flag to determine whether the step can expand or not. */
  isExpandable?: boolean;
}

/** Type used to define sub-steps. */
export interface WizardSubStep extends WizardBasicStep {
  /** Unique identifier of the parent step */
  parentId: string | number;
}

/** Encompasses all step type variants that are internally controlled by the Wizard. */
export type WizardStepType = WizardBasicStep | WizardParentStep | WizardSubStep;

export enum WizardStepChangeScope {
  Next = 'next',
  Back = 'back',
  Nav = 'nav'
}

export type WizardFooterType = Partial<WizardFooterProps> | CustomWizardFooterFunction | React.ReactElement;
export type WizardNavType = Partial<WizardNavProps> | CustomWizardNavFunction | React.ReactElement;
export type WizardNavItemType = Partial<WizardNavItemProps> | CustomWizardNavItemFunction | React.ReactElement;

/** Callback for the Wizard's 'nav' property. Returns element which replaces the Wizard's default navigation. */
export type CustomWizardNavFunction = (
  isExpanded: boolean,
  steps: WizardStepType[],
  activeStep: WizardStepType,
  goToStepByIndex: (index: number) => void
) => React.ReactElement<WizardNavProps>;

/** Callback for the Wizard's 'navItem' property. Returns element which replaces the WizardStep's default navigation item. */
export type CustomWizardNavItemFunction = (
  step: WizardStepType,
  activeStep: WizardStepType,
  steps: WizardStepType[],
  goToStepByIndex: (index: number) => void
) => React.ReactElement<WizardNavItemProps>;

/** Callback for the Wizard's 'footer' property. Returns element which replaces the Wizard's default footer. */
export type CustomWizardFooterFunction = (
  activeStep: WizardStepType,
  onNext: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>,
  onBack: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>,
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>
) => React.ReactElement<WizardFooterProps>;

export function isCustomWizardNav(nav: WizardNavType): nav is CustomWizardNavFunction | React.ReactElement {
  return typeof nav === 'function' || React.isValidElement(nav);
}

export function isCustomWizardNavItem(
  navItem: WizardNavItemType
): navItem is CustomWizardNavItemFunction | React.ReactElement {
  return typeof navItem === 'function' || React.isValidElement(navItem);
}

export function isCustomWizardFooter(
  footer: WizardFooterType
): footer is CustomWizardFooterFunction | React.ReactElement {
  return typeof footer === 'function' || React.isValidElement(footer);
}

export function isWizardBasicStep(step: WizardStepType): step is WizardBasicStep {
  return (step as WizardParentStep)?.subStepIds === undefined && !isWizardSubStep(step);
}

export function isWizardSubStep(step: WizardStepType): step is WizardSubStep {
  return (step as WizardSubStep)?.parentId !== undefined;
}

export function isWizardParentStep(step: WizardStepType): step is WizardParentStep {
  return (step as WizardParentStep)?.subStepIds !== undefined;
}
