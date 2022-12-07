import React from 'react';

import { WizardParentStep, WizardSubStep } from '../types';
import { buildSteps } from '../utils';
import { WizardStep } from '../WizardStep';

describe('buildSteps', () => {
  test('throws error if child is not of type WizardStep', () => {
    try {
      buildSteps(<div />);
    } catch (error) {
      expect(error.message).toEqual('Wizard only accepts children of type WizardStep.');
    }
  });

  test('throws error if no children are valid react elements', () => {
    try {
      buildSteps('test' as any);
    } catch (error) {
      expect(error.message).toEqual('Wizard only accepts children of type WizardStep.');
    }
  });

  test('returns array of steps if children are of type WizardStep', () => {
    const component = <WizardStep name="Step 1" id="step-1" />;
    const [step] = buildSteps(component);

    expect(step.id).toEqual('step-1');
    expect(step.name).toEqual('Step 1');
    expect(step.component?.props).toEqual(component.props);
  });

  test('returns flattened array of steps and sub-steps when sub-steps exist', () => {
    const CustomSubStep = props => <div {...props} />;

    const component = (
      <WizardStep
        name="Step 1"
        id="step-1"
        steps={[
          <WizardStep name="SubStep" id="sub-step" />,
          <CustomSubStep name="Custom SubStep" id="custom-sub-step" />
        ]}
      />
    );
    const [parentStep, subStep, customSubStep] = buildSteps(component);

    expect((subStep as WizardSubStep).parentId).toEqual('step-1');
    expect((customSubStep as WizardSubStep).parentId).toEqual('step-1');
    expect((parentStep as WizardParentStep).subStepIds).toEqual(['sub-step', 'custom-sub-step']);
  });
});
