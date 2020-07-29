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

export class DescriptionListDemo extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderSimpleDescriptionList() {
    return (
      <StackItem isFilled>
        <Title headingLevel="h2" size="2xl">
          Simple Description List
        </Title>
        <Divider component="div" />
        <br />
        <div className="example">
          <DescriptionList className="simple-desciption-list">
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
          Two Column Description List
        </Title>
        <Divider component="div" />
        <br />
        <div className="example">
          <DescriptionList className="2-col-description-list" columnModifier={{ default: '2Col' }}>
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

  renderHorizontalDescriptionList() {
    return (
      <StackItem isFilled>
        <br />
        <Title headingLevel="h2" size="2xl">
          Horizontal Description List
        </Title>
        <Divider component="div" />
        <br />
        <div className="example">
          <DescriptionList className="horizontal-description-list" isHorizontal>
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

  renderAutoColumnWidthsDescriptionList() {
    return (
      <StackItem isFilled>
        <br />

        <Title headingLevel="h2" size="2xl">
          Auto Column Widths Description List
        </Title>
        <Divider component="div" />
        <br />
        <div className="example">
          <DescriptionList className="auto-col-widths-description-list" hasAutoColumnWidths>
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

  renderInlineGridDescriptionList() {
    return (
      <StackItem isFilled>
        <br />

        <Title headingLevel="h2" size="2xl">
          Inline Grid Description List
        </Title>
        <Divider component="div" />
        <br />
        <div className="example">
          <DescriptionList className="inline-grid-description-list" hasInlineGrid>
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
        {this.renderSimpleDescriptionList()}
        {this.render2ColDescriptionList()}
        {this.renderHorizontalDescriptionList()}
        {this.renderAutoColumnWidthsDescriptionList()}
        {this.renderInlineGridDescriptionList()}
      </Stack>
    );
  }
}

export default DescriptionListDemo;
