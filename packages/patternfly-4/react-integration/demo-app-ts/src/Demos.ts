import * as Examples from './components/demos';

interface DemoInterface {
  /** ID for the demo, it will be used to help generate general ids to help with testing */
  id: string,
  /** The name of the demo */
  name: string
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
    id: 'alert-demo',
    name: 'Alert Demo',
    componentType: Examples.AlertDemo
  },
  {
    id: 'avatar-demo',
    name: 'Avatar Demo',
    componentType: Examples.AvatarDemo
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
    id: 'chipgroup-demo', 
    name: 'ChipGroup Demo',
    componentType: Examples.BadgeChip 
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
    id: 'label-demo',
    name: 'Label Demo',
    componentType: Examples.LabelDemo
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
    id: 'popover-demo',
    name: 'Popover Demo',
    componentType: Examples.PopoverDemo
  },
  {
    id: 'radio-demo',
    name: 'Radio Demo',
    componentType: Examples.RadioDemo
  },
  {
    id: 'tab-demo',
    name: 'Tab Demo',
    componentType: Examples.TabDemo
  },
  {
    id: 'text-demo',
    name: 'Text Demo',
    componentType: Examples.TextDemo
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
