import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { noop } from 'patternfly-react';

const SerialConsoleActions = ({
  idPrefix,
  isDisconnectEnabled,
  onDisconnect,
  onReset,
  textDisconnect,
  textReconnect
}) => (
  <div className="console-actions-pf">
    <button
      id={`${idPrefix}-disconnect`}
      className={classNames('btn', 'btn-default', 'console-actions-buttons-pf', {
        disabled: !isDisconnectEnabled
      })}
      onClick={onDisconnect}
    >
      {textDisconnect}
    </button>

    <button id={`${idPrefix}-reconnect`} className="btn btn-default console-actions-buttons-pf" onClick={onReset}>
      {textReconnect}
    </button>
  </div>
);

SerialConsoleActions.propTypes = {
  idPrefix: PropTypes.string,
  isDisconnectEnabled: PropTypes.bool,
  onDisconnect: PropTypes.func,
  onReset: PropTypes.func,
  textDisconnect: PropTypes.string,
  textReconnect: PropTypes.string
};

SerialConsoleActions.defaultProps = {
  idPrefix: '',
  isDisconnectEnabled: false,
  onDisconnect: noop,
  onReset: noop,
  textDisconnect: 'Disconnect',
  textReconnect: 'Reconnect'
};

export default SerialConsoleActions;
