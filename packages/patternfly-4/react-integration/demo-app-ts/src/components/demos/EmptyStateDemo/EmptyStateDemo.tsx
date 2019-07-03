import { EmptyState, EmptyStateProps, EmptyStateVariant, EmptyStateIcon, Title, EmptyStateBody, EmptyStateSecondaryActions, Button } from '@patternfly/react-core';
import { CubesIcon } from '@patternfly/react-icons';
import React, { Component } from 'react';
export class EmptyStateDemo extends Component {
 myLargeEmptyStateProps: EmptyStateProps = {
   children: <React.Fragment>
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
 }
 mySmallEmptyStateProps: EmptyStateProps = {
   children: <React.Fragment>
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
   </React.Fragment>,
   variant: EmptyStateVariant.small
 }
 myFullEmptyStateProps: EmptyStateProps = {
   children: <React.Fragment>
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
   </React.Fragment>,
   variant: EmptyStateVariant.full
 }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
   return (
     <React.Fragment>
       <EmptyState children={this.myLargeEmptyStateProps.children} />
       <EmptyState children={this.mySmallEmptyStateProps.children} variant={this.mySmallEmptyStateProps.variant} />
       <EmptyState children={this.myFullEmptyStateProps.children} variant={this.myFullEmptyStateProps.variant} />
     </React.Fragment>
   );
 }
}

export default EmptyStateDemo;
