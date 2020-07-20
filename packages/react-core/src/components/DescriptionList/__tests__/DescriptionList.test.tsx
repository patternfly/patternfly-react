import React from 'react';
import { shallow, mount } from 'enzyme';
import { DescriptionList } from '../DescriptionList';
import { DescriptionListGroup } from '../DescriptionListGroup';
import { DescriptionListTerm } from '../DescriptionListTerm';
import { DescriptionListText } from '../DescriptionListText';
import { DescriptionListDescription } from '../DescriptionListDescription';
import { Button } from '../../Button';

describe('Description List', () => {
  test('Description List default', () => {
    const view = shallow(<DescriptionList />);
    expect(view).toMatchSnapshot();
  });

  test('Horizontal Description List', () => {
    const view = shallow(<DescriptionList isHorizontal />);
    expect(view).toMatchSnapshot();
  });

  test('Auto Column Widths Description List', () => {
    const view = shallow(<DescriptionList hasAutoColumnWidths />);
    expect(view).toMatchSnapshot();
  });

  test('Inline Grid Description List', () => {
    const view = shallow(<DescriptionList hasInlineGrid />);
    expect(view).toMatchSnapshot();
  });

  test('Term default', () => {
    const view = shallow(
      <DescriptionListTerm key="term-id-1" aria-labelledby="term-1">
          test
      </DescriptionListTerm>
    );
    expect(view).toMatchSnapshot();
  });

  test('Group', () => {
    const view = shallow(
      <DescriptionListGroup className="custom-description-list-group" aria-labelledby="group-1">
        test
      </DescriptionListGroup>
    );
    expect(view).toMatchSnapshot();
  });

  test('Text', () => {
    const view = shallow(
        <DescriptionListText className="custom-description-list-text" aria-labelledby="text-1">
          test
        </DescriptionListText>
      );
      expect(view).toMatchSnapshot();
  })

  test('Description', () => {
    const view = shallow(
        <DescriptionListDescription className="custom-description-list-description" aria-labelledby="description-1">
          test
        </DescriptionListDescription>
      );
      expect(view).toMatchSnapshot();
  })
});