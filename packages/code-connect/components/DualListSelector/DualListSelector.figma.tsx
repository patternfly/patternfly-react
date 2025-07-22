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
      children: figma.children('*')
    },
    example: (props) => (
      <DualListSelector>
        <DualListSelectorPane
          title="Available options"
          // searchInput={() => {}}
          // actions={() => {}}
          listMinHeight="300px"
          isChosen
          // status={() => {}}
        >
          <DualListSelectorList>{props.children}</DualListSelectorList>
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
          <DualListSelectorList>{props.children}</DualListSelectorList>
        </DualListSelectorPane>
      </DualListSelector>
    )
  }
);
