import { ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ToggleGroup/toggle-group';

export enum ToggleGroupItemVariant {
  icon = 'icon',
  text = 'text'
}

export interface ToggleGroupItemElementProps {
  /** Content rendered inside the toggle group item */
  children?: ReactNode;
  /** Adds toggle group item variant styles */
  variant?: ToggleGroupItemVariant | 'icon' | 'text';
}

export const ToggleGroupItemElement: FunctionComponent<ToggleGroupItemElementProps> = ({ variant, children }) => (
  <span className={css(variant === 'icon' && styles.toggleGroupIcon, variant === 'text' && styles.toggleGroupText)}>
    {children}
  </span>
);
ToggleGroupItemElement.displayName = 'ToggleGroupItemElement';
