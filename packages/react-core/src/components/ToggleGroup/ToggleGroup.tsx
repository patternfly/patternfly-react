import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ToggleGroup/toggle-group';
import ToggleGroupContext from './ToggleGroupContext';
import { Divider } from '../Divider';

export enum ToggleGroupVariant {
  default = 'default',
  light = 'light'
}

export interface ToggleGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the toggle group */
  children?: React.ReactNode;
  /** Additional classes added to the toggle group */
  className?: string;
  /** Adds toggle group variant styles */
  variant?: ToggleGroupVariant | 'light' | 'default';
  /** Accessible label for the toggle group */
  'aria-label'?: string;
}

export const ToggleGroup: React.FunctionComponent<ToggleGroupProps> = ({
  className,
  children,
  variant = ToggleGroupVariant.default,
  'aria-label': ariaLabel,
  ...props
}: ToggleGroupProps) => {
  const toggleGroupItemList = [] as any[];
  const length = React.Children.count(children);
  React.Children.forEach(children, (child, index) => {
    toggleGroupItemList.push(child);
    const dividerKey = `${index} divider`;
    if (index !== length - 1) {
      toggleGroupItemList.push(<Divider key={dividerKey} isVertical component="div" />);
    }
  });

  return (
    <ToggleGroupContext.Provider value={{ variant }}>
      <div className={css(styles.toggleGroup, className)} role="group" aria-label={ariaLabel} {...props}>
        {toggleGroupItemList}
      </div>
    </ToggleGroupContext.Provider>
  );
};
ToggleGroup.displayName = 'ToggleGroup';
