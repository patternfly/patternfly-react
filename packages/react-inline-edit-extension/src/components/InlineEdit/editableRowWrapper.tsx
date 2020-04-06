import * as React from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { css } from '@patternfly/react-styles';
import { RowWrapper, RowWrapperRow } from '@patternfly/react-table';
import {
  shallowLeftSideEquals,
  getBoundingClientRect,
  getClientWindowDimensions,
  WindowDimensions,
  ClientBoundingRect
} from '../../utils/utils';
import { inlineEditStyles as styles } from './css/inline-edit-css';
import { ConfirmButtons } from '../ConfirmButtons';
import { EditConfig } from '../Body';
import '@patternfly/react-styles/css/components/Table/inline-edit.css';

export interface EditableRowWrapperRow extends RowWrapperRow {
  isEditing?: boolean;
  isTableEditing?: boolean;
  isFirstVisible?: boolean;
  isLastVisible?: boolean;
  isChildEditing?: boolean;
  isParentEditing?: boolean;
  isLastVisibleParent?: boolean;
  editConfig?: EditConfig;
}

export interface EditableRowWrapperProps extends RowWrapper {
  className?: string;
  row: EditableRowWrapperRow;
  trRef: (instance: any) => void;
  onScroll: (event: React.UIEvent<Element>) => void;
  onResize: (event: React.UIEvent<Element>) => void;
  rowProps: {
    rowIndex: number;
    rowKey: string;
  };
}

// TableEditConfirmation constants like TABLE_TOP cannot be referenced but must be hardcoded due to this issue:
// https://github.com/reactjs/react-docgen/issues/317#issue-393678795
const tableConfirmationMapper = {
  TABLE_TOP: {
    hasConfirmationButtons: ({ isTableEditing, isFirstVisible }: EditableRowWrapperRow) =>
      isTableEditing && isFirstVisible,
    isTableConfirmation: () => true,
    areButtonsOnTop: () => true,
    hasBoldBorder: () => true,
    getEditStyles: ({ isTableEditing, isFirstVisible }: EditableRowWrapperRow) =>
      css(styles.tableEditableRow, isTableEditing && isFirstVisible && styles.modifiers.tableEditingFirstRow)
  },
  TABLE_BOTTOM: {
    hasConfirmationButtons: ({ isTableEditing, isLastVisible }: EditableRowWrapperRow) =>
      isTableEditing && isLastVisible,
    isTableConfirmation: () => true,
    areButtonsOnTop: () => false,
    hasBoldBorder: () => true,
    getEditStyles: ({ isTableEditing, isLastVisible }: EditableRowWrapperRow) =>
      css(styles.tableEditableRow, isTableEditing && isLastVisible && styles.modifiers.tableEditingLastRow)
  },
  ROW: {
    hasConfirmationButtons: ({
      isEditing,
      isParentEditing,
      isLastVisibleParent,
      isChildEditing,
      isLastVisible
    }: EditableRowWrapperRow) =>
      isEditing &&
      !(isChildEditing && isParentEditing) && // buttons can't appear in the middle
      !(isParentEditing && isLastVisible) && // parent will show the buttons on top
      !(isChildEditing && !isLastVisibleParent), // child will show the buttons on bottom
    isTableConfirmation: () => false,
    areButtonsOnTop: ({ isLastVisible, isLastVisibleParent }: EditableRowWrapperRow) =>
      isLastVisible || isLastVisibleParent,
    hasBoldBorder: () => false,
    getEditStyles: ({ isEditing }: EditableRowWrapperRow) =>
      css(styles.tableEditableRow, isEditing && styles.modifiers.editing)
  },
  NO_CONFIRM_ROW: {
    hasConfirmationButtons: () => false,
    isTableConfirmation: () => false,
    areButtonsOnTop: () => false,
    hasBoldBorder: () => false,
    getEditStyles: ({ isEditing }: EditableRowWrapperRow) =>
      css(styles.tableEditableRow, isEditing && styles.modifiers.editing)
  },
  NONE: {
    hasConfirmationButtons: () => false,
    isTableConfirmation: () => false,
    areButtonsOnTop: () => false,
    hasBoldBorder: () => false,
    getEditStyles: () => css(styles.tableEditableRow)
  }
};

const getTableConfirmation = ({ editConfig }: EditableRowWrapperRow) =>
  (editConfig && tableConfirmationMapper[editConfig.editConfirmationType as keyof typeof tableConfirmationMapper]) ||
  tableConfirmationMapper.NONE;

interface EditableRowWrapperState {
  hasConfirmationButtons?: boolean;
  window?: WindowDimensions;
  rowDimensions?: ClientBoundingRect;
}

export const editableRowWrapper = (RowWrapperComponent: typeof RowWrapper) =>
  class EditableRowWrapper extends React.Component<EditableRowWrapperProps, EditableRowWrapperState> {
    state = {
      hasConfirmationButtons: false,
      window: undefined as WindowDimensions,
      rowDimensions: undefined as ClientBoundingRect,
      ...EditableRowWrapper.getDerivedStateFromProps(this.props)
    };
    element = React.createRef<HTMLTableRowElement>();
    tableElem: HTMLElement;
    static defaultProps = {
      onScroll: () => {},
      onResize: () => {}
    };

    static getDerivedStateFromProps = (props: EditableRowWrapperProps) => ({
      hasConfirmationButtons: getTableConfirmation(props.row).hasConfirmationButtons(props.row)
    });

    setStateWith2dEquals = (newState: EditableRowWrapperState) => {
      this.setState(oldState =>
        Object.keys(newState).find(
          key =>
            !shallowLeftSideEquals(
              newState[key as keyof EditableRowWrapperState],
              oldState[key as keyof EditableRowWrapperState]
            )
        )
          ? newState
          : null
      );
    };

    componentDidMount() {
      this.tableElem = this.element.current.closest('table');
      if (typeof this.props.trRef === 'function') {
        this.props.trRef(this.element.current);
      }
      this.updateRowDimensions();

      if (this.state.hasConfirmationButtons) {
        this.fetchClientDimensions();
      }
    }

    updateRowDimensions = () => {
      if (this.element.current) {
        this.setStateWith2dEquals({
          rowDimensions: getBoundingClientRect(this.element.current)
        });
      }
    };

    handleScroll = () => {
      this.updateRowDimensions();
    };

    handleResize = () => {
      this.fetchClientDimensions();
      this.updateRowDimensions();
    };

    fetchClientDimensions() {
      this.setStateWith2dEquals({
        window: getClientWindowDimensions()
      });
    }

    getConfirmationButtons() {
      const { row, rowProps, ...props } = this.props;
      const { isLastVisible, isParentEditing, isLastVisibleParent, editConfig } = row;

      if (!editConfig) {
        return null;
      }
      const { onEditConfirmed, onEditCanceled } = editConfig;
      const tableConfirmation = getTableConfirmation(row);

      let confirmButtons;
      if (this.element.current && this.state.rowDimensions) {
        const options = tableConfirmation.isTableConfirmation() ? {} : rowProps;
        const actionObject = tableConfirmation.isTableConfirmation() ? null : row;
        confirmButtons = createPortal(
          <ConfirmButtons
            {...props}
            onConfirm={event => onEditConfirmed(event, actionObject, options)}
            onCancel={event => onEditCanceled(event, actionObject, options)}
            buttonsOnTop={tableConfirmation.areButtonsOnTop({ isLastVisible, isParentEditing, isLastVisibleParent })}
            boldBorder={tableConfirmation.hasBoldBorder()}
            environment={{
              window: this.state.window,
              row: getBoundingClientRect(this.element.current)
            }}
          />,
          this.tableElem ? (this.tableElem.parentNode as HTMLElement) : document.body
        );
      }
      return confirmButtons;
    }

    render() {
      const {
        className,
        onScroll,
        onResize,
        row: { isFirstVisible, isLastVisible, isEditing, isTableEditing, editConfig }
      } = this.props;
      const { hasConfirmationButtons } = this.state;
      const trClassName = getTableConfirmation({ editConfig }).getEditStyles({
        isEditing,
        isTableEditing,
        isFirstVisible,
        isLastVisible
      });

      return (
        <React.Fragment>
          <RowWrapperComponent
            {...this.props}
            trRef={this.element}
            className={classNames(trClassName, className)}
            onScroll={event => {
              if (hasConfirmationButtons) {
                this.handleScroll();
              }
              onScroll(event);
            }}
            onResize={event => {
              if (hasConfirmationButtons) {
                this.handleResize();
              }
              onResize(event);
            }}
          />
          {hasConfirmationButtons && this.getConfirmationButtons()}
        </React.Fragment>
      );
    }
  };
