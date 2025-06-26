import figma from '@figma/code-connect';
import { Button, ButtonVariant, DualListSelectorPane } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

// Documentation for DualListHeader can be found at https://www.patternfly.org/components/dual-list-selector

figma.connect(
  DualListSelectorPane,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=21279-116172',
  {
    props: {
      icon: <TimesIcon />, // placeholder icon

      // string
      itemInformation: figma.string('Item information'),
      title: figma.string('Header text'),

      // boolean
      onSearch: figma.boolean('Has search bar', {
        true: () => {},
        false: undefined
      }),
      isSearchable: figma.boolean('Has search bar', {
        true: `buildSearchInput(true)`,
        false: undefined
      }),
      actions: figma.boolean('Has search bar', {
        true: [
          <Button
            variant={ButtonVariant.plain}
            onClick={() => {}}
            aria-label="Sort Chosen"
            key="chosenSortButton"
            isDisabled={false}
            /* icon={props.icon} */
          />,
          <Button
            variant={ButtonVariant.plain}
            onClick={() => {}}
            aria-label="Sort Available"
            key="availableSortButton"
            isDisabled={false}
            /* icon={props.icon} */
          />
        ]
      }),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for DualListHeader can be found at https://www.patternfly.org/components/dual-list-selector
      <DualListSelectorPane
        // actions={props.actions}
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
