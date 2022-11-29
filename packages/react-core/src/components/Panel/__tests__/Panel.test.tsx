import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Panel } from '../Panel';
import { PanelMain } from '../PanelMain';
import { PanelMainBody } from '../PanelMainBody';
import userEvent from '@testing-library/user-event';
import { useEffect } from 'react';

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

test('Renders with the class pf-c-panel', () => {
  render(<Panel>Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass('pf-c-panel');
});

test('Renders with only the class pf-c-panel by default', () => {
  render(<Panel>Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass('pf-c-panel', { exact: true });
});

test('Renders with custom class name when className prop is passed', () => {
  render(<Panel className="test-class">Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass('test-class');
});

test('Renders with class name pf-m-raised when variant is raised', () => {
  render(<Panel variant="raised">Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-raised');
});

test('Renders with class name pf-m-bordered when variant is bordered', () => {
  render(<Panel variant="bordered">Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-bordered');
});

test('Renders with class name pf-m-scrollable when isScrollable is true', () => {
  render(<Panel isScrollable>Test</Panel>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-scrollable');
});

test('Renders with ref', async () => {
  const user = userEvent.setup();
  const panelRef: React.RefObject<HTMLDivElement> = React.createRef();

  const BasicPanel = () => {
    const [lastClickWasInPanel, setLastClickWasInPanel] = React.useState(false);

    const handleClick = event => {
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
  expect(screen.getByText('Last click was in panel: false')).toBeVisible;
  await user.click(screen.getByText('Main content'));
  expect(screen.getByText('Last click was in panel: true')).toBeVisible;
});

test('Renders with the inherited element props spread to the component', () => {
  render(<Panel aria-label="this is a simple panel">Test</Panel>);
  expect(screen.getByText('Test')).toHaveAccessibleName('this is a simple panel');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<Panel>Test</Panel>);
  expect(asFragment()).toMatchSnapshot();
});
