import { Fragment } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ToolbarToggleGroup } from '../ToolbarToggleGroup';
import { Toolbar } from '../Toolbar';
import { ToolbarItem } from '../ToolbarItem';
import { ToolbarContent } from '../ToolbarContent';
import { ToolbarFilter } from '../ToolbarFilter';
import { ToolbarGroup } from '../ToolbarGroup';
import { Button } from '../../Button/Button';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';

jest.mock('../../../helpers/GenerateId/GenerateId');

describe('Toolbar', () => {
  it('should render inset', () => {
    const items = (
      <Fragment>
        <ToolbarItem>Test</ToolbarItem>
        <ToolbarItem>Test 2</ToolbarItem>
        <ToolbarItem variant="separator" />
        <ToolbarItem>Test 3 </ToolbarItem>
      </Fragment>
    );

    const { asFragment } = render(
      <Toolbar
        id="toolbar"
        inset={{
          default: 'insetNone',
          md: 'insetSm',
          xl: 'inset2xl',
          '2xl': 'insetLg'
        }}
      >
        <ToolbarContent>{items}</ToolbarContent>
      </Toolbar>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it(`should render toolbar without ${styles.modifiers.noPadding} by default`, () => {
    render(
      <Toolbar data-testid="toolbar">
        <ToolbarContent>
          <ToolbarItem>Test</ToolbarItem>
          <ToolbarItem>Test 2</ToolbarItem>
          <ToolbarItem variant="separator" />
          <ToolbarItem>Test 3 </ToolbarItem>
        </ToolbarContent>
      </Toolbar>
    );
    expect(screen.getByTestId('toolbar')).not.toHaveClass(styles.modifiers.noPadding);
  });

  it(`should render toolbar with ${styles.modifiers.noPadding} class when hasNoPadding is true`, () => {
    render(
      <Toolbar data-testid="toolbar-no-padding" hasNoPadding>
        <ToolbarContent>
          <ToolbarItem>Test</ToolbarItem>
          <ToolbarItem>Test 2</ToolbarItem>
          <ToolbarItem variant="separator" />
          <ToolbarItem>Test 3 </ToolbarItem>
        </ToolbarContent>
      </Toolbar>
    );
    expect(screen.getByTestId('toolbar-no-padding')).toHaveClass(styles.modifiers.noPadding);
  });

  it('should render with custom label content', () => {
    const items = (
      <Fragment>
        <ToolbarToggleGroup toggleIcon={<Fragment />} breakpoint="xl">
          <ToolbarGroup variant="filter-group">
            <ToolbarFilter
              labels={['New', 'Pending']}
              deleteLabel={(_category, _label) => {}}
              deleteLabelGroup={(_category) => {}}
              categoryName="Status"
            >
              test content
            </ToolbarFilter>
          </ToolbarGroup>
        </ToolbarToggleGroup>
      </Fragment>
    );

    const customLabelGroupContent = (
      <Fragment>
        <ToolbarItem>
          <Button variant="link" onClick={() => {}} isInline>
            Save filters
          </Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="link" onClick={() => {}} isInline>
            Clear all filters
          </Button>
        </ToolbarItem>
      </Fragment>
    );

    const { asFragment } = render(
      <Toolbar
        id="toolbar-with-filter"
        className="pf-m-toggle-group-container"
        collapseListedFiltersBreakpoint="xl"
        customLabelGroupContent={customLabelGroupContent}
      >
        <ToolbarContent>{items}</ToolbarContent>
      </Toolbar>
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getAllByRole('button', { name: 'Save filters' }).length).toBe(1);
    expect(screen.getAllByRole('button', { name: 'Clear all filters' }).length).toBe(1);
  });

  it('Renders with class when colorVariant is applied', () => {
    render(
      <Toolbar id="toolbar" colorVariant="primary" data-testid="toolbar-color">
        <ToolbarContent>
          <ToolbarItem>Test</ToolbarItem>
        </ToolbarContent>
      </Toolbar>
    );

    expect(screen.getByTestId('toolbar-color')).toHaveClass(styles.modifiers.primary);
  });

  it(`Renders toolbar without ${styles.modifiers.vertical} by default`, () => {
    render(
      <Toolbar data-testid="Toolbar-test-is-not-vertical">
        <ToolbarContent>
          <ToolbarItem>Test</ToolbarItem>
        </ToolbarContent>
      </Toolbar>
    );
    expect(screen.getByTestId('Toolbar-test-is-not-vertical')).not.toHaveClass(styles.modifiers.vertical);
  });

  it('Renders with vertical class when isVertical is true', () => {
    render(
      <Toolbar id="toolbar" isVertical data-testid="Toolbar-test-is-vertical">
        <ToolbarContent>
          <ToolbarItem>Test</ToolbarItem>
        </ToolbarContent>
      </Toolbar>
    );

    expect(screen.getByTestId('Toolbar-test-is-vertical')).toHaveClass(styles.modifiers.vertical);
  });
});

describe('ToolbarContent rowWrap', () => {
  const bps = ['default', 'sm', 'md', 'lg', 'xl', '2xl'];

  bps.forEach((bp) => {
    it(`should render with wrap at ${bp}`, () => {
      render(
        <Toolbar>
          <ToolbarContent data-testid="toolbarcontent" rowWrap={{ [bp]: 'wrap' }}>
            Test
          </ToolbarContent>
        </Toolbar>
      );
      const cls = bp === 'default' ? 'pf-m-wrap' : `pf-m-wrap-on-${bp}`;
      expect(screen.getByTestId('toolbarcontent').querySelector('div')).toHaveClass(cls);
    });

    it(`should render with nowrap at ${bp}`, () => {
      render(
        <Toolbar>
          <ToolbarContent data-testid="toolbarcontent" rowWrap={{ [bp]: 'nowrap' }}>
            Test
          </ToolbarContent>
        </Toolbar>
      );
      const cls = bp === 'default' ? 'pf-m-nowrap' : `pf-m-nowrap-on-${bp}`;
      expect(screen.getByTestId('toolbarcontent').querySelector('div')).toHaveClass(cls);
    });
  });
});
