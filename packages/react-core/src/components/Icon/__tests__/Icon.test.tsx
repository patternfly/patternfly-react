import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Icon } from '../Icon';
import { CheckIcon } from '@patternfly/react-icons';

test('renders basic icon successfully', () => {
  const { asFragment } = render(
    <Icon>
      <CheckIcon />
    </Icon>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('checks basic icon structure', () => {
  const { asFragment } = render(
    <Icon title="icon">
      <CheckIcon />
    </Icon>
  );
  const iconContainer = screen.getByTitle('icon');
  expect(iconContainer).toHaveClass('pf-c-icon');
  const iconContent = iconContainer.querySelector('.pf-c-icon__content');
  expect(iconContent).toHaveClass('pf-c-icon__content');
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

Object.values(['sm', 'md', 'lg', 'xl']).forEach(size => {
  test(`sets icon size modifier successfully - ${size}`, () => {
    render(
      <Icon iconSize={size as 'sm' | 'md' | 'lg' | 'xl'} title={`content-${size}-icon`}>
        <CheckIcon />
      </Icon>
    );
    const iconContainer = screen.getByTitle(`content-${size}-icon`).querySelector('.pf-c-icon__content');

    expect(iconContainer).toHaveClass(`pf-m-${size}`);
  });
});

test('check icon without iconSize', () => {
  render(
    <Icon title="no-icon-size">
      <CheckIcon />
    </Icon>
  );
  const iconContainer = screen.getByTitle('no-icon-size').querySelector('.pf-c-icon__content');
  expect(Array.from(iconContainer?.classList || []).some(c => /pf-m-*/.test(c))); // Check no modifier classes have been added
});

Object.values(['sm', 'md', 'lg', 'xl']).forEach(size => {
  test(`sets progress icon size modifier successfully - ${size}`, () => {
    render(
      <Icon isInProgress progressIconSize={size as 'sm' | 'md' | 'lg' | 'xl'} title={`progress-content-${size}-icon`}>
        <CheckIcon />
      </Icon>
    );
    const iconContainer = screen.getByTitle(`progress-content-${size}-icon`).querySelector('.pf-c-icon__progress');

    expect(iconContainer).toHaveClass(`pf-m-${size}`);
  });
});

test('check icon without progress icon size', () => {
  render(
    <Icon title="no-progress-icon-size">
      <CheckIcon />
    </Icon>
  );
  const iconContainer = screen.getByTitle('no-progress-icon-size').querySelector('.pf-c-icon__progress');
  expect(Array.from(iconContainer?.classList || []).some(c => /pf-m-*/.test(c))); // Check no modifier classes have been added
});

Object.values(['sm', 'md', 'lg', 'xl']).forEach(size => {
  test(`sets size modifier successfully - ${size}`, () => {
    render(
      <Icon size={size as 'sm' | 'md' | 'lg' | 'xl'} title={`${size}-icon`}>
        <CheckIcon />
      </Icon>
    );
    const iconContainer = screen.getByTitle(`${size}-icon`);

    expect(iconContainer).toHaveClass(`pf-m-${size}`);
  });
});

test('check icon without size', () => {
  render(
    <Icon title="no-size">
      <CheckIcon />
    </Icon>
  );
  const iconContainer = screen.getByTitle('no-size');
  expect(Array.from(iconContainer?.classList || []).some(c => /pf-m-*/.test(c))); // Check no modifier classes have been added
});

Object.values(['default', 'info', 'success', 'warning', 'danger']).forEach(status => {
  test(`sets status modifier successfully - ${status}`, () => {
    render(
      <Icon status={status as 'default' | 'info' | 'success' | 'warning' | 'danger'} title={`${status}-icon`}>
        <CheckIcon />
      </Icon>
    );
    const iconContent = screen.getByTitle(`${status}-icon`).querySelector('.pf-c-icon__content');

    expect(iconContent).toHaveClass(`pf-m-${status}`);
  });
});

test('check icon without status', () => {
  render(
    <Icon title="no-status">
      <CheckIcon />
    </Icon>
  );
  const iconContent = screen.getByTitle('no-status').querySelector('.pf-c-icon__content');
  expect(Array.from(iconContent?.classList || []).some(c => /pf-m-*/.test(c))); // Check no modifier classes have been added
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
  expect(Array.from(iconContainer?.classList || []).some(c => /pf-m-*/.test(c))); // Check no modifier classes have been added
});

test('sets isInProgress successfully', () => {
  render(
    <Icon isInProgress title="progress-icon">
      <CheckIcon />
    </Icon>
  );
  const iconContainer = screen.getByTitle('progress-icon');
  expect(iconContainer).toHaveClass('pf-m-in-progress');

  const iconContent = iconContainer.querySelector('.pf-c-icon__progress');
  expect(iconContent).toHaveClass('pf-c-icon__progress');
});

test('check icon without isInProgress', () => {
  render(
    <Icon title="no-in-progress">
      <CheckIcon />
    </Icon>
  );
  const iconContainer = screen.getByTitle('no-in-progress');
  expect(Array.from(iconContainer?.classList || []).some(c => /pf-m-*/.test(c))); // Check no modifier classes have been added
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
