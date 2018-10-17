import React from 'react';
import { mount, shallow } from 'enzyme';
import { Wizard } from '../../index';

test('Wizard header renders properly', () => {
  const onCloseMock = jest.fn();
  const component = shallow(<Wizard.Header onClose={onCloseMock} title="Wizard Title" />);
  component.find('.close').simulate('click');
  expect(onCloseMock).toBeCalled();
  expect(component).toMatchSnapshot('Wizard header snapshot');
});

test('Wizard body renders properly', () => {
  const component = shallow(<Wizard.Body className="someAdditionalClass">Some Children</Wizard.Body>);
  expect(component).toMatchSnapshot('Wizard body snapshot');
});

test('Wizard steps renders properly', () => {
  const component = shallow(
    <Wizard.Steps
      className="someAdditionalClass"
      steps={[
        <Wizard.Step key={0} stepIndex={0} step={0} activeStep={0} label="Step 1" title="Step 1" onClick={jest.fn()}>
          <Wizard.SubStep subStep="1.1" title="Step 1.1" activeSubStep={0} />
          <Wizard.SubStep subStep="1.2" title="Step 1.2" activeSubStep={0} />
        </Wizard.Step>,
        <Wizard.Step key={1} stepIndex={1} step={1} label="Step 2" title="Step 2" activeStep={0} onClick={jest.fn()}>
          <Wizard.SubStep subStep="2.1" title="Step 2.1" activeSubStep={0} />
          <Wizard.SubStep subStep="2.2" title="Step 2.2" activeSubStep={0} />
        </Wizard.Step>
      ]}
    />
  );
  expect(component).toMatchSnapshot('Wizard steps snapshot');
});

test('Wizard step renders properly', () => {
  const component = shallow(
    <Wizard.Step key={0} stepIndex={0} step={0} activeStep={0} label="Step 1" title="Step 1" onClick={jest.fn()}>
      <Wizard.SubStep subStep="1.1" title="Step 1.1" activeSubStep={0} />
      <Wizard.SubStep subStep="1.2" title="Step 1.2" activeSubStep={0} />
    </Wizard.Step>
  );
  expect(component).toMatchSnapshot('Wizard step snapshot');
});

test('Wizard sub step renders properly', () => {
  const component = shallow(<Wizard.SubStep subStep="1.1" title="Step 1.1" activeSubStep={0} />);
  expect(component).toMatchSnapshot('Wizard sub step snapshot');
});

test('Wizard row renders properly', () => {
  const component = shallow(<Wizard.Row className="someAdditionalClass">Some Children</Wizard.Row>);
  expect(component).toMatchSnapshot('Wizard row snapshot');
});

test('Wizard sidebar renders properly', () => {
  const component = shallow(<Wizard.Sidebar className="someAdditionalClass" items={['item1', 'item2']} />);
  expect(component).toMatchSnapshot('Wizard sidebar snapshot');
});

test('Wizard sidebar group renders properly', () => {
  const component = shallow(
    <Wizard.SidebarGroup className="someAdditionalClass" step="1" activeStep="1">
      Some Children
    </Wizard.SidebarGroup>
  );
  expect(component).toMatchSnapshot('Wizard sidebar group snapshot');
});

test('Wizard sidebar group item renders properly', () => {
  const onClickMock = jest.fn();
  const stepIndex = 1;
  const subStepIndex = 1;

  const component = shallow(
    <Wizard.SidebarGroupItem
      className="wizard-sidebar-group-item"
      key="1.1"
      stepIndex={stepIndex}
      subStepIndex={subStepIndex}
      subStep="1.1"
      label="1A."
      title="Details"
      activeSubStep="1.1"
      onClick={onClickMock}
    />
  );
  component.find('a').simulate('click', { preventDefault() {} });
  expect(onClickMock).toBeCalledWith(stepIndex, subStepIndex);
  expect(component).toMatchSnapshot('Wizard sidebar group item snapshot');
});

test('Wizard main renders properly', () => {
  const component = shallow(<Wizard.Main className="someAdditionalClass">Some Children</Wizard.Main>);
  expect(component).toMatchSnapshot('Wizard main snapshot');
});

test('Wizard contents renders properly', () => {
  const component = shallow(
    <Wizard.Contents
      className="someAdditionalClass"
      stepIndex={1}
      subStepIndex={1.1}
      activeStepIndex={1}
      activeSubStepIndex={1.1}
    >
      Some Children
    </Wizard.Contents>
  );
  expect(component).toMatchSnapshot('Wizard contents snapshot');
});

test('Wizard contents renders hidden class when not active', () => {
  const component = shallow(
    <Wizard.Contents
      className="someAdditionalClass"
      stepIndex={1}
      subStepIndex={1.1}
      activeStepIndex={1}
      activeSubStepIndex={1.2}
    >
      Some Children
    </Wizard.Contents>
  );
  expect(component).toMatchSnapshot('Wizard contents hidden snapshot');
});

test('Wizard review steps renders properly', () => {
  const component = shallow(<Wizard.ReviewSteps className="someAdditionalClass">Some Children</Wizard.ReviewSteps>);
  expect(component).toMatchSnapshot('Wizard review steps snapshot');
});

test('Wizard review step renders properly', () => {
  const onClickMock = jest.fn();
  const component = shallow(
    <Wizard.ReviewStep onClick={onClickMock} title="Step One" collapsed>
      Some Children
    </Wizard.ReviewStep>
  );
  component.find('a').simulate('click');
  expect(onClickMock).toBeCalled();
  expect(component).toMatchSnapshot('Wizard review step snapshot');
});

test('Wizard review sub steps renders properly', () => {
  const component = shallow(
    <Wizard.ReviewSubSteps className="someAdditionalClass" collapsed>
      Some Children
    </Wizard.ReviewSubSteps>
  );
  expect(component).toMatchSnapshot('Wizard review sub steps snapshot');
});

test('Wizard review sub step renders properly', () => {
  const onClickMock = jest.fn();
  const component = shallow(
    <Wizard.ReviewSubStep onClick={onClickMock} label="1.1" title="1.1" collapsed>
      Some Children
    </Wizard.ReviewSubStep>
  );
  component.find('a').simulate('click');
  expect(onClickMock).toBeCalled();
  expect(component).toMatchSnapshot('Wizard review sub step snapshot');
});

test('Wizard review content renders properly', () => {
  const component = shallow(
    <Wizard.ReviewContent className="someAdditionalClass" collapsed>
      Some Children
    </Wizard.ReviewContent>
  );
  expect(component).toMatchSnapshot('Wizard review content snapshot');
});

test('Wizard review item renders properly', () => {
  const component = shallow(<Wizard.ReviewItem className="someAdditionalClass">Some Children</Wizard.ReviewItem>);
  expect(component).toMatchSnapshot('Wizard review item snapshot');
});

test('Wizard footer renders properly', () => {
  const component = shallow(<Wizard.Footer className="someAdditionalClass">Some Children</Wizard.Footer>);
  expect(component).toMatchSnapshot('Wizard footer snapshot');
});

test('Wizard pattern body renders properly while loading', () => {
  const component = shallow(
    <Wizard.Pattern.Body loading loadingTitle="Wizard Title" loadingMessage="Wizard loading..." />
  );
  expect(component).toMatchSnapshot('Wizard pattern body loading snapshot');
});

test('Wizard pattern body renders active step', () => {
  const component = shallow(
    <Wizard.Pattern.Body
      loading={false}
      steps={[
        { title: 'General', render: () => <p>General</p> },
        { title: 'Step Two', render: () => <p>Step Two</p> },
        { title: 'Step Three', render: () => <p>Step Three</p> }
      ]}
      activeStepIndex={0}
    />
  );
  expect(component).toMatchSnapshot('Wizard pattern body renders active step snapshot');
});

test('Wizard pattern body renders empty if no steps and not loading', () => {
  const component = shallow(<Wizard.Pattern.Body loading={false} />);
  expect(component).toMatchSnapshot('Wizard pattern body renders empty snapshot');
});

const testWizardPattern = props => {
  const onHide = jest.fn();
  const onExited = jest.fn();
  const onStepChanged = jest.fn();
  return (
    <Wizard.Pattern
      show
      onHide={onHide}
      onExited={onExited}
      title="Wizard Pattern Example"
      nextStepDisabled={false}
      steps={[
        { title: 'General', render: () => <p>General</p> },
        { title: 'Step Two', render: () => <p>Step Two</p> },
        { title: 'Step Three', render: () => <p>Step Three</p> }
      ]}
      loadingTitle="Loading..."
      loadingMessage="This may take a minute."
      activeStepIndex={0}
      onStepChanged={onStepChanged}
      {...props}
    />
  );
};

test('Wizard Pattern renders properly', () => {
  const component = shallow(testWizardPattern({ loading: false }));
  expect(component).toMatchSnapshot('Wizard pattern snapshot');
});

test('Wizard Pattern hides onClose', () => {
  const onHideMock = jest.fn();

  const component = mount(
    testWizardPattern({
      onHide: onHideMock
    })
  );
  component.find('.close').simulate('click');

  expect(onHideMock).toBeCalled();
});

test('Wizard Pattern sets active step to step 2 after step click', () => {
  const onStepChangedMock = jest.fn();
  const onNextMock = jest.fn();

  const component = mount(
    testWizardPattern({
      onStepChanged: onStepChangedMock,
      onNext: onNextMock
    })
  );
  component
    .find('.wizard-pf-step a')
    .at(1)
    .simulate('click');

  expect(onNextMock).toBeCalledWith(1);
  expect(onStepChangedMock).toBeCalledWith(1);
});

test('Wizard Pattern accepts next step then previous step', () => {
  let eventCount = 0;
  const onBackMock = jest.fn();

  const component = mount(
    testWizardPattern({
      onStepChanged: () => eventCount++,
      onBack: onBackMock
    })
  );

  // click next
  component
    .find('.wizard-pf-footer button')
    .at(2)
    .simulate('click');

  component.setProps({ activeStepIndex: 1 });

  // click previous
  component
    .find('.wizard-pf-footer button')
    .at(1)
    .simulate('click');

  expect(onBackMock).toBeCalledWith(0);
  expect(eventCount).toBe(2);
});

const testStatefulWizardPattern = props => {
  const onHide = jest.fn();
  const onExited = jest.fn();
  const onStepChanged = jest.fn();
  return (
    <Wizard.Pattern.Stateful
      show
      onHide={onHide}
      onExited={onExited}
      title="Wizard Pattern Stateful Example"
      shouldDisableNextStep={() => false}
      shouldDisablePreviousStep={() => false}
      shouldPreventStepChange={() => false}
      steps={[
        { title: 'General', render: () => <p>General</p> },
        { title: 'Step Two', render: () => <p>Step Two</p> },
        { title: 'Step Three', render: () => <p>Step Three</p> }
      ]}
      loadingTitle="Loading..."
      loadingMessage="This may take a minute."
      onStepChanged={onStepChanged}
      {...props}
    />
  );
};

test('Wizard Stateful Pattern renders properly', () => {
  const component = shallow(testStatefulWizardPattern());
  expect(component.state().activeStepIndex).toBe(0);
  expect(component).toMatchSnapshot('Wizard stateful pattern snapshot');
});

test('Wizard Stateful Pattern renders properly after wizard step click', () => {
  const component = mount(testStatefulWizardPattern());
  component
    .find('.wizard-pf-step a')
    .at(1)
    .simulate('click');

  expect(component.state().activeStepIndex).toBe(1);
});

test('Wizard Stateful Pattern should return on shouldPreventStepChange', () => {
  const component = mount(
    testStatefulWizardPattern({
      shouldPreventStepChange: (activeStepIndex, newStepIndex) => true
    })
  );
  component
    .find('.wizard-pf-step a')
    .at(1)
    .simulate('click');

  expect(component.state().activeStepIndex).toBe(0);
});

const testDisableNextStepWizard = props => {
  const onHide = jest.fn();
  const onExited = jest.fn();
  const onStepChanged = jest.fn();
  return (
    <Wizard.Pattern.Stateful
      show
      onHide={onHide}
      onExited={onExited}
      onStepChanged={onStepChanged}
      title="Wizard Disable Next Step"
      shouldDisableNextStep={() => true}
      steps={[
        { title: '1', render: () => <p>1</p> },
        { title: '2', render: () => <p>2</p> },
        { title: '3', render: () => <p>3</p> }
      ]}
      {...props}
    />
  );
};

const testDisablePreviousStepWizard = props => {
  const onHide = jest.fn();
  const onExited = jest.fn();
  const onStepChanged = jest.fn();
  return (
    <Wizard.Pattern.Stateful
      show
      onHide={onHide}
      onExited={onExited}
      onStepChanged={onStepChanged}
      title="Wizard Disable Previous Step"
      shouldDisablePreviousStep={idx => idx === 2}
      shouldDisableCancelButton={idx => idx === 1}
      steps={[
        { title: '1', render: () => <p>1</p> },
        { title: '2', render: () => <p className=".step2">2</p> },
        { title: '3', render: () => <p>3</p> }
      ]}
      {...props}
    />
  );
};

const expectDisability = (component, buttonIndex) =>
  expect(
    component
      .find('.wizard-pf-footer .btn')
      .at(buttonIndex)
      .getDOMNode().disabled
  );

const clickOnNext = component =>
  component
    .find('.wizard-pf-footer .btn')
    .at(2)
    .simulate('click');

test('Wizard Stateful with shouldDisableNextStep should disable next step', () => {
  const component = mount(testDisableNextStepWizard());
  expectDisability(component, 2).toBe(true);
});

test('Wizard Stateful with shouldDisablePreviousStep and shouldDisableCancelButton', () => {
  const component = mount(testDisablePreviousStepWizard());

  expectDisability(component, 0).toBe(false);
  expectDisability(component, 1).toBe(true); // cannot go back on the first step

  clickOnNext(component);
  expect(component.exists('.step2')).toEqual(true);

  expectDisability(component, 0).toBe(true);
  expectDisability(component, 1).toBe(false);

  clickOnNext(component);

  expectDisability(component, 0).toBe(false);
  expectDisability(component, 1).toBe(true);
});
