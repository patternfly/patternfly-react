import figma from '@figma/code-connect';
import { Button, ButtonVariant, DualListSelectorPane } from '@patternfly/react-core';
import PficonSortCommonAscIcon from '@patternfly/react-icons/icons/pficon-sort-common-asc-icon/dist/esm/icons/pficon-sort-common-asc-icon';

figma.connect(
  DualListSelectorPane,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=21279-116172&t=IzSunfrnw18ti37Y-11',
  {
    props: {
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

      // TODO: FIGMA: Add sort button

      actions: figma.boolean('Has search bar', {
        true: [
          <Button
            variant={ButtonVariant.plain}
            onClick={() => {}}
            aria-label="Sort Chosen"
            key="chosenSortButton"
            isDisabled={isDisabled}
            icon={<PficonSortCommonAscIcon />}
          />,
          <Button
            variant={ButtonVariant.plain}
            onClick={() => {}}
            aria-label="Sort Available"
            key="availableSortButton"
            isDisabled={isDisabled}
            icon={<PficonSortCommonAscIcon />}
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
