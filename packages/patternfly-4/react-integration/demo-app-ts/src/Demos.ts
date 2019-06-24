import * as Examples from './components/demos';

interface DemoInterface {
  /** ID for the demo, it will be used to help generate general ids to help with testing */
  id: string,
  /** The name of the demo */
  name: string,
  /** Demo component associated with the demo  */
  componentType: any
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
    id: 'application-launcher-demo',
    name: 'Application Launcher Demo',
    componentType: Examples.ApplicationLauncherDemo
  },
  {
    id: 'area-chart-custom-colors-demo',
    name: 'Area Chart Custom Colors Demo',
    componentType: Examples.CustomColorsDemo
  },
  {
    id: 'area-chart-simple-demo',
    name: 'Area Chart Simple Demo',
    componentType: Examples.SimpleAreaDemo
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
    id: 'blue-bar-grouped-demo',
    name: 'Bar Chart Grouped Blue Demo',
    componentType: Examples.BlueBarGroupedDemo
  },
  {
    id: 'color-bar-zoom-demo',
    name: 'Bar Chart Multi-colored with Zoom Demo',
    componentType: Examples.ColorBarZoomDemo
  },
  {
    id: 'color-bar-zoom-no-axes-demo',
    name: 'Bar Chart Multi-colored with Zoom; No X, Y axis Demo',
    componentType: Examples.ColorBarZoomNoAxesDemo
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
    componentType: Examples.BadgeChip
  },
  {
    id: 'clipboard-copy-demo',
    name: 'ClipboardCopy Demo',
    componentType: Examples.ClipboardCopyDemo
  },
  {
    id: 'context-selector-demo',
    name: 'ContextSelector Demo',
    componentType: Examples.ContextSelectorDemo
  },
  {
    id: 'donut-chart-blue-demo',
    name: 'Donut Chart Blue Demo',
    componentType: Examples.BlueDonutDemo
  },
  {
    id: 'donut-chart-color-demo',
    name: 'Donut Chart Color Demo',
    componentType: Examples.ColorDonutDemo
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
    id: 'data-list-demo',
    name: 'Data List Demo',
    componentType: Examples.DataListDemo
  },
  {
    id: 'empty-state-demo',
    name: 'Empty State Demo',
    componentType: Examples.EmptyStateDemo
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
    id: 'line-chart-color-demo',
    name: 'Line Chart Multi-color Demo',
    componentType: Examples.LineChartColorDemo
  },
  {
    id: 'line-chart-green-zoom-demo',
    name: 'Line Chart Green with Zoom Demo',
    componentType: Examples.LineChartGreenZoomDemo
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
    id: 'options-menu-demo',
    name: 'Options Menu Demo',
    componentType: Examples.OptionsMenuDemo
  },
  {
    id: 'page-demo',
    name: 'Page Demo',
    componentType: Examples.PageDemo
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
    id: 'progress-demo',
    name: 'Progress Demo',
    componentType: Examples.ProgressDemo
  },
  {
    id: 'stack-horizontal-blue-demo',
    name: 'Stack Chart Horizontal Blue Demo',
    componentType: Examples.StackHorizontalBlueDemo
  },
  {
    id: 'stack-vertical-blue-demo',
    name: 'Stack Chart Vertical Blue Demo',
    componentType: Examples.StackVerticalBlueDemo
  },
  {
    id: 'stack-vertical-color-zoom-demo',
    name: 'Stack Chart Vertical Color with Zoom Demo',
    componentType: Examples.StackVerticalColorZoomDemo
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
