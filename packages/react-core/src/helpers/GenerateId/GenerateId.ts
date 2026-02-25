/** This Component can be used to wrap a functional component in order to generate a deterministic ID.
 * For function components, prefer the useSSRSafeId hook instead.
 *
 * Example of how to use this component
 *
 * const Component = ({id}: {id: string}) => (
 *  <GenerateId>{randomId => (
 *     <div id={id || randomId}>
 *       div with random ID
 *     </div>
 *   )}
 *  </GenerateId>
 *  );
 */
import { Component } from 'react';

let currentId = 0;

export interface GenerateIdProps {
  /** String to prefix the id with */
  prefix?: string;
  /** Component to be rendered with the generated id */
  children(id: string): React.ReactNode;
  /** @deprecated Has no effect. Kept for backward compatibility. */
  isRandom?: boolean;
}

class GenerateId extends Component<GenerateIdProps, {}> {
  static displayName = 'GenerateId';
  static defaultProps = {
    prefix: 'pf-random-id-',
    isRandom: false
  };
  id = `${this.props.prefix}${currentId++}`;

  render() {
    return this.props.children(this.id);
  }
}

export { GenerateId };
