import * as Examples from './components/demos';

interface DemoInterface {
  /** ID for the demo, it will be used to help generate general ids to help with testing */
  id: string;
  /** The name of the demo */
  name: string;
  /** Demo component associated with the demo  */
  componentType: any;
  /** Flag if this is the default demo */
  isDefault?: boolean;
}
/** Add the name of the demo and it's component here to have them show up in the demo app */
export const Demos: DemoInterface[] = [
  {
    id: 'about-modal-demo',
    name: 'About Modal Demo',
    componentType: Examples.AboutModalDemo
  },
  {
    id: 'alert-timeout-close-button-demo',
    name: 'Alert Timeout Close Button Demo',
    componentType: Examples.AlertTimeoutCloseButtonDemo
  },
  {
    id: 'alert-demo',
    name: 'Alert Demo',
    componentType: Examples.AlertDemo
  },
  {
    id: 'alert-group-demo',
    name: 'Alert Group Demo',
    componentType: Examples.AlertGroupDemo
  },
  {
    id: 'alert-group-timeout-from-bottom-demo',
    name: 'Alert Group Timeout From Bottom Demo',
    componentType: Examples.AlertGroupTimeoutFromBottomDemo
  },
  {
    id: 'application-launcher-favorites-demo',
    name: 'Application Launcher Favorites Demo',
    componentType: Examples.ApplicationLauncherFavoritesDemo
  },
  {
    id: 'back-to-top-demo',
    name: 'Back To Top Demo',
    componentType: Examples.BackToTopDemo
  },
  {
    id: 'breadcrumb-demo',
    name: 'Breadcrumb Demo',
    componentType: Examples.BreadcrumbDemo
  },
  {
    id: 'button-demo',
    name: 'Button Demo',
    componentType: Examples.ButtonDemo
  },
  {
    id: 'card-demo',
    name: 'Card Demo',
    componentType: Examples.CardDemo
  },
  {
    id: 'chipgroup-demo',
    name: 'ChipGroup Demo',
    componentType: Examples.ChipGroupDemo
  },
  {
    id: 'chipgroup-default-is-open-demo',
    name: 'ChipGroup Default is Open Demo',
    componentType: Examples.ChipGroupDefaultIsOpenDemo
  },
  {
    id: 'chipgroup-with-category-demo',
    name: 'ChipGroup With Category Demo',
    componentType: Examples.ChipWithCategoryGroupDemo
  },
  {
    id: 'chipgroup-with-overflow-chip-event-handler-demo',
    name: 'ChipGroup With Overflow Event Handler',
    componentType: Examples.ChipGroupWithOverflowChipEventHandler
  },
  {
    id: 'clipboard-copy-demo',
    name: 'ClipboardCopy Demo',
    componentType: Examples.ClipboardCopyDemo
  },
  {
    id: 'code-editor-demo',
    name: 'CodeEditor Demo',
    componentType: Examples.CodeEditorDemo
  },
  {
    id: 'context-selector-demo',
    name: 'ContextSelector Demo',
    componentType: Examples.ContextSelectorDemo
  },
  {
    id: 'data-list-demo',
    name: 'Data List Demo',
    componentType: Examples.DataListDemo
  },
  {
    id: 'data-list-draggable-demo',
    name: 'Data List Draggable Demo',
    componentType: Examples.DataListDraggableDemo
  },
  {
    id: 'data-list-compact-demo',
    name: 'Data List Compact Demo',
    componentType: Examples.DataListCompactDemo
  },
  {
    id: 'date-picker-demo',
    name: 'Date Picker Demo',
    componentType: Examples.DatePickerDemo
  },
  {
    id: 'description-list-demo',
    name: 'Description List Demo',
    componentType: Examples.DescriptionListDemo
  },
  {
    id: 'description-list-breakpoints-demo',
    name: 'Description List Breakpoints Demo',
    componentType: Examples.DescriptionListBreakpointsDemo
  },
  {
    id: 'drawer-demo',
    name: 'Drawer Demo',
    componentType: Examples.DrawerDemo
  },
  {
    id: 'drawer-resize-demo',
    name: 'Drawer Resize Demo',
    componentType: Examples.DrawerResizeDemo
  },
  {
    id: 'dropdown-demo',
    name: 'Dropdown Demo',
    componentType: Examples.DropdownDemo
  },
  {
    id: 'dual-list-selector-basic-demo',
    name: 'DualListSelector basic Demo',
    componentType: Examples.DualListSelectorBasicDemo
  },
  {
    id: 'dual-list-selector-tree-demo',
    name: 'DualListSelector Tree Demo',
    componentType: Examples.DualListSelectorTreeDemo
  },
  {
    id: 'dual-list-selector-with-actions-demo',
    name: 'DualListSelector with actions Demo',
    componentType: Examples.DualListSelectorWithActionsDemo
  },
  {
    id: 'expandable-section-demo',
    name: 'Expandable Section Demo',
    componentType: Examples.ExpandableSectionDemo
  },
  {
    id: 'fileupload-demo',
    name: 'FileUpload Demo',
    componentType: Examples.FileUploadDemo
  },
  {
    id: 'form-demo',
    name: 'Form Demo',
    componentType: Examples.FormDemo
  },
  {
    id: 'jump-links-demo',
    name: 'Jump Links Demo',
    componentType: Examples.JumpLinksDemo
  },
  {
    id: 'input-group-demo',
    name: 'Input Group Demo',
    componentType: Examples.InputGroupDemo
  },
  {
    id: 'label-demo',
    name: 'Label Demo',
    componentType: Examples.LabelDemo
  },
  {
    id: 'labelgroup-editable-demo',
    name: 'LabelGroup Editable Demo',
    componentType: Examples.LabelGroupEditableDemo
  },
  {
    id: 'labelgroup-vertical-demo',
    name: 'LabelGroup Vertical Demo',
    componentType: Examples.LabelGroupVerticalDemo
  },
  {
    id: 'labelgroup-with-category-demo',
    name: 'LabelGroup With Category Demo',
    componentType: Examples.LabelGroupWithCategoryDemo
  },
  {
    id: 'login-page-demo',
    name: 'Login Page Demo',
    componentType: Examples.LoginPageDemo
  },
  {
    id: 'masthead-demo',
    name: 'Masthead Demo',
    componentType: Examples.MastheadDemo
  },
  {
    id: 'menu-demo',
    name: 'Menu Demo',
    componentType: Examples.MenuDemo
  },
  {
    id: 'menu-drilldown-demo',
    name: 'Menu Drilldown Demo',
    componentType: Examples.MenuDrilldownDemo
  },
  {
    id: 'modal-demo',
    name: 'Modal Demo',
    componentType: Examples.ModalDemo
  },
  {
    id: 'nav-demo',
    name: 'Nav Demo',
    componentType: Examples.NavDemo
  },
  {
    id: 'notification-badge-demo',
    name: 'Notification Badge Demo',
    componentType: Examples.NotificationBadgeDemo
  },
  {
    id: 'notification-drawer-lightweight-demo',
    name: 'Notification Drawer Lightweight Demo',
    componentType: Examples.LightweightNotificationDrawerDemo
  },
  {
    id: 'notification-drawer-basic-demo',
    name: 'Notification Drawer Basic Demo',
    componentType: Examples.BasicNotificationDrawerDemo
  },
  {
    id: 'notification-drawer-groups-demo',
    name: 'Notification Drawer Groups Demo',
    componentType: Examples.GroupsNotificationDrawerDemo
  },
  {
    id: 'numberInput-demo',
    name: 'Number Input Demo',
    componentType: Examples.NumberInputDemo
  },
  {
    id: 'options-menu-demo',
    name: 'Options Menu Demo',
    componentType: Examples.OptionsMenuDemo
  },
  {
    id: 'overflow-menu-demo',
    name: 'Overflow Menu Demo',
    componentType: Examples.OverflowMenuDemo
  },
  {
    id: 'page-demo',
    name: 'Page Demo',
    componentType: Examples.PageDemo
  },
  {
    id: 'page-managed-sidebar-closed-demo',
    name: 'Page Managed Sidebar Closed Demo',
    componentType: Examples.PageManagedSidebarClosedDemo
  },
  {
    id: 'pagination-demo',
    name: 'Pagination Demo',
    componentType: Examples.PaginationDemo
  },
  {
    id: 'popover-demo',
    name: 'Popover Demo',
    componentType: Examples.PopoverDemo
  },
  {
    id: 'progress-stepper-demo',
    name: 'Progress Stepper Demo',
    componentType: Examples.ProgressStepperDemo
  },
  {
    id: 'radio-demo',
    name: 'Radio Demo',
    componentType: Examples.RadioDemo
  },
  {
    id: 'search-input-demo',
    name: 'Search Input Demo',
    componentType: Examples.SearchInputDemo
  },
  {
    id: 'select-demo',
    name: 'Select Demo',
    componentType: Examples.SelectDemo
  },
  {
    id: 'select-demo-filtering',
    name: 'Select Demo with Filtering',
    componentType: Examples.FilteringSelectDemo
  },
  {
    id: 'select-demo-filtering-live-updates',
    name: 'Select Demo with Filtering and Live Items Updates',
    componentType: Examples.FilteringSelectLiveUpdateDemo
  },
  {
    id: 'select-favorites-demo',
    name: 'Select Favorites Demo',
    componentType: Examples.SelectFavoritesDemo
  },
  {
    id: 'select-in-modal-demo',
    name: 'Select in modal demo',
    componentType: Examples.SelectInModal
  },
  {
    id: 'select-typeahead-footer-filtering-demo',
    name: 'Select Footer filtering Demo',
    componentType: Examples.SelectFooterFilteringDemo
  },
  {
    id: 'select-typeahead-footer-demo',
    name: 'Select Typeahead Footer Demo',
    componentType: Examples.SelectTypeaheadFooterDemo
  },
  {
    id: 'select-validated-demo',
    name: 'Select Validated Demo',
    componentType: Examples.SelectValidatedDemo
  },
  {
    id: 'select-view-more-demo',
    name: 'Select View More Demo',
    componentType: Examples.SelectViewMoreDemo
  },
  {
    id: 'select-view-more-grouped-demo',
    name: 'Select View More Grouped Demo',
    componentType: Examples.SelectViewMoreGroupedDemo
  },
  {
    id: 'select-view-more-typeahead-grouped-demo',
    name: 'Select View More Typeahead Grouped Demo',
    componentType: Examples.SelectViewMoreTypeaheadGroupedDemo
  },
  {
    id: 'simple-list-demo',
    name: 'Simple List Demo',
    componentType: Examples.SimpleListDemo
  },
  {
    id: 'slider-demo',
    name: 'Slider Demo',
    componentType: Examples.SliderDemo
  },
  {
    id: 'switch-demo',
    name: 'Switch Demo',
    componentType: Examples.SwitchDemo
  },
  {
    id: 'tab-demo',
    name: 'Tab Demo',
    componentType: Examples.TabDemo
  },
  {
    id: 'tab-expandable-demo',
    name: 'Tab Expandable Demo',
    componentType: Examples.TabsExpandableDemo
  },
  {
    id: 'tab-uncontrolled-demo',
    name: 'Tab Uncontrolled Demo',
    componentType: Examples.TabUncontrolledDemo
  },
  {
    id: 'tabs-disabled-demo',
    name: 'Tabs Disabled Demo',
    componentType: Examples.TabsDisabledDemo
  },
  {
    id: 'tabs-horizontal-overflow-demo',
    name: 'Tabs Horizontal Overflow Demo',
    componentType: Examples.TabsHorizontalOverflowDemo
  },
  {
    id: 'table-collapsible-demo',
    name: 'Table Collapsible Demo',
    componentType: Examples.TableCollapsibleDemo
  },
  {
    id: 'table-compound-expandable-demo',
    name: 'Table Compound Expandable Demo',
    componentType: Examples.TableCompoundExpandableDemo
  },
  {
    id: 'table-editable-demo',
    name: 'Table Editable Demo',
    componentType: Examples.TableEditableDemo
  },
  {
    id: 'table-editable-compound-expandable-demo',
    name: 'Table Editable Compound Expandable Demo',
    componentType: Examples.TableEditableCompoundExpandableDemo
  },
  {
    id: 'table-row-wrapper-demo',
    name: 'Table Row Wrapper Demo',
    componentType: Examples.TableRowWrapperDemo
  },
  {
    id: 'table-row-click-demo',
    name: 'Table Row Click Demo',
    componentType: Examples.TableRowClickDemo
  },
  {
    id: 'table-selectable-demo',
    name: 'Table Selectable Demo',
    componentType: Examples.TableSelectableDemo
  },
  {
    id: 'table-simple-actions-demo',
    name: 'Table Simple Actions Demo',
    componentType: Examples.TableSimpleActionsDemo
  },
  {
    id: 'table-simple-demo',
    name: 'Table Simple Demo',
    componentType: Examples.TableSimpleDemo
  },
  {
    id: 'table-sortable-demo',
    name: 'Table Sortable Demo',
    componentType: Examples.TableSortableDemo
  },
  {
    id: 'table-favorites-demo',
    name: 'Table Favorites Demo',
    componentType: Examples.TableFavoritesDemo
  },
  {
    id: 'table-composable-demo',
    name: 'Table Composable Demo',
    componentType: Examples.TableComposableDemo
  },
  {
    id: 'tab-string-event-key-demo',
    name: 'Tab String Event Key Demo',
    componentType: Examples.TabsStringEventKeyDemo
  },
  {
    id: 'text-area',
    name: 'Text Area Demo',
    componentType: Examples.TextAreaDemo
  },
  {
    id: 'text-input-demo',
    name: 'Text Input Demo',
    componentType: Examples.TextInputDemo
  },
  {
    id: 'toggle-group-demo',
    name: 'Toggle Group Demo',
    componentType: Examples.ToggleGroupDemo
  },
  {
    id: 'toolbar-demo',
    name: 'Toolbar Demo',
    componentType: Examples.ToolbarDemo
  },
  {
    id: 'toolbar-visibility-demo',
    name: 'Toolbar Visibility Demo',
    componentType: Examples.ToolbarVisibilityDemo
  },
  {
    id: 'tooltip-demo',
    name: 'Tooltip Demo',
    componentType: Examples.TooltipDemo
  },
  {
    id: 'treeview-demo',
    name: 'Tree View Demo',
    componentType: Examples.TreeViewDemo
  },
  {
    id: 'wizard-demo',
    name: 'Wizard Demo',
    componentType: Examples.WizardDemo
  }
];

export default Demos;
