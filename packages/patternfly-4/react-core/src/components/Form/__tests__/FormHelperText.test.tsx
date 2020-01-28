import * as React from 'react';
import { shallow } from 'enzyme';
import { FormHelperText } from '../FormHelperText';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('FormHelperText should match snapshot (auto-generated)', () => {
  const view = shallow(
    <FormHelperText
      children={<>ReactNode</>}
			isError={false}
			isHidden={true}
			className={"''"}
    />);
  expect(view).toMatchSnapshot();
});

test('renders with PatternFly Core styles', () => {
  const view = shallow(<FormHelperText isError isHidden={false} />);
  expect(view).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<FormHelperText className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'login-body';
  const view = shallow(<FormHelperText data-testid={testId} />);
  expect(view.prop('data-testid')).toBe(testId);
});

test('LoginFooterItem  with custom node', () => {
  const CustomNode = () => <div>My custom node</div>;
  const view = shallow(
    <FormHelperText>
      <CustomNode />
    </FormHelperText>
  );
  expect(view).toMatchSnapshot();
});
