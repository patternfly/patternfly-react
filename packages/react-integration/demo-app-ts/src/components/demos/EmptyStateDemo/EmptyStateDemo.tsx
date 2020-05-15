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
  myFullEmptyStateProps: EmptyStateProps = {
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
        <EmptyState variant={this.myLargeEmptyStateProps.variant}>{this.myLargeEmptyStateProps.children}</EmptyState>
        <EmptyState variant={this.mySmallEmptyStateProps.variant}>{this.mySmallEmptyStateProps.children}</EmptyState>
        <EmptyState>{this.myFullEmptyStateProps.children}</EmptyState>
        <EmptyState isFullHeight id={this.myFullHeightEmptyStateProps.id}>
          {this.myFullHeightEmptyStateProps.children}
        </EmptyState>
      </React.Fragment>
    );
  }
}

export default EmptyStateDemo;
