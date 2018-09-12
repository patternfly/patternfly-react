import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Button } from '../Button';

import { ALIGN_LEFT, ALIGN_CENTER, ALIGN_TYPES } from './constants';

class ExpandCollapse extends React.Component {
  state = { expanded: false };

  onClick = () => {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  };

  render() {
    const { children, textCollapsed, textExpanded, align, className } = this.props;

    const alignClass = classNames({
      'expand-collapse-pf-left': align === ALIGN_LEFT,
      'expand-collapse-pf-center': align === ALIGN_CENTER
    });

    return (
      <div className={classNames(['expand-collapse-pf', className])}>
        <div className={alignClass}>
          {this.state.expanded ? <span className="fa fa-angle-down" /> : <span className="fa fa-angle-right" />}
          <Button bsStyle="link" onClick={this.onClick}>
            {this.state.expanded ? textExpanded : textCollapsed}
          </Button>
        </div>
        {this.state.expanded && children}
      </div>
    );
  }
}

ExpandCollapse.propTypes = {
  children: PropTypes.any.isRequired,

  className: PropTypes.string /** Top-level custom class */,
  textCollapsed: PropTypes.string /** Text for the link in collapsed state */,
  textExpanded: PropTypes.string /** Text for the link in expanded state */,
  align: PropTypes.oneOf(ALIGN_TYPES) /** Align the link to the left or center. Default: left. */
};

ExpandCollapse.defaultProps = {
  className: '',
  textCollapsed: 'Show Advanced Options',
  textExpanded: 'Hide Advanced Options',
  align: ALIGN_LEFT
};

export default ExpandCollapse;
