import {
  type HTMLProps,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
  type Ref,
  type FunctionComponent,
  forwardRef
} from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import { Button } from '../Button';
import { getOUIAProps, OUIAProps } from '../../helpers';

export interface TabActionProps extends Omit<HTMLProps<HTMLButtonElement>, 'ref' | 'type' | 'size'>, OUIAProps {
  /** Content rendered in the tab action */
  children?: ReactNode;
  /** Additional classes added to the tab action span */
  className?: string;
  /** Click callback for tab action button */
  onClick?: (event: ReactMouseEvent<HTMLElement, MouseEvent>) => void;
  /** Flag indicating if the tab action is disabled */
  isDisabled?: boolean;
  /** Accessible label for the tab action */
  'aria-label'?: string;
  /** @hide Callback for the section ref */
  innerRef?: Ref<any>;
}

const TabActionBase: FunctionComponent<TabActionProps> = ({
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

export const TabAction = forwardRef((props: TabActionProps, ref: Ref<HTMLElement>) => (
  <TabActionBase {...props} innerRef={ref} />
));

TabAction.displayName = 'TabAction';
