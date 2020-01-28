import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { ActionGroup } from '../ActionGroup';
import { Form } from '../Form';

it('ActionGroup should match snapshot (auto-generated)', () => {
  const view = shallow(
    <ActionGroup
      children={<>ReactNode</>}
			className={"''"}
    />);
  expect(view).toMatchSnapshot();
});

describe('ActionGroup component', () => {
  test('should render default action group variant', () => {
    const view = mount(
      <ActionGroup>
        <div>Hello</div>
      </ActionGroup>
    );
    expect(view).toMatchSnapshot();
  });

  test('should render horizontal form ActionGroup variant', () => {
    const view = mount(
      <Form isHorizontal>
        <ActionGroup />
      </Form>
    );
    expect(view).toMatchSnapshot();
  });
});
