/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { LabelGroup } from '../../LabelGroup';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('LabelGroup should match snapshot (auto-generated)', () => {
  const view = render(
    <LabelGroup
      children={<div>ReactNode</div>}
      className={'string'}
      defaultIsOpen={false}
      expandedText={"'Show Less'"}
      collapsedText={"'${remaining} more'"}
      categoryName={"''"}
      aria-label={"'Label group category'"}
      numLabels={3}
      isClosable={false}
      closeBtnAriaLabel={"'Close label group'"}
      onClick={(_e: React.MouseEvent) => undefined as any}
      tooltipPosition={'top'}
      isVertical={false}
    />
  );
  expect(view.container).toMatchSnapshot();
});
