import * as React from 'react';

export interface TabButtonProps extends React.HTMLProps<HTMLAnchorElement | HTMLButtonElement> {
  /** content rendered inside the Tab content area. */
  children?: React.ReactNode;
  /** additional classes added to the Tab */
  className?: string;
  /** URL associated with the Tab. A Tab with an href will render as an <a> instead of a <button>. A Tab inside a <Tabs variant="nav"> should have an href. */
  href?: string;
  /** child reference for case in which a TabContent section is defined outside of a Tabs component */
  tabContentRef?: React.RefObject<any>;
}

const TabButtonWithRef: React.FunctionComponent<TabButtonProps> = ({
  children,
  className = '',
  tabContentRef,
  ...props
}: TabButtonProps) => {
  const Component = (props.href ? 'a' : 'button') as any;
  return (
    <Component {...props} className={className} ref={tabContentRef}>
      {children}
    </Component>
  );
};

interface ForwardedRefProps extends TabButtonProps {
  forwardRef?: React.Ref<any>;
}

const withForwardedRef = (Component: any) => {
  class TabContainer extends React.Component<ForwardedRefProps> {
    render() {
      const { forwardRef, ...rest } = this.props;
      return <Component ref={forwardRef} {...rest} />;
    }
  }
  return React.forwardRef((props: any, tabContentRef) => <TabContainer {...props} forwardRef={tabContentRef} />);
};

export const TabButton = withForwardedRef(TabButtonWithRef);
