import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Label } from '../../Label';
import { LabelGroup } from '../index';

describe('LabelGroup', () => {
  test('label group default', () => {
    render(
      <LabelGroup data-testid="label-group-test-id">
        <Label>1.1</Label>
      </LabelGroup>
    );
    expect(screen.getByTestId('label-group-test-id').outerHTML).toMatchSnapshot();
  });

  test('label group with category', () => {
    render(
      <LabelGroup categoryName="category" data-testid="label-group-test-id">
        <Label>1.1</Label>
      </LabelGroup>
    );
    expect(screen.getByTestId('label-group-test-id').outerHTML).toMatchSnapshot();
  });

  test('label group with closable category', () => {
    render(
      <LabelGroup categoryName="category" isClosable data-testid="label-group-test-id">
        <Label>1.1</Label>
      </LabelGroup>
    );
    expect(screen.getByTestId('label-group-test-id').outerHTML).toMatchSnapshot();
  });

  test('label group expanded', () => {
    render(
      <LabelGroup>
        <Label>1</Label>
        <Label>2</Label>
        <Label>3</Label>
        <Label>4</Label>
      </LabelGroup>
    );
    const showMoreButton = screen.getByRole('button');

    expect(showMoreButton.textContent).toBe('1 more');

    userEvent.click(showMoreButton);
    expect(showMoreButton.textContent).toBe('Show Less');
  });

  test('label group will not render if no children passed', () => {
    render(<LabelGroup data-testid="label-group-test-id" />);
    expect(screen.queryByTestId('label-group-test-id')).toBeNull();
  });

  test('label group with category and tooltip', () => {
    render(
      <LabelGroup categoryName="A very long category name" data-testid="label-group-test-id">
        <Label>1.1</Label>
      </LabelGroup>
    );
    expect(screen.getByTestId('label-group-test-id').outerHTML).toMatchSnapshot();
  });

  test('label group compact', () => {
    render(
      <LabelGroup isCompact data-testid="label-group-test-id">
        <Label isCompact>1</Label>
        <Label isCompact>2</Label>
        <Label isCompact>3</Label>
        <Label isCompact>4</Label>
      </LabelGroup>
    );
    expect(screen.getByTestId('label-group-test-id').outerHTML).toMatchSnapshot();
  });
});
