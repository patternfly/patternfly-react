import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Popover/popover';

export interface PopoverHeaderTextProps extends React.HTMLProps<HTMLDivElement> {
  /** Content of the header text */
  children: React.ReactNode;
  /** Class to be applied to the header text */
  className?: string;
  /** Heading level of the header title */
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Id of the header */
  id?: string;
}

export const PopoverHeaderText: React.FunctionComponent<PopoverHeaderTextProps> = ({
  children,
  className,
  headingLevel,
  id,
  ...props
}: PopoverHeaderTextProps) => {
  const HeadingLevel = headingLevel;

  return (
  <HeadingLevel className={css(styles.popoverTitleText, className)} id={id} {...props}>
    {children}
  </HeadingLevel>);
};
PopoverHeaderText.displayName = 'PopoverHeaderText';
