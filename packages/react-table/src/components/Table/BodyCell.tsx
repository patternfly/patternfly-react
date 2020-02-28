import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

export interface BodyCellProps {
  'data-label'?: string;
  className?: string;
  colSpan?: number;
  component?: React.ReactNode;
  errorText?: string;
  isVisible?: boolean;
  parentId?: number;
  textCenter?: boolean;
  isOpen?: boolean;
  ariaControls?: string;
  editableValue?: any;
  value?: any;
  isValid?: boolean;
  name?: string;
}

export const BodyCell: React.FunctionComponent<BodyCellProps> = ({
  'data-label': dataLabel = '',
  className = '',
  colSpan,
  component = 'td',
  isVisible,
  parentId,
  textCenter = false,
  /* eslint-disable @typescript-eslint/no-unused-vars */
  errorText,
  isValid,
  isOpen,
  ariaControls,
  editableValue,
  value,
  name,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  ...props
}: BodyCellProps) => {
  const Component = component as any;
  const mappedProps = {
    ...(dataLabel ? { 'data-label': dataLabel } : {}),
    ...props
  };
  return (parentId !== undefined && colSpan === undefined) || !isVisible ? null : (
    <Component {...mappedProps} className={css(className, textCenter && styles.modifiers.center)} colSpan={colSpan} />
  );
};
