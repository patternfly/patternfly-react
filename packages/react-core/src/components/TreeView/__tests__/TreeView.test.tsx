import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TreeView } from '../TreeView';

jest.mock('../TreeViewList', () => ({
  TreeViewList: ({ children, isNested, toolbar }) => (
    <div data-testid="TreeViewList-mock">
      <p>{`TreeViewList isNested: ${isNested}`}</p>
      <p>{`TreeViewList toolbar: ${toolbar}`}</p>
      <div data-testid="TreeViewList-children">{children}</div>
    </div>
  )
}));
jest.mock('../TreeViewListItem', () => ({
  TreeViewListItem: ({
    action,
    activeItems,
    badgeProps,
    checkProps,
    children,
    compareItems,
    customBadgeContent,
    defaultExpanded,
    expandedIcon,
    hasBadge,
    hasCheckbox,
    icon,
    id,
    isCompact,
    isExpanded,
    isSelectable,
    itemData,
    name,
    onCheck,
    onSelect,
    onExpand,
    onCollapse,
    parentItem,
    title,
    useMemo
  }) => (
    <div data-testid="TreeViewListItem-mock">
      <p>{`TreeViewListItem action: ${action}`}</p>
      <div data-testid="TreeViewListItem-activeItems">{activeItems && activeItems[0].name}</div>
      <p>{`TreeViewListItem badgeProps: ${badgeProps?.id}`}</p>
      <p>{`TreeViewListItem checkProps: ${checkProps?.checked}`}</p>
      <p>{`TreeViewListItem customBadgeContent: ${customBadgeContent}`}</p>
      <p>{`TreeViewListItem defaultExpanded: ${defaultExpanded}`}</p>
      <p>{`TreeViewListItem expandedIcon: ${expandedIcon}`}</p>
      <p>{`TreeViewListItem hasBadge: ${hasBadge}`}</p>
      <p>{`TreeViewListItem hasCheckbox: ${hasCheckbox}`}</p>
      <p>{`TreeViewListItem icon: ${icon}`}</p>
      <p>{`TreeViewListItem id: ${id}`}</p>
      <p>{`TreeViewListItem isCompact: ${isCompact}`}</p>
      <p>{`TreeViewListItem isExpanded: ${isExpanded}`}</p>
      <p>{`TreeViewListItem isSelectable: ${isSelectable}`}</p>
      <p>{`TreeViewListItem itemData: ${itemData.name}`}</p>
      <p>{`TreeViewListItem name: ${name}`}</p>
      <p>{`TreeViewListItem parentItem: ${parentItem?.name}`}</p>
      <p>{`TreeViewListItem title: ${title}`}</p>
      <p>{`TreeViewListItem useMemo: ${useMemo}`}</p>
      <button onClick={compareItems}>compareItems clicker</button>
      <button onClick={onCheck}>onCheck clicker</button>
      <button onClick={onSelect}>onSelect clicker</button>
      <button onClick={onExpand}>onExpand clicker</button>
      <button onClick={onCollapse}>onCollapse clicker</button>
      <div data-testid="TreeViewListItem-children">{children}</div>
    </div>
  )
}));
jest.mock('../TreeViewRoot', () => ({
  TreeViewRoot: ({ children, hasCheckboxes, hasGuides, hasSelectableNodes, variant, className }) => (
    <div data-testid="TreeViewRoot-mock">
      <p>{`TreeViewRoot hasCheckboxes: ${hasCheckboxes}`}</p>
      <p>{`TreeViewRoot hasGuides: ${hasGuides}`}</p>
      <p>{`TreeViewRoot hasSelectableNodes: ${hasSelectableNodes}`}</p>
      <p>{`TreeViewRoot variant: ${variant}`}</p>
      <p>{`TreeViewRoot className: ${className}`}</p>
      <div data-testid="TreeViewRoot-children">{children}</div>
    </div>
  )
}));

const basicData = {
  name: 'Basic data name'
};

test('Passes hasSelectableNodes to TreeViewRoot', () => {
  render(<TreeView hasSelectableNodes data={[basicData]} />);

  expect(screen.getByText('TreeViewRoot hasSelectableNodes: true')).toBeVisible();
});
test('Passes hasCheckboxes to TreeViewRoot', () => {
  render(<TreeView hasCheckboxes data={[basicData]} />);

  expect(screen.getByText('TreeViewRoot hasCheckboxes: true')).toBeVisible();
});
test('Passes hasGuides to TreeViewRoot', () => {
  render(<TreeView hasGuides data={[basicData]} />);

  expect(screen.getByText('TreeViewRoot hasGuides: true')).toBeVisible();
});
test('Passes variant to TreeViewRoot', () => {
  render(<TreeView variant="compact" data={[basicData]} />);

  expect(screen.getByText('TreeViewRoot variant: compact')).toBeVisible();
});
test('Passes className to TreeViewRoot', () => {
  render(<TreeView className="test-class" data={[basicData]} />);

  expect(screen.getByText('TreeViewRoot className: test-class')).toBeVisible();
});
test('Passes data as children TreeViewRoot', () => {
  render(<TreeView data={[basicData]} />);

  expect(screen.getByTestId('TreeViewRoot-children')).toContainHTML('TreeViewListItem name: Basic data name');
});
test('Does not render TreeViewRoot when parentItem is passed', () => {
  render(<TreeView data={[basicData]} parentItem={{ name: 'Parent name' }} />);

  expect(screen.queryByTestId('TreeViewRoot-mock')).not.toBeInTheDocument();
});

test('Passes isNested to TreeViewList', () => {
  render(<TreeView isNested data={[basicData]} />);

  expect(screen.getByText('TreeViewList isNested: true')).toBeVisible();
});
test('Passes toolbar to TreeViewList', () => {
  render(<TreeView toolbar="Toolbar content" data={[basicData]} />);

  expect(screen.getByText('TreeViewList toolbar: Toolbar content')).toBeVisible();
});
test('Passes data as children TreeViewList', () => {
  render(<TreeView data={[basicData]} />);

  expect(screen.getByTestId('TreeViewList-children')).toContainHTML('TreeViewListItem name: Basic data name');
});

test('Passes data action to TreeViewListItem', () => {
  render(<TreeView data={[{ ...basicData, action: 'Item action' }]} />);

  expect(screen.getByText('TreeViewListItem action: Item action')).toBeVisible();
});
test('Passes activeItems to TreeViewListItem', () => {
  render(<TreeView data={[basicData]} activeItems={[{ name: 'Active item name' }]} />);

  expect(screen.getByTestId('TreeViewListItem-activeItems')).toHaveTextContent('Active item name');
});
test('Passes data badgeProps to TreeViewListItem', () => {
  render(<TreeView data={[{ ...basicData, badgeProps: { id: 'test-id' } }]} />);

  expect(screen.getByText('TreeViewListItem badgeProps: test-id')).toBeVisible();
});
test('Passes data checkProps to TreeViewListItem', () => {
  render(<TreeView data={[{ ...basicData, checkProps: { checked: true } }]} />);

  expect(screen.getByText('TreeViewListItem checkProps: true')).toBeVisible();
});
test('Passes data customBadgeContent to TreeViewListItem', () => {
  render(<TreeView data={[{ ...basicData, customBadgeContent: 'Custom badge' }]} />);

  expect(screen.getByText('TreeViewListItem customBadgeContent: Custom badge')).toBeVisible();
});
test('Passes data defaultExpanded to TreeViewListItem', () => {
  render(<TreeView data={[{ ...basicData, defaultExpanded: true }]} />);

  expect(screen.getByText('TreeViewListItem defaultExpanded: true')).toBeVisible();
});
test('Passes defaultAllExpanded to TreeViewListItem', () => {
  render(<TreeView data={[basicData]} defaultAllExpanded />);

  expect(screen.getByText('TreeViewListItem defaultExpanded: true')).toBeVisible();
});
test('Passes data expandedIcon to TreeViewListItem', () => {
  render(<TreeView data={[{ ...basicData, expandedIcon: 'Expanded icon' }]} />);

  expect(screen.getByText('TreeViewListItem expandedIcon: Expanded icon')).toBeVisible();
});
test('Passes expandedIcon to TreeViewListItem', () => {
  render(<TreeView data={[basicData]} expandedIcon="Expanded icon" />);

  expect(screen.getByText('TreeViewListItem expandedIcon: Expanded icon')).toBeVisible();
});
test('Passes data hasBadge to TreeViewListItem', () => {
  render(<TreeView data={[{ ...basicData, hasBadge: true }]} />);

  expect(screen.getByText('TreeViewListItem hasBadge: true')).toBeVisible();
});
test('Passes hasBadges to TreeViewListItem', () => {
  render(<TreeView data={[basicData]} hasBadges={true} />);

  expect(screen.getByText('TreeViewListItem hasBadge: true')).toBeVisible();
});
test('Passes data hasCheckbox to TreeViewListItem', () => {
  render(<TreeView data={[{ ...basicData, hasCheckbox: true }]} />);

  expect(screen.getByText('TreeViewListItem hasCheckbox: true')).toBeVisible();
});
test('Passes hasCheckboxes to TreeViewListItem', () => {
  render(<TreeView data={[basicData]} hasCheckboxes={true} />);

  expect(screen.getByText('TreeViewListItem hasCheckbox: true')).toBeVisible();
});
test('Passes data icon to TreeViewListItem', () => {
  render(<TreeView data={[{ ...basicData, icon: 'Icon content' }]} />);

  expect(screen.getByText('TreeViewListItem icon: Icon content')).toBeVisible();
});
test('Passes icon to TreeViewListItem', () => {
  render(<TreeView data={[basicData]} icon="Icon content" />);

  expect(screen.getByText('TreeViewListItem icon: Icon content')).toBeVisible();
});
test('Passes data id to TreeViewListItem', () => {
  render(<TreeView data={[{ ...basicData, id: 'test-id' }]} />);

  expect(screen.getByText('TreeViewListItem id: test-id')).toBeVisible();
});

['default', 'compact', 'compactNoBackground'].forEach((variant) => {
  test(`Passes isCompact to TreeViewListItem when variant=${variant}`, () => {
    render(<TreeView data={[basicData]} variant={variant as 'default' | 'compact' | 'compactNoBackground'} />);

    expect(screen.getByText(`TreeViewListItem isCompact: ${variant === 'default' ? 'false' : 'true'}`)).toBeVisible();
  });
});

test('Passes allExpanded to TreeViewListItem isExpanded prop', () => {
  render(<TreeView data={[basicData]} allExpanded />);

  expect(screen.getByText('TreeViewListItem isExpanded: true')).toBeVisible();
});
test('Passes hasSelectableNodes to TreeViewListItem isSelectable prop', () => {
  render(<TreeView data={[basicData]} hasSelectableNodes />);

  expect(screen.getByText('TreeViewListItem isSelectable: true')).toBeVisible();
});
test('Passes data to TreeViewListItem itemData prop', () => {
  render(<TreeView data={[{ name: 'itemData name' }]} />);

  expect(screen.getByText('TreeViewListItem itemData: itemData name')).toBeVisible();
});
test('Passes data.name to TreeViewListItem name prop', () => {
  render(<TreeView data={[basicData]} />);

  expect(screen.getByText('TreeViewListItem name: Basic data name')).toBeVisible();
});
test('Passes parentItem to TreeViewListItem', () => {
  render(<TreeView data={[basicData]} parentItem={{ name: 'Parent name' }} />);

  expect(screen.getByText('TreeViewListItem parentItem: Parent name')).toBeVisible();
});
test('Passes data.title to TreeViewListItem', () => {
  render(<TreeView data={[{ ...basicData, title: 'Basic data title' }]} />);

  expect(screen.getByText('TreeViewListItem title: Basic data title')).toBeVisible();
});
test('Passes useMemo to TreeViewListItem', () => {
  render(<TreeView data={[basicData]} useMemo={true} />);

  expect(screen.getByText('TreeViewListItem useMemo: true')).toBeVisible();
});
test('Passes data.children to TreeViewListItem', () => {
  render(<TreeView data={[{ ...basicData, children: [{ name: 'Child 1' }] }]} />);

  expect(screen.getByText('TreeViewListItem name: Child 1')).toBeVisible();
});

describe('Passes callback props to TreeViewListItem', () => {
  const user = userEvent.setup();
  const callbackMock = jest.fn();

  test('Passes compareItems', async () => {
    render(<TreeView data={[basicData]} compareItems={callbackMock} />);

    await user.click(screen.getByRole('button', { name: 'compareItems clicker' }));

    expect(callbackMock).toHaveBeenCalledTimes(1);
  });
  test('Passes onCheck', async () => {
    render(<TreeView data={[basicData]} onCheck={callbackMock} />);

    await user.click(screen.getByRole('button', { name: 'onCheck clicker' }));

    expect(callbackMock).toHaveBeenCalledTimes(1);
  });
  test('Passes onSelect', async () => {
    render(<TreeView data={[basicData]} onSelect={callbackMock} />);

    await user.click(screen.getByRole('button', { name: 'onSelect clicker' }));

    expect(callbackMock).toHaveBeenCalledTimes(1);
  });
  test('Passes onExpand', async () => {
    render(<TreeView data={[basicData]} onExpand={callbackMock} />);

    await user.click(screen.getByRole('button', { name: 'onExpand clicker' }));

    expect(callbackMock).toHaveBeenCalledTimes(1);
  });
  test('Passes onCollapse', async () => {
    render(<TreeView data={[basicData]} onCollapse={callbackMock} />);

    await user.click(screen.getByRole('button', { name: 'onCollapse clicker' }));

    expect(callbackMock).toHaveBeenCalledTimes(1);
  });
});

test('Matches snapshot', () => {
  const { asFragment } = render(<TreeView data={[basicData]} />);

  expect(asFragment()).toMatchSnapshot();
});
