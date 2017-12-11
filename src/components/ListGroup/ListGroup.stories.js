import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { Badge } from '../Badge';
import { ListGroup, ListGroupItem } from './index';

const stories = storiesOf('ListGroup', module);

const description = (
  <p>
    This component is based on React Bootstrap ListGroup component. See{' '}
    <a href="https://react-bootstrap.github.io/components.html#listgroup">
      React Bootstrap Docs
    </a>{' '}
    for complete ListGroup component documentation.
  </p>
);

stories.addDecorator(
  defaultTemplate({
    title: 'ListGroup',
    documentationLink:
      'http://www.patternfly.org/pattern-library/widgets/#list-group',
    description: description,
  }),
);

stories.addWithInfo('Basic Example', '', () => (
  <ListGroup>
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Morbi leo risus</ListGroupItem>
    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
));

stories.addWithInfo('Badges', '', () => (
  <ListGroup>
    <ListGroupItem>
      Cras justo odio <Badge>14</Badge>
    </ListGroupItem>
    <ListGroupItem>
      Dapibus ac facilisis in <Badge>2</Badge>
    </ListGroupItem>
    <ListGroupItem>
      Morbi leo risus <Badge>1</Badge>
    </ListGroupItem>
  </ListGroup>
));

stories.addWithInfo('Linked Items', '', () => {
  return (
    <ListGroup>
      <ListGroupItem href="#">Cras justo odio</ListGroupItem>
      <ListGroupItem href="#">Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem href="#">Morbi leo risus</ListGroupItem>
    </ListGroup>
  );
});

stories.addWithInfo('Contextual classes', '', () => (
  <ListGroup>
    <ListGroupItem bsStyle="success">Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem bsStyle="info">Cras sit amet nibh libero</ListGroupItem>
    <ListGroupItem bsStyle="warning">Porta ac consectetur ac</ListGroupItem>
    <ListGroupItem bsStyle="danger">Vestibulum at eros</ListGroupItem>
  </ListGroup>
));

stories.addWithInfo('Custom content', '', () => {
  return (
    <ListGroup>
      <ListGroupItem
        href="#"
        header="List group item heading"
        className="active"
      >
        <p className="list-group-item-text">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </p>
      </ListGroupItem>
      <ListGroupItem href="#" header="List group item heading">
        <p className="list-group-item-text">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </p>
      </ListGroupItem>
      <ListGroupItem href="#" header="List group item heading">
        <p className="list-group-item-text">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </p>
      </ListGroupItem>
    </ListGroup>
  );
});
