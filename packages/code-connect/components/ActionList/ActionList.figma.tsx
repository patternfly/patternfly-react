import figma from '@figma/code-connect';
import { ActionList } from '@patternfly/react-core';

// TODO: DESIGN: Add ActionListGroup component
// TODO: DESIGN: Add ActionListItem component
// Documentation for ActionList can be found at https://www.patternfly.org/components/action-list

figma.connect(
  ActionList,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=6780-15839',
  {
    props: {
      // enum
      isIconList: figma.enum('Type', { 'Action icons only': true }),

      children: figma.children('*')
    },
    example: (props) => <ActionList isIconList={props.isIconList}>{props.children}</ActionList>
  }
);
