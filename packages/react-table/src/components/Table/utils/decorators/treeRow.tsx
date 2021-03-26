import * as React from 'react';
import { IExtra, IFormatterValueType, OnCheckChange, OnTreeRowCollapse } from '../../TableTypes';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import stylesTreeView from '@patternfly/react-styles/css/components/Table/table-tree-view';
import { Button, Checkbox } from '@patternfly/react-core';
import AngleDownIcon from '@patternfly/react-icons/dist/js/icons/angle-down-icon';

export const treeRow = (onCollapse: OnTreeRowCollapse, onCheckChange?: OnCheckChange) => (
  value: IFormatterValueType,
  { rowIndex, rowData }: IExtra
) => {
  const { isExpanded, level, setsize, toggleAriaLabel, checkAriaLabel, isChecked, checkboxId } = rowData.props;
  const text = (
    <div className={css(stylesTreeView.tableTreeViewContent)}>
      <span className="pf-c-table__text">{value.title || value}</span>
    </div>
  );
  const onChange = (isChecked: boolean, event: React.FormEvent<HTMLInputElement>) => {
    onCheckChange(event, isChecked, rowIndex, value.title, rowData);
  };
  return {
    value,
    component: 'th',
    className: 'pf-c-table__tree-view-title-cell',
    children:
      level !== undefined ? (
        <div className={css(stylesTreeView.tableTreeViewMain)}>
          {setsize > 0 && (
            <span className={css(stylesTreeView.tableToggle)}>
              <Button
                variant="plain"
                onClick={event => onCollapse && onCollapse(event, rowIndex, value.title, rowData)}
                className={css(isExpanded && styles.modifiers.expanded)}
                aria-expanded={isExpanded}
                aria-label={toggleAriaLabel || `${isExpanded ? 'Collapse' : 'Expand'} row ${rowIndex}`}
              >
                <div className={css(stylesTreeView.tableToggleIcon)}>
                  <AngleDownIcon aria-hidden="true" />
                </div>
              </Button>
            </span>
          )}
          {!!onCheckChange && (
            <span className={css(stylesTreeView.tableCheck)}>
              <Checkbox
                id={checkboxId || `checkbox_${rowIndex}`}
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
