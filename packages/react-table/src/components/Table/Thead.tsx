import { forwardRef, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { TableContext } from './Table';

/** Ratio must be below this to count as “pinned” (avoids doc-layout subpixel + strict threshold: [1] never hitting exactly 1). */
const PINNED_INTERSECTION_RATIO = 0.999;

const getOverflowScrollParent = (node: HTMLElement): Element | null => {
  let parent = node.parentElement;
  while (parent) {
    const style = getComputedStyle(parent);
    if (/(auto|scroll|overlay)/.test(style.overflowY) || /(auto|scroll|overlay)/.test(style.overflowX)) {
      return parent;
    }
    parent = parent.parentElement;
  }
  return null;
};

const assignRef = <T,>(ref: React.Ref<T> | undefined, value: T | null) => {
  if (!ref) {
    return;
  }
  if (typeof ref === 'function') {
    ref(value);
  } else {
    (ref as React.MutableRefObject<T | null>).current = value;
  }
};

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
}

const TheadBase: React.FunctionComponent<TheadProps> = ({
  children,
  className,
  noWrap = false,
  innerRef,
  hasNestedHeader,
  ...props
}: TheadProps) => {
  const { isStickyHeader } = useContext(TableContext);
  const observeStickyPin = !!isStickyHeader;
  const [isPinned, setIsPinned] = useState(false);
  const theadElRef = useRef<HTMLTableSectionElement | null>(null);

  const setTheadRef = useCallback(
    (node: HTMLTableSectionElement | null) => {
      theadElRef.current = node;
      assignRef(innerRef, node);
    },
    [innerRef]
  );

  useEffect(() => {
    if (!observeStickyPin || typeof IntersectionObserver === 'undefined') {
      setIsPinned(false);
      return;
    }

    const el = theadElRef.current;
    if (!el) {
      return;
    }

    const scrollRoot = getOverflowScrollParent(el);

    // Requires sticky thead `inset-block-start: -1px` in CSS (see table.css).
    const observer = new IntersectionObserver(
      ([entry]) => {
        // console.log(scrollRoot, entry, entry.intersectionRatio);
        setIsPinned(entry.intersectionRatio < PINNED_INTERSECTION_RATIO);
      },
      { threshold: [0, 1], root: scrollRoot }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [observeStickyPin]);

  return (
    <thead
      className={css(
        styles.tableThead,
        className,
        noWrap && styles.modifiers.nowrap,
        hasNestedHeader && styles.modifiers.nestedColumnHeader,
        observeStickyPin && isPinned && 'PINNED'
      )}
      ref={setTheadRef}
      {...props}
    >
      {children}
    </thead>
  );
};

export const Thead = forwardRef((props: TheadProps, ref: React.Ref<HTMLTableSectionElement>) => (
  <TheadBase {...props} innerRef={ref} />
));
Thead.displayName = 'Thead';
