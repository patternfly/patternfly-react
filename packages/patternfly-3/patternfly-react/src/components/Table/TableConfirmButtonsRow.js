import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { ConfirmButton, CancelButton } from '../InlineEdit';
import { noop, debounce } from '../../common/helpers';
import '../../common/closestPolyfill';

class TableConfirmButtonsRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleScroll = debounce(this.handleScroll, 100);
    this.handleResize = debounce(this.handleResize, 100);
  }

  componentDidMount() {
    this.fetchClientDimensions();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  saveRowDimensions = element => {
    if (element) {
      this.element = element;
    }
    if (this.element) {
      this.setState({
        rowDimensions: this.element.getBoundingClientRect()
      });
    }
  };

  handleScroll = event => {
    this.saveRowDimensions();
  };

  handleResize = event => {
    this.fetchClientDimensions();
    this.saveRowDimensions();
  };

  fetchClientDimensions() {
    this.setState({
      window: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    });
  }

  renderConfirmButtons() {
    const divStyle = this.state.rowDimensions
      ? this.props.buttonsPosition(this.state.window, this.element.getBoundingClientRect())
      : {};

    const buttonsClass = `inline-edit-buttons ${this.props.buttonsClassName}`;
    return (
      <div style={divStyle} className={buttonsClass} key="confirmButtons">
        <ConfirmButton
          bsStyle="primary"
          key="confirm"
          aria-label={this.props.messages.confirmButtonLabel}
          onMouseUp={() => this.props.onConfirm()}
        />
        <CancelButton
          bsStyle="default"
          key="cancel"
          aria-label={this.props.messages.cancelButtonLabel}
          onMouseUp={() => this.props.onCancel()}
        />
      </div>
    );
  }

  render() {
    const editing = this.props.isEditing();
    const rowClass = editing ? 'editing' : '';

    const elements = [
      <tr ref={this.saveRowDimensions} className={rowClass} key="tableRow">
        {this.props.children}
      </tr>
    ];

    if (editing && (this.element || this.props.buttonsMountpoint)) {
      elements.push(
        // mount the confirm buttons below the table
        createPortal(
          this.renderConfirmButtons(),
          this.props.buttonsMountpoint || this.element.closest('table').parentNode
        )
      );
    }

    return elements;
  }
}

TableConfirmButtonsRow.shouldComponentUpdate = true;

TableConfirmButtonsRow.defaultProps = {
  isEditing: noop,
  onConfirm: noop,
  onCancel: noop,
  buttonsPosition: noop,
  buttonsClassName: '',
  children: [],
  messages: {
    confirmButtonLabel: 'Save',
    cancelButtonLabel: 'Cancel'
  },
  buttonsMountpoint: undefined
};

TableConfirmButtonsRow.propTypes = {
  /** Function that determines whether values or edit components should be rendered */
  isEditing: PropTypes.func,
  /** Confirm edit callback */
  onConfirm: PropTypes.func,
  /** Cancel edit callback */
  onCancel: PropTypes.func,
  /** Inject confirm buttons positions */
  buttonsPosition: PropTypes.func,
  /** Additional confirm buttons classes */
  buttonsClassName: PropTypes.string,
  /** Row cells */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /** Message text inputs for i18n */
  messages: PropTypes.shape({
    confirmButtonLabel: PropTypes.string,
    cancelButtonLabel: PropTypes.string
  }),
  buttonsMountpoint: PropTypes.any
};

export default TableConfirmButtonsRow;
