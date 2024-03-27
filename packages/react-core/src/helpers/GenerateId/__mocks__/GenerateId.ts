import { Component } from 'react';
import { GenerateIdProps } from '../GenerateId';
class GenerateId extends Component<GenerateIdProps, {}> {
  static displayName = 'GenerateId';

  render() {
    return this.props.children('generated-id');
  }
}

export { GenerateId };
