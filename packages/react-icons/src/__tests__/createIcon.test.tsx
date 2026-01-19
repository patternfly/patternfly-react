import { render, screen } from '@testing-library/react';
import { IconDefinition, CreateIconProps, createIcon, SVGPathObject } from '../createIcon';

const multiPathIcon: IconDefinition = {
  name: 'IconName',
  width: 10,
  height: 20,
  svgPathData: [
    { path: 'svgPath1', className: 'class1' },
    { path: 'svgPath2', className: 'class2' }
  ],
  svgClassName: 'test'
};

const singlePathIcon: IconDefinition = {
  name: 'IconName',
  width: 10,
  height: 20,
  svgPathData: 'svgPath',
  svgClassName: 'test'
};

const iconDef: CreateIconProps = {
  name: 'SinglePathIconName',
  icon: singlePathIcon
};

const iconDefWithArrayPath: CreateIconProps = {
  name: 'MultiPathIconName',
  icon: multiPathIcon
};

const SVGIcon = createIcon(iconDef);
const SVGArrayIcon = createIcon(iconDefWithArrayPath);

test('sets correct viewBox', () => {
  render(<SVGIcon />);
  expect(screen.getByRole('img', { hidden: true })).toHaveAttribute(
    'viewBox',
    `0 0 ${singlePathIcon.width} ${singlePathIcon.height}`
  );
});

test('sets correct svgPath if string', () => {
  render(<SVGIcon />);
  expect(screen.getByRole('img', { hidden: true }).querySelector('path')).toHaveAttribute('d', iconDef.svgPath);
});

test('sets correct svgPath if array', () => {
  render(<SVGArrayIcon />);
  const paths = screen.getByRole('img', { hidden: true }).querySelectorAll('path');
  expect(paths).toHaveLength(2);
  expect(paths[0]).toHaveAttribute('d', (multiPathIcon.svgPathData as SVGPathObject[])[0].path);
  expect(paths[1]).toHaveAttribute('d', (multiPathIcon.svgPathData as SVGPathObject[])[1].path);
  expect(paths[0]).toHaveClass((multiPathIcon.svgPathData as SVGPathObject[])[0].className ?? '');
  expect(paths[1]).toHaveClass((multiPathIcon.svgPathData as SVGPathObject[])[1].className ?? '');
});

test('sets correct svgClassName', () => {
  render(<SVGArrayIcon />);
  const paths = screen.getByRole('img', { hidden: true });
  expect(paths).toHaveClass(multiPathIcon.svgClassName ?? '');
});

test('aria-hidden is true if no title is specified', () => {
  render(<SVGIcon />);
  expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('aria-hidden', 'true');
});

test('title is not rendered if a title is not passed', () => {
  render(<SVGIcon />);
  expect(screen.queryByRole('img', { hidden: true })?.querySelector('title')).toBeNull();
});

test('aria-labelledby is null if a title is not passed', () => {
  render(<SVGIcon />);
  expect(screen.getByRole('img', { hidden: true })).not.toHaveAttribute('aria-labelledby');
});

test('title is rendered', () => {
  const title = 'icon title';

  render(<SVGIcon title={title} />);
  expect(screen.getByText(title)).toBeInTheDocument();
});

test('aria-labelledby matches title id', () => {
  render(<SVGIcon title="icon title" />);

  const svg = screen.getByRole('img', { hidden: true });
  const labelledby = svg.getAttribute('aria-labelledby');
  const titleId = svg.querySelector('title')?.getAttribute('id');

  expect(labelledby).toEqual(titleId);
});

test('additional props should be spread to the root svg element', () => {
  render(<SVGIcon data-testid="icon" />);
  expect(screen.getByTestId('icon')).toBeInTheDocument();
});
