import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';

export class CardDemo extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Card isHoverable>
          <CardHeader>Header</CardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <br></br>
        <Card isCompact>
          <CardHeader>Header</CardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <br></br>
        <a href="#" id="random-link">Random Link</a>
        <Card isSelectable isSelected>
          <CardHeader>Header</CardHeader>
          <CardBody>Body<a href="#" id="inside-link">Link inside card</a></CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </React.Fragment>
    );
  }
}
