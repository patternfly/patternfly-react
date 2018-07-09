import React from 'react';
import { CompoundLabel } from '../index';

export class MockCompoundLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: {
        id: 1,
        label: 'Food - category with very long description',
        values: [
          { id: 11, label: 'Cake' },
          { id: 12, label: 'Bloody Steak from the famous Purple Cow' },
          { id: 13, label: 'Pineapple Pizza' }
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
        label: 'Food - category with very long description',
        values: [
          { id: 11, label: 'Cake' },
          { id: 12, label: 'Bloody Steak from the famous Purple Cow' },
          { id: 13, label: 'Pineapple Pizza' }
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
