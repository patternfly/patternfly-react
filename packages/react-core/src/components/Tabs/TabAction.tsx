import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import { Button } from '../Button';
import { getOUIAProps, OUIAProps } from '../../helpers';

export interface TabActionProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'ref' | 'type'>, OUIAProps {
  /** Content rendered in the tab action */
  children?: React.ReactNode;
  /** Additional classes added to the tab action span */
  className?: string;
  /** Click callback for tab action button */
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /** Flag indicating if the tab action is disabled */
  isDisabled?: boolean;
  /** Accessible label for the tab action */
  'aria-label'?: string;
  /** @hide Callback for the section ref */
  innerRef?: React.Ref<any>;
}

const TabActionBase: React.FunctionComponent<TabActionProps> = ({
  children,
  className,
  onClick,
  isDisabled,
  'aria-label': ariaLabel = 'Tab action',
  innerRef,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ouiaId,
  ouiaSafe,
  ...props
}: TabActionProps) => (
  <span className={css(styles.tabsItemAction, className)}>
    <Button
      ref={innerRef}
      type="button"
      variant="plain"
      aria-label={ariaLabel}
      onClick={onClick}
      isDisabled={isDisabled}
      {...getOUIAProps(TabAction.displayName, ouiaId, ouiaSafe)}
      {...props}
    >
      <span className={css(styles.tabsItemActionIcon)}>{children}</span>
    </Button>
  </span>
);

export const TabAction = React.forwardRef((props: TabActionProps, ref: React.Ref<HTMLElement>) => (
  <TabActionBase {...props} innerRef={ref} />
));

TabAction.displayName = 'TabAction';
