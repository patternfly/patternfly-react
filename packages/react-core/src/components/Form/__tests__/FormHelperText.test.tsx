import React from 'react';
import { FormHelperText } from '../FormHelperText';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { ExclamationCircleIcon } from '@patternfly/react-icons';

test('renders with PatternFly Core styles', () => {
  const view = render(<FormHelperText isError isHidden={false} />);
  expect(view.container).toMatchSnapshot();
});

test('renders with icon', () => {
  const view = render(<FormHelperText isError isHidden={false} icon={<ExclamationCircleIcon />} />);
  expect(view.container).toMatchSnapshot();
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
  const view = render(
    <FormHelperText>
      <CustomNode />
    </FormHelperText>
  );
  expect(view.container).toMatchSnapshot();
});
