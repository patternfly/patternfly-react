import { HTMLProps, ReactNode, Ref, FunctionComponent } from 'react';
import { getOUIAProps, OUIAProps } from '../../helpers';

export interface TabButtonProps extends Omit<HTMLProps<HTMLAnchorElement | HTMLButtonElement>, 'ref'>, OUIAProps {
  /** content rendered inside the Tab content area. */
  children?: ReactNode;
  /** additional classes added to the Tab */
  className?: string;
  /** URL associated with the Tab. A Tab with an href will render as an <a> instead of a <button>. A Tab inside a <Tabs component="nav"> should have an href. */
  href?: string;
  /** child reference for case in which a TabContent section is defined outside of a Tabs component */
  tabContentRef?: Ref<any>;
  /** Parents' innerRef passed down for properly displaying Tooltips */
  parentInnerRef?: Ref<any>;
}

export const TabButton: FunctionComponent<TabButtonProps> = ({
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  tabContentRef,
  ouiaId,
  parentInnerRef,
  ouiaSafe,
  ...props
}: TabButtonProps) => {
  const Component = (props.href ? 'a' : 'button') as any;

  return (
    <Component
      {...(!props.href && { type: 'button' })}
      ref={parentInnerRef}
      {...getOUIAProps(TabButton.displayName, ouiaId, ouiaSafe)}
      {...props}
    >
      {children}
    </Component>
  );
};
TabButton.displayName = 'TabButton';
