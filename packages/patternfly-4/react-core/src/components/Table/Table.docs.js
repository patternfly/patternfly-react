import { Table } from '@patternfly/react-core';
import Simple from './examples/SimpleTable';
import Sortable from './examples/SortableTable';
import Selectable from './examples/SelectableTable';
import Actions from './examples/ActionsTable';

export default {
  title: 'Table',
  components: {
    Table,
  },
  examples: [Simple, Sortable, Selectable, Actions]
};
