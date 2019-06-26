import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { css } from '@patternfly/react-styles';
import {
  combineFunctions,
  shallowLeftSideEquals,
  getBoundingClientRect,
  getClientWindowDimensions
} from './utils/utils';
import ConfirmButtons from './ConfirmButtons';
import { TableEditConfirmation } from './constants';
import { inlineEditCss, inlineEditStyles as styles } from './css/inline-edit-css';

inlineEditCss.inject();

const propTypes = {
  trRef: PropTypes.func,
  className: PropTypes.string,
  onScroll: PropTypes.func,
  onResize: PropTypes.func,
  row: PropTypes.shape({
    isOpen: PropTypes.bool,
    isExpanded: PropTypes.bool,
    isEditing: PropTypes.bool,
    isTableEditing: PropTypes.bool,
    isFirstVisible: PropTypes.bool,
    isLastVisible: PropTypes.bool,
    isChildEditing: PropTypes.bool,
    isParentEditing: PropTypes.bool,
    isLastVisibleParent: PropTypes.bool,
    editConfig: PropTypes.object
  }),
  rowProps: PropTypes.object
};

const defaultProps = {
  trRef: undefined,
  className: '',
  onScroll: undefined,
  onResize: undefined,
  row: {
    isOpen: undefined,
    isExpanded: undefined,
    isEditing: undefined,
    isTableEditing: undefined,
    isFirstVisible: undefined,
    isLastVisible: undefined,
    isChildEditing: undefined,
    isParentEditing: undefined,
    isLastVisibleParent: undefined,
    editConfig: undefined
  },
  rowProps: null
};

// TableEditConfirmation constants like TABLE_TOP cannot be referenced but must be hardcoded due to this issue:
// https://github.com/reactjs/react-docgen/issues/317#issue-393678795
const tableConfirmationMapper = {
  TABLE_TOP: {
    hasConfirmationButtons: ({ isTableEditing, isFirstVisible }) => isTableEditing && isFirstVisible,
    isTableConfirmation: () => true,
    areButtonsOnTop: () => true,
    hasBoldBorder: () => true,
    getEditStyles: ({ isTableEditing, isFirstVisible }) =>
      css(styles.tableEditableRow, isTableEditing && isFirstVisible && styles.modifiers.tableEditingFirstRow)
  },
  TABLE_BOTTOM: {
    hasConfirmationButtons: ({ isTableEditing, isLastVisible }) => isTableEditing && isLastVisible,
    isTableConfirmation: () => true,
    areButtonsOnTop: () => false,
    hasBoldBorder: () => true,
    getEditStyles: ({ isTableEditing, isLastVisible }) =>
      css(styles.tableEditableRow, isTableEditing && isLastVisible && styles.modifiers.tableEditingLastRow)
  },
  ROW: {
    hasConfirmationButtons: ({ isEditing, isParentEditing, isLastVisibleParent, isChildEditing, isLastVisible }) =>
      isEditing &&
      !(isChildEditing && isParentEditing) && // buttons can't appear in the middle
      !(isParentEditing && isLastVisible) && // parent will show the buttons on top
      !(isChildEditing && !isLastVisibleParent), // child will show the buttons on bottom
    isTableConfirmation: () => false,
    areButtonsOnTop: ({ isLastVisible, isLastVisibleParent }) => isLastVisible || isLastVisibleParent,
    hasBoldBorder: () => false,
    getEditStyles: ({ isEditing }) => css(styles.tableEditableRow, isEditing && styles.modifiers.editing)
  },
  NO_CONFIRM_ROW: {
    hasConfirmationButtons: () => false,
    isTableConfirmation: () => false,
    areButtonsOnTop: () => false,
    hasBoldBorder: () => false,
    getEditStyles: ({ isEditing }) => css(styles.tableEditableRow, isEditing && styles.modifiers.editing)
  },
  NONE: {
    hasConfirmationButtons: () => false,
    isTableConfirmation: () => false,
    areButtonsOnTop: () => false,
    hasBoldBorder: () => false,
    getEditStyles: () => css(styles.tableEditableRow)
  }
};

const getTableConfirmation = ({ editConfig }) =>
  tableConfirmationMapper[editConfig && editConfig.editConfirmationType] ||
  tableConfirmationMapper[TableEditConfirmation.NONE];

const editableRowWrapper = RowWrapperComponent => {
  class RowWrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        rowDimensions: {},
        window: {},
        ...RowWrapper.getDerivedStateFromProps(props)
      };
    }

    static getDerivedStateFromProps = (props, state) => ({
      hasConfirmationButtons: getTableConfirmation(props.row).hasConfirmationButtons(props.row)
    });

    setStateWith2dEquals = newState => {
      this.setState(oldState =>
        Object.keys(newState).find(key => !shallowLeftSideEquals(newState[key], oldState[key])) ? newState : null
      );
    };

    componentDidMount() {
      if (this.state.hasConfirmationButtons) {
        this.fetchClientDimensions();
      }
    }

    saveRowDimensions = element => {
      if (element) {
        this.element = element;
        this.tableElem = element.closest('table');
      }
      this.updateRowDimensions();
    };

    updateRowDimensions = () => {
      if (this.element) {
        this.setStateWith2dEquals({
          rowDimensions: getBoundingClientRect(this.element)
        });
      }
    };

    handleScroll = event => {
      this.updateRowDimensions();
    };

    handleResize = event => {
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
      if (this.element && this.state.rowDimensions) {
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
              row: getBoundingClientRect(this.element)
            }}
          />,
          this.tableElem ? this.tableElem.parentNode : document.body
        );
      }
      return confirmButtons;
    }

    render() {
      const {
        trRef,
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
            trRef={combineFunctions(this.saveRowDimensions, trRef)}
            className={classNames(trClassName, className)}
            onScroll={combineFunctions(hasConfirmationButtons && this.handleScroll, onScroll)}
            onResize={combineFunctions(hasConfirmationButtons && this.handleResize, onResize)}
          />
          {hasConfirmationButtons && this.getConfirmationButtons()}
        </React.Fragment>
      );
    }
  }

  RowWrapper.propTypes = propTypes;
  RowWrapper.defaultProps = defaultProps;

  return RowWrapper;
};

export default editableRowWrapper;
