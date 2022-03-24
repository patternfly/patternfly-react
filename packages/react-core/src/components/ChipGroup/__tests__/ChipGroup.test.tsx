import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { ChipGroup } from '../index';
import { Chip } from '../../Chip';

describe('ChipGroup', () => {
  test('chip group default', () => {
    const view = render(
      <ChipGroup>
        <Chip>1.1</Chip>
      </ChipGroup>
    );

    expect(view.container).toMatchSnapshot();
  });

  test('chip group with category', () => {
    const view = render(
      <ChipGroup categoryName="category">
        <Chip>1.1</Chip>
      </ChipGroup>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('chip group with closable category', () => {
    const view = render(
      <ChipGroup categoryName="category" isClosable>
        <Chip>1.1</Chip>
      </ChipGroup>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('chip group expanded', () => {
    render(
      <ChipGroup>
        <Chip>1</Chip>
        <Chip>2</Chip>
        <Chip>3</Chip>
        <Chip>4</Chip>
      </ChipGroup>
    );

    const moreText = screen.getByText('1 more');
    expect(moreText).toBeInTheDocument();

    userEvent.click(moreText);
    expect(screen.getByText('Show Less')).toBeInTheDocument();
  });

  test('chip group will not render if no children passed', () => {
    render(<ChipGroup />);
    expect(screen.queryByRole('group')).toBeNull();
  });

  test('chip group with category and tooltip', () => {
    const view = render(
      <ChipGroup categoryName="A very long category name">
        <Chip>1.1</Chip>
      </ChipGroup>
    );
    expect(view.container).toMatchSnapshot();
  });
});
