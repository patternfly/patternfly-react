import * as React from 'react';
import { DropdownToggleProps } from './DropdownToggle';
import { EllipsisVIcon } from '@patternfly/react-icons';
import { Toggle } from './Toggle';

export interface KebabToggleProps extends DropdownToggleProps {
  /** HTML ID of dropdown toggle */
  id?: string;
  /** Anything which can be rendered as dropdown toggle */
  children?: React.ReactNode;
  /** Classess applied to root element of dropdown toggle */
  className?: string;
  /** Flag to indicate if menu is opened */
  isOpen?: boolean;
  /** Label Toggle button */
  'aria-label'?: string;
  /** Callback called when toggle is clicked */
  onToggle?: (isOpen: boolean) => void;
  /** Element which wraps toggle */
  parentRef?: any;
  /** Forces focus state */
  isFocused?: boolean;
  /** Forces hover state */
  isHovered?: boolean;
  /** Forces active state */
  isActive?: boolean;
  /** Disables the dropdown toggle */
  isDisabled?: boolean;
  /** Display the toggle with no border or background */
  isPlain?: boolean;
  /** Type to put on the button */
  type?: 'button' | 'submit' | 'reset';
}

export const KebabToggle: React.FunctionComponent<KebabToggleProps> = ({
  id = '',
  children = null,
  className = '',
  isOpen = false,
  'aria-label' : ariaLabel = 'Actions',
  parentRef = null,
  isFocused = false,
  isHovered = false,
  isActive = false,
  isPlain = false,
  isDisabled = false,
  onToggle = () => undefined as void,
  ref, // Types of Ref are different for React.FC vs React.Component
  ...props
}: KebabToggleProps) => (
  <Toggle
    id={id}
    className={className}
    isOpen={isOpen}
    aria-label={ariaLabel}
    parentRef={parentRef}
    isFocused={isFocused}
    isHovered={isHovered}
    isActive={isActive}
    isPlain={isPlain}
    isDisabled={isDisabled}
    onToggle={onToggle}
    {...props}>
    <EllipsisVIcon />
  </Toggle>
);
