import { render, screen } from '@testing-library/react';
import { TreeViewListItem } from '../TreeViewListItem';
import { TreeView } from '../TreeView';
import userEvent from '@testing-library/user-event';
import styles from '@patternfly/react-styles/css/components/TreeView/tree-view';

const requiredProps = {
  name: 'Item name',
  title: 'Item title'
};

test(`Renders without children`, () => {
  render(
    <div data-testid="container">
      <TreeViewListItem {...requiredProps} />
    </div>
  );

  expect(screen.getByTestId('container').firstChild).toBeVisible();
});

test(`Does not render children by default`, () => {
  render(<TreeViewListItem {...requiredProps}>Content</TreeViewListItem>);

  expect(screen.queryByText('Content')).not.toBeInTheDocument();
});

test(`Renders children if defaultExpanded is true`, () => {
  render(
    <TreeViewListItem defaultExpanded={true} {...requiredProps}>
      <div>Content</div>
    </TreeViewListItem>
  );

  expect(screen.getByText('Content')).toBeVisible();
});

test(`Renders children if isExpanded is true`, () => {
  render(
    <TreeViewListItem isExpanded={true} {...requiredProps}>
      <div>Content</div>
    </TreeViewListItem>
  );

  expect(screen.getByText('Content')).toBeVisible();
});

test(`Renders children when toggle is clicked`, async () => {
  const user = userEvent.setup();
  render(
    <TreeViewListItem {...requiredProps}>
      <div>Content</div>
    </TreeViewListItem>
  );

  await user.click(screen.getByRole('button', { name: requiredProps.name }));

  expect(screen.getByText('Content')).toBeVisible();
});

test(`Renders with class ${styles.treeViewListItem} and aria-expanded=false by default`, () => {
  render(<TreeViewListItem {...requiredProps} />);

  expect(screen.getByRole('treeitem')).toHaveClass(styles.treeViewListItem, { exact: true });
  expect(screen.getByRole('treeitem')).toHaveAttribute('aria-expanded', 'false');
});

test(`Renders with class ${styles.modifiers.expanded} and aria-expanded=true when defaultExpanded is true`, () => {
  render(<TreeViewListItem defaultExpanded={true} {...requiredProps} />);

  expect(screen.getByRole('treeitem')).toHaveClass(styles.modifiers.expanded);
  expect(screen.getByRole('treeitem')).toHaveAttribute('aria-expanded', 'true');
});

test(`Renders with class ${styles.modifiers.expanded} and aria-expanded=true when isExpanded is true`, () => {
  render(<TreeViewListItem isExpanded={true} {...requiredProps} />);

  expect(screen.getByRole('treeitem')).toHaveClass(styles.modifiers.expanded);
  expect(screen.getByRole('treeitem')).toHaveAttribute('aria-expanded', 'true');
});

test('Renders with id when passed', () => {
  render(<TreeViewListItem id="test-id" {...requiredProps} />);

  expect(screen.getByRole('treeitem')).toHaveAttribute('id', 'test-id');
});

test('Does not render expandable toggle if children are not passed', () => {
  render(<TreeViewListItem {...requiredProps} />);

  expect(screen.queryByText(requiredProps.name)?.previousSibling).not.toBeInTheDocument();
});

test(`Renders expandable toggle with class ${styles.treeViewNodeToggle} if children are passed`, () => {
  render(<TreeViewListItem {...requiredProps}>Content</TreeViewListItem>);

  expect(screen.getByText(requiredProps.name).previousElementSibling).toHaveClass(styles.treeViewNodeToggle);
});

test(`Renders expandable toggle without aria-labelledby as span by default`, () => {
  render(<TreeViewListItem {...requiredProps}>Content</TreeViewListItem>);
  const toggle = screen.getByText(requiredProps.name).previousElementSibling;

  expect(toggle?.tagName).toBe('SPAN');
  expect(toggle).not.toHaveAccessibleName();
});

test(`Renders expandable toggle as button with aria-labelledby when hasCheckbox is passed`, () => {
  render(
    <TreeViewListItem hasCheckbox {...requiredProps}>
      Content
    </TreeViewListItem>
  );
  const toggle = screen.getByRole('button', { name: requiredProps.name });

  expect(toggle).toHaveClass(styles.treeViewNodeToggle);
  expect(toggle).toHaveAccessibleName(requiredProps.name);
});

test(`Renders expandable toggle as button with aria-labelledby when isSelectable is passed`, () => {
  render(
    <TreeViewListItem isSelectable {...requiredProps}>
      Content
    </TreeViewListItem>
  );
  const buttons = screen.getAllByRole('button', { name: requiredProps.name });

  expect(buttons[0]).toHaveClass(styles.treeViewNodeToggle);
});

test(`Renders name prop with class ${styles.treeViewNodeText}`, () => {
  render(<TreeViewListItem {...requiredProps} />);

  expect(screen.getByText(requiredProps.name)).toHaveClass(styles.treeViewNodeText);
});

test(`Renders name prop in span by default`, () => {
  render(<TreeViewListItem {...requiredProps} />);

  expect(screen.getByText(requiredProps.name).tagName).toBe('SPAN');
});

test(`Renders name prop in button when isSelectable is passed`, () => {
  render(<TreeViewListItem isSelectable {...requiredProps} />);

  expect(screen.getByRole('button', { name: requiredProps.name })).toBeInTheDocument();
});

test('Does not render title prop by default', () => {
  render(<TreeViewListItem {...requiredProps} />);

  expect(screen.queryByText(requiredProps.title)).not.toBeInTheDocument();
});

test(`Renders title prop with class ${styles.treeViewNodeTitle} when isCompact is passed`, () => {
  render(<TreeViewListItem isCompact {...requiredProps} />);

  expect(screen.getByText(requiredProps.title)).toHaveClass(styles.treeViewNodeTitle);
});

test(`Does not render name in ${styles.treeViewNodeContent} wrapper by default`, () => {
  render(<TreeViewListItem {...requiredProps} />);

  expect(screen.getByText(requiredProps.name).parentElement).not.toHaveClass(styles.treeViewNodeContent);
});

test(`Renders name and title in ${styles.treeViewNodeContent} wrapper when isCompact is passed`, () => {
  render(<TreeViewListItem isCompact {...requiredProps} />);

  expect(screen.getByText(requiredProps.name).parentElement).toHaveClass(styles.treeViewNodeContent);
  expect(screen.getByText(requiredProps.title).parentElement).toHaveClass(styles.treeViewNodeContent);
});

test('Does not render checkbox by default', () => {
  render(<TreeViewListItem {...requiredProps} />);

  expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
});

test('Renders checkbox when hasCheckbox is passed', () => {
  render(<TreeViewListItem hasCheckbox {...requiredProps} />);

  expect(screen.getByRole('checkbox')).toBeInTheDocument();
});

test('Passes checkProps to checkbox', () => {
  render(<TreeViewListItem hasCheckbox checkProps={{ checked: true, className: 'test-class' }} {...requiredProps} />);

  // Want to check that checkProps.checked as well as additional spread props are passed
  expect(screen.getByRole('checkbox')).toBeChecked();
  expect(screen.getByRole('checkbox')).toHaveClass('test-class');
});

test('Does not render icon by default', () => {
  render(<TreeViewListItem {...requiredProps}>Content</TreeViewListItem>);

  //
  expect(screen.getByText(requiredProps.name).previousElementSibling).not.toHaveClass(styles.treeViewNodeIcon);
});

test(`Renders icon with class ${styles.treeViewNodeIcon} when prop is passed`, () => {
  render(
    <TreeViewListItem icon="Icon content" {...requiredProps}>
      Content
    </TreeViewListItem>
  );

  expect(screen.getByText('Icon content')).toHaveClass(styles.treeViewNodeIcon);
  // Check that previous test isn't a false positive
  expect(screen.getByText(requiredProps.name).previousElementSibling).toHaveClass(styles.treeViewNodeIcon);
});

test('Does not render expandedIcon if list item is not expanded', () => {
  render(
    <TreeViewListItem expandedIcon="Expanded icon content" icon="Icon content" {...requiredProps}>
      Content
    </TreeViewListItem>
  );

  expect(screen.queryByText('Expanded icon content')).not.toBeInTheDocument();
});

test('Renders expandedIcon instead of icon if list item is expanded', () => {
  render(
    <TreeViewListItem
      defaultExpanded={true}
      expandedIcon="Expanded icon content"
      icon="Icon content"
      {...requiredProps}
    >
      Content
    </TreeViewListItem>
  );

  expect(screen.getByText('Expanded icon content')).toBeInTheDocument();
  expect(screen.queryByText('Icon content')).not.toBeInTheDocument();
});

test('Does not render badge by default', () => {
  render(<TreeViewListItem {...requiredProps} />);

  expect(screen.queryByText(requiredProps.name)?.nextElementSibling).not.toBeInTheDocument();
});

test('Does not render badge if hasBadge is passed but children and customBadgeContent are not passed', () => {
  render(<TreeViewListItem hasBadge {...requiredProps} />);

  expect(screen.queryByText(requiredProps.name)?.nextElementSibling).not.toBeInTheDocument();
});

test('Renders badge with count by default when hasBadge and children are passed', () => {
  render(
    <TreeViewListItem hasBadge {...requiredProps}>
      <TreeView data={[{ name: 'Parent name 1' }, { name: 'Parent name 2' }]} />
    </TreeViewListItem>
  );

  expect(screen.getByText(requiredProps.name).nextElementSibling).toHaveTextContent('2');
});

test('Renders badge with customBadgeContent when hasBadge and children are passed', () => {
  render(
    <TreeViewListItem hasBadge customBadgeContent="Custom badge" {...requiredProps}>
      <TreeView data={[{ name: 'Parent name 1' }, { name: 'Parent name 2' }]} />
    </TreeViewListItem>
  );

  expect(screen.getByText(requiredProps.name).nextElementSibling).toHaveTextContent('Custom badge');
});

test('Renders badge with customBadgeContent being number 0 when hasBadge and children are passed', () => {
  render(
    <TreeViewListItem hasBadge customBadgeContent={0} {...requiredProps}>
      <TreeView data={[{ name: 'Parent name 1' }, { name: 'Parent name 2' }]} />
    </TreeViewListItem>
  );

  expect(screen.getByText(requiredProps.name).nextElementSibling).toHaveTextContent('0');
});

test('Renders badge with customBadgeContent when hasBadge is passed and children are not passed', () => {
  render(<TreeViewListItem hasBadge customBadgeContent="Custom badge" {...requiredProps} />);

  expect(screen.getByText(requiredProps.name).nextElementSibling).toHaveTextContent('Custom badge');
});

test(`Renders badge with class ${styles.treeViewNodeCount} when hasBadge and children passed`, () => {
  render(
    <TreeViewListItem hasBadge {...requiredProps}>
      <TreeView data={[{ name: 'Parent name 1' }, { name: 'Parent name 2' }]} />
    </TreeViewListItem>
  );

  expect(screen.getByText('2').parentElement).toHaveClass(styles.treeViewNodeCount);
});

test(`Renders badge with class ${styles.treeViewNodeCount} when hasBadge is passed and children are not passed`, () => {
  render(<TreeViewListItem hasBadge customBadgeContent="Custom badge" {...requiredProps} />);

  expect(screen.getByText('Custom badge').parentElement).toHaveClass(styles.treeViewNodeCount);
});

test('Passes badgeProps when hasBadge and children are passed', () => {
  render(
    <TreeViewListItem hasBadge badgeProps={{ className: 'test-class' }} {...requiredProps}>
      <TreeView data={[{ name: 'Parent name 1' }, { name: 'Parent name 2' }]} />
    </TreeViewListItem>
  );

  expect(screen.getByText('2')).toHaveClass('test-class');
});

test('Passes badgeProps when hasBadge and customBadgeContent are passed', () => {
  render(
    <TreeViewListItem
      hasBadge
      customBadgeContent="Badge content"
      badgeProps={{ className: 'test-class' }}
      {...requiredProps}
    />
  );

  expect(screen.getByText('Badge content')).toHaveClass('test-class');
});

test(`Renders ${styles.treeViewNode} element as button by default`, () => {
  render(<TreeViewListItem {...requiredProps} />);

  expect(screen.getByRole('button', { name: requiredProps.name })).toHaveClass(styles.treeViewNode);
});

test(`Renders ${styles.treeViewNode} element as label when hasCheckbox is passed`, () => {
  render(<TreeViewListItem hasCheckbox {...requiredProps} />);

  const treeViewNode = screen.getByRole('treeitem').querySelector(`.${styles.treeViewNode}`);

  expect(treeViewNode?.tagName).toBe('LABEL');
});

test(`Renders ${styles.treeViewNode} element as div when isSelectable is passed`, () => {
  render(<TreeViewListItem isSelectable {...requiredProps} />);

  const treeViewNode = screen.getByRole('treeitem').querySelector(`.${styles.treeViewNode}`);

  expect(treeViewNode?.tagName).toBe('DIV');
});

test(`Does not render ${styles.treeViewNode} element with for or id attributes by default`, () => {
  render(<TreeViewListItem {...requiredProps} />);

  const treeViewNode = screen.getByRole('treeitem').querySelector(`.${styles.treeViewNode}`);

  expect(treeViewNode).not.toHaveAttribute('for');
  expect(treeViewNode).not.toHaveAttribute('id');
});

test(`Renders ${styles.treeViewNode} element with for and id attributes when hasCheckbox is passed`, () => {
  render(<TreeViewListItem hasCheckbox {...requiredProps} />);

  const treeViewNode = screen.getByRole('treeitem').querySelector(`.${styles.treeViewNode}`);

  expect(treeViewNode).toHaveAttribute('for', expect.stringMatching(/checkbox-id\d+/));
  expect(treeViewNode).toHaveAttribute('id', expect.stringMatching(/label-checkbox-id\d+/));
});

test(`Renders ${styles.treeViewNode} element with id attribute when isSelectable and children are passed`, () => {
  render(
    <TreeViewListItem isSelectable {...requiredProps}>
      Content
    </TreeViewListItem>
  );

  const treeViewNode = screen.getByRole('treeitem').querySelector(`.${styles.treeViewNode}`);

  expect(treeViewNode).toHaveAttribute('id', expect.stringMatching(/selectable-id\d+/));
});

test(`Does not render ${styles.treeViewNode} element with additional classes by default`, () => {
  render(<TreeViewListItem {...requiredProps} />);

  const treeViewNode = screen.getByRole('treeitem').querySelector(`.${styles.treeViewNode}`);

  expect(treeViewNode).toHaveClass(styles.treeViewNode, { exact: true });
});

test(`Renders ${styles.treeViewNode} element with ${styles.modifiers.current} class when isSelectable and activeItems are passed`, () => {
  render(
    <TreeViewListItem compareItems={() => true} isSelectable activeItems={[{ name: 'Active item' }]} {...requiredProps}>
      Content
    </TreeViewListItem>
  );

  const treeViewNode = screen.getByRole('treeitem').querySelector(`.${styles.treeViewNode}`);

  expect(treeViewNode).toHaveClass(styles.modifiers.current);
});

test(`Renders ${styles.treeViewNode} element with ${styles.modifiers.current} class when children are not passed`, () => {
  render(<TreeViewListItem compareItems={() => true} activeItems={[{ name: 'Active item' }]} {...requiredProps} />);

  const treeViewNode = screen.getByRole('treeitem').querySelector(`.${styles.treeViewNode}`);

  expect(treeViewNode).toHaveClass(styles.modifiers.current);
});

test(`Does not render ${styles.treeViewNode} element with ${styles.modifiers.current} class when children are passed`, () => {
  render(
    <TreeViewListItem compareItems={() => true} activeItems={[{ name: 'Active item' }]} {...requiredProps}>
      Content
    </TreeViewListItem>
  );

  const treeViewNode = screen.getByRole('treeitem').querySelector(`.${styles.treeViewNode}`);

  expect(treeViewNode).not.toHaveClass(styles.modifiers.current);
});

describe('Callback props', () => {
  const user = userEvent.setup();
  const compareItemsMock = jest.fn();
  const onCheckMock = jest.fn();
  const onSelectMock = jest.fn();
  const onExpandMock = jest.fn();
  const onCollapseMock = jest.fn();

  const activeItems = [{ name: 'Active item' }];
  const parentItem = { name: 'Parent item' };
  const itemData = { name: 'Item data' };

  test('Does not call compareItems when not passed in', () => {
    render(<TreeViewListItem {...requiredProps}>Content</TreeViewListItem>);

    expect(compareItemsMock).not.toHaveBeenCalled();
  });

  test('Does not call compareItems when isSelectable is passed but activeItems is not passed', () => {
    render(
      <TreeViewListItem
        compareItems={compareItemsMock}
        isSelectable
        itemData={{ name: 'Item data' }}
        {...requiredProps}
      >
        Content
      </TreeViewListItem>
    );

    expect(compareItemsMock).not.toHaveBeenCalled();
  });

  test('Calls compareItems when isSelectable and activeItems are passed', () => {
    render(
      <TreeViewListItem
        compareItems={compareItemsMock}
        isSelectable
        activeItems={activeItems}
        itemData={itemData}
        {...requiredProps}
      >
        Content
      </TreeViewListItem>
    );

    expect(compareItemsMock).toHaveBeenCalledTimes(1);
    expect(compareItemsMock).toHaveBeenCalledWith(
      expect.objectContaining(activeItems[0]),
      expect.objectContaining(itemData)
    );
  });

  test('Calls compareItems when children and activeItems are passed', () => {
    render(
      <TreeViewListItem
        compareItems={compareItemsMock}
        activeItems={activeItems}
        itemData={itemData}
        {...requiredProps}
      />
    );

    expect(compareItemsMock).toHaveBeenCalledTimes(1);
    expect(compareItemsMock).toHaveBeenCalledWith(
      expect.objectContaining(activeItems[0]),
      expect.objectContaining(itemData)
    );
  });

  test('Does not call onCheck when not passed in', async () => {
    render(<TreeViewListItem hasCheckbox {...requiredProps} />);

    await user.click(screen.getByRole('checkbox'));

    expect(onCheckMock).not.toHaveBeenCalled();
  });

  test('Does not call onCheck callback when checkbox is not clicked', async () => {
    render(<TreeViewListItem onCheck={onCheckMock} hasCheckbox {...requiredProps} />);

    await user.click(document.body);

    expect(onCheckMock).not.toHaveBeenCalled();
  });

  test('Calls onCheck callback when checkbox is clicked', async () => {
    render(<TreeViewListItem onCheck={onCheckMock} hasCheckbox {...requiredProps} />);

    await user.click(screen.getByRole('checkbox'));

    expect(onCheckMock).toHaveBeenCalledTimes(1);
    expect(onCheckMock).toHaveBeenCalledWith(expect.any(Object), undefined, undefined);
  });

  test('Calls onCheck with parentItem when passed in', async () => {
    render(<TreeViewListItem parentItem={parentItem} onCheck={onCheckMock} hasCheckbox {...requiredProps} />);

    await user.click(screen.getByRole('checkbox'));

    expect(onCheckMock).toHaveBeenCalledTimes(1);
    expect(onCheckMock).toHaveBeenCalledWith(expect.any(Object), undefined, parentItem);
  });

  test('Calls onCheck with itemData when passed in', async () => {
    render(<TreeViewListItem itemData={itemData} onCheck={onCheckMock} hasCheckbox {...requiredProps} />);

    await user.click(screen.getByRole('checkbox'));

    expect(onCheckMock).toHaveBeenCalledTimes(1);
    expect(onCheckMock).toHaveBeenCalledWith(expect.any(Object), itemData, undefined);
  });

  test('Does not call onSelect when not passed in', async () => {
    render(<TreeViewListItem {...requiredProps} />);

    await user.click(screen.getByRole('button', { name: requiredProps.name }));

    expect(onSelectMock).not.toHaveBeenCalled();
  });

  test(`Does not call onSelect when ${styles.treeViewNode} is not clicked`, async () => {
    render(<TreeViewListItem onSelect={onSelectMock} {...requiredProps} />);

    await user.click(document.body);

    expect(onSelectMock).not.toHaveBeenCalled();
  });

  test('Does not call onSelect when hasCheckbox is passed', async () => {
    render(<TreeViewListItem onSelect={onSelectMock} hasCheckbox {...requiredProps} />);

    const treeViewNode = screen.getByRole('treeitem').querySelector(`.${styles.treeViewNode}`);
    await user.click(treeViewNode as Element);

    expect(onSelectMock).not.toHaveBeenCalled();
  });

  test(`Calls onSelect when ${styles.treeViewNode} is clicked`, async () => {
    render(<TreeViewListItem onSelect={onSelectMock} {...requiredProps} />);

    await user.click(screen.getByRole('button', { name: requiredProps.name }));

    expect(onSelectMock).toHaveBeenCalledTimes(1);
    expect(onSelectMock).toHaveBeenCalledWith(expect.any(Object), undefined, undefined);
  });

  test(`Calls onSelect with parentItem when passed in`, async () => {
    render(<TreeViewListItem parentItem={parentItem} onSelect={onSelectMock} {...requiredProps} />);

    await user.click(screen.getByRole('button', { name: requiredProps.name }));

    expect(onSelectMock).toHaveBeenCalledTimes(1);
    expect(onSelectMock).toHaveBeenCalledWith(expect.any(Object), undefined, parentItem);
  });

  test(`Calls onSelect with itemData when passed in`, async () => {
    render(<TreeViewListItem itemData={itemData} onSelect={onSelectMock} {...requiredProps} />);

    await user.click(screen.getByRole('button', { name: requiredProps.name }));

    expect(onSelectMock).toHaveBeenCalledTimes(1);
    expect(onSelectMock).toHaveBeenCalledWith(expect.any(Object), itemData, undefined);
  });

  test('Does not call onExpand when not passed in', async () => {
    render(<TreeViewListItem {...requiredProps}>Content</TreeViewListItem>);

    await user.click(screen.getByRole('button', { name: requiredProps.name }));

    expect(onExpandMock).not.toHaveBeenCalled();
  });

  test(`Does not call onExpand when ${styles.treeViewNode} is collapsed and not clicked`, async () => {
    render(
      <TreeViewListItem onExpand={onExpandMock} {...requiredProps}>
        Content
      </TreeViewListItem>
    );

    await user.click(document.body);

    expect(onExpandMock).not.toHaveBeenCalled();
  });

  test(`Does not call onExpand when ${styles.treeViewNode} is expanded and clicked`, async () => {
    render(
      <TreeViewListItem isExpanded onExpand={onExpandMock} {...requiredProps}>
        Content
      </TreeViewListItem>
    );

    await user.click(screen.getByRole('button', { name: requiredProps.name }));

    expect(onExpandMock).not.toHaveBeenCalled();
  });

  test(`Calls onExpand when ${styles.treeViewNode} is collapsed and clicked`, async () => {
    render(
      <TreeViewListItem onExpand={onExpandMock} {...requiredProps}>
        Content
      </TreeViewListItem>
    );

    await user.click(screen.getByRole('button', { name: requiredProps.name }));

    expect(onExpandMock).toHaveBeenCalledTimes(1);
    expect(onExpandMock).toHaveBeenCalledWith(expect.any(Object), undefined, undefined);
  });

  test(`Calls onExpand when ${styles.treeViewNodeToggle} is clicked and isSelectable is passed`, async () => {
    render(
      <TreeViewListItem isSelectable onExpand={onExpandMock} {...requiredProps}>
        Content
      </TreeViewListItem>
    );

    const toggle = screen.getByText(requiredProps.name).previousElementSibling;
    await user.click(toggle as Element);

    expect(onExpandMock).toHaveBeenCalledTimes(1);
    expect(onExpandMock).toHaveBeenCalledWith(expect.any(Object), undefined, undefined);
  });

  test(`Calls onExpand when ${styles.treeViewNodeToggle} is clicked and hasCheckbox is passed`, async () => {
    render(
      <TreeViewListItem hasCheckbox onExpand={onExpandMock} {...requiredProps}>
        Content
      </TreeViewListItem>
    );

    const toggle = screen.getByText(requiredProps.name).previousElementSibling?.previousElementSibling;
    await user.click(toggle as Element);

    expect(onExpandMock).toHaveBeenCalledTimes(1);
    expect(onExpandMock).toHaveBeenCalledWith(expect.any(Object), undefined, undefined);
  });

  test(`Calls onExpand with parentItem when passed in`, async () => {
    render(
      <TreeViewListItem parentItem={parentItem} onExpand={onExpandMock} {...requiredProps}>
        Content
      </TreeViewListItem>
    );

    await user.click(screen.getByRole('button', { name: requiredProps.name }));

    expect(onExpandMock).toHaveBeenCalledTimes(1);
    expect(onExpandMock).toHaveBeenCalledWith(expect.any(Object), undefined, parentItem);
  });

  test(`Calls onExpand with itemData when passed in`, async () => {
    render(
      <TreeViewListItem itemData={itemData} onExpand={onExpandMock} {...requiredProps}>
        Content
      </TreeViewListItem>
    );

    await user.click(screen.getByRole('button', { name: requiredProps.name }));

    expect(onExpandMock).toHaveBeenCalledTimes(1);
    expect(onExpandMock).toHaveBeenCalledWith(expect.any(Object), itemData, undefined);
  });

  test('Does not call onCollapse when not passed in', async () => {
    render(
      <TreeViewListItem isExpanded {...requiredProps}>
        Content
      </TreeViewListItem>
    );

    await user.click(screen.getByRole('button', { name: requiredProps.name }));

    expect(onCollapseMock).not.toHaveBeenCalled();
  });

  test(`Does not call onCollapse when ${styles.treeViewNode} is expanded and not clicked`, async () => {
    render(
      <TreeViewListItem isExpanded onCollapse={onCollapseMock} {...requiredProps}>
        Content
      </TreeViewListItem>
    );

    await user.click(document.body);

    expect(onCollapseMock).not.toHaveBeenCalled();
  });

  test(`Does not call onCollapse when ${styles.treeViewNode} is collapsed and clicked`, async () => {
    render(
      <TreeViewListItem onCollapse={onCollapseMock} {...requiredProps}>
        Content
      </TreeViewListItem>
    );

    await user.click(screen.getByRole('button', { name: requiredProps.name }));

    expect(onCollapseMock).not.toHaveBeenCalled();
  });

  test(`Calls onCollapse when ${styles.treeViewNode} is expanded and clicked`, async () => {
    render(
      <TreeViewListItem isExpanded onCollapse={onCollapseMock} {...requiredProps}>
        Content
      </TreeViewListItem>
    );

    await user.click(screen.getByRole('button', { name: requiredProps.name }));

    expect(onCollapseMock).toHaveBeenCalledTimes(1);
    expect(onCollapseMock).toHaveBeenCalledWith(expect.any(Object), undefined, undefined);
  });

  test(`Calls onCollapse when ${styles.treeViewNodeToggle} is clicked and isSelectable is passed`, async () => {
    render(
      <TreeViewListItem isExpanded isSelectable onCollapse={onCollapseMock} {...requiredProps}>
        Content
      </TreeViewListItem>
    );

    const toggle = screen.getByText(requiredProps.name).previousElementSibling;
    await user.click(toggle as Element);

    expect(onCollapseMock).toHaveBeenCalledTimes(1);
    expect(onCollapseMock).toHaveBeenCalledWith(expect.any(Object), undefined, undefined);
  });

  test(`Calls onCollapse when ${styles.treeViewNodeToggle} is clicked and hasCheckbox is passed`, async () => {
    render(
      <TreeViewListItem isExpanded hasCheckbox onCollapse={onCollapseMock} {...requiredProps}>
        Content
      </TreeViewListItem>
    );

    const toggle = screen.getByText(requiredProps.name).previousElementSibling?.previousElementSibling;
    await user.click(toggle as Element);

    expect(onCollapseMock).toHaveBeenCalledTimes(1);
    expect(onCollapseMock).toHaveBeenCalledWith(expect.any(Object), undefined, undefined);
  });

  test(`Calls onCollapse with parentItem when passed in`, async () => {
    render(
      <TreeViewListItem parentItem={parentItem} isExpanded onCollapse={onCollapseMock} {...requiredProps}>
        Content
      </TreeViewListItem>
    );

    await user.click(screen.getByRole('button', { name: requiredProps.name }));

    expect(onCollapseMock).toHaveBeenCalledTimes(1);
    expect(onCollapseMock).toHaveBeenCalledWith(expect.any(Object), undefined, parentItem);
  });

  test(`Calls onCollapse with itemData when passed in`, async () => {
    const user = userEvent.setup();
    const onCollapseMock = jest.fn();

    render(
      <TreeViewListItem itemData={itemData} isExpanded onCollapse={onCollapseMock} {...requiredProps}>
        Content
      </TreeViewListItem>
    );

    await user.click(screen.getByRole('button', { name: requiredProps.name }));

    expect(onCollapseMock).toHaveBeenCalledTimes(1);
    expect(onCollapseMock).toHaveBeenCalledWith(expect.any(Object), itemData, undefined);
  });
});

test(`Does not render ${styles.treeViewAction} element by default`, () => {
  render(<TreeViewListItem {...requiredProps} />);

  expect(screen.queryByRole('treeitem')?.querySelector(`.${styles.treeViewAction}`)).not.toBeInTheDocument();
});

test(`Renders action with ${styles.treeViewAction} class when action is passed`, () => {
  render(<TreeViewListItem action="Action content" {...requiredProps} />);

  expect(screen.getByText('Action content')).toHaveClass(styles.treeViewAction);
});

test('Matches snapshot without children', () => {
  const { asFragment } = render(<TreeViewListItem {...requiredProps} />);

  expect(asFragment()).toMatchSnapshot();
});

test('Matches snapshot with children', () => {
  const { asFragment } = render(<TreeViewListItem {...requiredProps}>Content</TreeViewListItem>);

  expect(asFragment()).toMatchSnapshot();
});
