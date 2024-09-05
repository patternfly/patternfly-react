import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/ExpandableSection/expandable-section';
import { css } from '@patternfly/react-styles';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import { Button } from '../Button';

/** Acts as the toggle sub-component when the main expandable section component has the isDetached
 * property passed in. Allows for more custom control over the expandable section's toggle.
 */

export interface ExpandableSectionToggleProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the expandable toggle. */
  children?: React.ReactNode;
  /** Additional classes added to the expandable toggle. */
  className?: string;
  /** Id of the toggle's respective expandable section content. The value passed into this
   * property should match the contentId property of the main expandable section component.
   */
  contentId?: string;
  /** Id of the toggle. The value passed into this property should match the aria-labelledby
   * property of the main expandable section component.
   */
  toggleId?: string;
  /** Direction the toggle arrow should point when the expandable section is expanded. */
  direction?: 'up' | 'down';
  /** Flag to determine toggle styling when the expandable content is truncated. */
  hasTruncatedContent?: boolean;
  /** Flag indicating if the expandable section is expanded. */
  isExpanded?: boolean;
  /** Callback function to toggle the expandable content. */
  onToggle?: (isExpanded: boolean) => void;
}

export const ExpandableSectionToggle: React.FunctionComponent<ExpandableSectionToggleProps> = ({
  children,
  className = '',
  isExpanded = false,
  onToggle,
  contentId,
  toggleId,
  direction = 'down',
  hasTruncatedContent = false,
  ...props
}: ExpandableSectionToggleProps) => (
  <div
    className={css(
      styles.expandableSection,
      isExpanded && styles.modifiers.expanded,
      hasTruncatedContent && styles.modifiers.truncate,
      className
    )}
    {...props}
  >
    <div className={`${styles.expandableSection}__toggle`}>
      <Button
        variant="link"
        {...(hasTruncatedContent && { isInline: true })}
        aria-expanded={isExpanded}
        aria-controls={contentId}
        onClick={() => onToggle(!isExpanded)}
        id={toggleId}
        {...(!hasTruncatedContent && {
          icon: (
            <span
              className={css(
                styles.expandableSectionToggleIcon,
                isExpanded && direction === 'up' && styles.modifiers.expandTop
              )}
            >
              <AngleRightIcon aria-hidden />
            </span>
          )
        })}
      >
        {children}
      </Button>
    </div>
  </div>
);

ExpandableSectionToggle.displayName = 'ExpandableSectionToggle';
