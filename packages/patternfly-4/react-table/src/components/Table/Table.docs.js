import { Table, TableHeader, TableBody } from '@patternfly/react-table';
import Simple from './examples/SimpleTable';
import Sortable from './examples/SortableTable';
import Selectable from './examples/SelectableTable';
import Actions from './examples/ActionsTable';
import CellHeader from './examples/CellHeader';
import Compact from './examples/CompactTable';
import Width from './examples/WidthTable';
import Collapsible from './examples/CollapsibleTable';

export default {
  title: 'Table',
  components: {
    Table,
    TableBody,
    TableHeader
  },
  variablesRoot: 'pf-c-table',
  examples: [
    { component: Simple, title: 'Simple Table' },
    { component: Sortable, title: 'Sortable Table' },
    { component: Selectable, title: 'Selectable Table' },
    { component: Actions, title: 'Actions Table' },
    { component: CellHeader, title: 'First cell as Header' },
    { component: Compact, title: 'Compact Table' },
    { component: Width, title: 'Table with Width Modifiers' },
    { component: Collapsible, title: 'Collapsible table' }
  ]
};
