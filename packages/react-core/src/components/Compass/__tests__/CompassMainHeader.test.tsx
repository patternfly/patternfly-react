import { render, screen } from '@testing-library/react';
import { CompassMainHeader } from '../CompassMainHeader';
import styles from '@patternfly/react-styles/css/components/Compass/compass';
import panelStyles from '@patternfly/react-styles/css/components/Panel/panel';

test('Renders without children', () => {
  render(
    <div data-testid="test-main-header">
      <CompassMainHeader />
    </div>
  );
  expect(screen.getByTestId('test-main-header').firstChild).toBeVisible();
});

test('Renders with children', () => {
  render(<CompassMainHeader>Custom content</CompassMainHeader>);
  expect(screen.getByText('Custom content')).toBeVisible();
});

test('Renders with custom class name when className prop is provided', () => {
  render(<CompassMainHeader className="custom-class">Test</CompassMainHeader>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test(`Renders with default ${styles.compass}__main-header class`, () => {
  render(<CompassMainHeader>Test</CompassMainHeader>);
  expect(screen.getByText('Test')).toHaveClass(`${styles.compass}__main-header`);
});

test('Renders title when provided', () => {
  render(<CompassMainHeader title={<div>Title content</div>}>Test</CompassMainHeader>);
  expect(screen.getByText('Title content')).toBeVisible();
});

test('Renders toolbar when provided', () => {
  render(<CompassMainHeader toolbar={<div>Toolbar content</div>}>Test</CompassMainHeader>);
  expect(screen.getByText('Toolbar content')).toBeVisible();
});

test('Renders both title and toolbar when provided', () => {
  render(
    <CompassMainHeader title={<div>Title</div>} toolbar={<div>Toolbar</div>}>
      Test
    </CompassMainHeader>
  );
  expect(screen.getByText('Title')).toBeVisible();
  expect(screen.getByText('Toolbar')).toBeVisible();
});

test('Ignores children when title is provided', () => {
  render(<CompassMainHeader title={<div>Title</div>}>Ignored children</CompassMainHeader>);
  expect(screen.getByText('Title')).toBeVisible();
  expect(screen.queryByText('Ignored children')).not.toBeInTheDocument();
});

test('Ignores children when toolbar is provided', () => {
  render(<CompassMainHeader toolbar={<div>Toolbar</div>}>Ignored children</CompassMainHeader>);
  expect(screen.getByText('Toolbar')).toBeVisible();
  expect(screen.queryByText('Ignored children')).not.toBeInTheDocument();
});

test('Ignores children when both title and toolbar are provided', () => {
  render(
    <CompassMainHeader title={<div>Title</div>} toolbar={<div>Toolbar</div>}>
      Ignored children
    </CompassMainHeader>
  );
  expect(screen.getByText('Title')).toBeVisible();
  expect(screen.getByText('Toolbar')).toBeVisible();
  expect(screen.queryByText('Ignored children')).not.toBeInTheDocument();
});

test('Renders children when neither title nor toolbar are provided', () => {
  render(<CompassMainHeader>Custom children content</CompassMainHeader>);
  expect(screen.getByText('Custom children content')).toBeVisible();
});

test('Renders Panel when title is passed', () => {
  render(<CompassMainHeader data-testid="test-id" title="Title text" />);

  const panel = screen.getByTestId('test-id').firstChild;
  expect(panel).toHaveClass(panelStyles.panel);
});

test('Renders Panel when toolbar is passed', () => {
  render(<CompassMainHeader data-testid="test-id" toolbar="Toolbar text" />);

  const panel = screen.getByTestId('test-id').firstChild;
  expect(panel).toHaveClass(panelStyles.panel);
});

test('Does not render Panel when children are passed', () => {
  render(
    <CompassMainHeader data-testid="test-id">
      <div>Children content</div>
    </CompassMainHeader>
  );

  const content = screen.getByTestId('test-id').firstChild;
  expect(content).not.toHaveClass(panelStyles.panel);
});

test('Passes props to Panel when title and panelProps is passed', () => {
  render(<CompassMainHeader data-testid="test-id" panelProps={{ className: 'panel-class' }} title="Title text" />);

  const panel = screen.getByTestId('test-id').firstChild;
  expect(panel).toHaveClass('panel-class');
});

test('Passes props to Panel when toolbar and panelProps is passed', () => {
  render(<CompassMainHeader data-testid="test-id" panelProps={{ className: 'panel-class' }} toolbar="Toolbar text" />);

  const panel = screen.getByTestId('test-id').firstChild;
  expect(panel).toHaveClass('panel-class');
});

test('Renders with additional props spread to the component', () => {
  render(<CompassMainHeader id="custom-id">Test</CompassMainHeader>);
  expect(screen.getByText('Test')).toHaveAttribute('id', 'custom-id');
});

test('Matches the snapshot with both title and toolbar', () => {
  const { asFragment } = render(<CompassMainHeader title={<div>Title</div>} toolbar={<div>Toolbar</div>} />);
  expect(asFragment()).toMatchSnapshot();
});

test('Matches the snapshot with children', () => {
  const { asFragment } = render(<CompassMainHeader>Custom children content</CompassMainHeader>);
  expect(asFragment()).toMatchSnapshot();
});
