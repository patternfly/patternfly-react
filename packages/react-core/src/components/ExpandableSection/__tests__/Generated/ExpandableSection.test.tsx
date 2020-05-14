/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { ExpandableSection } from '../../ExpandableSection';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ExpandableSection should match snapshot (auto-generated)', () => {
  const view = shallow(
    <ExpandableSection
      children={<div>ReactNode</div>}
      className={"''"}
      isExpanded={true}
      toggleText={"''"}
      toggleTextExpanded={"''"}
      toggleTextCollapsed={"''"}
      onToggle={(): any => undefined}
      isActive={false}
    />
  );
  expect(view).toMatchSnapshot();
});
