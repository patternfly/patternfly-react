import * as React from 'react';
import { isOUIAEnvironment, getUniqueId, generateOUIAId } from './ouia';
import { Omit } from '../../helpers/typeUtils';

export const OuiaContext = React.createContext<OuiaContextProps | null>(null);

export interface InjectedOuiaProps {
  ouiaContext?: OuiaContextProps;
  ouiaId?: number | string;
}

export interface OuiaContextProps {
  isOuia?: boolean;
  ouiaId?: number | string;
}

export function withOuiaContext<P extends { ouiaContext?: OuiaContextProps }, R = Omit<P, 'ouiaContext'>>(
  WrappedComponent: React.ComponentClass<P> | React.FunctionComponent<P>
): React.FunctionComponent<R> {
  return (props: R) => (
    <OuiaContext.Consumer>
      {(value: OuiaContextProps) => <ComponentWithOuia consumerContext={value} component={WrappedComponent} componentProps={props} />}
    </OuiaContext.Consumer>
  );
}

interface OuiaProps { 
  component: any;
  componentProps: any;
  consumerContext?: OuiaContextProps;
}

interface OuiaState {
  isOuia?: boolean;
  ouiaId?: number | string;
}

class ComponentWithOuia extends React.Component<OuiaProps, OuiaState> {

  constructor(props: OuiaProps) {
    super(props);

    this.state = {
      isOuia: false,
      ouiaId: null
    };
  }

  /**
   * if either consumer set isOuia through context or local storage
   * then force a re-render
   */
  componentDidMount() {
    const { isOuia, ouiaId } = this.state;
    const { consumerContext } = this.props;
    const isOuiaEnv = isOUIAEnvironment();
    if ((consumerContext && consumerContext.isOuia !== undefined && consumerContext.isOuia !== isOuia) || isOuiaEnv !== isOuia ) {
      this.setState({ 
        isOuia: consumerContext && consumerContext.isOuia !== undefined ? consumerContext.isOuia : isOuiaEnv,
        ouiaId: consumerContext && consumerContext.ouiaId !== undefined ? consumerContext.ouiaId : (generateOUIAId() ? getUniqueId() : ouiaId)
      });
    }
  }

  render() {
    const { isOuia, ouiaId } = this.state;
    const { component: WrappedComponent, componentProps, consumerContext } = this.props;
    return (
      <OuiaContext.Provider value={{ isOuia, ouiaId }}>
          <OuiaContext.Consumer>
            {(value: OuiaContextProps) => <WrappedComponent {...componentProps as any} ouiaContext={value} />}
          </OuiaContext.Consumer>
      </OuiaContext.Provider>
    )
  }
}
