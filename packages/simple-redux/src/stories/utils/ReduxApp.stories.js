import React from 'react';
import PropTypes from 'prop-types';

const ReduxApp = props => {
  const newChildren = React.Children.map(props.children, child =>
    React.cloneElement(child, {
      clicks: props.clicks,
      onClickDecreased: props.onClickDecreased,
      onClickIncreased: props.onClickIncreased
    })
  );
  return <div>{newChildren}</div>;
};

ReduxApp.propTypes = {
  children: PropTypes.node,
  clicks: PropTypes.number,
  onClickDecreased: PropTypes.func,
  onClickIncreased: PropTypes.func
};

ReduxApp.defaultProps = {
  children: null,
  clicks: 0,
  onClickDecreased: null,
  onClickIncreased: null
};

const ButtonPlus = props => (
  <button onClick={() => props.onClickIncreased()}>+1</button>
);

const ButtonMinus = props => (
  <button onClick={() => props.onClickDecreased()}>-1</button>
);

const Counter = props => <div>{props.clicks}</div>;

export { ReduxApp, ButtonMinus, ButtonPlus, Counter };

ButtonPlus.propTypes = {
  onClickIncreased: PropTypes.func
};
ButtonPlus.defaultProps = {
  onClickIncreased: null
};
ButtonMinus.propTypes = {
  onClickDecreased: PropTypes.func
};
ButtonMinus.defaultProps = {
  onClickDecreased: null
};
Counter.propTypes = {
  clicks: PropTypes.number
};
Counter.defaultProps = {
  clicks: 0
};
