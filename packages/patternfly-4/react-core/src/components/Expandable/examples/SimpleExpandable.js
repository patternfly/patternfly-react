import React from 'react';
import { Expandable } from '@patternfly/react-core';

export default class SimpleExpandable extends React.Component {
  state = {
    isExpanded: false
  };

  onToggle = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  };

  render() {
    const { isExpanded } = this.state;
    return (
      <Expandable toggleText={isExpanded ? 'Show Less' : 'Show More'} onToggle={this.onToggle} isExpanded={isExpanded}>
        This content is visible only when the component is expanded.
      </Expandable>
    );
  }
}
