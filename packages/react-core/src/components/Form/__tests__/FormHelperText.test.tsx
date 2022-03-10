import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ExclamationCircleIcon } from '@patternfly/react-icons';
import { FormHelperText } from '../FormHelperText';

describe('FormHelperText', () => {
  test('renders with PatternFly Core styles', () => {
    render(
      <FormHelperText isError isHidden={false}>
        test
      </FormHelperText>
    );
    expect(screen.getByText('test').outerHTML).toMatchSnapshot();
  });

  test('renders with icon', () => {
    render(
      <FormHelperText isError isHidden={false} icon={<ExclamationCircleIcon />}>
        test
      </FormHelperText>
    );
    expect(screen.getByText('test').outerHTML).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    render(<FormHelperText className="extra-class">test</FormHelperText>);
    expect(screen.getByText('test').outerHTML).toMatchSnapshot();
  });

  test('extra props are spread to the root element', () => {
    const testId = 'login-body';
    render(<FormHelperText data-testid={testId}>test</FormHelperText>);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  test('LoginFooterItem  with custom node', () => {
    const CustomNode = () => <div>My custom node</div>;

    render(
      <FormHelperText>
        <CustomNode />
      </FormHelperText>
    );

    expect(screen.getByText('My custom node').parentElement.outerHTML).toMatchSnapshot();
  });
});
