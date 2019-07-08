import * as React from 'react';
import { isOUIAEnvironment, getUniqueId as getOUIAUniqueId } from '../helpers/ouia';

export interface InjectedOUIAProps {
  renderWithOUIA: boolean;
  ouiaId: number;
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
    ouiaId: getOUIAUniqueId()
  };

  componentDidMount() {
    const { renderWithOUIA } = this.state;
    const isOuia = isOUIAEnvironment();
    if (isOuia !== renderWithOUIA) {
      this.setState({ renderWithOUIA: isOuia });
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
