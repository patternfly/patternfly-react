import * as React from 'react';
import { GenerateIdProps } from '../GenerateId';
class GenerateId extends React.Component<GenerateIdProps, {}> {
  static displayName = 'GenerateId';

  render() {
    return this.props.children('generated-id');
  }
}

export { GenerateId };
