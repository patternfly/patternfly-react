import * as React from 'react';
import { isOUIAEnvironment, getUniqueId, generateOUIAId } from '../helpers/ouia';

export interface InjectedOUIAProps {
  renderWithOUIA: boolean;
  ouiaId: number;
}

export interface OuiaProps {
  'data-ouia-component-id'?: number | string;
}

export interface WithOUIAProps {
  children: (props: InjectedOUIAProps) => JSX.Element;
}

export interface WithOUIAState {
  renderWithOUIA: boolean;
  ouiaId: number;
}

export class WithOUIA extends React.Component<WithOUIAProps, WithOUIAState> {
  state: WithOUIAState = {
    renderWithOUIA: false,
    ouiaId: null
  };

  componentDidMount() {
    const { renderWithOUIA } = this.state;
    const isOuia = isOUIAEnvironment();
    if (isOuia !== renderWithOUIA) {
      this.setState({ 
        renderWithOUIA: isOuia,
        ouiaId: generateOUIAId() ? getUniqueId() : null
      });
    }
  }

  render() {
    const { renderWithOUIA, ouiaId } = this.state;
    const { children } = this.props;
    return children({
      renderWithOUIA,
      ouiaId
    });
  }
}
