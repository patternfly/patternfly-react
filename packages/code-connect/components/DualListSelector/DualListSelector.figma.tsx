import {
  DualListSelector,
  DualListSelectorList,
  DualListSelectorPane,
  DualListSelectorControl,
  DualListSelectorControlsWrapper
} from '@patternfly/react-core';
import figma from '@figma/code-connect';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';
import AngleDoubleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-left-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';

figma.connect(
  DualListSelector,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=29667-231683',
  {
    props: {
      children: figma.children('Dual list item*')
    },
    example: (props) => (
      // Documentation for DualListSelector can be found at https://www.patternfly.org/components/dual-list-selector
      // TODO: FIGMA: isTree: figma.boolean('Expandable'),
      // properties are static now, but will be dynamic once pane is introduced
      <DualListSelector>
        {/*
          TODO: FIGMA: Configure Dual list selector pane
          > properties are static now, but will be dynamic once pane is introduced
        */}
        <DualListSelectorPane
          title="Available options"
          searchInput={buildSearchInput(false)}
          actions={[buildSort(false)]}
          listMinHeight="300px"
          isChosen
          status={() => {}}
        >
          <DualListSelectorList>{props.children}</DualListSelectorList>
        </DualListSelectorPane>
        {/*
          TODO: FIGMA: Configure Dual list selector controls
          properties are static now, but will be dynamic once controls are introduced
        */}
        <DualListSelectorControlsWrapper>
          <DualListSelectorControl
            isDisabled={false}
            onClick={() => {}}
            aria-label="Add selected"
            icon={<AngleRightIcon />}
          />
          <DualListSelectorControl
            isDisabled={false}
            onClick={() => {}}
            aria-label="Add all"
            icon={<AngleDoubleRightIcon />}
          />
          <DualListSelectorControl
            isDisabled={false}
            onClick={() => {}}
            aria-label="Remove all"
            icon={<AngleDoubleLeftIcon />}
          />
          <DualListSelectorControl
            isDisabled={false}
            onClick={() => {}}
            aria-label="Remove selected"
            icon={<AngleLeftIcon />}
          />
        </DualListSelectorControlsWrapper>
        {/*
          TODO: FIGMA: Configure Dual list selector pane
          > properties are static now, but will be dynamic once pane is introduced
        */}
        <DualListSelectorPane title="Choose options" status={() => {}}>
          <DualListSelectorList>{props.children}</DualListSelectorList>
        </DualListSelectorPane>
      </DualListSelector>
    )
  }
);
