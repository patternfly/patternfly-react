import React from 'react';
import {
  DualListSelector,
  DualListSelectorPane,
  DualListSelectorList,
  DualListSelectorControlsWrapper,
  DualListSelectorControl,
  DualListSelectorTree,
  DualListSelectorTreeItemData,
  SearchInput,
  Button,
  EmptyState,
  EmptyStateVariant,
  EmptyStateFooter,
  EmptyStateBody,
  EmptyStateActions
} from '@patternfly/react-core';
import AngleDoubleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-left-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

interface FoodNode {
  id: string;
  text: string;
  children?: FoodNode[];
}

interface ExampleProps {
  data: FoodNode[];
}

export const DualListSelectorComposableTree: React.FunctionComponent<ExampleProps> = ({ data }: ExampleProps) => {
  const [checkedLeafIds, setCheckedLeafIds] = React.useState<string[]>([]);
  const [chosenLeafIds, setChosenLeafIds] = React.useState<string[]>(['beans', 'beef', 'chicken', 'tofu']);
  const [chosenFilter, setChosenFilter] = React.useState<string>('');
  const [availableFilter, setAvailableFilter] = React.useState<string>('');

  // helper function to build memoized lists
  const buildTextById = (node: FoodNode): { [key: string]: string } => {
    let textById = {};
    if (!node) {
      return textById;
    }
    textById[node.id] = node.text;
    if (node.children) {
      node.children.forEach((child) => {
        textById = { ...textById, ...buildTextById(child) };
      });
    }
    return textById;
  };

  // helper function to build memoized lists
  const getDescendantLeafIds = (node: FoodNode): string[] => {
    if (!node.children || !node.children.length) {
      return [node.id];
    } else {
      let childrenIds: string[] = [];
      node.children.forEach((child) => {
        childrenIds = [...childrenIds, ...getDescendantLeafIds(child)];
      });
      return childrenIds;
    }
  };

  // helper function to build memoized lists
  const getLeavesById = (node: FoodNode): { [key: string]: string[] } => {
    let leavesById = {};
    if (!node.children || !node.children.length) {
      leavesById[node.id] = [node.id];
    } else {
      node.children.forEach((child) => {
        leavesById[node.id] = getDescendantLeafIds(node);
        leavesById = { ...leavesById, ...getLeavesById(child) };
      });
    }
    return leavesById;
  };

  // Builds a map of child leaf nodes by node id - memoized so that it only rebuilds the list if the data changes.
  const { memoizedLeavesById, memoizedAllLeaves, memoizedNodeTexts } = React.useMemo(() => {
    let leavesById = {};
    let allLeaves: string[] = [];
    let nodeTexts = {};
    data.forEach((foodNode) => {
      nodeTexts = { ...nodeTexts, ...buildTextById(foodNode) };
      leavesById = { ...leavesById, ...getLeavesById(foodNode) };
      allLeaves = [...allLeaves, ...getDescendantLeafIds(foodNode)];
    });
    return {
      memoizedLeavesById: leavesById,
      memoizedAllLeaves: allLeaves,
      memoizedNodeTexts: nodeTexts
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const matchesFilter = (value: string, filter: string) => value.toLowerCase().includes(filter.trim().toLowerCase());

  const getVisibleLeafIds = (leafIds: string[], filter: string) => {
    const filterMatchingNodeIds = Object.keys(memoizedLeavesById).filter((nodeId) =>
      matchesFilter(memoizedNodeTexts[nodeId], filter)
    );
    const filterMatchingLeafIds = filterMatchingNodeIds.map((nodeId) => memoizedLeavesById[nodeId]).flat();
    return leafIds.filter((leafId) => filterMatchingLeafIds.includes(leafId));
  };

  const availableLeafIds = memoizedAllLeaves.filter((leafId) => !chosenLeafIds.includes(leafId));
  const visibleChosenLeafIds = getVisibleLeafIds(chosenLeafIds, chosenFilter);
  const visibleAvailableLeafIds = getVisibleLeafIds(availableLeafIds, availableFilter);

  const moveChecked = (toChosen: boolean) => {
    const visibleCheckedChosenLeafIds = checkedLeafIds.filter((leafId) => visibleChosenLeafIds.includes(leafId));
    const visibleCheckedAvailableLeafIds = checkedLeafIds.filter((leafId) => visibleAvailableLeafIds.includes(leafId));

    setChosenLeafIds(
      (prevChosenIds) =>
        toChosen
          ? [...prevChosenIds, ...visibleCheckedAvailableLeafIds] // add visible checked ids to chosen list
          : prevChosenIds.filter((x) => !visibleCheckedChosenLeafIds.includes(x)) // remove visible checked ids from chosen list
    );

    // uncheck checked ids that just moved
    setCheckedLeafIds((prevChecked) =>
      toChosen
        ? prevChecked.filter((x) => !visibleCheckedAvailableLeafIds.includes(x))
        : prevChecked.filter((x) => !visibleCheckedChosenLeafIds.includes(x))
    );
  };

  const moveAll = (toChosen: boolean) => {
    if (toChosen) {
      setChosenLeafIds((prevChosenIds) => [...prevChosenIds, ...visibleAvailableLeafIds]);
    } else {
      setChosenLeafIds((prevChosenIds) => prevChosenIds.filter((id) => !visibleChosenLeafIds.includes(id)));
    }
  };

  const areAllDescendantsSelected = (node: FoodNode, isChosen: boolean) =>
    memoizedLeavesById[node.id].every(
      (id) => checkedLeafIds.includes(id) && (isChosen ? chosenLeafIds.includes(id) : !chosenLeafIds.includes(id))
    );
  const areSomeDescendantsSelected = (node: FoodNode, isChosen: boolean) =>
    memoizedLeavesById[node.id].some(
      (id) => checkedLeafIds.includes(id) && (isChosen ? chosenLeafIds.includes(id) : !chosenLeafIds.includes(id))
    );

  const isNodeChecked = (node: FoodNode, isChosen: boolean) => {
    if (areAllDescendantsSelected(node, isChosen)) {
      return true;
    }
    if (areSomeDescendantsSelected(node, isChosen)) {
      return false;
    }
    return false;
  };

  const onOptionCheck = (
    event: React.MouseEvent | React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent,
    isChecked: boolean,
    node: DualListSelectorTreeItemData,
    isChosen: boolean
  ) => {
    const nodeIdsToCheck = memoizedLeavesById[node.id].filter((id) =>
      isChosen ? visibleChosenLeafIds.includes(id) : visibleAvailableLeafIds.includes(id)
    );

    setCheckedLeafIds((prevChecked) => {
      const otherCheckedNodeNames = prevChecked.filter((id) => !nodeIdsToCheck.includes(id));
      return !isChecked ? otherCheckedNodeNames : [...otherCheckedNodeNames, ...nodeIdsToCheck];
    });
  };

  // builds a search input - used in each dual list selector pane
  const buildSearchInput = (isChosen: boolean) => {
    const onChange = (value) => (isChosen ? setChosenFilter(value) : setAvailableFilter(value));

    return (
      <SearchInput
        value={isChosen ? chosenFilter : availableFilter}
        onChange={(_event, value) => onChange(value)}
        onClear={() => onChange('')}
      />
    );
  };

  // Builds the DualListSelectorTreeItems from the FoodNodes
  const buildOptions = (
    isChosen: boolean,
    [node, ...remainingNodes]: FoodNode[],
    hasParentMatch: boolean
  ): DualListSelectorTreeItemData[] => {
    if (!node) {
      return [];
    }

    const isChecked = isNodeChecked(node, isChosen);

    const filterValue = isChosen ? chosenFilter : availableFilter;
    const descendentLeafIds = memoizedLeavesById[node.id];
    const descendentsOnThisPane = isChosen
      ? descendentLeafIds.filter((id) => chosenLeafIds.includes(id))
      : descendentLeafIds.filter((id) => !chosenLeafIds.includes(id));

    const hasMatchingChildren =
      filterValue && descendentsOnThisPane.some((id) => matchesFilter(memoizedNodeTexts[id], filterValue));
    const isFilterMatch = filterValue && matchesFilter(node.text, filterValue) && descendentsOnThisPane.length > 0;

    // A node is displayed if either of the following is true:
    //   - There is no filter value and this node or its descendents belong on this pane
    //   - There is a filter value and this node or one of this node's descendents or ancestors match on this pane
    const isDisplayed =
      (!filterValue && descendentsOnThisPane.length > 0) ||
      hasMatchingChildren ||
      (hasParentMatch && descendentsOnThisPane.length > 0) ||
      isFilterMatch;

    return [
      ...(isDisplayed
        ? [
            {
              id: node.id,
              text: node.text,
              isChecked,
              checkProps: { 'aria-label': `Select ${node.text}` },
              hasBadge: node.children && node.children.length > 0,
              badgeProps: { isRead: true },
              defaultExpanded: isChosen ? !!chosenFilter : !!availableFilter,
              children: node.children
                ? buildOptions(isChosen, node.children, isFilterMatch || hasParentMatch)
                : undefined
            }
          ]
        : []),
      ...(!isDisplayed && node.children && node.children.length
        ? buildOptions(isChosen, node.children, hasParentMatch)
        : []),
      ...(remainingNodes ? buildOptions(isChosen, remainingNodes, hasParentMatch) : [])
    ];
  };

  const buildPane = (isChosen: boolean): React.ReactNode => {
    const options: DualListSelectorTreeItemData[] = buildOptions(isChosen, data, false);
    const numOptions = isChosen ? visibleChosenLeafIds.length : visibleAvailableLeafIds.length;
    const numSelected = checkedLeafIds.filter((id) =>
      isChosen ? visibleChosenLeafIds.includes(id) : visibleAvailableLeafIds.includes(id)
    ).length;
    const status = `${numSelected} of ${numOptions} options selected`;
    const filterApplied = isChosen ? chosenFilter !== '' : availableFilter !== '';
    return (
      <DualListSelectorPane
        title={isChosen ? 'Chosen' : 'Available'}
        status={status}
        searchInput={buildSearchInput(isChosen)}
        isChosen={isChosen}
        listMinHeight="300px"
      >
        {filterApplied && options.length === 0 && (
          <EmptyState headingLevel="h4" titleText="No results found" icon={SearchIcon} variant={EmptyStateVariant.sm}>
            <EmptyStateBody>No results match the filter criteria. Clear all filters and try again.</EmptyStateBody>
            <EmptyStateFooter>
              <EmptyStateActions>
                <Button variant="link" onClick={() => (isChosen ? setChosenFilter('') : setAvailableFilter(''))}>
                  Clear all filters
                </Button>
              </EmptyStateActions>
            </EmptyStateFooter>
          </EmptyState>
        )}
        {options.length > 0 && (
          <DualListSelectorList>
            <DualListSelectorTree
              data={options}
              onOptionCheck={(e, isChecked, itemData) => onOptionCheck(e, isChecked, itemData, isChosen)}
            />
          </DualListSelectorList>
        )}
      </DualListSelectorPane>
    );
  };

  return (
    <DualListSelector isTree>
      {buildPane(false)}
      <DualListSelectorControlsWrapper>
        <DualListSelectorControl
          isDisabled={!checkedLeafIds.filter((x) => visibleAvailableLeafIds.includes(x)).length}
          onClick={() => moveChecked(true)}
          aria-label="Add selected"
          icon={<AngleRightIcon />}
        />
        <DualListSelectorControl
          isDisabled={chosenLeafIds.length === memoizedAllLeaves.length}
          onClick={() => moveAll(true)}
          aria-label="Add all"
          icon={<AngleDoubleRightIcon />}
        />
        <DualListSelectorControl
          isDisabled={chosenLeafIds.length === 0}
          onClick={() => moveAll(false)}
          aria-label="Remove all"
          icon={<AngleDoubleLeftIcon />}
        />
        <DualListSelectorControl
          onClick={() => moveChecked(false)}
          isDisabled={!checkedLeafIds.filter((x) => visibleChosenLeafIds.includes(x)).length}
          aria-label="Remove selected"
          icon={<AngleLeftIcon />}
        />
      </DualListSelectorControlsWrapper>
      {buildPane(true)}
    </DualListSelector>
  );
};

export const DualListSelectorComposableTreeExample: React.FunctionComponent = () => (
  <DualListSelectorComposableTree
    data={[
      {
        id: 'fruits',
        text: 'Fruits',
        children: [
          { id: 'apple', text: 'Apple' },
          {
            id: 'berries',
            text: 'Berries',
            children: [
              { id: 'blueberry', text: 'Blueberry' },
              { id: 'strawberry', text: 'Strawberry' }
            ]
          },
          { id: 'banana', text: 'Banana' }
        ]
      },
      { id: 'bread', text: 'Bread' },
      {
        id: 'vegetables',
        text: 'Vegetables',
        children: [
          { id: 'broccoli', text: 'Broccoli' },
          { id: 'cauliflower', text: 'Cauliflower' }
        ]
      },
      {
        id: 'proteins',
        text: 'Proteins',
        children: [
          { id: 'beans', text: 'Beans' },
          {
            id: 'meats',
            text: 'Meats',
            children: [
              {
                id: 'beef',
                text: 'Beef'
              },
              {
                id: 'chicken',
                text: 'Chicken'
              }
            ]
          },
          { id: 'tofu', text: 'Tofu' }
        ]
      }
    ]}
  />
);
