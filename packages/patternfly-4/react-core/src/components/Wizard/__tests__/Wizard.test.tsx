import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Wizard, WizardStep, WizardStepFunctionType } from '../Wizard';

it('Wizard should match snapshot (auto-generated)', () => {
  const view = shallow(
    <Wizard
      isOpen={false}
			isInPage={false}
			isCompactNav={false}
			isFullHeight={false}
			isFullWidth={false}
			width={null}
			height={null}
			title={"''"}
			description={"''"}
			onClose={() => undefined as any}
			onGoToStep={null}
			className={"''"}
			steps={[]}
			startAtStep={1}
			ariaLabelNav={"'Steps'"}
			hasBodyPadding={true}
			footer={null}
			onSave={() => undefined as void}
			onNext={null}
			onBack={null}
			nextButtonText={"'Next'"}
			backButtonText={"'Back'"}
			cancelButtonText={"'Cancel'"}
			ariaLabelCloseButton={"'Close'"}
			appendTo={null}
    />);
  expect(view).toMatchSnapshot();
});

test('Wizard should match snapshot', () => {
  const steps: WizardStep[] = [
    { name: 'A', component: <p>Step 1</p> },
    {
      name: 'B',
      steps: [
        {
          name: 'B-1',
          component: <p>Step 2</p>,
          enableNext: true
        },
        {
          name: 'B-2',
          component: <p>Step 3</p>,
          enableNext: false
        }
      ]
    },
    { name: 'C', component: <p>Step 4</p> },
    { name: 'D', component: <p>Step 5</p> }
  ];
  const onBack: WizardStepFunctionType = step => {
    const name = { step };
  };
  const view = mount(
    <Wizard isOpen title="Wizard title" description="Description here" steps={steps} startAtStep={1} onBack={onBack} />
  );
  // ran into: https://github.com/airbnb/enzyme/issues/1213
  // so instead of: expect(view).toMatchSnapshot();
  const fragment = view.instance().render();
  expect(mount(<div>{fragment}</div>).getElement()).toMatchSnapshot();
});
