import figma from '@figma/code-connect';
import { Button, ButtonVariant, DualListSelectorPane } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

// TODO: FIGMA: Add sort button
// TODO: FIGMA: Add search bar
// TODO: FIGMA: Add <DualListSelectorPane>
// TODO: FIGMA: Add <DragDropSort>
{
  /* <DragDropSort>
  items={chosenOptions.map((option, index) => ({
    ...option,
    props: {
      key: option.props.key,
      isSelected: option.props.isSelected,
      onOptionSelect: (e) => onOptionSelect(e, index, true)
    }
  }))}
  onDrop={(_, newItems) => {
    setChosenOptions(newItems);
  }}
  variant="DualListSelectorList"
> */
}

figma.connect(
  DualListSelectorPane,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=21279-116172&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      icon: <TimesIcon />, // placeholder icon

      // string
      title: figma.string('Header text'),
      itemInformation: figma.string('Item information'),

      // boolean
      isSearchable: figma.boolean('Has search bar', {
        true: `buildSearchInput(true)`,
        false: undefined
      }),
      onSearch: figma.boolean('Has search bar', {
        true: () => {},
        false: undefined
      }),
      actions: figma.boolean('Has search bar', {
        true: [
          <Button
            variant={ButtonVariant.plain}
            onClick={() => {}}
            aria-label="Sort Chosen"
            key="chosenSortButton"
            isDisabled={isDisabled}
            icon={<TimesIcon />}
          />,
          <Button
            variant={ButtonVariant.plain}
            onClick={() => {}}
            aria-label="Sort Available"
            key="availableSortButton"
            isDisabled={isDisabled}
            icon={<TimesIcon />}
          />
        ]
      }),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for DualListHeader can be found at https://www.patternfly.org/components/dual-list-selector
      <DualListSelectorPane
        actions={props.actions}
        listMinHeight="300px"
        onSearch={props.onSearch}
        searchInput={props.isSearchable}
        title={props.title}
      >
        {props.children}
      </DualListSelectorPane>
    )
  }
);
