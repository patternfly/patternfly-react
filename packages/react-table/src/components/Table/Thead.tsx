import { HTMLProps, ReactNode, Ref, FunctionComponent, forwardRef } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

export interface TheadProps extends HTMLProps<HTMLTableSectionElement> {
  /** Content rendered inside the <thead> row group */
  children?: ReactNode;
  /** Additional classes added to the <thead> element */
  className?: string;
  /** Won't wrap the table head if true */
  noWrap?: boolean;
  /** @hide Forwarded ref */
  innerRef?: Ref<any>;
  /** Indicates the <thead> contains a nested header */
  hasNestedHeader?: boolean;
}

const TheadBase: FunctionComponent<TheadProps> = ({
  children,
  className,
  noWrap = false,
  innerRef,
  hasNestedHeader,
  ...props
}: TheadProps) => (
  <thead
    className={css(
      styles.tableThead,
      className,
      noWrap && styles.modifiers.nowrap,
      hasNestedHeader && styles.modifiers.nestedColumnHeader
    )}
    ref={innerRef}
    {...props}
  >
    {children}
  </thead>
);

export const Thead = forwardRef((props: TheadProps, ref: Ref<HTMLTableSectionElement>) => (
  <TheadBase {...props} innerRef={ref} />
));
Thead.displayName = 'Thead';
