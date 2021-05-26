import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Wizard, WizardStepFunctionType, WizardStep } from '../Wizard';

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const name = { step };
  };

  const view = mount(
    <Wizard title="Wizard title" description="Description here" steps={steps} startAtStep={1} onBack={onBack} />
  );
  // ran into: https://github.com/airbnb/enzyme/issues/1213
  // so instead of: expect(view).toMatchSnapshot();
  const fragment = view.instance().render();
  expect(mount(<div>{fragment}</div>).getElement()).toMatchSnapshot();
});

test('Expandable Nav Wizard should match snapshot', () => {
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const name = { step };
  };

  const view = mount(
    <Wizard title="Wizard title" description="Description here" steps={steps} startAtStep={1} onBack={onBack} isNavExpandable />
  );
  // ran into: https://github.com/airbnb/enzyme/issues/1213
  // so instead of: expect(view).toMatchSnapshot();
  const fragment = view.instance().render();
  expect(mount(<div>{fragment}</div>).getElement()).toMatchSnapshot();
});

test('bare wiz ', () => {
  const steps: WizardStep[] = [{ name: 'A', component: <p>Step 1</p> }];
  const wiz = (
    <Wizard
      description="This wizard uses anchor tags for the nav item elements"
      id="inPageWizWithAnchorsId"
      steps={steps}
    />
  );
  const view = mount(wiz);
  const hasHeader = view.at(0).find('.pf-c-wizard__header').length;
  const hasTitle = view.at(0).find('.pf-c-wizard__title').length;
  expect(hasHeader).toBeFalsy();
  expect(hasTitle).toBeFalsy();
});

test('wiz with title ', () => {
  const steps: WizardStep[] = [{ name: 'A', component: <p>Step 1</p> }];
  const wiz = <Wizard title="Wizard" description="This wizard has a title" steps={steps} />;
  const view = mount(wiz).at(0);
  const hasHeader = view.find('.pf-c-wizard__header').length;
  const hasTitle = view.find('h2.pf-c-wizard__title').length;
  const nav = view.find('nav.pf-c-wizard__nav');
  const main = view.find('div.pf-c-wizard__main');
  expect(hasHeader).toBe(1);
  expect(hasTitle).toBe(1);
  expect(nav.find('[aria-labelledby="pf-wizard-title-3"]').length).toBe(1);
  expect(main.find('[aria-labelledby="pf-wizard-title-3"]').length).toBe(1);
});

test('wiz with title and navAriaLabel combination', () => {
  const steps: WizardStep[] = [{ name: 'A', component: <p>Step 1</p> }];
  const wiz = <Wizard title="Wizard" navAriaLabel="Some label" description="This wizard has a title" steps={steps} />;
  const view = mount(wiz).at(0);
  const nav = view.find('nav.pf-c-wizard__nav');
  const main = view.find('div.pf-c-wizard__main');
  expect(nav.find('[aria-labelledby="pf-wizard-title-4"]').length).toBe(1);
  expect(nav.find('[aria-label="Some label"]').length).toBe(1);
  expect(main.props()['aria-label']).toBe(null);
});

test('wiz with title, navAriaLabel, and mainAriaLabel combination', () => {
  const steps: WizardStep[] = [{ name: 'A', component: <p>Step 1</p> }];
  const wiz = (
    <Wizard
      title="Wizard"
      navAriaLabel="nav aria-label"
      mainAriaLabel="main aria-label"
      description="This wizard has a title"
      steps={steps} />
  );
  const view = mount(wiz).at(0);
  const nav = view.find('nav.pf-c-wizard__nav');
  const main = view.find('div.pf-c-wizard__main');
  expect(nav.find('[aria-labelledby="pf-wizard-title-5"]').length).toBe(1);
  expect(nav.find('[aria-label="nav aria-label"]').length).toBe(1);
  expect(main.props()['aria-label']).toBe('main aria-label');
});

test('wiz with navAriaLabel and mainAriaLabel but without title', () => {
  const steps: WizardStep[] = [{ name: 'A', component: <p>Step 1</p> }];
  const wiz = (
    <Wizard
      navAriaLabel="nav aria-label"
      mainAriaLabel="main aria-label"
      description="This wizard has a title"
      steps={steps} />
  );
  const view = mount(wiz).at(0);
  const nav = view.find('nav.pf-c-wizard__nav');
  const main = view.find('div.pf-c-wizard__main');
  expect(main.props()['aria-label']).toBe('main aria-label');
  expect(main.props()['aria-labelledby']).toBe(null);
  expect(nav.find('[aria-label="nav aria-label"]').length).toBe(1);
  expect(nav.props()['aria-labelledby']).toBe(null);
});

test('wiz with navAriaLabel and navAriaLabelledby and without title', () => {
  const steps: WizardStep[] = [{ name: 'A', component: <p>Step 1</p> }];
  const wiz = (
    <Wizard
      navAriaLabelledBy="nav-aria-labelledby"
      navAriaLabel="nav aria-label"
      mainAriaLabel="main aria-label"
      description="This wizard has a title"
      steps={steps} />
  );
  const view = mount(wiz).at(0);
  const nav = view.find('nav.pf-c-wizard__nav');
  const main = view.find('div.pf-c-wizard__main');
  expect(nav.find('[aria-label="nav aria-label"]').length).toBe(1);
  expect(nav.props()['aria-labelledby']).toBe('nav-aria-labelledby');
});

test('wiz with navAriaLabel and navAriaLabelledby and without title', () => {
  const steps: WizardStep[] = [{ name: 'A', component: <p>Step 1</p> }];
  const wiz = (
    <Wizard
      navAriaLabel="nav aria-label"
      mainAriaLabel="main aria-label"
      mainAriaLabelledBy="main-aria-labelledby"
      description="This wizard has a title"
      steps={steps} />
  );
  const view = mount(wiz).at(0);
  const main = view.find('div.pf-c-wizard__main');
  expect(main.props()['aria-label']).toBe('main aria-label');
  expect(main.props()['aria-labelledby']).toBe('main-aria-labelledby');
});

test('wiz with title, navAriaLabelledBy, navAriaLabel, mainAriaLabel, and mainAriaLabelledby', () => {
  const steps: WizardStep[] = [{ name: 'A', component: <p>Step 1</p> }];
  const wiz = (
    <Wizard
      title="Wiz title"
      navAriaLabel="nav aria-label"
      navAriaLabelledBy="nav-aria-labelledby"
      mainAriaLabel="main aria-label"
      mainAriaLabelledBy="main-aria-labelledby"
      description="This wizard has a title"
      steps={steps} />
  );
  const view = mount(wiz).at(0);
  const nav = view.find('nav.pf-c-wizard__nav');
  const main = view.find('div.pf-c-wizard__main');
  expect(nav.find('[aria-label="nav aria-label"]').length).toBe(1);
  expect(nav.find('[aria-labelledby="nav-aria-labelledby"]').length).toBe(1);
  expect(main.props()['aria-label']).toBe('main aria-label');
  expect(main.props()['aria-labelledby']).toBe('main-aria-labelledby');
});
