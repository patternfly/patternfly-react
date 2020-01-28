import * as React from 'react';
import { shallow } from 'enzyme';
import { InternalDropdownItem } from '../InternalDropdownItem';
import { DropdownSeparator } from '../DropdownSeparator';

it('InternalDropdownItem should match snapshot (auto-generated)', () => {
  const view = shallow(
    <InternalDropdownItem
      children={<div>ReactNode</div>}
			className={"''"}
			listItemClassName={"string"}
			component={'a'}
			variant={'item'}
			role={"'none'"}
			isDisabled={false}
			isHovered={false}
			href={"''"}
			tooltip={<div>ReactNode</div>}
			tooltipProps={undefined}
			index={-1}
			context={{
				keyHandler: () => {},
				sendRef: () => {}
			}}
			onClick={(event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent) => undefined as any}
			id={"''"}
			componentID={"''"}
			additionalChild={<div>ReactNode</div>}
			customChild={<div>ReactNode</div>}
			enterTriggersArrowDown={false}
    />);
  expect(view).toMatchSnapshot();
});

describe('dropdown items', () => {
  test('a', () => {
    const view = shallow(<InternalDropdownItem>Something</InternalDropdownItem>);
    expect(view).toMatchSnapshot();
  });

  test('button', () => {
    const view = shallow(<InternalDropdownItem component="button">Something</InternalDropdownItem>);
    expect(view).toMatchSnapshot();
  });

  test('separator', () => {
    const view = shallow(<DropdownSeparator />);
    expect(view).toMatchSnapshot();
  });

  describe('hover', () => {
    test('a', () => {
      const view = shallow(<InternalDropdownItem isHovered>Something</InternalDropdownItem>);
      expect(view).toMatchSnapshot();
    });
    test('button', () => {
      const view = shallow(
        <InternalDropdownItem isHovered component="button">
          Something
        </InternalDropdownItem>
      );
      expect(view).toMatchSnapshot();
    });
  });

  describe('disabled', () => {
    test('a', () => {
      const view = shallow(<InternalDropdownItem isDisabled>Something</InternalDropdownItem>);
      expect(view).toMatchSnapshot();
    });
    test('button', () => {
      const view = shallow(
        <InternalDropdownItem isDisabled component="button">
          Something
        </InternalDropdownItem>
      );
      expect(view).toMatchSnapshot();
    });
  });
});
