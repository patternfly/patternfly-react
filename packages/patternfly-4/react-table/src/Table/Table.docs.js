import { Table } from '@patternfly/react-core';
import Simple from './examples/SimpleTable';
import Sortable from './examples/SortableTable';
import Selectable from './examples/SelectableTable';
import Actions from './examples/ActionsTable';
import Header from './examples/CellHeader';
import Compact from './examples/CompactTable';
import Width from './examples/WidthTable';
import Collapsible from './examples/CollapsibleTable';

export default {
  title: 'Table',
  components: {
    Table,
  },
  examples: [Simple, Sortable, Selectable, Actions, Header, Compact, Width, Collapsible]
};
