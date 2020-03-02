import React from 'react';
import { CompoundLabel } from '../index';

export class MockCompoundLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: {
        id: 1,
        label: 'Most delicious food you will ever eat',
        values: [
          { id: 11, label: 'Strawberries harvested under full moon light' },
          { id: 12, label: 'Argentinian beef steak from hand massaged cow' },
          { id: 13, label: 'Enchanted cookies baked by insane chef' },
          { id: 14, label: 'Dumplings' }
        ]
      }
    };
  }

  removeMe = (category, value) => {
    const values = this.state.tag.values.filter(val => val.id !== value.id);
    const state = { tag: { ...this.state.tag, values } };
    this.setState(state);
  };

  render() {
    return (
      <CompoundLabel
        key={this.state.tag.id}
        category={{ id: this.state.tag.id, label: this.state.tag.label }}
        values={this.state.tag.values}
        onDeleteClick={this.removeMe}
      />
    );
  }
}

export const mockCompoundLabelSource = `
import React from 'react';
import { CompoundLabel } from '../index';

export class MockCompoundLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: {
        id: 1,
        label: 'Most delicious food you will ever eat',
        values: [
          { id: 11, label: 'Strawberries harvested under full moon light' },
          { id: 12, label: 'Argentinian beef steak from hand massaged cow' },
          { id: 13, label: 'Enchanted cookies baked by insane chef' },
          { id: 14, label: 'Dumplings' }
        ]
      }
    };
  }

  removeMe = (category, value) => {
    const values = this.state.tag.values.filter(val => val.id !== value.id);
    const state = { tag: { ...this.state.tag, values } };
    this.setState(state);
  };

  render() {
    return (
      <CompoundLabel
        key={this.state.tag.id}
        category={{ id: this.state.tag.id, label: this.state.tag.label }}
        values={this.state.tag.values}
        onDeleteClick={this.removeMe}
      />
    );
  }
}
`;
