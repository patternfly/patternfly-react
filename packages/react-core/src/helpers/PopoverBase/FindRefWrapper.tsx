import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface FindRefWrapperProps {
  children: React.ReactNode;
  onFoundRef: any;
}

/**
 * This component wraps any toggle and gives us a ref to it
 * It has to be a class for findDOMNode to work
 * Ideally, all components used as toggles are either:
 * - class based components we can assign our own ref to
 * - functional components that have forwardRef implemented
 * However, there is no guarantee that is what will get passed in as toggle in the case of tooltips and popovers
 */
export class FindRefWrapper extends React.Component<FindRefWrapperProps> {
  componentDidMount() {
    // eslint-disable-next-line react/no-find-dom-node
    const root = ReactDOM.findDOMNode(this);
    this.props.onFoundRef(root);
  }

  render() {
    return this.props.children;
  }
}