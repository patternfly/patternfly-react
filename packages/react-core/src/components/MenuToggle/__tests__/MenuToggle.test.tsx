import React from 'react';
import { render } from '@testing-library/react';
import { MenuToggle } from '../MenuToggle';
import { Badge } from '../../Badge';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

describe('menu toggle', () => {
  test('renders successfully', () => {
    const view = render(<MenuToggle>Toggle</MenuToggle>);
    expect(view.container).toMatchSnapshot();
  });

  test('passes additional classes', () => {
    const view = render(<MenuToggle className="test-class">Toggle</MenuToggle>);
    expect(view.container).toMatchSnapshot();
  });

  test('shows isExpanded', () => {
    const view = render(<MenuToggle isExpanded>Toggle</MenuToggle>);
    expect(view.container).toMatchSnapshot();
  });

  test('shows isDisabled', () => {
    const view = render(<MenuToggle isDisabled>Toggle</MenuToggle>);
    expect(view.container).toMatchSnapshot();
  });

  test('shows isPrimary', () => {
    const view = render(<MenuToggle variant="primary">Toggle</MenuToggle>);
    expect(view.container).toMatchSnapshot();
  });

  test('shows isPlain', () => {
    const view = render(
      <MenuToggle variant="plain">
        <EllipsisVIcon />
      </MenuToggle>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('shows plain text', () => {
    const view = render(<MenuToggle variant="plainText">Toggle</MenuToggle>);
    expect(view.container).toMatchSnapshot();
  });

  test('shows icon', () => {
    const view = render(<MenuToggle icon={<CogIcon />}>Toggle</MenuToggle>);
    expect(view.container).toMatchSnapshot();
  });

  test('shows badge', () => {
    const view = render(<MenuToggle badge={<Badge>badge</Badge>}>Toggle</MenuToggle>);
    expect(view.container).toMatchSnapshot();
  });
});
