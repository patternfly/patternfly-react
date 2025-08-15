import { render, screen } from '@testing-library/react';
import { JumpLinks } from '../JumpLinks';
import { JumpLinksItem } from '../JumpLinksItem';
import { JumpLinksList } from '../JumpLinksList';
import * as utils from '../../../helpers/util';

jest.spyOn(utils, 'getUniqueId').mockReturnValue('unique_id_mock');

test('simple jumplinks', () => {
  const { asFragment } = render(
    <JumpLinks>
      <JumpLinksItem href="#">Inactive section</JumpLinksItem>
      <JumpLinksItem href="#" isActive>
        Active section
      </JumpLinksItem>
      <JumpLinksItem href="#">Inactive section</JumpLinksItem>
    </JumpLinks>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('jumplinks centered', () => {
  const { asFragment } = render(
    <JumpLinks isCentered>
      <JumpLinksItem href="#">Inactive section</JumpLinksItem>
      <JumpLinksItem href="#" isActive>
        Active section
      </JumpLinksItem>
      <JumpLinksItem href="#">Inactive section</JumpLinksItem>
    </JumpLinks>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('jumplinks with label', () => {
  const { asFragment } = render(
    <JumpLinks isCentered label="Jump to section">
      <JumpLinksItem href="#">Inactive section</JumpLinksItem>
      <JumpLinksItem href="#" isActive>
        Active section
      </JumpLinksItem>
      <JumpLinksItem href="#">Inactive section</JumpLinksItem>
    </JumpLinks>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('vertical with label', () => {
  const { asFragment } = render(
    <JumpLinks isVertical alwaysShowLabel label="Jump to section">
      <JumpLinksItem href="#">Inactive section</JumpLinksItem>
      <JumpLinksItem href="#" isActive>
        Active section
      </JumpLinksItem>
      <JumpLinksItem href="#">Inactive section</JumpLinksItem>
    </JumpLinks>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('expandable vertical with subsection', () => {
  const { asFragment } = render(
    <JumpLinks isVertical label="Jump to section" expandable={{ default: 'expandable' }}>
      <JumpLinksItem href="#">Inactive section</JumpLinksItem>
      <JumpLinksItem href="#">
        Section with active subsection
        <JumpLinksList>
          <JumpLinksItem href="#" isActive>
            Active subsection
          </JumpLinksItem>
          <JumpLinksItem href="#">Inactive subsection</JumpLinksItem>
          <JumpLinksItem href="#">Inactive subsection</JumpLinksItem>
        </JumpLinksList>
      </JumpLinksItem>
      <JumpLinksItem href="#">Inactive section</JumpLinksItem>
      <JumpLinksItem href="#">Inactive section</JumpLinksItem>
    </JumpLinks>
  );
  expect(asFragment()).toMatchSnapshot();
});

// Revamped tests begin here

const jumpLinksItems = (
  <>
    <JumpLinksItem href="#">Inactive section</JumpLinksItem>
    <JumpLinksItem href="#" isActive>
      Active section
    </JumpLinksItem>
    <JumpLinksItem href="#">Inactive section</JumpLinksItem>
  </>
);

const expandableJumpLinksItems = (
  <>
    <JumpLinksItem href="#">Inactive section</JumpLinksItem>
    <JumpLinksItem href="#">
      Section with active subsection
      <JumpLinksList>
        <JumpLinksItem href="#" isActive>
          Active subsection
        </JumpLinksItem>
        <JumpLinksItem href="#">Inactive subsection</JumpLinksItem>
        <JumpLinksItem href="#">Inactive subsection</JumpLinksItem>
      </JumpLinksList>
    </JumpLinksItem>
    <JumpLinksItem href="#">Inactive section</JumpLinksItem>
    <JumpLinksItem href="#">Inactive section</JumpLinksItem>
  </>
);

test('renders label be default', () => {
  render(<JumpLinks label="Jump to section">{jumpLinksItems}</JumpLinks>);
  expect(screen.getByText(/Jump to section/i)).toBeTruthy();
});

test('does not render label when alwaysShowLabel is false', () => {
  render(
    <JumpLinks label="Jump to section" alwaysShowLabel={false}>
      {jumpLinksItems}
    </JumpLinks>
  );
  expect(screen.queryByText(/Jump to section/i)).toBeFalsy();
});

test('uses aria-labelledby over aria-label when label and alwaysShowLabel are passed in', () => {
  render(<JumpLinks label="Jump to section">{expandableJumpLinksItems}</JumpLinks>);
  const navigation = screen.getByRole('navigation', { name: /Jump to section/i });
  expect(navigation).toHaveAttribute('aria-labelledby');
  expect(navigation).not.toHaveAttribute('aria-label');
});

test('uses aria-labelledby over aria-label when expandable is passed in', () => {
  render(<JumpLinks expandable={{ default: 'expandable' }}>{expandableJumpLinksItems}</JumpLinks>);
  const navigation = screen.getByRole('navigation', { name: /Toggle jump links/i });
  expect(navigation).toHaveAttribute('aria-labelledby');
  expect(navigation).not.toHaveAttribute('aria-label');
});

test('random id is used with aria-labelledby by default in expandable case', () => {
  render(<JumpLinks expandable={{ default: 'expandable' }}>{expandableJumpLinksItems}</JumpLinks>);
  const navigation = screen.getByRole('navigation', { name: /Toggle jump links/i });
  expect(navigation).toHaveAttribute('aria-labelledby', 'unique_id_mock');
});

test('random id is used with aria-labelledby by default in label case', () => {
  render(
    <JumpLinks label="Jump to section" alwaysShowLabel>
      {expandableJumpLinksItems}
    </JumpLinks>
  );
  const navigation = screen.getByRole('navigation', { name: /Jump to section/i });
  expect(navigation).toHaveAttribute('aria-labelledby', 'unique_id_mock');
});

test('custom labelId is used with aria-labelledby when it is passed in in expandable case', () => {
  render(
    <JumpLinks labelId="custom-id" expandable={{ default: 'expandable' }}>
      {expandableJumpLinksItems}
    </JumpLinks>
  );
  const navigation = screen.getByRole('navigation', { name: /Toggle jump links/i });
  expect(navigation).toHaveAttribute('aria-labelledby', 'custom-id');
});

test('custom labelId is used with aria-labelledby when it is passed in in label case', () => {
  render(
    <JumpLinks label="Jump to section" labelId="custom-id" alwaysShowLabel>
      {expandableJumpLinksItems}
    </JumpLinks>
  );
  const navigation = screen.getByRole('navigation', { name: /Jump to section/i });
  expect(navigation).toHaveAttribute('aria-labelledby', 'custom-id');
});

test('uses aria-label instead of aria-labelledby by default', () => {
  render(<JumpLinks aria-label="Custom aria label">{jumpLinksItems}</JumpLinks>);
  const navigation = screen.getByRole('navigation', { name: /Custom aria label/i });
  expect(navigation).toHaveAttribute('aria-label', 'Custom aria label');
  expect(navigation).not.toHaveAttribute('aria-labelledby');
});

test('uses aria-label instead of aria-labelledby when label is provided but alwaysShowLabel is false', () => {
  render(
    <JumpLinks label="Jump to section" aria-label="Custom aria label" alwaysShowLabel={false}>
      {jumpLinksItems}
    </JumpLinks>
  );
  const navigation = screen.getByRole('navigation', { name: /Custom aria label/i });
  expect(navigation).toHaveAttribute('aria-label', 'Custom aria label');
  expect(navigation).not.toHaveAttribute('aria-labelledby');
});

test('aria-labelledby is used with provided labelId even when aria-label is also provided in expandable case', () => {
  render(
    <JumpLinks labelId="custom-id" aria-label="Custom aria label" expandable={{ default: 'expandable' }}>
      {expandableJumpLinksItems}
    </JumpLinks>
  );
  const navigation = screen.getByRole('navigation');
  expect(navigation).toHaveAttribute('aria-labelledby', 'custom-id');
  expect(navigation).not.toHaveAttribute('aria-label');
});

test('aria-labelledby is used with provided labelId even when aria-label is also provided in label case', () => {
  render(
    <JumpLinks labelId="custom-id" aria-label="Custom aria label" label="Jump to section">
      {jumpLinksItems}
    </JumpLinks>
  );
  const navigation = screen.getByRole('navigation');
  expect(navigation).toHaveAttribute('aria-labelledby', 'custom-id');
  expect(navigation).not.toHaveAttribute('aria-label');
});

test('does not throw error when there is a label passed in"', () => {
  const warnMock = jest.fn() as any;
  global.console = { warn: warnMock } as any;
  render(
    <JumpLinks alwaysShowLabel label="Jump to section">
      {jumpLinksItems}
    </JumpLinks>
  );
  expect(warnMock).not.toHaveBeenCalled();
});

test('does not throw error when there is an aria-label passed in"', () => {
  const warnMock = jest.fn() as any;
  global.console = { warn: warnMock } as any;
  render(
    <JumpLinks alwaysShowLabel aria-label="Jump to section">
      {jumpLinksItems}
    </JumpLinks>
  );
  expect(warnMock).not.toHaveBeenCalled();
});

test('throws error when no label or ariaLabel are passed in', () => {
  const warnMock = jest.fn() as any;
  global.console = { warn: warnMock } as any;
  render(<JumpLinks alwaysShowLabel>{jumpLinksItems}</JumpLinks>);
  expect(warnMock).toHaveBeenCalled();
});

test('does not throw error when there is a toggleAriaLabel and expandable prop passed in', () => {
  const warnMock = jest.fn() as any;
  global.console = { warn: warnMock } as any;
  render(
    <JumpLinks label="Jump to section" toggleAriaLabel="Jump to section" expandable={{ default: 'expandable' }}>
      {expandableJumpLinksItems}
    </JumpLinks>
  );
  expect(warnMock).not.toHaveBeenCalled();
});

test('does not throw error when there is an aria-label and expandable prop passed in', () => {
  const warnMock = jest.fn() as any;
  global.console = { warn: warnMock } as any;
  render(
    <JumpLinks aria-label="Jump to section" expandable={{ default: 'expandable' }}>
      {expandableJumpLinksItems}
    </JumpLinks>
  );
  expect(warnMock).not.toHaveBeenCalled();
});

test('throws error when there is no toggle aria-label or aria-label but expandable is passed in', () => {
  const warnMock = jest.fn() as any;
  global.console = { warn: warnMock } as any;
  render(<JumpLinks expandable={{ default: 'expandable' }}>{expandableJumpLinksItems}</JumpLinks>);
  expect(warnMock).toHaveBeenCalled();
});
