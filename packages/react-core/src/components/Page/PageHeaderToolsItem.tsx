import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';

export interface PageHeaderToolsItemProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered in page header tools item */
  children: React.ReactNode;
  /** Makes the group only visible for desktop sizes (>= lg breakpoint) */
  visibleOnLg?: boolean;
  /** Hides the group for desktop sizes (< lg breakpoint) */
  hiddenOnLg?: boolean;
  /** Hides the group for mobile sizes (< md breakpoint). Typically used on a user dropdown */
  hiddenOnSm?: boolean;
  /** Can apply the selected modifier to a button */
  isSelected?: boolean;
}

/**
 * This component wraps the child and applies styling such as selected on the thing passed in, example:
 * 
 * <PageHeaderToolsItem isSelected><Button isPlain>Hello</Button></PageHeaderToolsItem>
 * will render
 * <button class="pf-m-plain pf-m-selected">Hello</button>
 */
export const PageHeaderToolsItem: React.FunctionComponent<PageHeaderToolsItemProps> = ({
  children,
  visibleOnLg,
  hiddenOnLg,
  hiddenOnSm,
  isSelected
}: PageHeaderToolsItemProps) => (
  <React.Fragment>
    {React.Children.map(children, c => {
      const child = c as React.ReactElement<any>;
      return React.cloneElement(child, {
        className: css(
          child.props.className,
          hiddenOnLg && styles.modifiers.mobile,
          visibleOnLg && styles.modifiers.icons,
          hiddenOnSm && styles.modifiers.user,
          isSelected && styles.modifiers.selected
        )
      });
    })}
  </React.Fragment>
);
