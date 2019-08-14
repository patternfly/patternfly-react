import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

export interface BodyCellProps {
  'data-label'?: string;
  className?: string;
  colSpan?: number;
  component?: React.ReactNode;
  isVisible?: boolean;
  parentId?: number;
  textCenter?: boolean;
  isOpen?: boolean;
  ariaControls?: string;
}

export const BodyCell: React.FunctionComponent<BodyCellProps> = ({
  'data-label':dataLabel = '',
  className = '',
  colSpan,
  component = 'td',
  isVisible,
  parentId,
  textCenter = false,
  isOpen,
  ariaControls = '',
  ...props
} : BodyCellProps ) => {
  const Component = component as any;
  const mappedProps = {
    ...(dataLabel ? { 'data-label': dataLabel } : {}),
    ...props
  };
  return (parentId !== undefined && colSpan === undefined) || !isVisible ? null : (
    <Component {...mappedProps} className={css(className, textCenter && styles.modifiers.center)} colSpan={colSpan} />
  );
};