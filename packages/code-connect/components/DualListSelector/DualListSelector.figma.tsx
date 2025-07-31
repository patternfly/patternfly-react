import {
  DualListSelector,
  DualListSelectorList,
  DualListSelectorPane,
  DualListSelectorControl,
  DualListSelectorControlsWrapper,
  DualListSelectorListItem
} from '@patternfly/react-core';
import figma from '@figma/code-connect';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';
import AngleDoubleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-left-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';

// TODO: DESIGN: Dual list items types and tree setting should come from components
// Documentation for DualListSelector can be found at https://www.patternfly.org/components/dual-list-selector

figma.connect(
  DualListSelector,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=29667-231683',
  {
    example: () => (
      <DualListSelector>
        <DualListSelectorPane
          title="Available options"
          // searchInput={() => {}}
          // actions={() => {}}
          // status={() => {}}
          listMinHeight="300px"
          isChosen
        >
          <DualListSelectorList>
            <DualListSelectorListItem>Option 1</DualListSelectorListItem>
            <DualListSelectorListItem>Option 2</DualListSelectorListItem>
            <DualListSelectorListItem>Option 3</DualListSelectorListItem>
            <DualListSelectorListItem>Option 4</DualListSelectorListItem>
          </DualListSelectorList>
        </DualListSelectorPane>

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
        <DualListSelectorPane title="Choose options">
          <DualListSelectorList></DualListSelectorList>
        </DualListSelectorPane>
      </DualListSelector>
    )
  }
);
