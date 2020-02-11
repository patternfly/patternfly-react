import React from 'react';
import { Expandable } from '@patternfly/react-core';

interface ExpandableState {
  isExpanded: boolean;
}

export class ExpandableDemo extends React.Component<null, ExpandableState> {
  state = {
    isExpanded: false
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onToggle = () => this.setState({ isExpanded: !this.state.isExpanded });

  render() {
    const { isExpanded } = this.state;
    return (
      <React.Fragment>
        <h1> Simple Expandable Example: </h1>
        <Expandable
          toggleText={isExpanded ? 'Show Less' : 'Show More'}
          onToggle={this.onToggle}
          isExpanded={isExpanded}
        >
          This content is visible only when the component is expanded.
        </Expandable>
        <br />
        <h1> Uncontrolled Expandable Example: </h1>
        <Expandable toggleText="Show More">This content is visible only when the component is expanded.</Expandable>
        <h1> Uncontrolled Dynamic Expandable Example: </h1>
        <Expandable toggleTextExpanded="Show Less" toggleTextCollapsed="Show More">
          This content is visible only when the component is expanded.
        </Expandable>
      </React.Fragment>
    );
  }
}
