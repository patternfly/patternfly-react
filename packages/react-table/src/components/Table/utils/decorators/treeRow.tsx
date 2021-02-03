import * as React from 'react';
import { IExtra, IFormatterValueType, OnCheckChange, OnTreeRowCollapse } from '../../TableTypes';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table-tree-view';
import { Button, Checkbox } from '@patternfly/react-core';
import AngleDownIcon from '@patternfly/react-icons/dist/js/icons/angle-down-icon';

export const treeRow = (onCollapse: OnTreeRowCollapse, onCheckChange?: OnCheckChange) => (
  value: IFormatterValueType,
  { rowIndex, rowData }: IExtra
) => {
  const text = (
    <div className={css(styles.tableTreeViewContent)}>
      <span className="pf-c-table__text">{value.title || value}</span>
    </div>
  );
  const onChange = (isChecked: boolean, event: React.FormEvent<HTMLInputElement>) => {
    onCheckChange(event, isChecked, rowIndex, value.title, rowData);
  };
  return {
    value,
    children:
      rowData.props.level !== undefined ? (
        <div className={css(styles.tableTreeViewMain)}>
          {rowData.props.setsize > 0 && (
            <span className="pf-c-table__toggle">
              <Button
                variant="plain"
                onClick={event => onCollapse && onCollapse(event, rowIndex, value.title, rowData)}
                className={rowData.props.isExpanded && 'pf-m-expanded'}
                aria-expanded={rowData.props.isExpanded}
                aria-labelledby={rowData.props.ariaLabelledById}
              >
                <div className={css(styles.tableToggleIcon)}>
                  <AngleDownIcon aria-hidden="true" />
                </div>
              </Button>
            </span>
          )}
          {!!onCheckChange && (
            <span className={css(styles.tableCheck)}>
              <Checkbox
                id={rowData.props.checkBoxId || `checkbox_${rowIndex}`}
                aria-labelledby={rowData.props.ariaLabelledById}
                isChecked={rowData.props.isChecked}
                onChange={onChange}
              />
            </span>
          )}
          {text}
        </div>
      ) : (
        text
      )
  };
};
