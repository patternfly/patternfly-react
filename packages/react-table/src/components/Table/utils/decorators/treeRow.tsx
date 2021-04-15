import * as React from 'react';
import { IExtra, IFormatterValueType, OnCheckChange, OnTreeRowCollapse, OnToggleRowDetails } from '../../TableTypes';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import stylesTreeView from '@patternfly/react-styles/css/components/Table/table-tree-view';
import { Button, Checkbox } from '@patternfly/react-core';
import AngleDownIcon from '@patternfly/react-icons/dist/js/icons/angle-down-icon';
import EllipsisHIcon from '@patternfly/react-icons/dist/js/icons/ellipsis-h-icon';

export const treeRow = (
  onCollapse: OnTreeRowCollapse,
  onCheckChange?: OnCheckChange,
  onToggleRowDetails?: OnToggleRowDetails
) => (value: IFormatterValueType, { rowIndex, rowData }: IExtra) => {
  const {
    isExpanded,
    isDetailsExpanded,
    'aria-level': level,
    'aria-setsize': setsize,
    toggleAriaLabel,
    checkAriaLabel,
    showDetailsAriaLabel,
    isChecked,
    checkboxId,
    icon
  } = rowData.props;
  const content = value.title || value;
  const text = (
    <div className={css(stylesTreeView.tableTreeViewText)}>
      {icon && <span className={css(stylesTreeView.tableTreeViewIcon)}>{icon}</span>}
      <span className="pf-c-table__text">{content}</span>
    </div>
  );
  const onChange = (isChecked: boolean, event: React.FormEvent<HTMLInputElement>) => {
    onCheckChange(event, isChecked, rowIndex, content, rowData);
  };
  return {
    component: 'th',
    className: 'pf-c-table__tree-view-title-cell',
    children:
      level !== undefined ? (
        <div className={css(stylesTreeView.tableTreeViewMain)}>
          {setsize > 0 && (
            <span className={css(stylesTreeView.tableToggle)}>
              <Button
                variant="plain"
                onClick={event => onCollapse && onCollapse(event, rowIndex, content, rowData)}
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
          {!!onToggleRowDetails && (
            <span className={css(stylesTreeView.tableTreeViewDetailsToggle)}>
              <Button
                variant="plain"
                aria-expanded={isDetailsExpanded}
                aria-label={showDetailsAriaLabel || 'Show row details'}
                onClick={event => onToggleRowDetails && onToggleRowDetails(event, rowIndex, content, rowData)}
              >
                <span className="pf-c-table__details-toggle-icon">
                  <EllipsisHIcon aria-hidden />
                </span>
              </Button>
            </span>
          )}
        </div>
      ) : (
        text
      )
  };
};
