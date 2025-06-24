import figma from '@figma/code-connect';
import { ActionList } from '@patternfly/react-core';

// TODO: FIGMA: Add ActionListGroup component
// TODO: FIGMA: Add ActionListItem component
// Documentation for ActionList can be found at https://www.patternfly.org/components/action-list

figma.connect(
  ActionList,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6780-15839',
  {
    props: {
      // enum
      isIconList: figma.enum('Type', { 'Action icons only': true }),

      children: figma.children('*')
    },
    example: (props) => <ActionList isIconList={props.isIconList}>{props.children}</ActionList>
  }
);
