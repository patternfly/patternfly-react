import React from 'react'
import PropTypes from 'prop-types'

/**
 * ListView Component for Patternfly React
 */
class ListView extends React.Component {
  render() {
    return (
      <div className="list-group list-view-pf list-view-pf-view">
        {this.props.children}
      </div>
    )
  }
}

ListView.propTypes = {
  /** children nodes  */
  children: PropTypes.node
}

export default ListView
