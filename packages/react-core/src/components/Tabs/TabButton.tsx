import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import { css } from '@patternfly/react-styles';

export interface TabButtonProps extends Omit<React.HTMLProps<HTMLAnchorElement | HTMLButtonElement>, 'ref'> {
  /** content rendered inside the Tab content area. */
  children?: React.ReactNode;
  /** additional classes added to the Tab */
  className?: string;
  /** URL associated with the Tab. A Tab with an href will render as an <a> instead of a <button>. A Tab inside a <Tabs variant="nav"> should have an href. */
  href?: string;
  /** child reference for case in which a TabContent section is defined outside of a Tabs component */
  tabContentRef?: React.Ref<any>;
}

const TabButtonBase: React.FunctionComponent<TabButtonProps> = ({
  children,
  className = '',
  tabContentRef,
  ...props
}: TabButtonProps) => {
  const Component = (props.href ? 'a' : 'button') as any;
  return (
    <Component {...props} className={css(styles.tabsLink, className)} ref={tabContentRef}>
      {children}
    </Component>
  );
};

export const TabButton = React.forwardRef(
  (props: TabButtonProps, ref: React.Ref<HTMLAnchorElement | HTMLButtonElement>) => (
    <TabButtonBase {...props} tabContentRef={ref} />
  )
);

// export const TabButton = withForwardedRef(TabButtonWithRef);
