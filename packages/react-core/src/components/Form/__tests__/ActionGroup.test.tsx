import React from 'react';
import { render } from '@testing-library/react';
import { ActionGroup } from '../ActionGroup';
import { Form } from '../Form';

describe('ActionGroup component', () => {
  test('should render default action group variant', () => {
    const view = render(
      <ActionGroup>
        <div>Hello</div>
      </ActionGroup>
    );
    expect(view.container.outerHTML).toMatchSnapshot();
  });

  test('should render horizontal form ActionGroup variant', () => {
    const view = render(
      <Form isHorizontal>
        <ActionGroup />
      </Form>
    );
    expect(view.container.outerHTML).toMatchSnapshot();
  });
});
