import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css, getModifier } from '@patternfly/react-styles';

import { RefObject } from 'react';

export interface DataToolbarExpandableContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Classes added to the root element of the Data toolbar expandable content */
  className?: string;
  /** Flag indicating the expandable content is expanded */
  isExpanded?: boolean;
  /** Expandable content reference for passing to Data toolbar children */
  expandableContentRef?: RefObject<HTMLDivElement>;
}

export const DataToolbarExpandableContent: React.FunctionComponent<DataToolbarExpandableContentProps> = ({
    className,
    isExpanded = false,
    expandableContentRef,
    ...props
  }: DataToolbarExpandableContentProps) => {

  return (
    <div
      className={css(
        styles.dataToolbarExpandableContent,
        isExpanded && getModifier(styles, 'expanded'),
        className)}
      ref={expandableContentRef}
      {...props}
    />
  );
};
