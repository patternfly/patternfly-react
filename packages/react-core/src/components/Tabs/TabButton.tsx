import { getOUIAProps, OUIAProps } from '../../helpers';

export interface TabButtonProps extends Omit<React.HTMLProps<HTMLAnchorElement | HTMLButtonElement>, 'ref'>, OUIAProps {
  /** content rendered inside the Tab content area. */
  children?: React.ReactNode;
  /** additional classes added to the Tab */
  className?: string;
  /** URL associated with the Tab. A Tab with an href will render as an <a> instead of a <button> unless component is supplied. */
  href?: string;
  /** Sets the element or custom component used for the tab's button or link. Defaults to an anchor when href is supplied, otherwise a button. For custom components that render a button, pass type="button" or set it inside the component to prevent form submission. */
  component?: React.ElementType<any> | React.ComponentType<any>;
  /** child reference for case in which a TabContent section is defined outside of a Tabs component */
  tabContentRef?: React.Ref<any>;
  /** Parents' innerRef passed down for properly displaying Tooltips */
  parentInnerRef?: React.Ref<any>;
}

export const TabButton: React.FunctionComponent<TabButtonProps> = ({
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  tabContentRef,
  ouiaId,
  parentInnerRef,
  ouiaSafe,
  component,
  ...props
}: TabButtonProps) => {
  const Component = (component || (props.href ? 'a' : 'button')) as any;

  return (
    <Component
      {...(Component === 'button' && { type: 'button' })}
      ref={parentInnerRef}
      {...getOUIAProps(TabButton.displayName, ouiaId, ouiaSafe)}
      {...props}
    >
      {children}
    </Component>
  );
};
TabButton.displayName = 'TabButton';
