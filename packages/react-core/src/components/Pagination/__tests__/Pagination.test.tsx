import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Pagination, PaginationVariant } from '../index';
import { KeyTypes } from '../../../helpers';

describe('Pagination', () => {
  describe('component render', () => {
    test('should render correctly top', () => {
      const { asFragment } = render(<Pagination itemCount={20} />);
      expect(asFragment()).toMatchSnapshot();
    });

    test('should render correctly bottom', () => {
      const { asFragment } = render(<Pagination itemCount={20} variant={PaginationVariant.bottom} />);
      expect(asFragment()).toMatchSnapshot();
    });

    test('should render correctly compact', () => {
      const { asFragment } = render(<Pagination itemCount={20} isCompact />);
      expect(asFragment()).toMatchSnapshot();
    });

    test('should render correctly sticky', () => {
      const { asFragment } = render(<Pagination itemCount={20} isSticky />);
      expect(asFragment()).toMatchSnapshot();
    });

    test('should render correctly bottom sticky', () => {
      const { asFragment } = render(<Pagination itemCount={20} variant={PaginationVariant.bottom} isSticky />);
      expect(asFragment()).toMatchSnapshot();
    });

    test('should render correctly disabled', () => {
      const { asFragment } = render(<Pagination itemCount={20} isDisabled />);
      expect(asFragment()).toMatchSnapshot();
    });

    test('limited number of pages', () => {
      const { asFragment } = render(<Pagination itemCount={20} perPage={20} />);
      expect(asFragment()).toMatchSnapshot();
    });

    test('zero results', () => {
      const { asFragment } = render(<Pagination itemCount={0} />);
      expect(asFragment()).toMatchSnapshot();
    });

    test('last page', () => {
      const { asFragment } = render(<Pagination itemCount={20} perPage={10} page={2} />);
      expect(asFragment()).toMatchSnapshot();
    });

    test('custom perPageOptions', () => {
      const { asFragment } = render(<Pagination itemCount={40} perPageOptions={[{ title: 'some', value: 1 }]} />);
      expect(asFragment()).toMatchSnapshot();
    });

    test('empty per page options', () => {
      const { asFragment } = render(<Pagination itemCount={40} perPageOptions={[]} />);
      expect(asFragment()).toMatchSnapshot();
    });

    test('custom start end', () => {
      const { asFragment } = render(<Pagination itemCount={40} itemsStart={5} itemsEnd={15} />);
      expect(asFragment()).toMatchSnapshot();
    });

    test('titles', () => {
      const { asFragment } = render(<Pagination itemCount={40} titles={{ items: 'values', page: 'books' }} />);
      expect(asFragment()).toMatchSnapshot();
    });

    test('custom pagination toggle', () => {
      const { asFragment } = render(
        <Pagination itemCount={40} toggleTemplate={'${firstIndex} - ${lastIndex} - ${itemCount} - ${itemsTitle}'} />
      );
      expect(asFragment()).toMatchSnapshot();
    });

    test('up drop direction', () => {
      const { asFragment } = render(<Pagination itemCount={40} dropDirection="up" />);
      expect(asFragment()).toMatchSnapshot();
    });

    test('indeterminate count (no item count)', () => {
      render(<Pagination />);
      expect(screen.getAllByText('1 - 10')[0]).toBeInTheDocument();
    });

    test('toggleTemplate toggle text with function', () => {
      render(
        <Pagination
          toggleTemplate={({ firstIndex, lastIndex }) => (
            <div>
              {firstIndex} - {lastIndex} of many
            </div>
          )}
        />
      );
      expect(screen.getAllByText('1 - 10 of many')[0]).toBeInTheDocument();
    });

    test('toggleTemplate toggle text with string', () => {
      render(<Pagination toggleTemplate={'I am a string'} />);
      expect(screen.getAllByText('I am a string')[0]).toBeInTheDocument();
    });

    test('should not update generated options menu id on rerenders', () => {
      const { rerender } = render(<Pagination titles={{ optionsToggleAriaLabel: 'test label' }} itemCount={20} />);
      const id = screen.getByLabelText('test label').getAttribute('id');
      rerender(<Pagination titles={{ optionsToggleAriaLabel: 'test label' }} itemCount={20} />);
      expect(screen.getByLabelText('test label')).toHaveAttribute('id', id);
    });

    test('page insets', () => {
      render(<Pagination data-testid="pagination-insets" usePageInsets />);
      expect(screen.getByTestId('pagination-insets')).toHaveClass('pf-m-page-insets');
    });

    test('page insets', () => {
      render(<Pagination data-testid="pagination-insets" usePageInsets />);
      expect(screen.getByTestId('pagination-insets')).toHaveClass('pf-m-page-insets');
    });
  });

  describe('API', () => {
    describe('onSetPage', () => {
      const onSetPage = jest.fn();

      test('should call first', async () => {
        const user = userEvent.setup();

        render(<Pagination onSetPage={onSetPage} itemCount={40} page={2} />);

        await user.click(screen.getByRole('button', { name: 'Go to first page' }));
        expect(onSetPage).toHaveBeenCalled();
      });

      test('should call previous', async () => {
        const user = userEvent.setup();

        render(<Pagination onSetPage={onSetPage} itemCount={40} page={3} />);

        await user.click(screen.getByRole('button', { name: 'Go to previous page' }));
        expect(onSetPage).toHaveBeenCalled();
      });

      test('should call next', async () => {
        const user = userEvent.setup();

        render(<Pagination onSetPage={onSetPage} itemCount={40} />);

        await user.click(screen.getByRole('button', { name: 'Go to next page' }));
        expect(onSetPage).toHaveBeenCalled();
      });

      test('should call last', async () => {
        const user = userEvent.setup();

        render(<Pagination onSetPage={onSetPage} itemCount={40} />);

        await user.click(screen.getByRole('button', { name: 'Go to last page' }));
        expect(onSetPage).toHaveBeenCalled();
      });

      test('should call input', async () => {
        const user = userEvent.setup();

        render(<Pagination onSetPage={onSetPage} itemCount={40} />);

        const input = screen.getByLabelText('Current page');
        await user.type(input, '1');
        await user.type(input, `{${KeyTypes.Enter}}`);

        expect(onSetPage).toHaveBeenCalled();
      });

      test('should call input wrong value', async () => {
        const user = userEvent.setup();

        render(<Pagination onSetPage={onSetPage} itemCount={40} />);

        const input = screen.getByLabelText('Current page');
        await user.type(input, 'a');
        await user.type(input, `{${KeyTypes.Enter}}`);

        expect(onSetPage).toHaveBeenCalled();
      });

      test('should call input huge page number', async () => {
        const user = userEvent.setup();

        render(<Pagination onSetPage={onSetPage} itemCount={40} />);

        const input = screen.getByLabelText('Current page');
        await user.type(input, '10');
        await user.type(input, `{${KeyTypes.Enter}}`);

        expect(onSetPage).toHaveBeenCalled();
      });

      test('should call input small page number', async () => {
        const user = userEvent.setup();

        render(<Pagination onSetPage={onSetPage} itemCount={40} />);

        const input = screen.getByLabelText('Current page');
        await user.type(input, '-10');
        await user.type(input, `{${KeyTypes.Enter}}`);

        expect(onSetPage).toHaveBeenCalled();
      });

      test('should NOT call', async () => {
        const user = userEvent.setup();

        render(<Pagination itemCount={40} />);

        await user.click(screen.getByRole('button', { name: 'Go to last page' }));
        expect(onSetPage).not.toHaveBeenCalled();
      });
    });

    describe('onFirst', () => {
      const onFirst = jest.fn();
      test('should call', async () => {
        const user = userEvent.setup();

        render(<Pagination onFirstClick={onFirst} itemCount={40} page={2} />);

        await user.click(screen.getByRole('button', { name: 'Go to first page' }));
        expect(onFirst).toHaveBeenCalled();
      });

      test('should NOT call', async () => {
        const user = userEvent.setup();

        render(<Pagination itemCount={40} page={2} />);

        await user.click(screen.getByRole('button', { name: 'Go to first page' }));
        expect(onFirst).not.toHaveBeenCalled();
      });
    });

    describe('onLast', () => {
      const onLast = jest.fn();
      test('should call', async () => {
        const user = userEvent.setup();

        render(<Pagination onLastClick={onLast} itemCount={40} />);

        await user.click(screen.getByRole('button', { name: 'Go to last page' }));
        expect(onLast).toHaveBeenCalled();
      });

      test('should NOT call', async () => {
        const user = userEvent.setup();

        render(<Pagination itemCount={40} />);

        await user.click(screen.getByRole('button', { name: 'Go to last page' }));
        expect(onLast).not.toHaveBeenCalled();
      });
    });

    describe('onPrevious', () => {
      const onPrevious = jest.fn();
      test('should call', async () => {
        const user = userEvent.setup();

        render(<Pagination onPreviousClick={onPrevious} itemCount={40} page={3} />);

        await user.click(screen.getByRole('button', { name: 'Go to previous page' }));
        expect(onPrevious).toHaveBeenCalled();
      });

      test('should NOT call', async () => {
        const user = userEvent.setup();

        render(<Pagination itemCount={40} />);

        await user.click(screen.getByRole('button', { name: 'Go to previous page' }));
        expect(onPrevious).not.toHaveBeenCalled();
      });
    });

    describe('onNext', () => {
      const onNext = jest.fn();
      test('should call', async () => {
        const user = userEvent.setup();

        render(<Pagination onNextClick={onNext} itemCount={40} />);

        await user.click(screen.getByRole('button', { name: 'Go to next page' }));
        expect(onNext).toHaveBeenCalled();
      });

      test('should NOT call', async () => {
        const user = userEvent.setup();

        render(<Pagination itemCount={40} />);

        await user.click(screen.getByRole('button', { name: 'Go to previous page' }));
        expect(onNext).not.toHaveBeenCalled();
      });
    });

    describe('onPerPage', () => {
      const onPerPage = jest.fn();
      test('should call', async () => {
        const user = userEvent.setup();

        render(<Pagination page={1} onPerPageSelect={onPerPage} itemCount={40} />);

        await user.click(screen.getByRole('button', { name: '1 - 10 of 40' }));
        await user.click(screen.getByText('20 per page'));

        expect(onPerPage).toHaveBeenCalled();
      });

      test('should NOT call', async () => {
        const user = userEvent.setup();

        render(<Pagination page={1} itemCount={40} />);

        await user.click(screen.getByRole('button', { name: '1 - 10 of 40' }));
        await user.click(screen.getByText('20 per page'));

        expect(onPerPage).not.toHaveBeenCalled();
      });
    });

    Object.values(['insetNone', 'insetSm', 'insetMd', 'insetLg', 'insetXl', 'inset2xl'] as [
      'insetNone',
      'insetSm',
      'insetMd',
      'insetLg',
      'insetXl',
      'inset2xl'
    ]).forEach(inset => {
      test(`verify ${inset} inset breakpoints`, () => {
        const { asFragment } = render(
          <Pagination inset={{ default: inset, sm: inset, md: inset, lg: inset, xl: inset, '2xl': inset }}>test</Pagination>
        );
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
