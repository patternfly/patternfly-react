import * as Examples from './components/demos';

interface DemoInterface {
  /** ID for the demo, it will be used to help generate general ids to help with testing */
  id: string;
  /** The name of the demo */
  name: string;
  /** Demo component associated with the demo  */
  componentType: any;
}
/** Add the name of the demo and it's component here to have them show up in the demo app */
export const Demos: DemoInterface[] = [
  {
    id: 'about-modal-demo',
    name: 'About Modal Demo',
    componentType: Examples.AboutModalDemo
  },
  {
    id: 'accordion-demo',
    name: 'Accordion Demo',
    componentType: Examples.AccordionDemo
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
    id: 'application-launcher-demo',
    name: 'Application Launcher Demo',
    componentType: Examples.ApplicationLauncherDemo
  },
  {
    id: 'application-launcher-favorites-demo',
    name: 'Application Launcher Favorites Demo',
    componentType: Examples.ApplicationLauncherFavoritesDemo
  },
  {
    id: 'area-chart-color-demo',
    name: 'Area Chart Color with Bottom Legend Demo',
    componentType: Examples.ColorAreaBottomLegendDemo
  },
  {
    id: 'area-chart-cyan-demo',
    name: 'Area Chart Cyan Demo',
    componentType: Examples.CyanAreaDemo
  },
  {
    id: 'sparkline-chart-demo',
    name: 'Area Sparkline Chart Demo',
    componentType: Examples.SparklineDemo
  },
  {
    id: 'stacked-area-chart-demo',
    name: 'Area Stacked Chart Demo',
    componentType: Examples.StackedAreaDemo
  },
  {
    id: 'avatar-demo',
    name: 'Avatar Demo',
    componentType: Examples.AvatarDemo
  },
  {
    id: 'backdrop-demo',
    name: 'Backdrop Demo',
    componentType: Examples.BackdropDemo
  },
  {
    id: 'backgroundimage-demo',
    name: 'Background Image Demo',
    componentType: Examples.BackgroundImageDemo
  },
  {
    id: 'badge-demo',
    name: 'Badge Demo',
    componentType: Examples.BadgeDemo
  },
  {
    id: 'purple-bar-grouped-demo',
    name: 'Bar Chart Grouped Purple Demo',
    componentType: Examples.PurpleBarGroupedDemo
  },
  {
    id: 'color-bar-zoom-demo',
    name: 'Bar Chart Multi-color, horizontal with Zoom and Bottom-aligned Legend Demo',
    componentType: Examples.ColorBarZoomDemo
  },
  {
    id: 'bar-chart-simple-demo',
    name: 'Bar Chart Simple Demo',
    componentType: Examples.SimpleBarDemo
  },
  {
    id: 'brand-demo',
    name: 'Brand Demo',
    componentType: Examples.BrandDemo
  },
  {
    id: 'breadcrumb-demo',
    name: 'Breadcrumb Demo',
    componentType: Examples.BreadcrumbDemo
  },
  {
    id: 'bullseye-demo',
    name: 'Bullseye Demo',
    componentType: Examples.BullseyeDemo
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
    id: 'checkbox-demo',
    name: 'Checkbox Demo',
    componentType: Examples.CheckboxDemo
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
    id: 'chipgroup-toolbar-demo',
    name: 'ChipGroup Toolbar Demo',
    componentType: Examples.ToolbarChipGroupDemo
  },
  {
    id: 'clipboard-copy-demo',
    name: 'ClipboardCopy Demo',
    componentType: Examples.ClipboardCopyDemo
  },
  {
    id: 'clipboard-copy-expanded-demo',
    name: 'ClipboardCopy Expanded Demo',
    componentType: Examples.ClipboardCopyExpandedDemo
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
    id: 'data-list-compact-demo',
    name: 'Data List Compact Demo',
    componentType: Examples.DataListCompactDemo
  },
  {
    id: 'data-toolbar-demo',
    name: 'Data Toolbar Demo',
    componentType: Examples.DataToolbarDemo
  },
  {
    id: 'divider-demo',
    name: 'Divider Demo',
    componentType: Examples.DividerDemo
  },
  {
    id: 'donut-chart-bottom-legend-demo',
    name: 'Donut Chart with Bottom Aligned Legend Demo',
    componentType: Examples.DonutBottomAlignedLegendDemo
  },
  {
    id: 'donut-chart-small-bottom-legend-demo',
    name: 'Donut Chart Small with Bottom Aligned Legend Demo',
    componentType: Examples.DonutSmallBottomAlignedLegend
  },
  {
    id: 'donut-chart-small-demo',
    name: 'Donut Chart Small Demo',
    componentType: Examples.DonutSmallDemo
  },
  {
    id: 'donut-chart-small-right-legend-demo',
    name: 'Donut Chart Small with Right Aligned Legend Demo',
    componentType: Examples.DonutSmallRightAlignedLegendDemo
  },
  {
    id: 'donut-chart-right-legend-color-demo',
    name: 'Donut Chart Multi-colored with Right Aligned Legend Demo',
    componentType: Examples.DonutRightAlignedLegendColorDemo
  },
  {
    id: 'donut-chart-right-legend-demo',
    name: 'Donut Chart with Right Aligned Legend Demo',
    componentType: Examples.DonutRightAlignedLegendDemo
  },
  {
    id: 'donut-utilization-green-static-right-demo',
    name: 'Donut Utilization Green Static Right Demo',
    componentType: Examples.DonutUtilizationGreenStaticRightDemo
  },
  {
    id: 'donut-utilization-inverted-right-demo',
    name: 'Donut Utilization Inverted Right Demo',
    componentType: Examples.DonutUtilizationInvertedRightDemo
  },
  {
    id: 'donut-utilization-simple-bottom-demo',
    name: 'Donut Utilization Simple Chart, Bottom-aligned Legend Demo',
    componentType: Examples.DonutUtilizationSimpleBottomDemo
  },
  {
    id: 'donut-utilization-simple-demo',
    name: 'Donut Utilization Simple Chart Demo',
    componentType: Examples.DonutUtilizationSimpleDemo
  },

  {
    id: 'donut-utilization-simple-right-demo',
    name: 'Donut Utilization Simple Right Demo',
    componentType: Examples.DonutUtilizationSimpleRightDemo
  },
  {
    id: 'donut-utilization-simple-right-green-demo',
    name: 'Donut Utilization Simple Right Green Demo',
    componentType: Examples.DonutUtilizationSimpleRightGreenDemo
  },
  {
    id: 'donut-utilization-sm-demo',
    name: 'Donut Utilization Small Demo',
    componentType: Examples.DonutUtilizationSmallDemo
  },
  {
    id: 'donut-utilization-sm-right-demo',
    name: 'Donut Utilization Small Right Demo',
    componentType: Examples.DonutUtilizationSmallRightDemo
  },
  {
    id: 'donut-utilization-sm-static-bottom-demo',
    name: 'Donut Utilization Small Static Bottom Demo',
    componentType: Examples.DonutUtilizationSmallStaticBottomDemo
  },
  {
    id: 'donut-utilization-sm-static-demo',
    name: 'Donut Utilization Small Static Demo',
    componentType: Examples.DonutUtilizationSmallStaticDemo
  },
  {
    id: 'donut-utilization-sm-static-right-demo',
    name: 'Donut Utilization Small Static Right Demo',
    componentType: Examples.DonutUtilizationSmallStaticRightDemo
  },
  {
    id: 'donut-utilization-static-bottom-demo',
    name: 'Donut Utilization Static Bottom Demo',
    componentType: Examples.DonutUtilizationStaticBottomDemo
  },
  {
    id: 'donut-utilization-static-demo',
    name: 'Donut Utilization Static Demo',
    componentType: Examples.DonutUtilizationStaticDemo
  },
  {
    id: 'donut-utilization-static-inverted-right-demo',
    name: 'Donut Utilization Static Inverted Right Demo',
    componentType: Examples.DonutUtilizationStaticInvertedRightDemo
  },
  {
    id: 'donut-utilization-static-right-demo',
    name: 'Donut Utilization Static Right Demo',
    componentType: Examples.DonutUtilizationStaticRightDemo
  },
  {
    id: 'drawer-demo',
    name: 'Drawer Demo',
    componentType: Examples.DrawerDemo
  },
  {
    id: 'dropdown-demo',
    name: 'Dropdown Demo',
    componentType: Examples.DropdownDemo
  },
  {
    id: 'empty-state-demo',
    name: 'Empty State Demo',
    componentType: Examples.EmptyStateDemo
  },
  {
    id: 'expandable-demo',
    name: 'Expandable Demo',
    componentType: Examples.ExpandableDemo
  },
  {
    id: 'flex-demo',
    name: 'Flex Demo',
    componentType: Examples.FlexDemo
  },
  {
    id: 'form-demo',
    name: 'Form Demo',
    componentType: Examples.FormDemo
  },
  {
    id: 'form-select-demo',
    name: 'Form Select Demo',
    componentType: Examples.FormSelectDemo
  },
  {
    id: 'gallery-demo',
    name: 'Gallery Demo',
    componentType: Examples.GalleryDemo
  },
  {
    id: 'grid-demo',
    name: 'Grid Demo',
    componentType: Examples.GridDemo
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
    id: 'level-demo',
    name: 'Level Demo',
    componentType: Examples.LevelDemo
  },
  {
    id: 'line-chart-green-demo',
    name: 'Line Chart Green Demo',
    componentType: Examples.LineChartGreenDemo
  },
  {
    id: 'line-chart-color-demo',
    name: 'Line Chart Multi-color Demo',
    componentType: Examples.LineChartColorDemo
  },
  {
    id: 'line-chart-simple-demo',
    name: 'Line Chart Simple Demo',
    componentType: Examples.LineChartSimpleDemo
  },
  {
    id: 'list-demo',
    name: 'List Demo',
    componentType: Examples.ListDemo
  },
  {
    id: 'login-page-demo',
    name: 'Login Page Demo',
    componentType: Examples.LoginPageDemo
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
    id: 'options-menu-demo',
    name: 'Options Menu Demo',
    componentType: Examples.OptionsMenuDemo
  },
  {
    id: 'ouia-demo',
    name: 'Ouia Demo',
    componentType: Examples.OuiaDemo
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
    id: 'page-managed-sidebar-demo',
    name: 'Page Managed Sidebar Demo',
    componentType: Examples.PageManagedSidebarDemo
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
    id: 'pie-blue-demo',
    name: 'Pie Chart Blue Demo',
    componentType: Examples.PieBlueDemo
  },
  {
    id: 'pie-color-demo',
    name: 'Pie Chart Multi-color Demo',
    componentType: Examples.PieColorDemo
  },
  {
    id: 'pie-orange-demo',
    name: 'Pie Chart Orange Demo',
    componentType: Examples.PieOrangeDemo
  },
  {
    id: 'popover-demo',
    name: 'Popover Demo',
    componentType: Examples.PopoverDemo
  },
  {
    id: 'progress-demo',
    name: 'Progress Demo',
    componentType: Examples.ProgressDemo
  },
  {
    id: 'radio-demo',
    name: 'Radio Demo',
    componentType: Examples.RadioDemo
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
    id: 'simple-list-demo',
    name: 'Simple List Demo',
    componentType: Examples.SimpleListDemo
  },
  {
    id: 'spinner-demo',
    name: 'Spinner Demo',
    componentType: Examples.SpinnerDemo
  },
  {
    id: 'split-demo',
    name: 'Split Demo',
    componentType: Examples.SplitDemo
  },
  {
    id: 'stack-demo',
    name: 'Stack Demo',
    componentType: Examples.StackDemo
  },
  {
    id: 'stack-blue-demo',
    name: 'Stack Chart Blue Demo',
    componentType: Examples.StackBlueDemo
  },
  {
    id: 'stack-gold-bottom-legend-demo',
    name: 'Stack Chart Gold with Bottom Legend Demo',
    componentType: Examples.StackGoldBottomLegendDemo
  },
  {
    id: 'stack-color-zoom-demo',
    name: 'Stack Chart Color Demo',
    componentType: Examples.StackColorZoomDemo
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
    id: 'table-actions-demo',
    name: 'Table Actions Demo',
    componentType: Examples.TableActionsDemo
  },
  {
    id: 'table-breakpoint-modifers-demo',
    name: 'Table Breakpoint Modifers Demo',
    componentType: Examples.TableBreakpointModifersDemo
  },
  {
    id: 'table-collapsible-demo',
    name: 'Table Collapsible Demo',
    componentType: Examples.TableCollapsibleDemo
  },
  {
    id: 'table-compact-borderless-rows-demo',
    name: 'Table Compact Borderless Rows Demo',
    componentType: Examples.TableCompactBorderlessRowsDemo
  },
  {
    id: 'table-compact-demo',
    name: 'Table Compact Demo',
    componentType: Examples.TableCompactDemo
  },
  {
    id: 'table-compact-expandable-demo',
    name: 'Table Compact Expandable Demo',
    componentType: Examples.TableCompactExpandableDemo
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
    id: 'table-first-cell-as-header-demo',
    name: 'Table First Cell As Header Demo',
    componentType: Examples.TableFirstCellAsHeaderDemo
  },
  {
    id: 'table-headers-wrappable-demo',
    name: 'Table Headers Wrappable Demo',
    componentType: Examples.TableHeadersWrappableDemo
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
    id: 'table-width-modifiers-demo',
    name: 'Table Width Modifers Demo',
    componentType: Examples.TableWidthModifiersDemo
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
    id: 'text-demo',
    name: 'Text Demo',
    componentType: Examples.TextDemo
  },
  {
    id: 'text-input-demo',
    name: 'Text Input Demo',
    componentType: Examples.TextInputDemo
  },
  {
    id: 'title-demo',
    name: 'Title Demo',
    componentType: Examples.TitleDemo
  },
  {
    id: 'toolbar-demo',
    name: 'Toolbar Demo',
    componentType: Examples.ToolbarDemo
  },
  {
    id: 'tooltip-demo',
    name: 'Tooltip Demo',
    componentType: Examples.TooltipDemo
  },
  {
    id: 'wizard-demo',
    name: 'Wizard Demo',
    componentType: Examples.WizardDemo
  }
];

export default Demos;
