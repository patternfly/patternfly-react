import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button';

class MoreInformation extends React.Component {
  state = { expanded: false };

  onClick = () => {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  };

  render() {
    return (
      <div className="pf-more-info">
        <div>
          <Button bsStyle="link" onClick={this.onClick}>
            {this.state.expanded ? <span className="fa fa-angle-down" /> : <span className="fa fa-angle-right" />}
            &nbsp; {this.props.textMoreInfo}
          </Button>
        </div>
        {this.state.expanded && this.props.children}
      </div>
    );
  }
}

MoreInformation.propTypes = {
  children: PropTypes.any.isRequired,

  textMoreInfo: PropTypes.string
};

MoreInformation.defaultProps = {
  textMoreInfo: 'More Information'
};

export default MoreInformation;
