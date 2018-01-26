/* eslint-disable no-alert */
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Row, Col } from '../../index';

import AutoComplete from './AutoComplete';
import { searchItems } from './AutoComplete.fixtures';

export class AutoCompleteExample extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    this.onInputUpdate();
  }

  onInputUpdate = (searchTerm = '') => {
    searchTerm = searchTerm.trimLeft();

    this.setState({
      items: searchItems(searchTerm)
    });
  };

  render() {
    return (
      <AutoComplete
        items={this.state.items}
        labelText="Type your favorite color"
        onInputUpdate={this.onInputUpdate}
        onSearch={selection => alert(`You selected ${selection}!`)}
      />
    );
  }
}

storiesOf('AutoComplete', module)
  .addDecorator(getStory => (
    <div style={{ padding: 20 }}>
      <Row>
        <Col sm={3} />
        <Col sm={6}>{getStory()}</Col>
      </Row>
      <Row>
        <Col sm={3} />
        <Col sm={6}>
          <p>The dropdown should overlay this text.</p>
        </Col>
      </Row>
    </div>
  ))
  .add('AutoComplete', () => <AutoCompleteExample />);
