import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ActionList/action-list';

export interface ActionListProps extends React.HTMLProps<HTMLDivElement> {
  /** Children of the action list */
  children?: React.ReactNode;
  /** Flag indicating the action list contains multiple icons and item padding should be removed */
  isIconList?: boolean;
  /** Additional classes added to the action list */
  className?: string;
  /** @beta Whether the layout of children is vertical or horizontal. */
  isVertical?: boolean;
}

export const ActionList: React.FunctionComponent<ActionListProps> = ({
  children,
  isIconList,
  className,
  isVertical = false,
  ...props
}: ActionListProps) => (
  <div
    className={css(
      styles.actionList,
      isIconList && styles.modifiers.icons,
      isVertical && styles.modifiers.vertical,
      className
    )}
    {...props}
  >
    {children}
  </div>
);
ActionList.displayName = 'ActionList';
