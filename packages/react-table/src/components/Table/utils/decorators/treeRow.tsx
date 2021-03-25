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
  const { isExpanded, level, setsize, toggleAriaLabel, checkAriaLabel, isChecked } = rowData.props;
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
      level !== undefined ? (
        <div className={css(styles.tableTreeViewMain)}>
          {setsize > 0 && (
            <span className="pf-c-table__toggle">
              <Button
                variant="plain"
                onClick={event => onCollapse && onCollapse(event, rowIndex, value.title, rowData)}
                className={isExpanded && 'pf-m-expanded'}
                aria-expanded={isExpanded}
                aria-label={toggleAriaLabel || `${isExpanded ? 'Collapse' : 'Expand'} row ${rowIndex}`}
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
                aria-label={checkAriaLabel || `Row ${rowIndex} checkbox`}
                isChecked={isChecked}
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
