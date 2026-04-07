import { forwardRef } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

export interface TheadProps extends React.HTMLProps<HTMLTableSectionElement> {
  /** Content rendered inside the <thead> row group */
  children?: React.ReactNode;
  /** Additional classes added to the <thead> element */
  className?: string;
  /** Won't wrap the table head if true */
  noWrap?: boolean;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
  /** Indicates the <thead> contains a nested header */
  hasNestedHeader?: boolean;
  /**
   * When true, applies the placeholder `PINNED` class for styling while the sticky header is scrolled
   * within its scroll container. Drive this from app logic or a hook (see table examples).
   */
  isPinned?: boolean;
}

const TheadBase: React.FunctionComponent<TheadProps> = ({
  children,
  className,
  noWrap = false,
  innerRef,
  hasNestedHeader,
  isPinned,
  ...props
}: TheadProps) => (
  <thead
    className={css(
      styles.tableThead,
      className,
      noWrap && styles.modifiers.nowrap,
      hasNestedHeader && styles.modifiers.nestedColumnHeader,
      isPinned && 'PINNED'
    )}
    ref={innerRef}
    {...props}
  >
    {children}
  </thead>
);

export const Thead = forwardRef((props: TheadProps, ref: React.Ref<HTMLTableSectionElement>) => (
  <TheadBase {...props} innerRef={ref} />
));
Thead.displayName = 'Thead';
