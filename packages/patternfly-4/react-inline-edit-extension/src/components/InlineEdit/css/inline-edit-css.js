import { StyleSheet } from '@patternfly/react-styles';

const pfColorBlue50 = '#def3ff';
const pfColorBlue200 = '#7dc3e8';

export const inlineEditCss = StyleSheet.parse(`
  tr.pf-c-table__editable-row {    
    &:hover,
    &.pf-m-editing {
      background: ${pfColorBlue50} !important;
      td {
        border-bottom: 1px solid ${pfColorBlue200} !important;
        border-top: 1px solid ${pfColorBlue200} !important;
  
        &:first-child {
          border-left: 1px solid ${pfColorBlue200} !important;
        }
  
        &:last-child {
          border-right: 1px solid ${pfColorBlue200} !important;
        }
      }
    }
  
    &.pf-m-table-editing-first-row {
      border-top: 3px solid ${pfColorBlue200} !important;
    }
  
    &.pf-m-table-editing-last-row {
      border-bottom: 3px solid ${pfColorBlue200} !important;
    }
  
    input {
      display: block;
      background: var(--pf-global--BackgroundColor--100);
      border: 1px solid var(--pf-global--BorderColor);
  
      &:hover {
        cursor: text;
      }
    }
  }
  
  .pf-c-table__inline-edit-buttons {
    position: fixed;
    z-index: 1000;
    padding: 4px;
    margin: 0;
    background: ${pfColorBlue50};
    border: 1px solid ${pfColorBlue200};
  
    &.pf-m-top {
      border-bottom: 0;
    }
  
    &.pf-m-bottom {
      border-top: 0;
    }
  
    &.pf-m-bold {
      border-width: 3px;
    }
  
    button {
      margin-left: 4px;
  
      &:first-child {
        margin-left: 0;
      }
    }
  }

`);

export const inlineEditStyles = {
  tableEditableRow: 'pf-c-table__editable-row',
  tableInlineEditButtons: 'pf-c-table__inline-edit-buttons',
  modifiers: {
    tableEditingFirstRow: 'pf-m-table-editing-first-row ',
    tableEditingLastRow: 'pf-m-table-editing-last-row',
    editing: 'pf-m-editing',
    top: 'pf-m-top',
    bottom: 'pf-m-bottom',
    bold: 'pf-m-bold'
  }
};
