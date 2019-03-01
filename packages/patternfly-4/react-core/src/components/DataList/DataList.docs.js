import {
  DataList,
  DataListItem,
  DataListCell,
  DataListCheck,
  DataListAction,
  DataListContent,
  DataListToggle
} from '@patternfly/react-core';
import Simple from './examples/SimpleDataList';
import CheckboxAction from './examples/CheckboxActionDataList';
import Expandable from './examples/ExpandableDataList';
import Modifiers from './examples/ModifiersDataList';

export default {
  title: 'DataList',
  components: {
    DataList,
    DataListItem,
    DataListCell,
    DataListCheck,
    DataListAction,
    DataListContent,
    DataListToggle
  },
  variablesRoot: 'pf-c-data-list',
  examples: [
    {
      component: Simple,
      title: 'Data List Simple'
    },
    {
      component: CheckboxAction,
      title: 'Data List Checkboxes, Actions and Additional Cells'
    },
    {
      component: Expandable,
      title: 'Data List Expandable'
    },
    {
      component: Modifiers,
      title: 'Data List Width Modifiers'
    }
  ]
};
