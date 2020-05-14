/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { WizardToggle } from '../../WizardToggle';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('WizardToggle should match snapshot (auto-generated)', () => {
  const view = shallow(
    <WizardToggle
      nav={(isWizardNavOpen: boolean) => undefined as React.ReactElement}
      steps={[]}
      activeStep={{} /*unrecognizedType WizardStep undefined*/}
      children={<div>ReactNode</div>}
      hasNoBodyPadding={false}
      isNavOpen={true}
      onNavToggle={(isOpen: boolean) => undefined as void}
      aria-label={"'Wizard Toggle'"}
    />
  );
  expect(view).toMatchSnapshot();
});
