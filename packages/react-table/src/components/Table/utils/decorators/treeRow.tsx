import * as React from 'react';
import { IExtra, IFormatterValueType, OnCheckChange, OnTreeRowCollapse, OnToggleRowDetails } from '../../TableTypes';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import stylesTreeView from '@patternfly/react-styles/css/components/Table/table-tree-view';
import { Button } from '@patternfly/react-core/dist/esm/components/Button';
import { Checkbox } from '@patternfly/react-core/dist/esm/components/Checkbox';
import AngleDownIcon from '@patternfly/react-icons/dist/esm/icons/angle-down-icon';
import EllipsisHIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-h-icon';

export const treeRow =
  (onCollapse: OnTreeRowCollapse, onCheckChange?: OnCheckChange, onToggleRowDetails?: OnToggleRowDetails) =>
  (value: IFormatterValueType, { rowIndex, rowData }: IExtra) => {
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
      <div className={css(stylesTreeView.tableTreeViewText)} key="tree-view-text">
        {icon && (
          <span className={css(stylesTreeView.tableTreeViewIcon)} key="tree-view-text-icon">
            {icon}
          </span>
        )}
        <span className={styles.tableText} key="table-text">
          {content as React.ReactNode}
        </span>
      </div>
    );
    const onChange = (isChecked: boolean, event: React.FormEvent<HTMLInputElement>) => {
      onCheckChange(event, isChecked, rowIndex, content as React.ReactNode, rowData);
    };
    return {
      component: 'th',
      className: stylesTreeView.tableTreeViewTitleCell,
      children:
        level !== undefined ? (
          <div className={css(stylesTreeView.tableTreeViewMain)}>
            {setsize > 0 && (
              <span className={css(stylesTreeView.tableToggle)} key="table-toggle">
                <Button
                  variant="plain"
                  onClick={(event) => onCollapse && onCollapse(event, rowIndex, content as React.ReactNode, rowData)}
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
              <span className={css(stylesTreeView.tableCheck)} key="table-check">
                <label htmlFor={checkboxId || `checkbox_${rowIndex}`}>
                  <Checkbox
                    id={checkboxId || `checkbox_${rowIndex}`}
                    aria-label={checkAriaLabel || `Row ${rowIndex} checkbox`}
                    isChecked={isChecked}
                    onChange={(event, checked) => onChange(checked, event)}
                  />
                </label>
              </span>
            )}
            {text}
            {!!onToggleRowDetails && (
              <span className={css(stylesTreeView.tableTreeViewDetailsToggle)} key="view-details-toggle">
                <Button
                  variant="plain"
                  aria-expanded={isDetailsExpanded}
                  aria-label={showDetailsAriaLabel || 'Show row details'}
                  onClick={(event) =>
                    onToggleRowDetails && onToggleRowDetails(event, rowIndex, content as React.ReactNode, rowData)
                  }
                >
                  <span className={`${styles.table}__details-toggle-icon`}>
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
