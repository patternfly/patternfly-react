import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import stylesTreeView from '@patternfly/react-styles/css/components/Table/table-tree-view';
import { RowWrapperProps } from './RowWrapper';
import { Tr } from '../TableComposable';
import { TableFocusContext } from './TableContext';

export const TreeRowWrapper: React.FunctionComponent<RowWrapperProps> = ({
  className,
  rowProps,
  row,
  ...props
}: RowWrapperProps) => {
  const {
    'aria-level': level,
    'aria-posinset': posinset,
    'aria-setsize': setsize,
    isExpanded,
    isDetailsExpanded,
    isHidden
  } = row.props;
  const ref = React.useRef<HTMLTableRowElement>();
  const isInitialMount = React.useRef(true);
  const focusContext = React.useContext(TableFocusContext);

  React.useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      console.log("should move up or down a row");
      if (ref && ref.current && focusContext.focusableRowIndex === rowProps.rowIndex) {
        ref.current.focus();
      }
    }
  }, [focusContext.focusableRowIndex]);

  React.useEffect(() => {
    if (ref && ref.current) {
      const focusableElements = ref.current.querySelectorAll('button, input');
      focusableElements.forEach(element => {
        if (focusContext.focusableRowIndex !== rowProps.rowIndex || (focusContext.focusableRowIndex === rowProps.rowIndex && !focusContext.isFocusInRow)) {
          element.setAttribute("tabindex", "-1");
        } else {
          element.setAttribute("tabindex", "0");
        }
      })
    }
  }, [focusContext.isFocusInRow, focusContext.focusableRowIndex]);

  const onKeyPress = (ev: React.KeyboardEvent<HTMLTableRowElement>) => {
    if (ev.key === "ArrowDown") {
      ev.preventDefault();
      focusContext.setFocusableRowIndex(focusContext.focusableRowIndex + 1);
    } else if (ev.key === "ArrowUp") {
      ev.preventDefault();
      focusContext.setFocusableRowIndex(focusContext.focusableRowIndex === 0 ? 0 : focusContext.focusableRowIndex - 1);
    } else if (ev.key === "ArrowRight") {
      ev.preventDefault();
      focusContext.setIsFocusInRow(true);
    } else if (ev.key === "ArrowLeft") {
      ev.preventDefault();
      focusContext.setIsFocusInRow(false);
    } else if (ev.key === "escape") {
      ev.preventDefault();
    }
  };

  return (
    <Tr
      aria-level={level}
      aria-posinset={posinset}
      aria-setsize={setsize}
      aria-expanded={!!isExpanded}
      isHidden={isHidden}
      className={css(
        className,
        isExpanded && styles.modifiers.expanded,
        isDetailsExpanded && stylesTreeView.modifiers.treeViewDetailsExpanded
      )}
      onKeyDown={onKeyPress}
      tabIndex={focusContext.focusableRowIndex === rowProps.rowIndex ? 0 : -1}
      ref={ref}
      {...props}
    />
  );
};
TreeRowWrapper.displayName = 'TreeRowWrapper';
