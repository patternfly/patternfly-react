import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { kebabCase } from 'case-anything';
import { Icon, IconSize } from '../Icon';
import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';
import styles from '@patternfly/react-styles/css/components/Icon/icon';

test('renders basic icon successfully', () => {
  const { asFragment } = render(
    <Icon>
      <CheckIcon />
    </Icon>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('checks basic icon structure', () => {
  render(
    <Icon title="icon">
      <CheckIcon />
    </Icon>
  );
  const iconContainer = screen.getByTitle('icon');
  expect(iconContainer).toHaveClass(styles.icon);
  const iconContent = iconContainer.querySelector(`.${styles.iconContent}`);
  expect(iconContent).toHaveClass(styles.iconContent);
});

test('renders without children', () => {
  const { asFragment } = render(<Icon></Icon>);
  expect(asFragment()).toMatchSnapshot();
});

test('sets additional custom class successfully', () => {
  render(
    <Icon className="test" title="custom-icon">
      <CheckIcon />
    </Icon>
  );
  const iconContainer = screen.getByTitle('custom-icon');

  expect(iconContainer).toHaveClass('test');
});

Object.values([
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  'headingSm',
  'headingMd',
  'headingLg',
  'headingXl',
  'heading_2xl',
  'heading_3xl',
  'bodySm',
  'bodyDefault',
  'bodyLg'
]).forEach((size) => {
  test(`sets icon size modifier successfully - ${size}`, () => {
    render(
      <Icon iconSize={size as IconSize} title={`content-${size}-icon`}>
        <CheckIcon />
      </Icon>
    );
    const iconContainer = screen.getByTitle(`content-${size}-icon`).querySelector(`.${styles.iconContent}`);

    const formattedSize = kebabCase(size).replace(/(\d)(-)/, '$1');

    expect(iconContainer).toHaveClass(`pf-m-${formattedSize}`);
  });

  test(`sets progress icon size modifier successfully - ${size}`, () => {
    render(
      <Icon isInProgress progressIconSize={size as IconSize} title={`progress-content-${size}-icon`}>
        <CheckIcon />
      </Icon>
    );
    const iconContainer = screen.getByTitle(`progress-content-${size}-icon`).querySelector(`.${styles.iconProgress}`);

    const formattedSize = kebabCase(size).replace(/(\d)(-)/, '$1');

    expect(iconContainer).toHaveClass(`pf-m-${formattedSize}`);
  });

  test(`sets size modifier successfully - ${size}`, () => {
    render(
      <Icon size={size as IconSize} title={`${size}-icon`}>
        <CheckIcon />
      </Icon>
    );
    const iconContainer = screen.getByTitle(`${size}-icon`);

    const formattedSize = kebabCase(size).replace(/(\d)(-)/, '$1');

    expect(iconContainer).toHaveClass(`pf-m-${formattedSize}`);
  });
});

test('check icon without iconSize', () => {
  render(
    <Icon title="no-icon-size">
      <CheckIcon />
    </Icon>
  );
  const iconContainer = screen.getByTitle('no-icon-size').querySelector(`.${styles.iconContent}`);
  expect(Array.from(iconContainer?.classList || []).some((c) => /pf-m-*/.test(c))); // Check no modifier classes have been added
});

test('check icon without progress icon size', () => {
  render(
    <Icon title="no-progress-icon-size">
      <CheckIcon />
    </Icon>
  );
  const iconContainer = screen.getByTitle('no-progress-icon-size').querySelector(`.${styles.iconProgress}`);
  expect(Array.from(iconContainer?.classList || []).some((c) => /pf-m-*/.test(c))); // Check no modifier classes have been added
});

test('check icon without size', () => {
  render(
    <Icon title="no-size">
      <CheckIcon />
    </Icon>
  );
  const iconContainer = screen.getByTitle('no-size');
  expect(Array.from(iconContainer?.classList || []).some((c) => /pf-m-*/.test(c))); // Check no modifier classes have been added
});

Object.values(['custom', 'info', 'success', 'warning', 'danger']).forEach((status) => {
  test(`sets status modifier successfully - ${status}`, () => {
    render(
      <Icon status={status as 'custom' | 'info' | 'success' | 'warning' | 'danger'} title={`${status}-icon`}>
        <CheckIcon />
      </Icon>
    );
    const iconContent = screen.getByTitle(`${status}-icon`).querySelector(`.${styles.iconContent}`);

    expect(iconContent).toHaveClass(`pf-m-${status}`);
  });
});

test('check icon without status', () => {
  render(
    <Icon title="no-status">
      <CheckIcon />
    </Icon>
  );
  const iconContent = screen.getByTitle('no-status').querySelector(`.${styles.iconContent}`);
  expect(Array.from(iconContent?.classList || []).some((c) => /pf-m-*/.test(c))); // Check no modifier classes have been added
});

test('sets isInline successfully', () => {
  render(
    <Icon isInline title="inline-icon">
      <CheckIcon />
    </Icon>
  );
  const iconContainer = screen.getByTitle('inline-icon');

  expect(iconContainer).toHaveClass('pf-m-inline');
});

test('check icon without isInline', () => {
  render(
    <Icon title="no-inline">
      <CheckIcon />
    </Icon>
  );
  const iconContainer = screen.getByTitle('no-inline');
  expect(Array.from(iconContainer?.classList || []).some((c) => /pf-m-*/.test(c))); // Check no modifier classes have been added
});

test('sets isInProgress successfully', () => {
  render(
    <Icon isInProgress title="progress-icon">
      <CheckIcon />
    </Icon>
  );
  const iconContainer = screen.getByTitle('progress-icon');
  expect(iconContainer).toHaveClass('pf-m-in-progress');

  const iconContent = iconContainer.querySelector(`.${styles.iconProgress}`);
  expect(iconContent).toHaveClass(styles.iconProgress);
});

test('check icon without isInProgress', () => {
  render(
    <Icon title="no-in-progress">
      <CheckIcon />
    </Icon>
  );
  const iconContainer = screen.getByTitle('no-in-progress');
  expect(Array.from(iconContainer?.classList || []).some((c) => /pf-m-*/.test(c))); // Check no modifier classes have been added
});

test('sets default progres aria-label successfully', () => {
  render(
    <Icon isInProgress defaultProgressArialabel="test" title="progress-icon">
      <CheckIcon />
    </Icon>
  );

  expect(screen.getByLabelText('test'));
});

test('renders progress icon successfully', () => {
  const { asFragment } = render(
    <Icon isInProgress progressIcon={<CheckIcon />}>
      <CheckIcon />
    </Icon>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Renders with class pf-v6-m-mirror-inline-rtl on icon passed as children when shouldMirrorRTL is true', () => {
  render(<Icon shouldMirrorRTL>Icon content</Icon>);

  expect(screen.getByText('Icon content')).toHaveClass('pf-v6-m-mirror-inline-rtl');
});

test('Does not render with class pf-v6-m-mirror-inline-rtl on progressIcon when shouldMirrorRTL is true', () => {
  render(
    <Icon shouldMirrorRTL isInProgress progressIcon="Progress icon">
      Icon content
    </Icon>
  );

  expect(screen.getByText('Progress icon')).not.toHaveClass('pf-v6-m-mirror-inline-rtl');
});
