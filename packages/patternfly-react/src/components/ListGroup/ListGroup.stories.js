import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { Badge } from '../Badge';
import { ListGroup, ListGroupItem } from './index';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.WIDGETS}/List Group`, module);

stories.addDecorator(
  defaultTemplate({
    title: 'ListGroup',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#list-group`,
    reactBootstrapDocumentationLink: `${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}list-group/`
  })
);

stories.add(
  'List Group',
  withInfo()(() => (
    <div>
      <h2>Basic</h2>
      <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <h2>With Badges</h2>
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
      <h2>with Links</h2>
      <ListGroup>
        <ListGroupItem href="#">Cras justo odio</ListGroupItem>
        <ListGroupItem href="#">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem href="#">Morbi leo risus</ListGroupItem>
      </ListGroup>
      <h2>Contextual classes</h2>
      <ListGroup>
        <ListGroupItem bsStyle="success">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem bsStyle="info">Cras sit amet nibh libero</ListGroupItem>
        <ListGroupItem bsStyle="warning">Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem bsStyle="danger">Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <h2>Custom content</h2>
      <ListGroup>
        <ListGroupItem href="#" header="List group item heading" className="active">
          <p className="list-group-item-text">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </p>
        </ListGroupItem>
        <ListGroupItem href="#" header="List group item heading">
          <p className="list-group-item-text">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </p>
        </ListGroupItem>
        <ListGroupItem href="#" header="List group item heading">
          <p className="list-group-item-text">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </p>
        </ListGroupItem>
      </ListGroup>
    </div>
  ))
);
