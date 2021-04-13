import React from 'react';
import { Card, CardTitle, CardHeader, CardBody, CardFooter, CardExpandableContent } from '@patternfly/react-core';
interface CardDemoState {
  selected: string;
  isExpanded: boolean;
}

export class CardDemo extends React.Component {
  static displayName = 'CardDemo';

  state: CardDemoState = {
    selected: null,
    isExpanded: false
  };

  onKeyDown = (event: any) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    if ([13, 32].includes(event.keyCode)) {
      const newSelected = event.currentTarget.id === this.state.selected ? null : event.currentTarget.id;
      this.setState({
        selected: newSelected
      });
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onExpand = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  };

  render() {
    return (
      <React.Fragment>
        <Card isHoverable>
          <CardTitle>Header</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <br></br>
        <Card isCompact>
          <CardTitle>Header</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <br></br>
        <Card isSelectable isSelected>
          <CardTitle>Header</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <br></br>
        <Card>
          <CardTitle id="heading-card" component="h4">
            Header
          </CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <br></br>
        <Card id="flatCard" isFlat>
          <CardTitle>Header</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <Card id="roundedCard" isRounded>
          <CardTitle>Header</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <Card id="largeCard" isLarge>
          <CardTitle>Header</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <Card id="fullHeightCard" isFullHeight>
          <CardTitle>Header</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <Card id="plainCard" isPlain>
          <CardTitle>Header</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>

        <Card
          id="selectableCard"
          isSelectable
          isSelected={this.state.selected === 'selectableCard'}
          onKeyDown={this.onKeyDown}
        >
          <CardTitle>Header</CardTitle>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <br></br>
        <Card id="expand-card" isExpanded={this.state.isExpanded}>
          <CardHeader onExpand={this.onExpand}>
            <CardTitle>Header</CardTitle>
          </CardHeader>
          {this.state.isExpanded && (
            <CardExpandableContent>
              <CardBody>Body</CardBody>
              <CardFooter>Footer</CardFooter>
            </CardExpandableContent>
          )}
        </Card>
      </React.Fragment>
    );
  }
}
