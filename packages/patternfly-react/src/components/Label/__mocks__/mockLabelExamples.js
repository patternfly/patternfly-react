import React from 'react';
import { Label } from '../index';

export class MockLabelRemove extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [
        { value: 'default', text: 'Some' },
        { value: 'primary', text: 'Title' },
        { value: 'success', text: 'Value: is' },
        { value: 'warning', text: 'long title inside label' },
        { value: 'danger', text: 'I am danger and I am relatively long lable' }
      ]
    };
  }
  removeMe = index => {
    this.setState(this.state.types.splice(index, 1));
  };

  render() {
    return (
      <div>
        {this.state.types.map((type, index) => (
          <Label
            key={index}
            style={{ margin: '0 5px 0 0' }}
            type={type.value}
            onRemoveClick={() => this.removeMe(index)}
          >
            {type.text}
          </Label>
        ))}{' '}
      </div>
    );
  }
}

export const mockLabelRemoveSource = `
  import React from 'react';
  import { Label } from '../index';

  export class MockLabelRemove extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        types: [
          { value: 'default', text: 'Some' },
          { value: 'primary', text: 'Title' },
          { value: 'success', text: 'Value: is' },
          { value: 'warning', text: 'long title inside label' },
          { value: 'danger', text: 'I am danger and I am relatively long lable' }
        ]
      };
    }
    removeMe = index => {
      this.setState(this.state.types.splice(index, 1));
    };

    render() {
      return (
        <div>
          {this.state.types.map((type, index) => (
            <Label
              key={index}
              style={{ margin: '0 5px 0 0' }}
              type={type.value}
              onRemoveClick={() => this.removeMe(index)}
            >
              {type.text}
            </Label>
          ))}{' '}
        </div>
      )
    }
  }
`;
