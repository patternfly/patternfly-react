import {
  EmptyState,
  EmptyStateProps,
  EmptyStateVariant,
  EmptyStateIcon,
  Title,
  EmptyStateBody,
  EmptyStateSecondaryActions,
  Button
} from '@patternfly/react-core';
import CubesIcon from '@patternfly/react-icons/dist/js/icons/cubes-icon';
import React, { Component } from 'react';
export class EmptyStateDemo extends Component {
  myExtraLargeEmptyStateProps: EmptyStateProps = {
    id: 'xl-empty-state',
    children: (
      <React.Fragment>
        <EmptyStateIcon icon={CubesIcon} />
        <Title headingLevel="h5" size="lg">
          Extra Large Empty State
        </Title>
        <EmptyStateBody>
          This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible
          enough to meet a variety of needs.
        </EmptyStateBody>
        <Button variant="primary">Primary Action</Button>
        <EmptyStateSecondaryActions>
          <Button variant="link">Multiple</Button>
          <Button variant="link">Action Buttons</Button>
          <Button variant="link">Can</Button>
          <Button variant="link">Go here</Button>
          <Button variant="link">In the secondary</Button>
          <Button variant="link">Action area</Button>
        </EmptyStateSecondaryActions>
      </React.Fragment>
    ),
    variant: EmptyStateVariant.xl
  };
  myLargeEmptyStateProps: EmptyStateProps = {
    id: 'large-empty-state',
    children: (
      <React.Fragment>
        <EmptyStateIcon icon={CubesIcon} />
        <Title headingLevel="h5" size="lg">
          Large Empty State
        </Title>
        <EmptyStateBody>
          This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible
          enough to meet a variety of needs.
        </EmptyStateBody>
        <Button variant="primary">Primary Action</Button>
        <EmptyStateSecondaryActions>
          <Button variant="link">Multiple</Button>
          <Button variant="link">Action Buttons</Button>
          <Button variant="link">Can</Button>
          <Button variant="link">Go here</Button>
          <Button variant="link">In the secondary</Button>
          <Button variant="link">Action area</Button>
        </EmptyStateSecondaryActions>
      </React.Fragment>
    ),
    variant: EmptyStateVariant.large
  };
  mySmallEmptyStateProps: EmptyStateProps = {
    id: 'small-empty-state',
    children: (
      <React.Fragment>
        <EmptyStateIcon icon={CubesIcon} />
        <Title headingLevel="h5" size="lg">
          Small Empty State
        </Title>
        <EmptyStateBody>
          This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible
          enough to meet a variety of needs.
        </EmptyStateBody>
        <Button variant="primary">Primary Action</Button>
        <EmptyStateSecondaryActions>
          <Button variant="link">Multiple</Button>
          <Button variant="link">Action Buttons</Button>
          <Button variant="link">Can</Button>
          <Button variant="link">Go here</Button>
          <Button variant="link">In the secondary</Button>
          <Button variant="link">Action area</Button>
        </EmptyStateSecondaryActions>
      </React.Fragment>
    ),
    variant: EmptyStateVariant.small
  };
  myExtraSmallEmptyStateProps: EmptyStateProps = {
    id: 'xs-empty-state',
    children: (
      <React.Fragment>
        <Title headingLevel="h5" size="md">
          Extra Small Empty State
        </Title>
        <EmptyStateBody>
          This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible
          enough to meet a variety of needs.
        </EmptyStateBody>
        <EmptyStateSecondaryActions>
          <Button variant="link">Multiple</Button>
          <Button variant="link">Action Buttons</Button>
          <Button variant="link">Can</Button>
          <Button variant="link">Go here</Button>
          <Button variant="link">In the secondary</Button>
          <Button variant="link">Action area</Button>
        </EmptyStateSecondaryActions>
      </React.Fragment>
    ),
    variant: EmptyStateVariant.xs
  };
  myFullEmptyStateProps: EmptyStateProps = {
    id: 'full-empty-state',
    children: (
      <React.Fragment>
        <EmptyStateIcon icon={CubesIcon} />
        <Title headingLevel="h5" size="lg">
          Full Empty State
        </Title>
        <EmptyStateBody>
          This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible
          enough to meet a variety of needs.
        </EmptyStateBody>
        <Button variant="primary">Primary Action</Button>
        <EmptyStateSecondaryActions>
          <Button variant="link">Multiple</Button>
          <Button variant="link">Action Buttons</Button>
          <Button variant="link">Can</Button>
          <Button variant="link">Go here</Button>
          <Button variant="link">In the secondary</Button>
          <Button variant="link">Action area</Button>
        </EmptyStateSecondaryActions>
      </React.Fragment>
    )
  };
  myFullHeightEmptyStateProps: EmptyStateProps = {
    id: 'full-height-example',
    children: (
      <React.Fragment>
        <EmptyStateIcon icon={CubesIcon} />
        <Title headingLevel="h5" size="lg">
          Full height empty state
        </Title>
        <EmptyStateBody>This represents a full height empty state pattern in Patternfly 4</EmptyStateBody>
      </React.Fragment>
    )
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <EmptyState id={this.myLargeEmptyStateProps.id} variant={this.myLargeEmptyStateProps.variant}>
          {this.myLargeEmptyStateProps.children}
        </EmptyState>
        <EmptyState id={this.mySmallEmptyStateProps.id} variant={this.mySmallEmptyStateProps.variant}>
          {this.mySmallEmptyStateProps.children}
        </EmptyState>
        <EmptyState id={this.myExtraLargeEmptyStateProps.id} variant={this.myExtraLargeEmptyStateProps.variant}>
          {this.myExtraLargeEmptyStateProps.children}
        </EmptyState>
        <EmptyState id={this.myExtraSmallEmptyStateProps.id} variant={this.myExtraSmallEmptyStateProps.variant}>
          {this.myExtraSmallEmptyStateProps.children}
        </EmptyState>
        <EmptyState id={this.myFullEmptyStateProps.id}>{this.myFullEmptyStateProps.children}</EmptyState>
        <EmptyState isFullHeight id={this.myFullHeightEmptyStateProps.id}>
          {this.myFullHeightEmptyStateProps.children}
        </EmptyState>
      </React.Fragment>
    );
  }
}

export default EmptyStateDemo;
