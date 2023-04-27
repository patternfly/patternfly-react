import React from 'react';
import { ExpandableSection, ExpandableSectionToggle, Stack, StackItem } from '@patternfly/react-core';

interface ExpandableSectionState {
  isExpanded: boolean;
  isDetachedExpanded: boolean;
  isDisclosureExpanded: boolean;
}

export class ExpandableSectionDemo extends React.Component<null, ExpandableSectionState> {
  static displayName = 'ExpandableSectionDemo';
  state = {
    isExpanded: false,
    isDetachedExpanded: false,
    isDisclosureExpanded: false
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onToggle = (_event: React.MouseEvent, isOpen: boolean) => this.setState({ isExpanded: isOpen });
  onToggleDetached = (isOpen: boolean) => this.setState({ isDetachedExpanded: isOpen });
  onToggleDisclosure = (_event: React.MouseEvent, isOpen: boolean) => this.setState({ isDisclosureExpanded: isOpen });

  render() {
    const { isExpanded, isDetachedExpanded, isDisclosureExpanded } = this.state;
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
        <br />
        <h1>Detached Expandable Section</h1>
        <Stack hasGutter>
          <StackItem>
            <ExpandableSection
              id="detached-section"
              isExpanded={isDetachedExpanded}
              isDetached
              contentId="detached-section"
            >
              This content is visible only when the component is expanded.
            </ExpandableSection>
          </StackItem>
          <StackItem>
            <ExpandableSectionToggle
              id="detached"
              isExpanded={isDetachedExpanded}
              onToggle={this.onToggleDetached}
              contentId="detached-section"
              direction="up"
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </ExpandableSectionToggle>
          </StackItem>
        </Stack>
        <br />
        <h1> Disclosure Expandable Example: </h1>
        <ExpandableSection
          toggleText={isDisclosureExpanded ? 'Show Less' : 'Show More'}
          onToggle={this.onToggleDisclosure}
          isExpanded={isDisclosureExpanded}
          id="disclosure-expandable-section"
          displaySize="lg"
          isWidthLimited
        >
          This content is visible only when the component is expanded.
        </ExpandableSection>
      </React.Fragment>
    );
  }
}
