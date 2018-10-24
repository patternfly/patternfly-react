import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Button } from '../Button';
import { Icon } from '../Icon';

const ALIGN_LEFT = 'left';
const ALIGN_CENTER = 'center';

const ALIGN_TYPES = [ALIGN_LEFT, ALIGN_CENTER];

class ExpandCollapse extends React.Component {
  state = { expanded: false, mirroredExpanded: false };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.mirroredExpanded !== nextProps.expanded) {
      return {
        expanded: nextProps.expanded,
        mirroredExpanded: nextProps.expanded
      };
    }
    return null;
  }

  onClick = () => {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  };

  render() {
    const { children, textCollapsed, textExpanded, align, className, bordered } = this.props;
    const { expanded } = this.state;

    const separatorClass = classNames('expand-collapse-pf-separator', { bordered });

    return (
      <div className={classNames('expand-collapse-pf', className)}>
        <div className="expand-collapse-pf-link-container">
          {align === ALIGN_CENTER && <span className={separatorClass} />}
          <Button bsStyle="link" onClick={this.onClick}>
            <Icon type="fa" name={expanded ? 'angle-down' : 'angle-right'} />
            {expanded ? textExpanded : textCollapsed}
          </Button>
          <span className={separatorClass} />
        </div>
        {this.state.expanded && children}
      </div>
    );
  }
}

ExpandCollapse.propTypes = {
  children: PropTypes.any.isRequired,
  /** Top-level custom class */
  className: PropTypes.string,
  /** Text for the link in collapsed state */
  textCollapsed: PropTypes.string,
  /** Text for the link in expanded state */
  textExpanded: PropTypes.string,
  /** Align the link to the left or center. */
  align: PropTypes.oneOf(ALIGN_TYPES),
  /** Flag to show a separation border line */
  bordered: PropTypes.bool,
  /** Flag to control expansion state */
  expanded: PropTypes.bool // eslint-disable-line react/no-unused-prop-types
};

ExpandCollapse.defaultProps = {
  className: '',
  textCollapsed: 'Show Advanced Options',
  textExpanded: 'Hide Advanced Options',
  align: ALIGN_LEFT,
  bordered: true,
  expanded: false
};

ExpandCollapse.ALIGN_LEFT = ALIGN_LEFT;
ExpandCollapse.ALIGN_CENTER = ALIGN_CENTER;
ExpandCollapse.ALIGN_TYPES = ALIGN_TYPES;

export default ExpandCollapse;
