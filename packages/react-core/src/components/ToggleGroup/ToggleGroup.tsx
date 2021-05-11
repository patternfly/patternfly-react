import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ToggleGroup/toggle-group';

export interface ToggleGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the toggle group */
  children?: React.ReactNode;
  /** Additional classes added to the toggle group */
  className?: string;
  /** Modifies the toggle group to include compact styling. */
  isCompact?: boolean;
  /** Accessible label for the toggle group */
  'aria-label'?: string;
}

export const ToggleGroup: React.FunctionComponent<ToggleGroupProps> = ({
  className,
  children,
  isCompact = false,
  'aria-label': ariaLabel,
  ...props
}: ToggleGroupProps) => {
  const toggleGroupItemList = [] as any[];
  React.Children.forEach(children, child => {
    toggleGroupItemList.push(child);
  });

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
