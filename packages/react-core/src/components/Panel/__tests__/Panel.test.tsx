import { createRef, useEffect, useState } from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Panel } from '../Panel';
import { PanelMain } from '../PanelMain';
import { PanelMainBody } from '../PanelMainBody';
import userEvent from '@testing-library/user-event';
import styles from '@patternfly/react-styles/css/components/Panel/panel';

test('Renders without children', () => {
  render(
    <div data-testid="panel">
      <Panel />
    </div>
  );
  expect(screen.getByTestId('panel').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<Panel>Test</Panel>);
  expect(screen.getByText('Test')).toBeVisible();
});

test(`Renders with the class ${styles.panel}`, () => {
  render(<Panel>Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass(styles.panel);
});

test(`Renders with only the class ${styles.panel} by default`, () => {
  render(<Panel>Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass(styles.panel, { exact: true });
});

test('Renders with custom class name when className prop is passed', () => {
  render(<Panel className="test-class">Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass('test-class');
});

test(`Renders with class name ${styles.modifiers.raised} when variant is raised`, () => {
  render(<Panel variant="raised">Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.raised);
});

test(`Renders with class name ${styles.modifiers.bordered} when variant is bordered`, () => {
  render(<Panel variant="bordered">Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.bordered);
});

test(`Renders with class name ${styles.modifiers.secondary} when variant is secondary`, () => {
  render(<Panel variant="secondary">Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.secondary);
});

test(`Renders with class name ${styles.modifiers.scrollable} when isScrollable is true`, () => {
  render(<Panel isScrollable>Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.scrollable);
});

test(`Renders with class name ${styles.modifiers.scrollableAutoHeight} when isAutoHeight is true`, () => {
  render(<Panel isAutoHeight>Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.scrollableAutoHeight);
});

test(`Does not add ${styles.modifiers.scrollableAutoHeight} when isAutoHeight is false or undefined`, () => {
  const { rerender } = render(<Panel isAutoHeight={false}>Test</Panel>);
  expect(screen.getByText('Test')).not.toHaveClass(styles.modifiers.scrollableAutoHeight);

  rerender(<Panel>Test</Panel>);
  expect(screen.getByText('Test')).not.toHaveClass(styles.modifiers.scrollableAutoHeight);
});

test(`Renders with class name ${styles.modifiers.noBorder} when hasNoBorder is true`, () => {
  render(<Panel hasNoBorder>Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.noBorder);
});

test(`Does not add ${styles.modifiers.noBorder} when hasNoBorder is false or undefined`, () => {
  const { rerender } = render(<Panel hasNoBorder={false}>Test</Panel>);
  expect(screen.getByText('Test')).not.toHaveClass(styles.modifiers.noBorder);

  rerender(<Panel>Test</Panel>);
  expect(screen.getByText('Test')).not.toHaveClass(styles.modifiers.noBorder);
});

test(`Renders with class name ${styles.modifiers.fullHeight} when isFullHeight is true`, () => {
  render(<Panel isFullHeight>Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.fullHeight);
});

test(`Does not add ${styles.modifiers.fullHeight} when isFullHeight is false or undefined`, () => {
  const { rerender } = render(<Panel isFullHeight={false}>Test</Panel>);
  expect(screen.getByText('Test')).not.toHaveClass(styles.modifiers.fullHeight);

  rerender(<Panel>Test</Panel>);
  expect(screen.getByText('Test')).not.toHaveClass(styles.modifiers.fullHeight);
});

test(`Renders with class name ${styles.modifiers.glass} when isGlass is true`, () => {
  render(<Panel isGlass>Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.glass);
});

test(`Does not add ${styles.modifiers.glass} when isGlass is false or undefined`, () => {
  const { rerender } = render(<Panel isGlass={false}>Test</Panel>);
  expect(screen.getByText('Test')).not.toHaveClass(styles.modifiers.glass);

  rerender(<Panel>Test</Panel>);
  expect(screen.getByText('Test')).not.toHaveClass(styles.modifiers.glass);
});

test(`Renders with class name ${styles.modifiers.pill} when isPill is true`, () => {
  render(<Panel isPill>Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.pill);
});

test(`Does not add ${styles.modifiers.pill} when isPill is false or undefined`, () => {
  const { rerender } = render(<Panel isPill={false}>Test</Panel>);
  expect(screen.getByText('Test')).not.toHaveClass(styles.modifiers.pill);

  rerender(<Panel>Test</Panel>);
  expect(screen.getByText('Test')).not.toHaveClass(styles.modifiers.pill);
});

test('Renders with ref', async () => {
  const user = userEvent.setup();
  const panelRef: React.RefObject<HTMLDivElement | null> = createRef();

  const BasicPanel = () => {
    const [lastClickWasInPanel, setLastClickWasInPanel] = useState(false);

    const handleClick = (event) => {
      if (panelRef.current && panelRef.current.contains(event.target)) {
        setLastClickWasInPanel(true);
      } else {
        setLastClickWasInPanel(false);
      }
    };

    useEffect(() => {
      document.addEventListener('click', handleClick);
    }, []);

    return (
      <div>
        <Panel ref={panelRef}>
          <PanelMain>
            <PanelMainBody>Main content</PanelMainBody>
          </PanelMain>
        </Panel>
        <p>Last click was in panel: {lastClickWasInPanel ? 'true' : 'false'}</p>
      </div>
    );
  };

  render(<BasicPanel />);

  await user.click(document.body);
  expect(screen.getByText('Last click was in panel: false')).toBeVisible();
  await user.click(screen.getByText('Main content'));
  expect(screen.getByText('Last click was in panel: true')).toBeVisible();
});

test('Renders with the inherited element props spread to the component', () => {
  render(<Panel aria-label="this is a simple panel">Test</Panel>);
  expect(screen.getByText('Test')).toHaveAccessibleName('this is a simple panel');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<Panel>Test</Panel>);
  expect(asFragment()).toMatchSnapshot();
});

test('Matches the snapshot with hasNoBorder', () => {
  const { asFragment } = render(
    <Panel hasNoBorder>
      <PanelMain>
        <PanelMainBody>Test</PanelMainBody>
      </PanelMain>
    </Panel>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Matches the snapshot with isFullHeight', () => {
  const { asFragment } = render(
    <Panel isFullHeight>
      <PanelMain>
        <PanelMainBody>Test</PanelMainBody>
      </PanelMain>
    </Panel>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Matches the snapshot with isGlass', () => {
  const { asFragment } = render(
    <Panel isGlass>
      <PanelMain>
        <PanelMainBody>Test</PanelMainBody>
      </PanelMain>
    </Panel>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Matches the snapshot with isAutoHeight', () => {
  const { asFragment } = render(
    <Panel isScrollable isAutoHeight>
      <PanelMain>
        <PanelMainBody>Test</PanelMainBody>
      </PanelMain>
    </Panel>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Matches the snapshot with isPill', () => {
  const { asFragment } = render(
    <Panel isPill>
      <PanelMain>
        <PanelMainBody>Test</PanelMainBody>
      </PanelMain>
    </Panel>
  );
  expect(asFragment()).toMatchSnapshot();
});
