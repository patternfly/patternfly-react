import { Children, cloneElement, isValidElement } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ToggleGroup/toggle-group';
import { ToggleGroupItem, ToggleGroupItemProps } from './ToggleGroupItem';

export interface ToggleGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the toggle group */
  children?: React.ReactNode;
  /** Additional classes added to the toggle group */
  className?: string;
  /** Modifies the toggle group to include compact styling. */
  isCompact?: boolean;
  /** Disable all toggle group items under this component. */
  areAllGroupsDisabled?: boolean;
  /** Accessible label for the toggle group */
  'aria-label'?: string;
}

export const ToggleGroup: React.FunctionComponent<ToggleGroupProps> = ({
  className,
  children,
  isCompact = false,
  areAllGroupsDisabled = false,
  'aria-label': ariaLabel,
  ...props
}: ToggleGroupProps) => {
  const toggleGroupItemList = Children.map(children, (child) =>
    !(isValidElement(child) && child.type === ToggleGroupItem)
      ? child
      : cloneElement<ToggleGroupItemProps>(child, areAllGroupsDisabled ? { isDisabled: true } : {})
  );

  return (
    <div
      className={css(styles.toggleGroup, isCompact && styles.modifiers.compact, className)}
      role="group"
      aria-label={ariaLabel}
      {...props}
    >
      {toggleGroupItemList}
    </div>
  );
};
ToggleGroup.displayName = 'ToggleGroup';
