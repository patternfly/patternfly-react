import React from 'react';
import cx from 'classnames';
import { boolean } from '@storybook/addon-knobs/dist/index';
import { bindMethods } from '../../../common/helpers';
import { mockListItems } from './mockListItems';
import { Button, Grid, ListView } from '../../../index';

export class MockCompoundExpansion extends React.Component {
  constructor() {
    super();

    bindMethods(this, ['renderItem', 'toggleExpand']);
    this.state = {
      listItems: mockListItems
    };
  }

  toggleExpand(item, expandProp) {
    if (expandProp === item.expandType) {
      item.expanded = !item.expanded;
    } else {
      item.expanded = true;
      item.expandType = expandProp;
    }
    this.setState({ listItems: mockListItems });
  }

  closeExpand(item) {
    item.expanded = false;
    this.setState({ listItems: mockListItems });
  }

  renderActions() {
    return (
      <div>
        <Button>Details</Button>
      </div>
    );
  }

  renderAdditionalInfoExpandItems(item) {
    return (
      item.properties &&
      Object.keys(item.properties).map(prop => {
        const classNames = cx('pficon', {
          'pficon-flavor': prop === 'hosts',
          'pficon-cluster': prop === 'clusters',
          'pficon-container-node': prop === 'nodes',
          'pficon-image': prop === 'images'
        });
        return (
          <ListView.InfoItem key={prop}>
            <ListView.Expand
              expanded={item.expanded && prop === item.expandType}
              toggleExpanded={() => {
                this.toggleExpand(item, prop);
              }}
            >
              <span className={classNames} />
              <strong>{item.properties[prop]}</strong> {prop}
            </ListView.Expand>
          </ListView.InfoItem>
        );
      })
    );
  }

  renderItem(item, index) {
    const expandText = item.compoundExpandText[item.expandType];
    return (
      <ListView.Item
        key={index}
        actions={this.renderActions(item.actions)}
        checkboxInput={<input type="checkbox" />}
        leftContent={<ListView.Icon name="plane" />}
        additionalInfo={this.renderAdditionalInfoExpandItems(item)}
        heading={item.title}
        description={item.description}
        stacked={boolean('Stacked', false)}
        compoundExpand
        compoundExpanded={item.expanded}
        onCloseCompoundExpand={() => this.closeExpand(item)}
      >
        <Grid.Row>
          <Grid.Col sm={11}>{expandText}</Grid.Col>
        </Grid.Row>
      </ListView.Item>
    );
  }
  render() {
    const { listItems } = this.state;

    return <ListView>{listItems.map(this.renderItem)}</ListView>;
  }
}

export const MockCompoundExpansionSource = `
import React from 'react';
import { bindMethods } from '../../../common/helpers';

import { mockListItems } from './mockListItems';
import { boolean } from '@storybook/addon-knobs/dist/index';
import cx from 'classnames';

import { Button, Grid, ListView } from '../../../index';

export class MockCompoundExpansion extends React.Component {
  constructor() {
    super();

    bindMethods(this, ['renderItem', 'toggleExpand']);
    this.state = {
      listItems: []
    };
  }

  componentDidMount() {
    this.setState({ listItems: mockListItems });
  }

  toggleExpand(item, expandProp) {
    if (expandProp === item.expandType) {
      item.expanded = !item.expanded;
    } else {
      item.expanded = true;
      item.expandType = expandProp;
    }
    this.setState({ listItems: mockListItems });
  }

  closeExpand(item) {
    item.expanded = false;
    this.setState({ listItems: mockListItems });
  }

  renderActions() {
    return (
      <div>
        <Button>Details</Button>
      </div>
    );
  }

  renderAdditionalInfoExpandItems(item) {
    return (
      item.properties &&
      Object.keys(item.properties).map(prop => {
        const classNames = cx('pficon', {
          'pficon-flavor': prop === 'hosts',
          'pficon-cluster': prop === 'clusters',
          'pficon-container-node': prop === 'nodes',
          'pficon-image': prop === 'images'
        });
        return (
          <ListView.InfoItem key={prop}>
            <ListView.Expand
              expanded={item.expanded && prop === item.expandType}
              toggleExpanded={() => {
                this.toggleExpand(item, prop);
              }}
            >
              <span className={classNames} />
              <strong>{item.properties[prop]}</strong> {prop}
            </ListView.Expand>
          </ListView.InfoItem>
        );
      })
    );
  }

  renderItem(item, index) {
    let expandText = item.compoundExpandText[item.expandType];
    return (
      <ListView.Item
        key={index}
        actions={this.renderActions(item.actions)}
        checkboxInput={<input type="checkbox" />}
        leftContent={<ListView.Icon name="plane" />}
        additionalInfo={this.renderAdditionalInfoExpandItems(item)}
        heading={item.title}
        description={item.description}
        stacked={boolean('Stacked', false)}
        compoundExpand
        compoundExpanded={item.expanded}
        onCloseCompoundExpand={() => this.closeExpand(item)}
      >
        <Grid.Row>
          <Grid.Col sm={11}>
            {expandText}
          </Grid.Col>
        </Grid.Row>
      </ListView.Item>
    );
  }
  render() {
    const { listItems } = this.state;

    return (
      <ListView>
        {listItems.map(this.renderItem)}
      </ListView>
    );
  }
}
`;
