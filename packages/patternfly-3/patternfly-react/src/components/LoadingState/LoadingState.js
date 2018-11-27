import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Spinner } from '../Spinner';

class LoadingState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false
    };
  }

  componentDidMount() {
    this.onTimeout = setTimeout(() => {
      this.setState({ render: true });
    }, this.props.timeout);
  }

  componentWillUnmout() {
    clearTimeout(this.onTimeout);
  }

  render() {
    const { loading, loadingText, children, size, additionalClasses } = this.props;

    const spinner = (
      <div className={classNames('loading-state-pf', `loading-state-pf-${size}`, additionalClasses)}>
        <Spinner loading={loading} size={size} />
        {loadingText}
      </div>
    );

    if (loading) {
      return this.state.render ? spinner : null;
    }
    return children;
  }
}

LoadingState.propTypes = {
  /** determines whether to show spinner or children */
  loading: PropTypes.bool,
  /** text to show with spinner */
  loadingText: PropTypes.string,
  /** children nodes */
  children: PropTypes.node,
  /** delay in showing the children */
  timeout: PropTypes.number,
  /** size of the spinner */
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
  /** additional css classes for LoadingState */
  additionalClasses: PropTypes.string
};

LoadingState.defaultProps = {
  loading: false,
  loadingText: 'Loading',
  children: null,
  timeout: 300,
  size: 'lg',
  additionalClasses: ''
};

export default LoadingState;
