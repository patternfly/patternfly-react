/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { Wizard } from '../../Wizard';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Wizard should match snapshot (auto-generated)', () => {
  const view = shallow(
    <Wizard
      width={null}
      height={null}
      title={"''"}
      titleId={'string'}
      descriptionId={'string'}
      description={''}
      hideClose={false}
      onClose={() => undefined as any}
      onGoToStep={null}
      className={"''"}
      steps={[]}
      startAtStep={1}
      navAriaLabel={"'Steps'"}
      hasNoBodyPadding={false}
      footer={null}
      onSave={() => undefined as void}
      onNext={null}
      onBack={null}
      nextButtonText={'Next'}
      backButtonText={'Back'}
      cancelButtonText={'Cancel'}
      closeButtonAriaLabel={"'Close'"}
      appendTo={null}
      isOpen={true}
    />
  );
  expect(view).toMatchSnapshot();
});
