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
    id: 'label-demo', 
    name: 'Label Demo', 
    componentType: Examples.LabelDemo
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
