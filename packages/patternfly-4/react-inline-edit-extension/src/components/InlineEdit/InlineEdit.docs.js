import EditableTable from './examples/EditableTable';
import EditableTableColumn from './examples/EditableTableColumn';
import CollapsibleEditableTable from './examples/CollapsibleEditableTable';

export default {
  title: 'Inline Edit Table',
  components: {},
  examples: [
    { component: EditableTable, title: 'Editable table With Inline Edit Row' },
    { component: EditableTableColumn, title: 'Editable Table With Inline Edit Columns' },
    { component: CollapsibleEditableTable, title: 'Editable Table With Collapsible Rows' }
  ]
};
