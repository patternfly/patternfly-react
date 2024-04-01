/** This Component can be used to wrap a functional component in order to generate a random ID
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

import * as React from 'react';
import { getUniqueId } from '../util';

let currentId = 0;

// gives us a unique (enough) id to add to the generated id that it should prevent issues with duplicate ids
function getRandomId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  } else {
    return getUniqueId();
  }
}

export interface GenerateIdProps {
  /** String to prefix the random id with */
  prefix?: string;
  /** Component to be rendered with the generated id */
  children(id: string): React.ReactNode;
  /** Flag to add randomness to the generated id, should be used whenever possible */
  isRandom?: boolean;
}

class GenerateId extends React.Component<GenerateIdProps, {}> {
  static displayName = 'GenerateId';
  static defaultProps = {
    prefix: 'pf-random-id-',
    isRandom: false
  };
  uniqueElement = this.props.isRandom ? getRandomId() : currentId++;
  id = `${this.props.prefix}${this.uniqueElement}`;

  render() {
    return this.props.children(this.id);
  }
}

export { GenerateId };
