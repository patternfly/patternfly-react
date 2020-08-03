import {
  Button,
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
  Stack,
  StackItem,
  Title,
  Divider
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';
import React, { Component } from 'react';

export class DescriptionListBreakpointsDemo extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render1ColDescriptionList() {
    return (
      <StackItem isFilled>
        <br />
        <Title headingLevel="h2" size="2xl">
          1 Col Description List
        </Title>
        <Divider component="div" />
        <br />
        <div className="example">
          <DescriptionList
            id="1-col-description-list"
            columnModifier={{ default: '1Col', md: '1Col', lg: '1Col', xl: '1Col', '2xl': '1Col' }}
          >
            <DescriptionListGroup>
              <DescriptionListTerm>Name</DescriptionListTerm>
              <DescriptionListDescription>Example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Namespace</DescriptionListTerm>
              <DescriptionListDescription>
                <a href="#">mary-test</a>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Labels</DescriptionListTerm>
              <DescriptionListDescription>example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Pod selector</DescriptionListTerm>
              <DescriptionListDescription>
                <Button variant="link" isInline icon={<PlusCircleIcon />}>
                  app=MyApp
                </Button>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Annotation</DescriptionListTerm>
              <DescriptionListDescription>2 Annotations</DescriptionListDescription>
            </DescriptionListGroup>
          </DescriptionList>
        </div>
      </StackItem>
    );
  }

  render2ColDescriptionList() {
    return (
      <StackItem isFilled>
        <br />
        <Title headingLevel="h2" size="2xl">
          2 Col Description List
        </Title>
        <Divider component="div" />
        <br />
        <div className="example">
          <DescriptionList
            id="2-col-description-list"
            columnModifier={{ default: '2Col', md: '2Col', lg: '2Col', xl: '2Col', '2xl': '2Col' }}
          >
            <DescriptionListGroup>
              <DescriptionListTerm>Name</DescriptionListTerm>
              <DescriptionListDescription>Example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Namespace</DescriptionListTerm>
              <DescriptionListDescription>
                <a href="#">mary-test</a>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Labels</DescriptionListTerm>
              <DescriptionListDescription>example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Pod selector</DescriptionListTerm>
              <DescriptionListDescription>
                <Button variant="link" isInline icon={<PlusCircleIcon />}>
                  app=MyApp
                </Button>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Annotation</DescriptionListTerm>
              <DescriptionListDescription>2 Annotations</DescriptionListDescription>
            </DescriptionListGroup>
          </DescriptionList>
        </div>
      </StackItem>
    );
  }

  render3ColDescriptionList() {
    return (
      <StackItem isFilled>
        <br />
        <Title headingLevel="h2" size="2xl">
          3 Col Description List
        </Title>
        <Divider component="div" />
        <br />
        <div className="example">
          <DescriptionList
            id="3-col-description-list"
            columnModifier={{ default: '3Col', md: '3Col', lg: '3Col', xl: '3Col', '2xl': '3Col' }}
          >
            <DescriptionListGroup>
              <DescriptionListTerm>Name</DescriptionListTerm>
              <DescriptionListDescription>Example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Namespace</DescriptionListTerm>
              <DescriptionListDescription>
                <a href="#">mary-test</a>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Labels</DescriptionListTerm>
              <DescriptionListDescription>example</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Pod selector</DescriptionListTerm>
              <DescriptionListDescription>
                <Button variant="link" isInline icon={<PlusCircleIcon />}>
                  app=MyApp
                </Button>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>Annotation</DescriptionListTerm>
              <DescriptionListDescription>2 Annotations</DescriptionListDescription>
            </DescriptionListGroup>
          </DescriptionList>
        </div>
      </StackItem>
    );
  }

  render() {
    return (
      <Stack hasGutter>
        {this.render1ColDescriptionList()}
        {this.render2ColDescriptionList()}
        {this.render3ColDescriptionList()}
      </Stack>
    );
  }
}

export default DescriptionListBreakpointsDemo;
