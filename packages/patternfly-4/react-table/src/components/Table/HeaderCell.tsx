import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

export interface HeaderCellProps {
  'data-label'?: string;
  className?: string;
  component?: React.ReactNode;
  isVisible?: boolean;
  scope?: string;
  textCenter?: boolean;
}

export const HeaderCell: React.FunctionComponent<HeaderCellProps> = ({
  className = '',
  component = 'th',
  isVisible,
  scope = '',
  textCenter = false,
  ...props
} : HeaderCellProps ) => {
  const Component = component as any;
  const mappedProps = {
    ...(scope ? { scope } : {}),
    ...props
  };
  return <Component {...mappedProps} className={css(className, textCenter && styles.modifiers.center)} />;
};