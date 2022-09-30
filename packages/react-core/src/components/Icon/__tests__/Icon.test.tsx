import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Icon } from '../Icon';
import { CheckIcon } from '@patternfly/react-icons';

describe('Icon', () => {
  test('renders basic icon successfully', () => {
    const { asFragment } = render(
      <Icon>
        <CheckIcon />
      </Icon>
    );
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

  Object.values(['sm', 'md', 'lg', 'xl']).forEach(size => {
    test(`sets size modifier successfully - ${size}`, () => {
      render(
        <Icon size={size as 'sm' | 'md' | 'lg' | 'xl'} title={`${size}-icon`}>
          <CheckIcon />
        </Icon>
      );
      const iconContent = screen.getByTitle(`${size}-icon`);

      expect(iconContent).toHaveClass(`pf-m-${size}`);
    });
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

  test('sets isInline successfully', () => {
    render(
      <Icon isInline title="inline-icon">
        <CheckIcon />
      </Icon>
    );
    const iconContainer = screen.getByTitle('inline-icon');

    expect(iconContainer).toHaveClass('pf-m-inline');
  });

  test('sets isInProgress successfully', () => {
    render(
      <Icon isInProgress title="progress-icon">
        <CheckIcon />
      </Icon>
    );
    const iconContainer = screen.getByTitle('progress-icon');

    expect(iconContainer).toHaveClass('pf-m-in-progress');
  });

  test('renders progress icon successfully', () => {
    const { asFragment } = render(
      <Icon isInProgress progressIcon={<CheckIcon />}>
        <CheckIcon />
      </Icon>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
