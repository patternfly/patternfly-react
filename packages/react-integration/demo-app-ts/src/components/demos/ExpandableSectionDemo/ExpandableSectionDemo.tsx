import React from 'react';
import { ExpandableSection } from '@patternfly/react-core';

interface ExpandableSectionState {
  isExpanded: boolean;
}

export class ExpandableSectionDemo extends React.Component<null, ExpandableSectionState> {
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
        <ExpandableSection
          toggleText={isExpanded ? 'Show Less' : 'Show More'}
          onToggle={this.onToggle}
          isExpanded={isExpanded}
        >
          This content is visible only when the component is expanded.
        </ExpandableSection>
        <br />
        <h1> Uncontrolled Expandable Example: </h1>
        <ExpandableSection toggleText="Show More">
          This content is visible only when the component is expanded.
        </ExpandableSection>
        <h1> Uncontrolled Dynamic Expandable Example: </h1>
        <ExpandableSection toggleTextExpanded="Show Less" toggleTextCollapsed="Show More">
          This content is visible only when the component is expanded.
        </ExpandableSection>
      </React.Fragment>
    );
  }
}
