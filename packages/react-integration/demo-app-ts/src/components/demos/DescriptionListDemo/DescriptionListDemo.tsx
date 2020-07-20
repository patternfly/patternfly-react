import {
  Button,
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
  DescriptionListText
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons';
import React, { Component } from 'react';
export class DescriptionListDemo extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <DescriptionList>
        <DescriptionListGroup>
          <DescriptionListTerm>
            <DescriptionListText>Name</DescriptionListText>
          </DescriptionListTerm>
          <DescriptionListDescription>
            <DescriptionListText>Example</DescriptionListText>
          </DescriptionListDescription>
        </DescriptionListGroup>
        <DescriptionListGroup>
          <DescriptionListTerm>
            <DescriptionListText>Namespace</DescriptionListText>
          </DescriptionListTerm>
          <DescriptionListDescription>
            <DescriptionListText component="a" href="#">
              mary-test
            </DescriptionListText>
          </DescriptionListDescription>
        </DescriptionListGroup>
        <DescriptionListGroup>
          <DescriptionListTerm>
            <DescriptionListText>Labels</DescriptionListText>
          </DescriptionListTerm>
          <DescriptionListDescription>
            <DescriptionListText>example</DescriptionListText>
          </DescriptionListDescription>
        </DescriptionListGroup>
        <DescriptionListGroup>
          <DescriptionListTerm>
            <DescriptionListText>Pod selector</DescriptionListText>
          </DescriptionListTerm>
          <DescriptionListDescription>
            <DescriptionListText>
              <Button variant="link" isInline icon={<PlusCircleIcon />}>
                {' '}
                app=MyApp{' '}
              </Button>
            </DescriptionListText>
          </DescriptionListDescription>
        </DescriptionListGroup>
        <DescriptionListGroup>
          <DescriptionListTerm>
            <DescriptionListText>Annotation</DescriptionListText>
          </DescriptionListTerm>
          <DescriptionListDescription>
            <DescriptionListText>2 Annotations</DescriptionListText>
          </DescriptionListDescription>
        </DescriptionListGroup>
      </DescriptionList>
    );
  }
}

export default DescriptionListDemo;
