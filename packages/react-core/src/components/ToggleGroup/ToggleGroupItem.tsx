import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ToggleGroup/toggle-group';
import ToggleGroupContext from './ToggleGroupContext';

export enum ToggleGroupItemVariant {
  icon = 'icon',
  text = 'text'
}

export interface ToggleGroupItemProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange'> {
  /** Content rendered inside the toggle group item */
  children?: React.ReactNode;
  /** Additional classes added to the toggle group item */
  className?: string;
  /** Adds toggle group item variant styles */
  variant?: ToggleGroupItemVariant | 'icon' | 'text';
  /** Flag indicating if the toggle group item is disabled */
  isDisabled?: boolean;
  /** Flag indicating if the toggle group item is selected */
  selected?: boolean;
  /** required when icon is used with no supporting text */
  'aria-label'?: string;
  /** Optional id for the button within the toggle group item */
  buttonId?: string;
  /** A callback for when the toggle group item selection changes. */
  onChange?: (selected: boolean, event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent) => void;
}

export const ToggleGroupItem: React.FunctionComponent<ToggleGroupItemProps> = ({
  children,
  className,
  variant = 'text',
  isDisabled = false,
  selected = false,
  'aria-label': ariaLabel = '',
  onChange = () => {},
  buttonId = '',
  ...props
}: ToggleGroupItemProps) => {
  const toggleGroupContext = React.useContext(ToggleGroupContext);

  const handleChange = (event: any): void => {
    onChange(!selected, event);
  };

  if (!ariaLabel && variant === ToggleGroupItemVariant.icon) {
    /* eslint-disable no-console */
    console.warn('An accessible aria-label is required when using the toggle group item icon variant.');
  }

  return (
    <div className={css(styles.toggleGroupItem, className)} {...props}>
      <button
        className={css(
          styles.toggleGroupButton,
          toggleGroupContext.variant === 'light' && styles.modifiers.light,
          selected && styles.modifiers.selected
        )}
        {...(selected && { 'aria-pressed': selected })}
        onClick={handleChange}
        {...(ariaLabel && { 'aria-label': ariaLabel })}
        {...(isDisabled && { disabled: true })}
        {...(buttonId && { id: buttonId })}
      >
        <span
          className={css(variant === 'icon' && styles.toggleGroupIcon, variant === 'text' && styles.toggleGroupText)}
        >
          {children}
        </span>
      </button>
    </div>
  );
};
ToggleGroupItem.displayName = 'ToggleGroupItem';
